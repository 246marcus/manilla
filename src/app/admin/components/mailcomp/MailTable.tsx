"use client";

import { useState } from "react";
import { MdAddBox, MdDeleteOutline } from "react-icons/md";

import { FiMail, FiEdit2, FiTrash2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";


interface Mail {
  _id: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  type: string;
  status: string;
  sentAt: string;
  createdAt: string;
}

interface MailTableProps {
  mails: Mail[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onSend: (id: string) => void;
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
  const [activeTab, setActiveTab] = useState<"sent" | "draft">("sent");
  const [sort, setSort] = useState("Date");
  const filteredMails = mails.filter((m) => m.status === activeTab);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="bg-black/5">
      {/* === Header === */}{" "}
      <div className="flex justify-between items-center mb-3 bg-white/50 pb-2 px-4">
        <div className="pt-3 pb-1">
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
              activeTab === "sent"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("sent")}
          >
            Sent Mails
          </button>
          <button
            className={`pb-1 px-1 ${
              activeTab === "draft"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("draft")}
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
      <div className="  shadow  overflow-auto min-h-[320px] h-[350px]">
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
            {filteredMails.map((mail, index) => (
              <tr
                key={mail._id}
                className="border-b border-black/8 hover:bg-gray-50 text-nowrap"
              >
                <td className="p-2 py-3">{index + 1}</td>
                <td className="px-3 py-3">{new Date(mail.createdAt).toLocaleDateString()}</td>
                <td className="px-3 py-3">{mail.to}</td>
                <td className="px-3 py-3">{mail.type}</td>
                <td className="px-3 py-3 max-w-xs truncate" title={mail.content}>{mail.subject}</td>
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
                      setOpenMenu(openMenu === mail._id ? null : mail._id)
                    }
                  >
                    <BsThreeDotsVertical className="text-lg" />
                  </button>

                  {/* Dropdown menu */}
                  {openMenu === mail._id && (
                    <div className="absolute right-6 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10">
                      {mail.status === "draft" && (
                        <button
                          onClick={() => {
                            onSend(mail._id);
                            setOpenMenu(null);
                          }}
                          className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          <FiMail /> Send Mail
                        </button>
                      )}
                      <button
                        onClick={() => {
                          onEdit(mail._id);
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                      >
                        <FiEdit2 /> Edit
                      </button>
                      <button
                        onClick={() => {
                          onDelete(mail._id);
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
