import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Contact from "../../../lib/models/Contact";

// GET single contact
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const contact = await Contact.findById(params.id).select("-__v");

    if (!contact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ contact });
  } catch (error: any) {
    console.error("Get contact error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// PUT update contact status
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { status } = body;

    if (!status || !["unread", "read", "replied"].includes(status)) {
      return NextResponse.json(
        { message: "Valid status is required" },
        { status: 400 }
      );
    }

    const contact = await Contact.findByIdAndUpdate(
      params.id,
      { status },
      { new: true, runValidators: true }
    ).select("-__v");

    if (!contact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Contact status updated successfully", contact },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Update contact error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// DELETE contact
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const contact = await Contact.findByIdAndUpdate(
      params.id,
      { isActive: false },
      { new: true }
    );

    if (!contact) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Contact deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Delete contact error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
