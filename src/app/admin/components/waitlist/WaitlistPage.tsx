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

  const handleReplySubmit = async (
    subject: string,
    content: string,
    selectedUserIds: string[],
    bannerUrl?: string
  ) => {
    setReplyLoading(true);
    try {
      const res = await fetch("/api/mail/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactIds: selectedUserIds, // matches backend requirement
          replyContent: content, // the reply message
          subject: subject,
          bannerUrl: bannerUrl,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(
          `Reply sent successfully!\nTotal selected: ${selectedUserIds.length}`
        );
        setShowReplyModal(false);
        setSelectedUser(null);
        setSelectedIds([]);
        setUsers((prev) =>
          prev.map((u) =>
            selectedUserIds.includes(u._id)
              ? { ...u, status: "replied" as const }
              : u
          )
        );
      } else {
        alert(data.message || "Failed to send reply");
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

      <ReplyModal
        isOpen={showReplyModal}
        onClose={() => {
          setShowReplyModal(false);
          setSelectedUsersForReply([]);
          setSelectedIds([]);
        }}
        onSubmit={handleReplySubmit}
        title={`Reply`}
        loading={replyLoading}
        totalUsers={selectedUsersForReply.length}
        selectedUsers={selectedUsersForReply.map((u) => ({
          _id: u._id,
          email: u.email,
        }))}
      />
    </div>
  );
};

export default WaitlistPage;
