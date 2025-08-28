"use client";

interface DeleteModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onConfirm, onClose }) => (
  <div className="fixed inset-0 flex items-center  justify-center bg-black/85 z-50">
    <div className="bg-white rounded-lg shadow p-6 w-[600px]  text-center flex flex-col gap-10 translate-x-25">
      <div className="text-start">
        <h2 className="text-xl font-semibold mb-2">Delete Blog</h2>
        <p className="text-sm text-black/60 pb-4 border-b-2 border-dashed  mb-2">
          Please confirm whether you want to proceed with this action.
        </p>
      </div>

      <div className="flex flex-col text-black/70 gap-1">
        <p className="font-bold text-black/90">Delete all blogs?</p>
        <p className=" text0sm">Are you sure you want to delete all blogs??</p>
        <p className="text-xs">
          Please note that this is an irreversible action
        </p>
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={onConfirm}
          className=" px-4 py-2 border border-black/70 rounded-md  cursor-pointer hover:bg-black/80 hover:text-white"
        >
          Delete All
        </button>
        <button
          onClick={onClose}
          className="border bg-black/80 hover:bg-transparent text-white hover:text-black/80 border-black/70  py-2 rounded-md px-8 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default DeleteModal;
