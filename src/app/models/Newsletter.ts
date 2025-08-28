import mongoose from "mongoose";

const NewsletterSubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["active", "unsubscribed"],
    default: "active",
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsletterCampaignSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    htmlContent: {
      type: String,
    },
    recipients: [
      {
        type: String,
      },
    ],
    status: {
      type: String,
      enum: ["draft", "sent", "scheduled"],
      default: "draft",
    },
    sentAt: {
      type: Date,
    },
    scheduledAt: {
      type: Date,
    },
    openRate: {
      type: Number,
      default: 0,
    },
    clickRate: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const NewsletterSubscriber =
  mongoose.models.NewsletterSubscriber ||
  mongoose.model("NewsletterSubscriber", NewsletterSubscriberSchema);

export const NewsletterCampaign =
  mongoose.models.NewsletterCampaign ||
  mongoose.model("NewsletterCampaign", NewsletterCampaignSchema);
