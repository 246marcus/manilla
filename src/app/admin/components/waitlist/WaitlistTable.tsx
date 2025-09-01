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
  onDelete: (id: string) => void;
  onDeleteSelected: (ids: string[]) => void;
  onSend: (id: string) => void;
  onView: (id: string) => void;
  onSendMail: (id: string | null) => void;
}

const WaitlistTable: React.FC<WaitlistTableProps> = ({
  users,
  onDelete,
  onDeleteSelected,
  onSend,
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
    if (selected.length === users.length) {
      setSelected([]);
    } else {
      setSelected(users.map((u) => u._id));
    }
  };

  //Sort lists before passing to table
  const sortedList = [...users].sort((a, b) => {
    const aDate = new Date(a.createdAt).getTime();
    const bDate = new Date(b.createdAt).getTime();

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
            View and manage all waitlist participants
          </h1>
          <p className=" text-black/50 text-xs">
            Simply view and manage all users who opt-in to join waitlist
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
            className=" flex items-center gap-2 bg-black/80  text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40"
            onClick={() => onSendMail(selected.length > 0 ? selected[0] : null)}
            disabled={selected.length === 0}
          >
            <FiMail size={20} /> Send Mail
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
                  checked={selected.length === users.length && users.length > 0}
                  onChange={toggleAll}
                />
              </th>
              <th className="p-3">#</th>
              <th className="p-3">Date</th>
              <th className="p-3">Email</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Request Content</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={9} className="p-8 text-center text-gray-500">
                  No waitlist submissions found
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
                  <td className="p-3">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-semibold">
                      {u.firstName.charAt(0).toUpperCase()}
                    </div>
                    {u.email}
                  </td>
                  <td className="p-3">{u.firstName}</td>
                  <td className="p-3">{u.lastName}</td>
                  <td
                    className="p-3 max-w-xs truncate"
                    title={u.requestContent}
                  >
                    {u.requestContent}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        u.status === "unread"
                          ? "bg-red-100 text-red-800"
                          : u.status === "read"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {u.status === "unread"
                        ? "🔴"
                        : u.status === "read"
                        ? "🟡"
                        : "🟢"}{" "}
                      {u.status}
                    </span>
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

export default WaitlistTable;
