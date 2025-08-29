"use client";

interface DeleteMailModalProps {
  onConfirm: () => void;
  onClose: () => void;
  selectedCount: number;
}

const DeleteMailModal = ({ onConfirm, onClose, selectedCount }: DeleteMailModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] p-6 flex flex-col gap-6">
        <div className="text-start">
          <h2 className="text-lg font-semibold mb-2">Delete Mail</h2>
          <p className="text-sm text-black/60 pb-3 border-b border-dashed">
            Please confirm whether you want to proceed with this action.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-black/80">
          <p className="font-bold">
            {selectedCount > 1
              ? `Delete ${selectedCount} mails?`
              : "Delete this mail?"}
          </p>
          <p className="text-sm">
            {selectedCount > 1
              ? "Are you sure you want to delete all selected mails?"
              : "Are you sure you want to delete this mail?"}
          </p>
          <p className="text-xs text-red-500">
            Please note that this is an irreversible action.
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 border border-black/70 rounded-md cursor-pointer hover:bg-black/80 hover:text-white"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-black/80 text-white rounded-md cursor-pointer border border-black/70 hover:bg-transparent hover:text-black/80"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMailModal;
