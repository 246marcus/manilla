import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Newsletter from "../../../lib/models/Newsletter";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { message: "You are already subscribed to our newsletter!" },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
        return NextResponse.json(
          { message: "Welcome back! Your subscription has been reactivated." },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    const newSubscriber = new Newsletter({
      email: email.toLowerCase(),
      isActive: true,
    });

    await newSubscriber.save();

    return NextResponse.json(
      { message: "Successfully subscribed to our newsletter!" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const subscribers = await Newsletter.find({ isActive: true })
      .sort({ subscribedAt: -1 })
      .select('email subscribedAt');

    return NextResponse.json({ subscribers });
  } catch (error: unknown) {
    console.error("Get subscribers error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
