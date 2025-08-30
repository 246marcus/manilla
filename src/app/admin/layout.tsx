// app/admin/layout.tsx
import React from "react";

export const metadata = {
  title: "Admin",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* ⚡️ No Nav, no Footer */}
      {children}
    </div>
  );
}
