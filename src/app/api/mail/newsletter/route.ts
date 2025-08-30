import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Newsletter from "../../../lib/models/Newsletter";
import Mail from "../../../models/Mail";
import { sendNewsletter } from "../../../lib/email";

// POST - Send newsletter to all subscribers
export async function POST(req: Request) {
  try {
    await connectDB();
    const { subject, content } = await req.json();

    if (!subject || !content) {
      return NextResponse.json(
        { message: "Subject and content are required" },
        { status: 400 }
      );
    }

    // Get all active subscribers
    const subscribers = await Newsletter.find({ isActive: true });
    
    if (subscribers.length === 0) {
      return NextResponse.json(
        { message: "No active subscribers found" },
        { status: 400 }
      );
    }

    let successCount = 0;
    let failureCount = 0;
    const results = [];

    // Send email to each subscriber
    for (const subscriber of subscribers) {
      try {
        const emailResult = await sendNewsletter(
          subscriber.email,
          subject,
          content
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
        results.push({
          email: subscriber.email,
          success: false,
          error: error.message
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
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
