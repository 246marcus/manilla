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
  onSend?: (id: string) => void;
  onView?: (id: string) => void;
  isDeleting?: boolean;
}

const NewsletterPage: React.FC<NewsletterPageProps> = ({
  users: propUsers,
  onDelete: propOnDelete,
  onDeleteSelected: propOnDeleteSelected,
  onSend: propOnSend,
  onView: propOnView,
  isDeleting = false,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newsletterLoading, setNewsletterLoading] = useState(false);

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
    } catch (error) {
      console.error("Failed to delete subscribers:", error);
      alert("Failed to delete subscribers");
    }
  };

  const handleSend = (id: string) => {
    const user = users.find(u => u._id === id);
    if (user) {
      alert(`Send mail to ${user.email}`);
    }
  };

  const handleSendNewsletter = () => {
    setShowNewsletterModal(true);
  };

  const handleNewsletterSubmit = async (subject: string, content: string) => {
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
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`Newsletter sent successfully!\nTotal subscribers: ${data.totalSubscribers}\nSuccess: ${data.successCount}\nFailed: ${data.failureCount}`);
        setShowNewsletterModal(false);
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

  const handleSendMail = (id: string | null) => {
    if (id) {
      const user = users.find(u => u._id === id);
      if (user) {
        // For newsletter subscribers, we'll send a direct email
        const subject = prompt("Enter email subject:");
        if (subject && subject.trim()) {
          const content = prompt("Enter email content:");
          if (content && content.trim()) {
            handleSendDirectEmail(user.email, subject.trim(), content.trim());
          }
        }
      }
    } else {
      alert("Please select a subscriber to send mail to");
    }
  };

  const handleSendDirectEmail = async (email: string, subject: string, content: string) => {
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: subject,
          content: content,
          type: "direct",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Email sent successfully!");
      } else {
        alert(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email");
    }
  };

  const handleView = (id: string) => {
    const user = users.find(u => u._id === id);
    if (user) {
      alert(`View user ${user.email}`);
    }
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
        onSend={handleSend}
        onView={handleView}
        onSendNewsletter={handleSendNewsletter}
        onSendMail={handleSendMail}
        isDeleting={isDeleting}
      />

      <NewsletterModal
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
        onSubmit={handleNewsletterSubmit}
        loading={newsletterLoading}
      />
    </div>
  );
};

export default NewsletterPage;
