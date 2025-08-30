import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import Mail from "../../models/Mail";
import { sendEmail, sendReply, sendNewsletter } from "../../lib/email";

// POST - Send email and save to database
export async function POST(req: Request) {
  try {
    await connectDB();
    const { to, subject, content, type, htmlContent } = await req.json();

    if (!to || !subject || !content || !type) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Send email
    const emailResult = await sendEmail(to, subject, htmlContent || content, content);

    if (!emailResult.success) {
      return NextResponse.json(
        { message: "Failed to send email", error: emailResult.error },
        { status: 500 }
      );
    }

    // Save to database
    const mail = new Mail({
      from: process.env.GMAIL_USER,
      to: to,
      subject: subject,
      content: content,
      htmlContent: htmlContent || content,
      type: type,
      status: "sent",
      sentAt: new Date(),
    });

    await mail.save();

    return NextResponse.json(
      { message: "Email sent successfully", messageId: emailResult.messageId },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// GET - Fetch all mails
export async function GET(req: Request) {
  try {
    await connectDB();
    const mails = await Mail.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    return NextResponse.json({ mails });
  } catch (error: any) {
    console.error("Get mails error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
