"use client";

import { useState, useEffect } from "react";
import Topbar from "../Topbar";
import ContactTable from "./ContactTable";
import ReplyModal from "../ReplyModal";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  companyName?: string;
  companyAddress?: string;
  requestContent: string;
  requestType: "waitlist" | "contact";
  status: "unread" | "read" | "replied";
  createdAt: string;
  updatedAt: string;
}

const ContactPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [replyLoading, setReplyLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Fetch contacts from API
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();

      if (res.ok) {
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });

      if (res.ok) {
        setContacts((prev) => prev.filter((contact) => contact._id !== id));
        setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
      } else {
        alert("Failed to delete contact");
      }
    } catch (error) {
      console.error("Failed to delete contact:", error);
      alert("Failed to delete contact");
    }
  };

  const handleDeleteSelected = async (ids: string[]) => {
    try {
      const deletePromises = ids.map((id) =>
        fetch(`/api/contact/${id}`, { method: "DELETE" })
      );

      await Promise.all(deletePromises);
      setContacts((prev) =>
        prev.filter((contact) => !ids.includes(contact._id))
      );
      setSelectedIds(prev => prev.filter(selectedId => !ids.includes(selectedId)));
    } catch (error) {
      console.error("Failed to delete contacts:", error);
      alert("Failed to delete contacts");
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "read" }),
      });

      if (res.ok) {
        setContacts((prev) =>
          prev.map((contact) =>
            contact._id === id
              ? { ...contact, status: "read" as const }
              : contact
          )
        );
      } else {
        alert("Failed to update contact status");
      }
    } catch (error) {
      console.error("Failed to update contact status:", error);
      alert("Failed to update contact status");
    }
  };

  const handleMarkAsReplied = async (id: string) => {
    const contact = contacts.find((c) => c._id === id);
    if (contact) {
      setSelectedContacts([contact]);
      setSelectedIds([id]);
      setShowReplyModal(true);
    }
  };

  const handleReplySubmit = async (
    subject: string,
    content: string,
    selectedContactIds: string[],
    bannerUrl?: string
  ) => {
    if (!selectedContactIds || selectedContactIds.length === 0) return;

    setReplyLoading(true);
    try {
      // Send reply to each selected contact
      const replyPromises = selectedContactIds.map(async (contactId) => {
        const res = await fetch("/api/mail/reply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactId: contactId,
            replyContent: content,
            subject: subject,
            bannerUrl: bannerUrl,
          }),
        });
        return res.json();
      });

      const results = await Promise.all(replyPromises);
      const successCount = results.filter(result => result.message).length;
      const failureCount = results.length - successCount;

      if (successCount > 0) {
        alert(`Reply sent successfully!\nTotal selected: ${selectedContactIds.length}\nSuccess: ${successCount}\nFailed: ${failureCount}`);
        
        // Update the contacts' status in the local state
        setContacts((prev) =>
          prev.map((contact) =>
            selectedContactIds.includes(contact._id)
              ? { ...contact, status: "replied" as const }
              : contact
          )
        );
        
        setShowReplyModal(false);
        setSelectedContacts([]);
        setSelectedIds([]);
      } else {
        alert("Failed to send reply to any contacts");
      }
    } catch (error) {
      console.error("Failed to send reply:", error);
      alert("Failed to send reply");
    } finally {
      setReplyLoading(false);
    }
  };

  const handleSendMail = (ids: string[] | null) => {
    if (!ids || ids.length === 0) {
      alert("Please select at least one contact");
      return;
    }

    const selectedContactsList = contacts.filter((c) => ids.includes(c._id));
    if (selectedContactsList.length === 0) {
      alert("No matching contacts found");
      return;
    }

    setSelectedContacts(selectedContactsList);
    setSelectedIds(ids);
    setShowReplyModal(true);
  };

  const handleView = (id: string) => {
    const contact = contacts.find((c) => c._id === id);
    if (contact) {
      alert(
        `Contact Details:\nName: ${contact.firstName} ${
          contact.lastName
        }\nEmail: ${contact.email}\nTelephone: ${
          contact.telephone || "N/A"
        }\nCompany: ${contact.companyName || "N/A"}\nAddress: ${
          contact.companyAddress || "N/A"
        }\nRequest Type: ${contact.requestType}\nRequest Content: ${
          contact.requestContent
        }`
      );
    }
  };

  if (isLoading) {
    return (
      <div className="pe-4 flex-1 flex flex-col bg-white/40 h-screen overflow-y-auto">
        <Topbar
          title="Contact"
          subtitle="Contact"
          description="View and manage all contact form submissions."
        />
        <div className="flex items-center justify-center h-64">
          <p>Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pe-4 flex-1 flex flex-col bg-white/40 h-screen overflow-y-auto">
      <Topbar
        title="Contact"
        subtitle="Contact"
        description="View and manage all contact form submissions."
      />

      <ContactTable
        contacts={contacts}
        onDelete={handleDelete}
        onDeleteSelected={handleDeleteSelected}
        onMarkAsRead={handleMarkAsRead}
        onMarkAsReplied={handleMarkAsReplied}
        onView={handleView}
        onSendMail={handleSendMail}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />

      <ReplyModal
        isOpen={showReplyModal}
        onClose={() => {
          setShowReplyModal(false);
          setSelectedContacts([]);
          setSelectedIds([]);
        }}
        onSubmit={handleReplySubmit}
        title={`Reply to ${selectedContacts.length > 0 ? selectedContacts[0].firstName : ''} ${selectedContacts.length > 0 ? selectedContacts[0].lastName : ''}`}
        loading={replyLoading}
        totalUsers={selectedContacts.length}
        selectedUsers={selectedContacts.map((c) => ({
          _id: c._id,
          email: c.email,
        }))}
      />
    </div>
  );
};

export default ContactPage;
