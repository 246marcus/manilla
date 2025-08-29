"use client";

import { useState } from "react";
import MailTable from "./MailTable";
import CreateMailForm from "./CreateMailForm";
import EditMailForm from "./EditMailForm";
import DeleteMailModal from "./DeleteMailModal";
import Topbar from "../Topbar";
import SuccessModal from "../blogcomp/SuccessModal";

export interface Mail {
  id: number;
  date: string;
  receiver: string;
  subject: string;
  category: string;
  status: "Draft" | "Sent";
}

const MailManagementPage = () => {
  const [mails, setMails] = useState<Mail[]>([
    {
      id: 1,
      date: "2025-08-25",
      receiver: "john@example.com",
      subject: "Welcome!",
      category: "Promotional",
      status: "Draft",
    },
    {
      id: 2,
      date: "2025-08-24",
      receiver: "sarah@example.com",
      subject: "Your Invoice",
      category: "Transactional",
      status: "Sent",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<number | null>(null);
  const [editMail, setEditMail] = useState<Mail | null>(null);

  const [showCreateSuccess, setShowCreateSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  // === CREATE ===
  const handleCreate = (mail: {
    receiver: string;
    subject: string;
    category: string;
  }) => {
    setMails((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        date: new Date().toISOString().split("T")[0],
        receiver: mail.receiver,
        subject: mail.subject,
        category: mail.category,
        status: "Draft",
      },
    ]);
    setShowForm(false);
     setShowCreateSuccess(true);
  };

  // === EDIT ===
  const handleEdit = (id: number) => {
    const mail = mails.find((m) => m.id === id);
    if (mail) setEditMail(mail);
  };

  const confirmEdit = (updated: Mail) => {
    setMails((prev) =>
      prev.map((m) => (m.id === updated.id ? { ...m, ...updated } : m))
    );
    setEditMail(null);
  };

  // === DELETE ===
  const handleDelete = (id: number) => {
    setDeleteTarget(id);
    setShowDeleteModal(true);
  };

  const handleDeleteAll = () => {
    setDeleteTarget(null);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (deleteTarget === null) {
      setMails([]);
    } else {
      setMails((prev) => prev.filter((m) => m.id !== deleteTarget));
    }
    setShowDeleteModal(false);
     setShowDeleteSuccess(true);
  };

  // === SEND ===
  const handleSend = (id: number) => {
    setMails((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "Sent" } : m))
    );
  };

  return (
    <div className="pe-4 flex-1 flex flex-col  bg-white/40 h-screen  overflow-y-auto">
      {/* Page Title */}
      
      {/* Header */}
      <Topbar
        title={"Mail Management"}
        subtitle={"All Blogs"}
        description={"View and manage all your mails."}
      />

      {/* Mail Table */}
      <MailTable
        mails={mails}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSend={handleSend}
        onCreate={() => setShowForm(true)}
        onDeleteAll={handleDeleteAll}
      />

      {/* Create Modal */}
      {showForm && (
        <CreateMailForm
          onClose={() => setShowForm(false)}
          onSubmit={handleCreate}
        />
      )}

      {/* Edit Modal */}
      {editMail && (
        <EditMailForm
          mail={editMail}
          onClose={() => setEditMail(null)}
          onSubmit={confirmEdit}
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteMailModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
          selectedCount={deleteTarget === null ? mails.length : 1}
        />
      )}


       {showCreateSuccess && (
          <SuccessModal
            title="Create Mail"
            subtitle="Interface for creating and editing mails."
            messageA="Mail created successfully"
            messageB="Your mail has been created successfully and it is been saved"
            buttons={[
              {
                label: "View Draft",
                onClick: () => setShowCreateSuccess(false),
              },
              {
                label: "Sent Directly",
                onClick: () => setShowCreateSuccess(false),
                primary: true,
              },
            ]}
          />
        )}


         {showDeleteSuccess && (
          <SuccessModal
            title="Delete Mail"
            subtitle="Please confirm whether you want to proceed with this action."
            messageA="Deleted Successfully"
            messageB="Mails have been successfully Deleted"
            buttons={[
              { label: "Back", onClick: () => setShowDeleteSuccess(false) },
              {
                label: "Done",
                onClick: () => setShowDeleteSuccess(false),
                primary: true,
              },
            ]}
          />
        )}


    </div>
  );
};

export default MailManagementPage;
