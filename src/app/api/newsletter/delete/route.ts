import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Newsletter from "../../../lib/models/Newsletter";

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id, ids } = await req.json();

    // Handle both single ID and multiple IDs
    let deleteIds: string[] = [];
    
    if (id) {
      // Single ID deletion
      deleteIds = [id];
    } else if (ids && Array.isArray(ids)) {
      // Multiple IDs deletion
      deleteIds = ids;
    } else {
      return NextResponse.json(
        { message: "ID or IDs array is required" },
        { status: 400 }
      );
    }

    // Delete subscribers by their IDs
    const result = await Newsletter.deleteMany({ _id: { $in: deleteIds } });

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
  } catch (error: unknown) {
    console.error("Delete subscribers error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
