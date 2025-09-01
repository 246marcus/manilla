"use client";

import React from "react";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  companyName?: string;
  companyAddress?: string;
  requestContent?: string;
};

interface ViewModalProps {
  user: User | null;
  onClose: () => void;
}

const ViewModal: React.FC<ViewModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-20">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telephone:</strong> {user.telephone || "N/A"}
          </p>
          <p>
            <strong>Company:</strong> {user.companyName || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {user.companyAddress || "N/A"}
          </p>
          <p>
            <strong>Request Content:</strong>{" "}
            {user.requestContent || "No request content"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
