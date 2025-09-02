"use client";

import { useState, useEffect } from "react";
import Topbar from "../Topbar";
import NewsletterTable from "./NewsletterTable";
import NewsletterModal from "../NewsletterModal";

interface User {
  _id: string;
  email: string;
  isActive: boolean;
  subscribedAt: string;
}

interface NewsletterPageProps {
  users?: User[];
  onDelete?: (id: string) => void;
  onDeleteSelected?: (ids: string[]) => void;
  isDeleting?: boolean;
}

const NewsletterPage: React.FC<NewsletterPageProps> = ({
  users: propUsers,
  onDelete: propOnDelete,
  onDeleteSelected: propOnDeleteSelected,
  isDeleting = false,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Fetch newsletter subscribers from API
  useEffect(() => {
    fetchNewsletterSubscribers();
  }, []);

  const fetchNewsletterSubscribers = async () => {
    try {
      const res = await fetch("/api/newsletter/subscribe");
      const data = await res.json();
      
      if (res.ok) {
        setUsers(data.subscribers);
      }
    } catch (error) {
      console.error("Failed to fetch newsletter subscribers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/newsletter/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      
      if (res.ok) {
        setUsers(prev => prev.filter(user => user._id !== id));
        setSelectedUsers(prev => prev.filter(user => user._id !== id));
      } else {
        alert("Failed to delete subscriber");
      }
    } catch (error) {
      console.error("Failed to delete subscriber:", error);
      alert("Failed to delete subscriber");
    }
  };

  const handleDeleteSelected = async (ids: string[]) => {
    try {
      const deletePromises = ids.map(id => 
        fetch(`/api/newsletter/delete`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        })
      );
      
      await Promise.all(deletePromises);
      setUsers(prev => prev.filter(user => !ids.includes(user._id)));
      setSelectedUsers(prev => prev.filter(user => !ids.includes(user._id)));
    } catch (error) {
      console.error("Failed to delete subscribers:", error);
      alert("Failed to delete subscribers");
    }
  };

  const handleSendNewsletter = () => {
    setShowNewsletterModal(true);
  };

  const handleNewsletterSubmit = async (subject: string, content: string, selectedUserIds: string[], bannerUrl?: string) => {
    setNewsletterLoading(true);
    try {
      const res = await fetch("/api/mail/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          content: content,
          selectedUserIds: selectedUserIds, // Send to specific selected users
          bannerUrl: bannerUrl, // Pass banner URL to API
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Newsletter sent successfully!\nTotal selected: ${selectedUserIds.length}\nSuccess: ${data.successCount}\nFailed: ${data.failureCount}`);
        setShowNewsletterModal(false);
        setSelectedUsers([]); // Clear selection after sending
      } else {
        alert(data.message || "Failed to send newsletter");
      }
    } catch (error) {
      console.error("Failed to send newsletter:", error);
      alert("Failed to send newsletter");
    } finally {
      setNewsletterLoading(false);
    }
  };

  const handleUserSelection = (selectedIds: string[]) => {
    console.log('=== NewsletterPage: handleUserSelection called ===');
    console.log('Selected IDs received:', selectedIds);
    console.log('Available users:', users);
    console.log('Users length:', users.length);
    
    const selectedUserObjects = users.filter(user => selectedIds.includes(user._id));
    console.log('Selected user objects:', selectedUserObjects);
    console.log('Selected users length:', selectedUserObjects.length);
    
    setSelectedUsers(selectedUserObjects);
    console.log('State updated with selected users');
  };

  return (
    <div className="pe-4 flex-1 flex flex-col  bg-white/40 h-screen overflow-y-auto">
      <Topbar
        title="Newsletters"
        subtitle="Newsletters"
        description="View and manage all Newsletters emails."
      />

      <NewsletterTable
        users={users}
        onDelete={handleDelete}
        onDeleteSelected={handleDeleteSelected}
        onSendNewsletter={handleSendNewsletter}
        onUserSelection={handleUserSelection}
        isDeleting={isDeleting}
      />

      <NewsletterModal
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
        onSubmit={handleNewsletterSubmit}
        loading={newsletterLoading}
        totalUsers={users.length}
        selectedUsers={selectedUsers}
      />
    </div>
  );
};

export default NewsletterPage;
