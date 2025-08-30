import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Mail from "../../../models/Mail";

// DELETE - Delete a mail
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const mail = await Mail.findByIdAndDelete(params.id);
    
    if (!mail) {
      return NextResponse.json(
        { message: "Mail not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Mail deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Delete mail error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
