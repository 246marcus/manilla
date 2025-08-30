import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Contact from "../../../lib/models/Contact";
import Mail from "../../../models/Mail";
import { sendReply } from "../../../lib/email";

// POST - Send reply to waitlist or contact submission
export async function POST(req: Request) {
  try {
    await connectDB();
    const { contactId, replyContent } = await req.json();

    if (!contactId || !replyContent) {
      return NextResponse.json(
        { message: "Contact ID and reply content are required" },
        { status: 400 }
      );
    }

    // Find the contact
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    // Send reply email
    const emailResult = await sendReply(
      contact.email,
      contact.firstName,
      contact.lastName,
      replyContent,
      contact.requestType as 'waitlist' | 'contact'
    );

    if (!emailResult.success) {
      return NextResponse.json(
        { message: "Failed to send email", error: emailResult.error },
        { status: 500 }
      );
    }

    // Update contact status to replied
    contact.status = "replied";
    await contact.save();

    // Save mail record
    const mail = new Mail({
      from: process.env.GMAIL_USER,
      to: contact.email,
      subject: `Response to your ${contact.requestType} request - Manilla Technologies`,
      content: replyContent,
      type: contact.requestType === "waitlist" ? "notification" : "transactional",
      status: "sent",
      sentAt: new Date(),
    });

    await mail.save();

    return NextResponse.json(
      { 
        message: "Reply sent successfully", 
        messageId: emailResult.messageId,
        contactStatus: "replied"
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Send reply error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
