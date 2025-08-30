"use client";

import { useState } from "react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, content: string) => void;
  loading?: boolean;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
}) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (subject.trim() && content.trim()) {
      onSubmit(subject.trim(), content.trim());
      setSubject("");
      setContent("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Send Newsletter</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-black/70 mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="Enter newsletter subject..."
            />
          </div>

          <div>
            <label className="block text-sm text-black/70 mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={8}
              className="w-full border rounded-lg px-3 py-2 text-sm resize-none"
              placeholder="Enter newsletter content..."
            />
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-sm"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm disabled:opacity-50"
              disabled={loading || !subject.trim() || !content.trim()}
            >
              {loading ? "Sending..." : "Send Newsletter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
