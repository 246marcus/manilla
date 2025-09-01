"use client";

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMail, FiTrash2, FiEye, FiInbox } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { log } from "util";

interface NewsletterUser {
  _id: string;
  email: string;
  isActive: boolean;
  subscribedAt: string;
}

interface NewsletterTableProps {
  users: NewsletterUser[];
  onDelete: (id: string) => void;
  onDeleteSelected: (ids: string[]) => void;
  onSend: (id: string) => void;
  onView: (id: string) => void;
  onSendNewsletter?: () => void;
  onSendMail: (id: string | null) => void;
  isDeleting?: boolean;
}

const NewsletterTable: React.FC<NewsletterTableProps> = ({
  users,
  onDelete,
  onDeleteSelected,
  onSend,
  onView,
  onSendNewsletter,
  onSendMail,
  isDeleting = false,
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
    if (selected.length === users.length) {
      setSelected([]);
    } else {
      setSelected(users.map((u) => u._id));
    }
  };

  //Sort lists before passing to BlogGrid
  const sortedList = [...users].sort((a, b) => {
    const aDate = new Date(a.subscribedAt).getTime();
    const bDate = new Date(b.subscribedAt).getTime();

    if (sort === "Newest") {
      return bDate - aDate;
    } else if (sort === "Oldest") {
      return aDate - bDate;
    }
    return 0;
  });
  

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Header Controls */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h1 className=" font-semibold text-black/80 text-sm">
            View and manage all Newsletters participants
          </h1>
          <p className=" text-black/50 text-xs">
            Simply view and manage all users who opt-in to receive newsletters
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
            disabled={selected.length === 0 || isDeleting}
            onClick={() => onDeleteSelected(selected)}
            className="flex items-center gap-1 hover:text-white font-semibold border-black/40  border disabled:opacity-50 px-4 py-2 rounded-md hover:bg-black/80"
          >
            <MdDeleteOutline size={22} />
            {isDeleting ? "Deleting..." : "Delete Selected"}
          </button>
          <button
            onClick={() => onSendMail(selected.length > 0 ? selected[0] : null)}
            disabled={selected.length === 0}
            className="flex items-center gap-2 bg-black/80 text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40 disabled:opacity-50"
          >
            <FiMail size={20} /> Send Mail
          </button>
          <button
            onClick={onSendNewsletter}
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 border border-blue-600"
          >
            <FiMail size={20} /> Send Newsletter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto  min-h-[320px] h-[350px]">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-left">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selected.length === users.length}
                  onChange={toggleAll}
                />
              </th>
              <th className="p-3">#</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Subscribed Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    <FiInbox className="text-5xl text-gray-400 mb-3" />
                    <p className="text-lg font-medium">No mails found</p>
                    <p className="text-sm text-gray-400">Your inbox is empty</p>
                  </div>
                </td>
              </tr>
            ) : (
              sortedList.map((u, index) => (
                <tr
                  key={u._id}
                  className="border-b hover:bg-gray-50 text-gray-800"
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(u._id)}
                      onChange={() => toggleSelect(u._id)}
                    />
                  </td>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src="https://via.placeholder.com/28"
                      alt="avatar"
                      className="w-7 h-7 rounded-full"
                    />
                    {u.email}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        u.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {u.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-3">
                    {new Date(u.subscribedAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 relative">
                    <button
                      onClick={() =>
                        setOpenMenu(openMenu === u._id ? null : u._id)
                      }
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {openMenu === u._id && (
                      <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg z-10">
                        <button
                          onClick={() => {
                            onView(u._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
                        >
                          <FiEye /> View
                        </button>
                        <button
                          onClick={() => {
                            onSendMail(u._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
                        >
                          <FiMail /> Send Mail
                        </button>
                        <button
                          onClick={() => {
                            onDelete(u._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600 w-full"
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

export default NewsletterTable;
