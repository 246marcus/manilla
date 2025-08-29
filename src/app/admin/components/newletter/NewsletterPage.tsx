"use client";

import { useState } from "react";
import Topbar from "../Topbar";
import NewsletterTable from "./NewsletterTable";

interface User {
  id: number;
  email: string;
  location: string;
  business: string;
  useCase: string;
  platform: string;
}

const NewsletterPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      email: "abcd@example.com",
      location: "🇳🇬 Nigeria",
      business: "Agro-Investment",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 2,
      email: "efgh@example.com",
      location: "🇳🇬 Nigeria",
      business: "Agro-Investment",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 3,
      email: "1234@example.com",
      location: "🇳🇬 Nigeria",
      business: "Agro-Investment",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
  ]);

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleDeleteSelected = (ids: number[]) => {
    setUsers((prev) => prev.filter((u) => !ids.includes(u.id)));
  };

  const handleSend = (id: number) => {
    alert(`Send mail to user ${id}`);
  };

  const handleView = (id: number) => {
    alert(`View user ${id}`);
  };

  return (
    <div className="pe-4 flex flex-col gap-3 bg-white/40 min-h-screen">
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
      />
    </div>
  );
};

export default NewsletterPage;
