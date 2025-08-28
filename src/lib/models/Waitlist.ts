import mongoose, { Schema, models } from "mongoose";

const WaitlistSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Waitlist =
  models.Waitlist || mongoose.model("Waitlist", WaitlistSchema);
export default Waitlist;
