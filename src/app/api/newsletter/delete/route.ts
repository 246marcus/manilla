import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Newsletter from "../../../lib/models/Newsletter";

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { ids } = await req.json();

    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json(
        { message: "IDs array is required" },
        { status: 400 }
      );
    }

    // Delete multiple subscribers by their IDs
    const result = await Newsletter.deleteMany({ _id: { $in: ids } });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "No subscribers found to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `Successfully deleted ${result.deletedCount} subscriber(s)` },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Delete subscribers error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
