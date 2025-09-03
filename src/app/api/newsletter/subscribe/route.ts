import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Newsletter from "../../../lib/models/Newsletter";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, firstName, lastName } = await req.json();

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
        // If subscriber exists and is active, update their name if provided
        if (firstName || lastName) {
          if (firstName) existingSubscriber.firstName = firstName;
          if (lastName) existingSubscriber.lastName = lastName;
          await existingSubscriber.save();
        }
        return NextResponse.json(
          { 
            message: "You are already subscribed to our newsletter!",
            subscriber: existingSubscriber
          },
          { status: 200 }
        );
      } else {
        // Reactivate subscription and update name if provided
        existingSubscriber.isActive = true;
        if (firstName) existingSubscriber.firstName = firstName;
        if (lastName) existingSubscriber.lastName = lastName;
        await existingSubscriber.save();
        return NextResponse.json(
          { 
            message: "Welcome back! Your subscription has been reactivated.",
            subscriber: existingSubscriber
          },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    const newSubscriber = new Newsletter({
      email: email.toLowerCase(),
      firstName: firstName || "",
      lastName: lastName || "",
      isActive: true,
    });

    await newSubscriber.save();

    return NextResponse.json(
      { 
        message: "Successfully subscribed to our newsletter!",
        subscriber: newSubscriber
      },
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
