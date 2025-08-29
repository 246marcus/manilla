"use client";

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMail, FiTrash2, FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

interface WaitlistUser {
  id: number;
  email: string;
  location: string;
  userType: string;
  useCase: string;
  platform: string;
}

interface WaitlistTableProps {
  users: WaitlistUser[];
  onDelete: (id: number) => void;
  onDeleteSelected: (ids: number[]) => void;
  onSend: (id: number) => void;
  onView: (id: number) => void;
}

const WaitlistTable: React.FC<WaitlistTableProps> = ({
  users,
  onDelete,
  onDeleteSelected,
  onSend,
  onView,
}) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const [sort, setSort] = useState("Newest");

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selected.length === users.length) {
      setSelected([]);
    } else {
      setSelected(users.map((u) => u.id));
    }
  };

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
          <button className=" flex items-center gap-2 bg-black/80  text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40">
           
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
                  checked={selected.length === users.length}
                  onChange={toggleAll}
                />
              </th>
              <th className="p-3">#</th>
              <th className="p-3">Email</th>
              <th className="p-3">Location</th>
              <th className="p-3">User Type</th>
              <th className="p-3">Use Case</th>
              <th className="p-3">Preferred Platform</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr
                key={u.id}
                className="border-b hover:bg-gray-50 text-gray-800"
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(u.id)}
                    onChange={() => toggleSelect(u.id)}
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
                <td className="p-3">{u.location}</td>
                <td className="p-3">{u.userType}</td>
                <td className="p-3">{u.useCase}</td>
                <td className="p-3">{u.platform}</td>
                <td className="p-3 relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === u.id ? null : u.id)}
                    className="p-2 rounded-full hover:bg-gray-200"
                  >
                    <BsThreeDotsVertical />
                  </button>

                  {openMenu === u.id && (
                    <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg z-10">
                      <button
                        onClick={() => {
                          onView(u.id);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
                      >
                        <FiEye /> View
                      </button>
                      <button
                        onClick={() => {
                          onSend(u.id);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
                      >
                        <FiMail /> Send Mail
                      </button>
                      <button
                        onClick={() => {
                          onDelete(u.id);
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaitlistTable;
