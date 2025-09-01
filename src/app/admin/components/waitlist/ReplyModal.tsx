"use client";

import React, { useState } from "react";

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
  user: WaitlistUser; // ✅ required
  onClose: () => void;
  onSend: (id: string, replyContent: string) => Promise<void>;
}

const ReplyModal: React.FC<ReplyModalProps> = ({ user, onClose, onSend }) => {
  const [replyContent, setReplyContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!replyContent.trim()) return;
    setLoading(true);
    await onSend(user._id, replyContent.trim());
    setLoading(false);
    setReplyContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Reply to {user.firstName} {user.lastName}
        </h2>

        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Type your reply here..."
          className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring focus:ring-blue-300"
        />

        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
