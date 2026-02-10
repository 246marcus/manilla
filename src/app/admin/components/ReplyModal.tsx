"use client";

import React from "react";
import NewsletterModal from "./NewsletterModal";

interface WaitlistUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  companyName?: string;
  companyAddress?: string;
  requestContent: string;
  status: "unread" | "read" | "replied";
  createdAt: string;
  updatedAt: string;
}

export interface ReplyModalProps {
  user: WaitlistUser;
  onClose: () => void;
  onSend: (id: string, replyContent: string, bannerUrl?: string) => Promise<void>;
}

const ReplyModal: React.FC<ReplyModalProps> = ({ user, onClose, onSend }) => {
  const handleSubmit = async (
    subject: string,
    content: string,
    selectedUserIds: string[],
    bannerUrl?: string
  ) => {
    if (selectedUserIds.length > 0) {
      // Pass the bannerUrl to the onSend function
      await onSend(selectedUserIds[0], content.trim(), bannerUrl);
    }
  };

  return (
    <NewsletterModal
      isOpen={true}
      onClose={onClose}
      onSubmit={handleSubmit}
      loading={false}
      totalUsers={1}
      selectedUsers={[{ _id: user._id, email: user.email }]}
      modalTitle={`Reply to ${user.firstName} ${user.lastName}`}
    />
  );
};

export default ReplyModal;
