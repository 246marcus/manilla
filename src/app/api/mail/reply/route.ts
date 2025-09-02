import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Contact from "../../../lib/models/Contact";
import Mail from "../../../models/Mail";
import { sendReply } from "../../../lib/email";

// POST - Send reply to waitlist or contact submission
export async function POST(req: Request) {
  try {
    await connectDB();
    const { contactId, contactIds, replyContent, subject, bannerUrl } = await req.json();

    if ((!contactId && !contactIds) || !replyContent) {
      return NextResponse.json(
        { message: "Contact ID(s) and reply content are required" },
        { status: 400 }
      );
    }

    // Handle both single contact and multiple contacts
    // Support both contactId and contactIds for backward compatibility
    let contactIdsArray: string[];
    if (contactIds) {
      contactIdsArray = Array.isArray(contactIds) ? contactIds : [contactIds];
    } else if (contactId) {
      contactIdsArray = Array.isArray(contactId) ? contactId : [contactId];
    } else {
      contactIdsArray = [];
    }
    
    if (contactIdsArray.length === 0) {
      return NextResponse.json(
        { message: "No contact IDs provided" },
        { status: 400 }
      );
    }
    
    // Find all contacts
    const contacts = await Contact.find({ _id: { $in: contactIdsArray } });
    if (contacts.length === 0) {
      return NextResponse.json(
        { message: "No contacts found" },
        { status: 404 }
      );
    }

    let successCount = 0;
    let failureCount = 0;
    const results = [];

    // Send reply to each contact
    for (const contact of contacts) {
      try {
        // Send reply email
        const emailResult = await sendReply(
          contact.email,
          contact.firstName,
          contact.lastName,
          replyContent,
          contact.requestType as 'waitlist' | 'contact'
        );

        if (emailResult.success) {
          // Update contact status to replied
          contact.status = "replied";
          await contact.save();

          // Save mail record
          const mail = new Mail({
            from: process.env.GMAIL_USER,
            to: contact.email,
            subject: subject || `Response to your ${contact.requestType} request - Manilla Technologies`,
            content: replyContent,
            type: contact.requestType === "waitlist" ? "notification" : "transactional",
            status: "sent",
            sentAt: new Date(),
          });

          await mail.save();
          
          successCount++;
          results.push({
            contactId: contact._id,
            success: true,
            messageId: emailResult.messageId
          });
        } else {
          failureCount++;
          results.push({
            contactId: contact._id,
            success: false,
            error: emailResult.error
          });
        }
      } catch (error) {
        failureCount++;
        results.push({
          contactId: contact._id,
          success: false,
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }

    return NextResponse.json(
      { 
        message: `Reply processing completed. Success: ${successCount}, Failed: ${failureCount}`,
        results,
        successCount,
        failureCount,
        totalProcessed: contacts.length
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Send reply error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
