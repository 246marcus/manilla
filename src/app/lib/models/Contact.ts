import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    telephone: {
      type: String,
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    companyAddress: {
      type: String,
      trim: true,
    },
    requestContent: {
      type: String,
      required: true,
      trim: true,
    },
    requestType: {
      type: String,
      enum: ["waitlist", "contact"],
      required: true,
    },
    status: {
      type: String,
      enum: ["unread", "read", "replied"],
      default: "unread",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export type ContactDocument = mongoose.Document & {
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  companyName?: string;
  companyAddress?: string;
  requestContent: string;
  requestType: "waitlist" | "contact";
  status: "unread" | "read" | "replied";
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// Clear any existing model to ensure fresh registration
if (models.Contact) {
  delete models.Contact;
}

const Contact = model<ContactDocument>("Contact", ContactSchema);
export default Contact;
