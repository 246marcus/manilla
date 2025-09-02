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

  const handleDelete = async (id: string) => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      const res = await fetch("/api/newsletter/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setSubscribers((prev) => prev.filter((sub) => sub._id !== id));
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

  const handleDeleteSelected = async (ids: string[]) => {
    if (isDeleting) return;

    setIsDeleting(true);
    try {
      const deletePromises = ids.map((id) =>
        fetch("/api/newsletter/delete", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        })
      );

      await Promise.all(deletePromises);
      setSubscribers((prev) => prev.filter((sub) => !ids.includes(sub._id)));
    } catch (error) {
      console.error("Delete selected error:", error);
      alert("Failed to delete selected subscribers");
    } finally {
      setIsDeleting(false);
    }
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
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <NewsletterPage
            subscribers={subscribers}
            handleDelete={handleDelete}
            handleDeleteSelected={handleDeleteSelected}
            isDeleting={isDeleting}
          />
        </div>
      </div> {/* ✅ fixed */}
    </>
  );
};

export default NewslettersAdminPage;
