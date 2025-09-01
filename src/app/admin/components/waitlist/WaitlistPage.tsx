"use client";

import { useState, useEffect } from "react";
import Topbar from "../Topbar";
import WaitlistTable from "./WaitlistTable";
import ViewModal from "./ViewModal";
import ReplyModal from "../ReplyModal";

// ✅ This matches ReplyModal.tsx
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
  const [selectedUser, setSelectedUser] = useState<WaitlistUser | null>(null);
  const [selectedReply, setSelectedReply] = useState<WaitlistUser | null>(null);

  /////////////////////////////////////////////////////////
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyLoading, setReplyLoading] = useState(false);

  ///////////////////////////////////

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
        setUsers((prev) => prev.filter((user) => user._id !== id));
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
      await Promise.all(
        ids.map((id) => fetch(`/api/contact/${id}`, { method: "DELETE" }))
      );
      setUsers((prev) => prev.filter((user) => !ids.includes(user._id)));
    } catch (error) {
      console.error("Failed to delete users:", error);
      alert("Failed to delete users");
    }
  };

  // const handleSend = async (id: string, replyContent: string) => {
  //   try {
  //     const res = await fetch("/api/mail/reply", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ contactId: id, replyContent }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       alert("Reply sent successfully!");
  //       setUsers((prev) =>
  //         prev.map((u) => (u._id === id ? { ...u, status: "replied" } : u))
  //       );
  //     } else {
  //       alert(data.message || "Failed to send reply");
  //     }
  //   } catch (error) {
  //     console.error("Failed to send reply:", error);
  //     alert("Failed to send reply");
  //   }
  // };

  const handleSendMail = (id: string | null) => {
    if (id) {
      const User = users.find((c) => c._id === id);
      if (User) {
        setSelectedUser(User);
        setShowReplyModal(true);
      }
    } else {
      alert("Please select a contact to send mail to");
    }
  };

  const handleReplySubmit = async (replyContent: string) => {
    if (!selectedUser) return;

    setReplyLoading(true);
    try {
      const res = await fetch("/api/mail/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactId: selectedUser._id,
          replyContent: replyContent,
        }),
      });

      ////////////////////////////////////////////

      const data = await res.json();

      if (res.ok) {
        alert("Reply sent successfully!");
        // Update the contact's status in the local state
        setUsers((prev) =>
          prev.map((contact) =>
            contact._id === selectedUser._id
              ? { ...contact, status: "replied" as const }
              : contact
          )
        );
        setShowReplyModal(false);
        setSelectedUser(null);
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

  //////////////////////////////////////////////////////////

  const handleView = (id: string) => {
    const user = users.find((u) => u._id === id);
    if (user) setSelectedUser(user);
  };

  const handleReply = (id: string) => {
    const user = users.find((u) => u._id === id);
    if (user) setSelectedReply(user);
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
        onSend={handleReply}
        onView={handleView}
        onSendMail={handleSendMail}
      />

      {selectedUser && (
        <ViewModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}

      {/* {selectedReply && (
        <ReplyModal
          user={selectedReply}
          onClose={() => setSelectedReply(null)}
          onSend={handleSend}
        />
      )} */}

      <ReplyModal
        isOpen={showReplyModal}
        onClose={() => {
          setShowReplyModal(false);
          setSelectedUser(null);
        }}
        onSubmit={handleReplySubmit}
        title={`Reply to ${selectedUser?.firstName} ${selectedUser?.lastName}`}
        placeholder="Enter your reply message..."
        loading={replyLoading}
      />
    </div>
  );
};

export default WaitlistPage;
