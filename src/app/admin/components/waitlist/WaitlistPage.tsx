"use client";

import { useState } from "react";
import Topbar from "../Topbar";
import WaitlistTable from "./WaitlistTable";

interface User {
  id: number;
  email: string;
  location: string;
  userType: string;
  useCase: string;
  platform: string;
}

const WaitlistPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      email: "jtug@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 2,
      email: "mary@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 3,
      email: "mary@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 4,
      email: "mary@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 5,
      email: "mary@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 6,
      email: "mary@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
      useCase: "Bill Payments",
      platform: "Mobile",
    },
    {
      id: 7,
      email: "mary@example.com",
      location: "🇳🇬 Nigeria",
      userType: "Individual",
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
    <div className="pe-4 flex-1 flex flex-col  bg-white/40 h-screen overflow-y-auto">
      <Topbar
        title="Waitlist"
        subtitle="Waitlist"
        description="View and manage all waitlist emails."
      />

      <WaitlistTable
        users={users}
        onDelete={handleDelete}
        onDeleteSelected={handleDeleteSelected}
        onSend={handleSend}
        onView={handleView}
      />
    </div>
  );
};

export default WaitlistPage;
