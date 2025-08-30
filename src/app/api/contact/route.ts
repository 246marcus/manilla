import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import Contact from "../../lib/models/Contact";

// POST - Submit contact form
export async function POST(req: Request) {
  try {
    await connectDB();
    const { 
      firstName, 
      lastName, 
      email, 
      telephone, 
      companyName, 
      companyAddress, 
      requestContent, 
      requestType 
    } = await req.json();

    if (!firstName || !lastName || !email || !requestContent || !requestType) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      telephone,
      companyName,
      companyAddress,
      requestContent,
      requestType,
      status: "unread",
      isActive: true,
    });

    await contact.save();

    const successMessage = requestType === "waitlist" 
      ? "Successfully joined the waitlist!" 
      : "Contact form submitted successfully!";

    return NextResponse.json(
      { message: successMessage },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// GET - Fetch all contacts (admin only)
export async function GET(req: Request) {
  try {
    await connectDB();
    const contacts = await Contact.find({ isActive: true })
      .sort({ createdAt: -1 })
      .select("-__v");

    return NextResponse.json({ contacts });
  } catch (error: unknown) {
    console.error("Get contacts error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
