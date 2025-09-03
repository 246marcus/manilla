"use client";

import { useState, useEffect } from "react";
import Topbar from "../Topbar";
import WaitlistTable from "./WaitlistTable";
import ViewModal from "./ViewModal";
import ReplyModal from "../ReplyModal";

export interface WaitlistUser {
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
  const [selectedUser, setSelectedUser] = useState<WaitlistUser | null>(null);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyLoading, setReplyLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    fetchWaitlistData();
  }, []);

  const fetchWaitlistData = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (res.ok) {
        const waitlistUsers = data.contacts.filter(
          (contact: { requestType: string }) =>
            contact.requestType === "waitlist"
        );
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
        setUsers((prev) => prev.filter((u) => u._id !== id));
      } else alert("Failed to delete user");
    } catch {
      alert("Failed to delete user");
    }
  };

  const handleDeleteSelected = async (ids: string[]) => {
    try {
      await Promise.all(
        ids.map((id) => fetch(`/api/contact/${id}`, { method: "DELETE" }))
      );
      setUsers((prev) => prev.filter((u) => !ids.includes(u._id)));
      setSelectedIds([]);
    } catch {
      alert("Failed to delete selected users");
    }
  };

  // Add this state at the top
  const [selectedUsersForReply, setSelectedUsersForReply] = useState<
    WaitlistUser[]
  >([]);

  // Update handleSendMail
  const handleSendMail = (ids: string[] | null) => {
    if (!ids || ids.length === 0) {
      alert("Please select at least one user");
      return;
    }

    const selectedUsers = users.filter((u) => ids.includes(u._id));

    if (selectedUsers.length === 0) {
      alert("No matching users found");
      return;
    }

    setSelectedUsersForReply(selectedUsers);
    setShowReplyModal(true);
  };

  const handleReplySend = async (id: string, replyContent: string, bannerUrl?: string) => {
    if (!id) return;

    console.log("🔍 handleReplySend called with:", { id, replyContent, bannerUrl });

    setReplyLoading(true);
    try {
      // Find the user
      const user = users.find(u => u._id === id);
      if (!user) {
        alert("User not found");
        setReplyLoading(false);
        return;
      }

      console.log("👤 Found user:", user);

      // First, create a temporary newsletter entry for the user
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }),
      });
      
      if (!res.ok) {
        alert("Failed to create newsletter entry for user");
        setReplyLoading(false);
        return;
      }

      const data = await res.json();
      const newsletterId = data.subscriber._id;
      console.log("📧 Newsletter subscriber created:", newsletterId);

      // Now use the newsletter API with the newsletter subscriber ID
      const newsletterRes = await fetch("/api/mail/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `Response to your waitlist request - Manilla Technologies`,
          content: replyContent,
          selectedUserIds: [newsletterId],
          bannerUrl: bannerUrl || "", // Use the bannerUrl if provided
        }),
      });

      console.log("📤 Newsletter API request sent with bannerUrl:", bannerUrl);

      const newsletterData = await newsletterRes.json();

      if (newsletterRes.ok) {
        alert(`Reply sent successfully to ${user.firstName} ${user.lastName}`);
        
        // Update the user's status in the local state
        setUsers((prev) =>
          prev.map((u) =>
            u._id === id ? { ...u, status: "replied" as const } : u
          )
        );
        
        setShowReplyModal(false);
        setSelectedUsersForReply([]);
        setSelectedIds([]);
      } else {
        alert(newsletterData.message || "Failed to send reply");
      }
    } catch (error) {
      console.error("Failed to send reply:", error);
      alert("Failed to send reply");
    } finally {
      setReplyLoading(false);
    }
  };

  const handleView = (id: string) => {
    const user = users.find((u) => u._id === id);
    if (user) setSelectedUser(user);
  };

  if (isLoading)
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

  return (
    <div className="pe-4 flex-1 flex flex-col bg-white/40 h-screen overflow-y-auto">
      <Topbar
        title="Waitlist"
        subtitle="Waitlist"
        description="View and manage all waitlist emails."
      />

      <WaitlistTable
        users={users}
        onDelete={handleDelete}
        onDeleteSelected={handleDeleteSelected}
        onSendMail={handleSendMail}
        onView={handleView}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />

      {selectedUser && (
        <ViewModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}

      {showReplyModal && selectedUsersForReply.length > 0 && (
        <ReplyModal
          user={selectedUsersForReply[0]}
          onClose={() => {
            setShowReplyModal(false);
            setSelectedUsersForReply([]);
            setSelectedIds([]);
          }}
          onSend={handleReplySend}
        />
      )}
    </div>
  );
};

export default WaitlistPage;
