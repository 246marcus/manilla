import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Newsletter from "../../../lib/models/Newsletter";
import Mail from "../../../models/Mail";
import { sendNewsletter } from "../../../lib/email";

// POST - Send newsletter to all subscribers
export async function POST(req: Request) {
  try {
    await connectDB();
    const { subject, content, selectedUserIds, bannerUrl } = await req.json();

    console.log('🔍 Newsletter API received:', { 
      subject, 
      content: content.substring(0, 100), 
      selectedUserIds, 
      bannerUrl,
      bannerUrlType: typeof bannerUrl,
      bannerUrlLength: bannerUrl ? bannerUrl.length : 0
    });

    if (!subject || !content) {
      return NextResponse.json(
        { message: "Subject and content are required" },
        { status: 400 }
      );
    }

    // Get subscribers - either selected users or all active subscribers
    let subscribers;
    if (selectedUserIds && selectedUserIds.length > 0) {
      subscribers = await Newsletter.find({ 
        _id: { $in: selectedUserIds },
        isActive: true 
      });
    } else {
      subscribers = await Newsletter.find({ isActive: true });
    }
    
    if (subscribers.length === 0) {
      return NextResponse.json(
        { message: "No active subscribers found" },
        { status: 400 }
      );
    }

    console.log('📧 Found subscribers:', subscribers.length);
    console.log('🖼️ Banner URL being used:', bannerUrl);

    let successCount = 0;
    let failureCount = 0;
    const results = [];

    // Send email to each subscriber
    for (const subscriber of subscribers) {
      try {
        console.log(`📤 Sending newsletter to ${subscriber.email} with banner:`, bannerUrl);
        const emailResult = await sendNewsletter(
          subscriber.email,
          subject,
          content,
          bannerUrl
        );

        if (emailResult.success) {
          successCount++;
          
          // Save mail record
          const mail = new Mail({
            from: process.env.GMAIL_USER,
            to: subscriber.email,
            subject: subject,
            content: content,
            type: "newsletter",
            status: "sent",
            sentAt: new Date(),
          });
          await mail.save();
        } else {
          failureCount++;
        }

        results.push({
          email: subscriber.email,
          success: emailResult.success,
          error: emailResult.error
        });
      } catch (error: unknown) {
        failureCount++;
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        results.push({
          email: subscriber.email,
          success: false,
          error: errorMessage
        });
      }
    }

    return NextResponse.json(
      { 
        message: "Newsletter sent",
        totalSubscribers: subscribers.length,
        successCount,
        failureCount,
        results
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Send newsletter error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { message: "Server error. Please try again.", error: errorMessage },
      { status: 500 }
    );
  }
}
