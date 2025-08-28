// src/app/admin/layout.tsx
"use client";

import React from "react";
import Sidebar from "../../../src/app/admin/components/Sidebar"; // adjust path if different

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
