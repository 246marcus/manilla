"use client";

import { useState, useEffect } from "react";

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

export default function WaitlistTable() {
  const [waitlistData, setWaitlistData] = useState<WaitlistUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();

      if (res.ok) {
        // Filter only waitlist submissions and take latest 7
        const waitlistUsers = data.contacts
          .filter((contact: { requestType: string }) => contact.requestType === "waitlist")
          .slice(0, 7);
        setWaitlistData(waitlistUsers);
      }
    } catch (error) {
      console.error("Failed to fetch waitlist data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-black/5 rounded-xl shadow p-4 overflow-x-auto min-h-[300px] ">
      <h2 className="font-semibold  text-black/80">Waitlist Overview</h2>
      <p className="text-xs text-black/60 mb-3">
        Monitor sign-ups, segment by interest, and prepare targeted
        communications for early access.
      </p>
      {isLoading ? (
        <div className="flex items-center justify-center h-32">
          <p className="text-gray-500">Loading waitlist data...</p>
        </div>
      ) : (
        <table className="w-full border-collapse text-sm  ">
          <thead className="text-black/80 ">
            <tr className="text-left bg-black/10 text-nowrap">
              <th className="p-2">#</th>
              <th className="p-2 px-6 ">Date</th>
              <th className="p-2 px-6">Email</th>
              <th className="p-2 px-6">Name</th>
              <th className="p-2 px-6">Request Content</th>
              <th className="p-2 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {waitlistData.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No waitlist submissions yet
                </td>
              </tr>
            ) : (
              waitlistData.map((row, index) => (
                <tr key={row._id} className="border-b border-black/8 hover:bg-gray-50 text-nowrap">
                  <td className="p-2 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{new Date(row.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{row.email}</td>
                  <td className="px-6 py-4">{row.firstName} {row.lastName}</td>
                  <td className="px-6 py-4 max-w-xs truncate" title={row.requestContent}>
                    {row.requestContent}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === "unread" ? "bg-red-100 text-red-800" :
                      row.status === "read" ? "bg-yellow-100 text-yellow-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
