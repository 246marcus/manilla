"use client";

import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

interface TopbarProps {
  title: string;
  subtitle: string;
  description: string;
}

interface User {
  id: string;
  email: string;
  name?: string;
}

const Topbar: React.FC<TopbarProps> = ({ title, subtitle, description }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/verify", {
          credentials: "include",
        });
        
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          // Fallback to default admin user
          setUser({
            id: "admin",
            email: "admin@manilla.com",
            name: "Admin"
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        // Fallback to default admin user
        setUser({
          id: "admin",
          email: "admin@manilla.com",
          name: "Admin"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className=" text-black/80">
      {/* top  */}
      <div className="flex justify-between items-center p-4  bg-black/2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center space-x-3">
          <div className="w-[50px] h-[50px] bg-blue-600 rounded-full flex items-center justify-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div className="text-start">
            <p className="font-medium">
              {loading ? "Loading..." : user?.name || "Admin"}
            </p>
            <p className="text-sm text-black/50">
              {loading ? "..." : user?.email || "admin@manilla.com"}
            </p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="p-4 pb-1 bg-black/10 shadow">
        <h2 className="font-semibold">{subtitle}</h2>
        <p className="text-sm  text-black/50">{description}</p>
      </div>
    </div>
  );
};
export default Topbar;
