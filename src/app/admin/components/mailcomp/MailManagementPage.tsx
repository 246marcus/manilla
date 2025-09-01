"use client";

import { useState, useEffect } from "react";
import MailTable from "./MailTable";
import CreateMailForm from "./CreateMailForm";
import EditMailForm from "./EditMailForm";
import DeleteMailModal from "./DeleteMailModal";
import Topbar from "../Topbar";
import SuccessModal from "../blogcomp/SuccessModal";

export interface Mail {
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

const MailManagementPage = () => {
  const [mails, setMails] = useState<Mail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [editMail, setEditMail] = useState<Mail | null>(null);

  const [showCreateSuccess, setShowCreateSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  // Fetch mails from API
  useEffect(() => {
    fetchMails();
  }, []);

  const fetchMails = async () => {
    try {
      const res = await fetch("/api/mail");
      const data = await res.json();
      
      if (res.ok) {
        setMails(data.mails);
      }
    } catch (error) {
      console.error("Failed to fetch mails:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // === CREATE ===
  const handleCreate = async (mail: {
    receiver: string;
    subject: string;
    category: string;
    body: string;
  }) => {
    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: mail.receiver,
          subject: mail.subject,
          content: mail.body,
          type: mail.category.toLowerCase(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        await fetchMails(); // Refresh the list
        setShowForm(false);
        setShowCreateSuccess(true);
      } else {
        alert(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email");
    }
  };

  // === EDIT ===
  const handleEdit = (id: string) => {
    const mail = mails.find((m) => m._id === id);
    if (mail) setEditMail(mail);
  };

  const confirmEdit = (updated: Mail) => {
    setMails((prev) =>
      prev.map((m) => (m._id === updated._id ? { ...m, ...updated } : m))
    );
    setEditMail(null);
  };

  // === DELETE ===
  const handleDelete = (id: string) => {
    setDeleteTarget(id);
    setShowDeleteModal(true);
  };

  const handleDeleteAll = () => {
    setDeleteTarget(null);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    try {
      if (deleteTarget === null) {
        // Delete all mails
        const deletePromises = mails.map(mail => 
          fetch(`/api/mail/${mail._id}`, { method: "DELETE" })
        );
        await Promise.all(deletePromises);
        setMails([]);
      } else {
        // Delete single mail
        const res = await fetch(`/api/mail/${deleteTarget}`, { method: "DELETE" });
        if (res.ok) {
          setMails((prev) => prev.filter((m) => m._id !== deleteTarget));
        }
      }
      setShowDeleteModal(false);
      setShowDeleteSuccess(true);
    } catch (error) {
      console.error("Failed to delete mail(s):", error);
      alert("Failed to delete mail(s)");
    }
  }; 



/* const confirmDelete = async () => {
  try {
    if (deleteTarget === null) {
      // Only delete mails in the active tab
      const mailsToDelete = mails.filter((mail) => mail.status === activeTab.toLowerCase());

      const deleteResults = await Promise.all(
        mailsToDelete.map(async (mail) => {
          const res = await fetch(`/api/mail/${mail._id}`, { method: "DELETE" });
          return res.ok ? mail._id : null;
        })
      );

      const successfullyDeletedIds = deleteResults.filter(
        (id): id is string => id !== null
      );

      // Remove only the successfully deleted ones from state
      setMails((prev) => prev.filter((m) => !successfullyDeletedIds.includes(m._id)));
    } else {
      // Delete single mail
      const res = await fetch(`/api/mail/${deleteTarget}`, { method: "DELETE" });
      if (res.ok) {
        setMails((prev) => prev.filter((m) => m._id !== deleteTarget));
      }
    }

    setShowDeleteModal(false);
    setShowDeleteSuccess(true);
  } catch (error) {
    console.error("Failed to delete mail(s):", error);
    alert("Failed to delete mail(s)");
  }
}; */




  // === SEND ===
  const handleSend = (id: string) => {
    // Mails are sent immediately when created, so this is just for UI
    console.log("Mail already sent:", id);
  };


 


  return (
    <div className="pe-4 flex-1 flex flex-col  bg-white/40 h-screen  overflow-y-auto">
      {/* Page Title */}
      
      {/* Header */}
      <Topbar
        title={"Mail Management"}
        subtitle={"All Mails"}
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
