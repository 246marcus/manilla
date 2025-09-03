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

  const handleReplySend = async (id: string, replyContent: string, bannerUrl?: string) => {
    if (!id) return;

    console.log("🔍 Contact handleReplySend called with:", { id, replyContent, bannerUrl });

    setReplyLoading(true);
    try {
      // Find the contact
      const contact = contacts.find(c => c._id === id);
      if (!contact) {
        alert("Contact not found");
        setReplyLoading(false);
        return;
      }

      console.log("👤 Found contact:", contact);

      // First, create a temporary newsletter entry for the contact
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: contact.email,
          firstName: contact.firstName,
          lastName: contact.lastName
        }),
      });
      
      if (!res.ok) {
        alert("Failed to create newsletter entry for contact");
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
          subject: `Response to your contact request - Manilla Technologies`,
          content: replyContent,
          selectedUserIds: [newsletterId],
          bannerUrl: bannerUrl || "", // Use the bannerUrl if provided
        }),
      });

      console.log("📤 Newsletter API request sent with bannerUrl:", bannerUrl);

      const newsletterData = await newsletterRes.json();

      if (newsletterRes.ok) {
        alert(`Reply sent successfully to ${contact.firstName} ${contact.lastName}`);
        
        // Update the contact's status in the local state
        setContacts((prev) =>
          prev.map((c) =>
            c._id === id ? { ...c, status: "replied" as const } : c
          )
        );
        
        setShowReplyModal(false);
        setSelectedContacts([]);
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

      {showReplyModal && selectedContacts.length > 0 && (
        <ReplyModal
          user={selectedContacts[0]}
          onClose={() => {
            setShowReplyModal(false);
            setSelectedContacts([]);
            setSelectedIds([]);
          }}
          onSend={handleReplySend}
        />
      )}
    </div>
  );
};

export default ContactPage;
