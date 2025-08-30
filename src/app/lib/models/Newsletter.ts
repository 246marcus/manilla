import mongoose, { Schema, models, model } from "mongoose";

const NewsletterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    subscribedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export type NewsletterDocument = mongoose.Document & {
  email: string;
  isActive: boolean;
  subscribedAt: Date;
};

const Newsletter = models.Newsletter || model<NewsletterDocument>("Newsletter", NewsletterSchema);
export default Newsletter;
