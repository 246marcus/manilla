"use client";

import { useState } from "react";
import { Mail } from "./MailManagementPage";

/* interface EditMailFormProps {
  onClose: () => void;
  onSubmit: (mail: { id: number; receiver: string; subject: string; category: string }) => void;
  mail: { id: number; receiver: string; subject: string; category: string };
 
} */

interface EditMailFormProps {
  mail: Mail;
  onClose: () => void;
  onSubmit: (mail: Mail) => void; // ✅ full Mail now
}

const EditMailForm = ({ onClose, onSubmit, mail }: EditMailFormProps) => {
  const [receiver, setReceiver] = useState(mail.receiver);
  const [subject, setSubject] = useState(mail.subject);
  const [category, setCategory] = useState(mail.category);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6 flex flex-col gap-6">
        <div className="text-start">
          <h2 className="text-lg font-semibold mb-2">Edit Mail</h2>
          <p className="text-sm text-black/60 pb-3 border-b border-dashed">
            Update the mail details and save your changes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Receiver"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            className="border p-2 rounded-md w-full text-sm"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border p-2 rounded-md w-full text-sm"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded-md w-full text-sm"
          >
            <option value="Promotional">Promotional</option>
            <option value="Transactional">Transactional</option>
            <option value="System">System</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-black/70 rounded-md cursor-pointer hover:bg-black/80 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              onSubmit({
                ...mail, // keeps id, date, status
                receiver,
                subject,
                category,
              })
            }
            className="px-6 py-2 bg-black/80 text-white rounded-md cursor-pointer border border-black/70 hover:bg-transparent hover:text-black/80"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMailForm;
