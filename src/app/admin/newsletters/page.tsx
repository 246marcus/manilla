"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import NewsletterPage from "../components/newletter/NewsletterPage";

interface Subscriber {
  _id: string;
  email: string;
  subscribedAt: string;
}

const NewslettersAdminPage = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await fetch("/api/newsletter/subscribe");
      const data = await res.json();

      if (res.ok) {
        setSubscribers(data.subscribers || []);
      }
    } catch (error) {
      console.error("Failed to fetch subscribers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Convert API data to match the original component interface
  const users = subscribers.map((subscriber, index) => ({
    id: index + 1,
    email: subscriber.email,
    location: "🇳🇬 Nigeria", // Default location
    business: "Newsletter Subscriber", // Default business
    useCase: "Newsletter", // Default use case
    platform: "Web", // Default platform
    _id: subscriber._id, // Store the real MongoDB ID
  }));

  const handleDelete = async (id: number) => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      // Find the subscriber by the display ID
      const subscriber = subscribers[id - 1];
      if (!subscriber) return;

      const res = await fetch("/api/newsletter/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: [subscriber._id] }),
      });

      if (res.ok) {
        // Remove from local state
        setSubscribers((prev) => prev.filter((_, index) => index + 1 !== id));
      } else {
        alert("Failed to delete subscriber");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete subscriber");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteSelected = async (ids: number[]) => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      // Get the real MongoDB IDs for the selected display IDs
      const realIds = ids.map((id) => subscribers[id - 1]?._id).filter(Boolean);

      if (realIds.length === 0) return;

      const res = await fetch("/api/newsletter/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: realIds }),
      });

      if (res.ok) {
        // Remove selected from local state
        setSubscribers((prev) =>
          prev.filter((_, index) => !ids.includes(index + 1))
        );
      } else {
        alert("Failed to delete selected subscribers");
      }
    } catch (error) {
      console.error("Delete selected error:", error);
      alert("Failed to delete selected subscribers");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSend = (id: number) => {
    alert(`Send mail to user ${id}`);
  };

  const handleView = (id: number) => {
    alert(`View user ${id}`);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <p className="text-center mt-20 lg:hidden">Desktop Mode Only</p>
      <div className="hidden lg:flex h-screen ">
        <Sidebar />
        <div className="flex-1">
          <NewsletterPage
            users={users}
            onDelete={handleDelete}
            onDeleteSelected={handleDeleteSelected}
            onSend={handleSend}
            onView={handleView}
            isDeleting={isDeleting}
          />
        </div>
      </div>
    </>
  );
};

export default NewslettersAdminPage;
