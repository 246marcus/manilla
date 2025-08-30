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
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [replyLoading, setReplyLoading] = useState(false);

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
        setContacts(prev => prev.filter(contact => contact._id !== id));
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
      const deletePromises = ids.map(id => 
        fetch(`/api/contact/${id}`, { method: "DELETE" })
      );
      
      await Promise.all(deletePromises);
      setContacts(prev => prev.filter(contact => !ids.includes(contact._id)));
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
        setContacts(prev => 
          prev.map(contact => 
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
    const contact = contacts.find(c => c._id === id);
    if (contact) {
      setSelectedContact(contact);
      setShowReplyModal(true);
    }
  };

  const handleReplySubmit = async (replyContent: string) => {
    if (!selectedContact) return;
    
    setReplyLoading(true);
    try {
      const res = await fetch("/api/mail/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactId: selectedContact._id,
          replyContent: replyContent,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Reply sent successfully!");
        // Update the contact's status in the local state
        setContacts(prev => 
          prev.map(contact => 
            contact._id === selectedContact._id 
              ? { ...contact, status: "replied" as const }
              : contact
          )
        );
        setShowReplyModal(false);
        setSelectedContact(null);
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

  const handleSendMail = (id: string | null) => {
    if (id) {
      const contact = contacts.find(c => c._id === id);
      if (contact) {
        setSelectedContact(contact);
        setShowReplyModal(true);
      }
    } else {
      alert("Please select a contact to send mail to");
    }
  };

  const handleView = (id: string) => {
    const contact = contacts.find(c => c._id === id);
    if (contact) {
      alert(`Contact Details:\nName: ${contact.firstName} ${contact.lastName}\nEmail: ${contact.email}\nTelephone: ${contact.telephone || 'N/A'}\nCompany: ${contact.companyName || 'N/A'}\nAddress: ${contact.companyAddress || 'N/A'}\nRequest Type: ${contact.requestType}\nRequest Content: ${contact.requestContent}`);
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
      />

      <ReplyModal
        isOpen={showReplyModal}
        onClose={() => {
          setShowReplyModal(false);
          setSelectedContact(null);
        }}
        onSubmit={handleReplySubmit}
        title={`Reply to ${selectedContact?.firstName} ${selectedContact?.lastName}`}
        placeholder="Enter your reply message..."
        loading={replyLoading}
      />
    </div>
  );
};

export default ContactPage;
