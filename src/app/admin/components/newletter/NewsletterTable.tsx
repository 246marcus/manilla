"use client";

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

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
  onSendNewsletter?: () => void;
  onUserSelection?: (selectedIds: string[]) => void;
  isDeleting?: boolean;
}

const NewsletterTable: React.FC<NewsletterTableProps> = ({
  users,
  onDelete,
  onDeleteSelected,
  onSendNewsletter,
  onUserSelection,
  isDeleting = false,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [sort, setSort] = useState("Newest");

  const toggleSelect = (id: string) => {
    console.log('toggleSelect called with id:', id);
    console.log('Current selected:', selected);
    
    const newSelected = selected.includes(id) 
      ? selected.filter((s) => s !== id) 
      : [...selected, id];
    
    console.log('New selected:', newSelected);
    setSelected(newSelected);
    
    if (onUserSelection) {
      console.log('Calling onUserSelection with:', newSelected);
      onUserSelection(newSelected);
    } else {
      console.warn('onUserSelection is not defined');
    }
  };

  const toggleAll = () => {
    console.log('toggleAll called');
    console.log('Current selected length:', selected.length);
    console.log('Total users:', users.length);
    
    const newSelected = selected.length === users.length 
      ? [] 
      : users.map((u) => u._id);
    
    console.log('New selected after toggleAll:', newSelected);
    setSelected(newSelected);
    
    if (onUserSelection) {
      console.log('Calling onUserSelection with:', newSelected);
      onUserSelection(newSelected);
    } else {
      console.warn('onUserSelection is not defined');
    }
  };

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
            onClick={onSendNewsletter}
            disabled={selected.length === 0}
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 border border-blue-600 disabled:opacity-50"
          >
            Send Newsletter ({selected.length} selected)
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
              <th className="p-3">Subscribed Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
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
                <td className="p-3">{u.email}</td>
                <td className="p-3">{new Date(u.subscribedAt).toLocaleDateString()}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsletterTable;
