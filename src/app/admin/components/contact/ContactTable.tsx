"use client";

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMail, FiTrash2, FiEye, FiCheck, FiMessageSquare } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  companyName?: string;
  companyAddress?: string;
  requestContent: string;
  requestType: "waitlist" | "contact";
  status: "unread" | "read" | "replied";
  createdAt: string;
  updatedAt: string;
}

interface ContactTableProps {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onDeleteSelected: (ids: string[]) => void;
  onMarkAsRead: (id: string) => void;
  onMarkAsReplied: (id: string) => void;
  onView: (id: string) => void;
  onSendMail: (id: string | null) => void;
}

const ContactTable: React.FC<ContactTableProps> = ({
  contacts,
  onDelete,
  onDeleteSelected,
  onMarkAsRead,
  onMarkAsReplied,
  onView,
  onSendMail,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState("Newest");

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selected.length === contacts.length) {
      setSelected([]);
    } else {
      setSelected(contacts.map((c) => c._id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "replied":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "unread":
        return "🔴";
      case "read":
        return "🟡";
      case "replied":
        return "🟢";
      default:
        return "⚪";
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Header Controls */}
      <div className="flex items-center justify-between px-4 py-3">
        <div> 
          <h1 className=" font-semibold text-black/80 text-sm">
           View and manage all contact form submissions
          </h1>
          <p className=" text-black/50 text-xs">
           Simply view and manage all contact messages from users
          </p>
        </div>

        <div className="flex gap-3 text-sm">
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-sm font-semibold"
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
          <button
            disabled={selected.length === 0}
            onClick={() => onDeleteSelected(selected)}
           className="flex items-center gap-1 hover:text-white font-semibold border-black/40  border disabled:opacity-50 px-4 py-2 rounded-md hover:bg-black/80" 
          >
             <MdDeleteOutline size={22} />
            Delete Selected
          </button>
          <button 
            onClick={() => onSendMail(selected.length > 0 ? selected[0] : null)}
            disabled={selected.length === 0}
            className="flex items-center gap-2 bg-black/80 text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40 disabled:opacity-50"
          >
            <FiMail size={20} /> Send Mail
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto min-h-[320px] h-[350px]">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-left">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selected.length === contacts.length && contacts.length > 0}
                  onChange={toggleAll}
                />
              </th>
              <th className="p-3">#</th>
              <th className="p-3">Date</th>
              <th className="p-3">Email</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Request Content</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={10} className="p-8 text-center text-gray-500">
                  No contact submissions found
                </td>
              </tr>
            ) : (
              contacts.map((contact, index) => (
                <tr
                  key={contact._id}
                  className="border-b hover:bg-gray-50 text-gray-800"
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(contact._id)}
                      onChange={() => toggleSelect(contact._id)}
                    />
                  </td>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3">{contact.firstName}</td>
                  <td className="p-3">{contact.lastName}</td>
                  <td className="p-3 max-w-xs truncate" title={contact.requestContent}>
                    {contact.requestContent}
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      contact.requestType === "waitlist" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-purple-100 text-purple-800"
                    }`}>
                      {contact.requestType === "waitlist" ? "📋 Waitlist" : "📧 Contact"}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                      {getStatusIcon(contact.status)} {contact.status}
                    </span>
                  </td>
                  <td className="p-3 relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === contact._id ? null : contact._id)}
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {openMenu === contact._id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <button
                          onClick={() => {
                            onView(contact._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                        >
                          <FiEye /> View Details
                        </button>
                        {contact.status === "unread" && (
                          <button
                            onClick={() => {
                              onMarkAsRead(contact._id);
                              setOpenMenu(null);
                            }}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                          >
                            <FiCheck /> Mark as Read
                          </button>
                        )}
                        {contact.status !== "replied" && (
                          <button
                            onClick={() => {
                              onMarkAsReplied(contact._id);
                              setOpenMenu(null);
                            }}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                          >
                            <FiMessageSquare /> Mark as Replied
                          </button>
                        )}
                        <button
                          onClick={() => {
                            onSendMail(contact._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                        >
                          <FiMail /> Send Mail
                        </button>
                        <button
                          onClick={() => {
                            onDelete(contact._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600 w-full text-left"
                        >
                          <FiTrash2 /> Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
