"use client";

import { useState } from "react";
import { MdAddBox, MdDeleteOutline } from "react-icons/md";

import { FiMail, FiEdit2, FiTrash2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";


interface Mail {
  id: number;
  date: string;
  receiver: string;
  subject: string;
  category: string;
  status: "Sent" | "Draft";
}

interface MailTableProps {
  mails: Mail[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  onSend: (id: number) => void;
  onCreate: () => void;
  onDeleteAll: () => void;
}

const MailTable: React.FC<MailTableProps> = ({
  mails,
  onDelete,
  onEdit,
  onSend,
  onCreate,
  onDeleteAll,
}) => {
  const [activeTab, setActiveTab] = useState<"Sent" | "Draft">("Sent");
  const [sort, setSort] = useState("Date");
  const filteredMails = mails.filter((m) => m.status === activeTab);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="bg-black/5">
      {/* === Header === */}{" "}
      <div className="flex justify-between items-center mb-3 bg-white/50 pb-2 px-4">
        <div>
          <h1 className=" font-semibold text-black/80">
            Simply create a new mails or manage existing mails
          </h1>
          <p className="text-sm text-black/50">
            Create, view and manage all mails.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 px-4">
        {/* Tabs */}
        <div className="flex gap-6 text-sm px-3 border-b border-black/10 mb-4">
          <button
            className={`pb-1 px-1 ${
              activeTab === "Sent"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("Sent")}
          >
            Sent Mails
          </button>
          <button
            className={`pb-1 px-1 ${
              activeTab === "Draft"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("Draft")}
          >
            Draft
          </button>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="  border-black/10 rounded-md p-2 text-sm font-semibold "
          >
            <option value="Date">By Date</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
          <button
            onClick={onDeleteAll}
            className="flex items-center gap-1 hover:text-white font-semibold border-black/40  border  px-4 py-2 rounded-md hover:bg-black/80"
          >
            <MdDeleteOutline size={22} />
            Delete All
          </button>
          <button
            onClick={onCreate}
            className=" flex items-center gap-1 bg-black/80  text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40"
          >
            <MdAddBox size={20} />
            Create Mail
          </button>
        </div>
      </div>

      {/* === Table === */}
      <div className="  shadow  overflow-x-auto min-h-[320px]">
        <table className="w-full border-collapse text-sm py-2 px-3 rounded-xl ">
          <thead className="text-black/80">
            <tr className="text-left bg-black/10 text-nowrap">
              <th className="p-2">#</th>
              <th className="p-2 px-3">Date</th>
              <th className="p-2 px-3">Receiver</th>
              <th className="p-2 px-3">Receiver Category</th>{" "}
              <th className="p-2 px-3">Mail body</th>
              <th className="p-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMails.map((mail) => (
              <tr
                key={mail.id}
                className="border-b border-black/8 hover:bg-gray-50 text-nowrap"
              >
                <td className="p-2 py-3">{mail.id}</td>
                <td className="px-3 py-3">{mail.date}</td>
                <td className="px-3 py-3">{mail.receiver}</td>
                <td className="px-3 py-3">{mail.category}</td>{" "}
                <td className="px-3 py-3">{mail.subject}</td>
                {/* <td className="px-3 py-3 flex gap-2">
                  <button
                    className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => onEdit(mail.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => onDelete(mail.id)}
                  >
                    Delete
                  </button>
                  {mail.status === "Draft" && (
                    <button
                      className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => onSend(mail.id)}
                    >
                      Send
                    </button>
                  )}
                </td> */}
                <td className="px-3 py-3 relative">
                  {/* Three dots button */}
                  <button
                    className="p-2 hover:bg-gray-100 rounded-full"
                    onClick={() =>
                      setOpenMenu(openMenu === mail.id ? null : mail.id)
                    }
                  >
                    <BsThreeDotsVertical className="text-lg" />
                  </button>

                  {/* Dropdown menu */}
                  {openMenu === mail.id && (
                    <div className="absolute right-6 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10">
                      {mail.status === "Draft" && (
                        <button
                          onClick={() => {
                            onSend(mail.id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          <FiMail /> Send Mail
                        </button>
                      )}
                      <button
                        onClick={() => {
                          onEdit(mail.id);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                      >
                        <FiEdit2 /> Edit
                      </button>
                      <button
                        onClick={() => {
                          onDelete(mail.id);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-600 hover:bg-gray-100"
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

export default MailTable;
