import mongoose, { Schema, models } from "mongoose";

const MailSchema = new Schema(
  {
    from: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Mail = models.Mail || mongoose.model("Mail", MailSchema);
export default Mail;
