"use client";

import { useState, useEffect } from "react";
import Topbar from "../Topbar";
import WaitlistTable from "./WaitlistTable";

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

const WaitlistPage = () => {
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch waitlist data from API
  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();

      if (res.ok) {
        // Filter only waitlist submissions
        const waitlistUsers = data.contacts.filter((contact: any) => contact.requestType === "waitlist");
        setUsers(waitlistUsers);
      }
    } catch (error) {
      console.error("Failed to fetch waitlist data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      
      if (res.ok) {
        setUsers(prev => prev.filter(user => user._id !== id));
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user");
    }
  };

  const handleDeleteSelected = async (ids: string[]) => {
    try {
      const deletePromises = ids.map(id => 
        fetch(`/api/contact/${id}`, { method: "DELETE" })
      );
      
      await Promise.all(deletePromises);
      setUsers(prev => prev.filter(user => !ids.includes(user._id)));
    } catch (error) {
      console.error("Failed to delete users:", error);
      alert("Failed to delete users");
    }
  };

  const handleSend = async (id: string) => {
    const user = users.find(u => u._id === id);
    if (user) {
      const replyContent = prompt(`Enter your reply to ${user.firstName} ${user.lastName}:`);
      if (replyContent && replyContent.trim()) {
        try {
          const res = await fetch("/api/mail/reply", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactId: id,
              replyContent: replyContent.trim(),
            }),
          });

          const data = await res.json();

          if (res.ok) {
            alert("Reply sent successfully!");
            // Update the user's status in the local state
            setUsers(prev => prev.map(u => 
              u._id === id ? { ...u, status: "replied" } : u
            ));
          } else {
            alert(data.message || "Failed to send reply");
          }
        } catch (error) {
          console.error("Failed to send reply:", error);
          alert("Failed to send reply");
        }
      }
    }
  };

  const handleView = (id: string) => {
    const user = users.find(u => u._id === id);
    if (user) {
      alert(`User Details:\nName: ${user.firstName} ${user.lastName}\nEmail: ${user.email}\nTelephone: ${user.telephone || 'N/A'}\nCompany: ${user.companyName || 'N/A'}\nAddress: ${user.companyAddress || 'N/A'}\nRequest Content: ${user.requestContent}`);
    }
  };

  if (isLoading) {
    return (
      <div className="pe-4 flex-1 flex flex-col bg-white/40 h-screen overflow-y-auto">
        <Topbar
          title="Waitlist"
          subtitle="Waitlist"
          description="View and manage all waitlist emails."
        />
        <div className="flex items-center justify-center h-64">
          <p>Loading waitlist data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pe-4 flex-1 flex flex-col  bg-white/40 h-screen overflow-y-auto">
      <Topbar
        title="Waitlist"
        subtitle="Waitlist"
        description="View and manage all waitlist emails."
      />

      <WaitlistTable
        users={users}
        onDelete={handleDelete}
        onDeleteSelected={handleDeleteSelected}
        onSend={handleSend}
        onView={handleView}
      />
    </div>
  );
};

export default WaitlistPage;
