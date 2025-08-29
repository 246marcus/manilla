"use client";

import { useState } from "react";

interface CreateMailFormProps {
  onClose: () => void;
  onSubmit: (mail: {
    receiver: string;
    subject: string;
    category: string;
    body: string;
  }) => void;
}

const CreateMailForm = ({ onClose, onSubmit }: CreateMailFormProps) => {
  const [receiver, setReceiver] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ receiver, subject, category, body });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create New Mail</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-black/70 mb-1">Receiver</label>
            <input
              type="email"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="example@domain.com"
            />
          </div>

          <div>
            <label className="block text-sm text-black/70 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Mail subject"
            />
          </div>

          <div>
            <label className="block text-sm text-black/70 mb-1">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Onboarding / Reminder / Promo"
            />
          </div>

          <div>
            <label className="block text-sm text-black/70 mb-1">Body</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={5}
              className="w-full border rounded-lg px-3 py-2 text-sm resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMailForm;
