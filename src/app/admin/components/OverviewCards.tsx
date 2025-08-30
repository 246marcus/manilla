"use client";

import React, { useState, useEffect } from "react";
import {
  FaFileAlt,
  FaEnvelopeOpenText,
  FaUsers,
  FaRegNewspaper,
} from "react-icons/fa";

export default function OverviewCards() {
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);

  useEffect(() => {
    fetchNewsletterCount();
    fetchContactCounts();
    fetchBlogCount();
  }, []);

  const fetchNewsletterCount = async () => {
    try {
      const res = await fetch("/api/newsletter/subscribe");
      const data = await res.json();
      if (res.ok) {
        setNewsletterCount(data.subscribers.length);
      }
    } catch (error) {
      console.error("Failed to fetch newsletter count:", error);
    }
  };

  const fetchContactCounts = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      if (res.ok) {
        const waitlistUsers = data.contacts.filter((contact: any) => contact.requestType === "waitlist");
        const contactUsers = data.contacts.filter((contact: any) => contact.requestType === "contact");
        setWaitlistCount(waitlistUsers.length);
        setContactCount(contactUsers.length);
      }
    } catch (error) {
      console.error("Failed to fetch contact counts:", error);
    }
  };

  const fetchBlogCount = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (res.ok) {
        setBlogCount(data.blogs.length);
      }
    } catch (error) {
      console.error("Failed to fetch blog count:", error);
    }
  };

  const stats = [
    { title: "Blogs Created", value: blogCount, icon: <FaFileAlt size={20} className="text-purple-600" /> },
    { title: "Contact Requests", value: contactCount, icon: <FaEnvelopeOpenText size={20} className="text-green-400"  /> },
    { title: "Waitlist", value: waitlistCount, icon: <FaUsers size={20} className="text-blue-500"  /> },
    { title: "Newsletter", value: newsletterCount, icon: <FaRegNewspaper size={20} className="text-orange-400"  /> },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mb-5">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl shadow-md flex items-start justify-between hover:scale-95"
        >
          <div className="flex flex-col gap-1 ">
            <p className="text-black/80 text-sm font-semibold">{stat.title}</p>
            <p className="text-3xl font-bold text-black/80">{stat.value}</p>
            <p className="text-xs  text-black/70 ">
              {stat.value + idx === 0
                ? "Blogs Created"
                : idx === 1
                ? "Total email sent"
                : idx == 2
                ? "Total waitlist entry"
                : "Total newsletter entry"}{" "}
            </p>
          </div>
          <div className="text-2xl text-gray-600">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
}
