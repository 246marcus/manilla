"use client";

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMail, FiTrash2, FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

interface WaitlistUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone?: string;
  companyName?: string;
  companyAddress?: string;
  requestContent: string;
  status: "unread" | "read" | "replied";
  createdAt: string;
  updatedAt: string;
}

interface WaitlistTableProps {
  users: WaitlistUser[];
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>; // ← change here
  onDelete: (id: string) => void;
  onDeleteSelected: (ids: string[]) => void;
  onSendMail: (ids: string[] | null) => void;
  onView: (id: string) => void;
}


const WaitlistTable: React.FC<WaitlistTableProps> = ({
  users,
  selectedIds,
  setSelectedIds,
  onDelete,
  onDeleteSelected,
  onSendMail,
  onView,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sort, setSort] = useState("Newest");

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedIds.length === users.length) setSelectedIds([]);
    else setSelectedIds(users.map(u => u._id));
  };

  // Sort the list
  const sortedList = [...users].sort((a, b) => {
    const aDate = new Date(a.createdAt).getTime();
    const bDate = new Date(b.createdAt).getTime();
    return sort === "Newest" ? bDate - aDate : aDate - bDate;
  });

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Header Controls */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h1 className="font-semibold text-black/80 text-sm">
            View and manage all waitlist participants
          </h1>
          <p className="text-black/50 text-xs">
            Simply view and manage all users who opted into the waitlist
          </p>
        </div>

        <div className="flex gap-3 text-sm">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-sm font-semibold"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>

          <button
            disabled={selectedIds.length === 0}
            onClick={() => onDeleteSelected(selectedIds)}
            className="flex items-center gap-1 hover:text-white font-semibold border-black/40 border disabled:opacity-50 px-4 py-2 rounded-md hover:bg-black/80"
          >
            <MdDeleteOutline size={22} /> Delete Selected
          </button>

          <button
            className="flex items-center gap-2 bg-black/80 text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40"
            onClick={() =>
              onSendMail(selectedIds.length > 0 ? selectedIds : null)
            }
            disabled={selectedIds.length === 0}
          >
            <FiMail size={20} /> Send Mail ({selectedIds.length} selected)
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
                  checked={selectedIds.length === users.length && users.length > 0}
                  onChange={toggleAll}
                />
              </th>
              <th className="p-3">#</th>
              <th className="p-3">Date</th>
              <th className="p-3">Email</th>
              <th className="p-3">Request Content</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-500">
                  No waitlist submissions found
                </td>
              </tr>
            ) : (
              sortedList.map((u, index) => (
                <tr key={u._id} className="border-b hover:bg-gray-50 text-gray-800">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(u._id)}
                      onChange={() => toggleSelect(u._id)}
                    />
                  </td>
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                      {u.firstName.charAt(0).toUpperCase()}
                    </div>
                    {u.email}
                  </td>
                  <td className="p-3 max-w-xs truncate" title={u.requestContent}>
                    {u.requestContent}
                  </td>
                  <td className="p-3 relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === u._id ? null : u._id)}
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
                            onSendMail([u._id]);
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

export default WaitlistTable;
