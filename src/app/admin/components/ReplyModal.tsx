"use client";

import { useState, useRef, useCallback } from "react";
import NewsletterEditor from "./NewsletterEditor";

interface ReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    subject: string,
    content: string,
    selectedUserIds: string[],
    bannerUrl?: string
  ) => void;
  title: string;
  loading?: boolean;
  totalUsers?: number;
  /*  selectedUsers?: Array<{ _id: string; email: string }> | { _id: string; email: string }; */
  selectedUsers?:
    | Array<{ _id: string; email: string }>
    | { _id: string; email: string };
}

const ReplyModal: React.FC<ReplyModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  loading = false,
  totalUsers = 0,
  selectedUsers,
}) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<string>("");

  const bannerInputRef = useRef<HTMLInputElement>(null);

  // Normalize selectedUsers to always be an array
  /* const safeSelectedUsers = Array.isArray(selectedUsers)
    ? selectedUsers
    : selectedUsers
    ? [selectedUsers]
    : []; */

const safeSelectedUsers = Array.isArray(selectedUsers)
  ? selectedUsers
  : selectedUsers
  ? [selectedUsers]
  : [];

  const handleEditorChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  const handleBannerSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("Image file is too large. Please use an image under 10MB.");
        return;
      }
      if (!file.type.startsWith("image/")) {
        alert("Invalid file type. Please upload an image.");
        return;
      }

      setBannerImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeBanner = () => {
    setBannerImage(null);
    setBannerPreview("");
    if (bannerInputRef.current) bannerInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !content.trim() || safeSelectedUsers.length === 0)
      return;

    const selectedIds = safeSelectedUsers.map((u) => u._id);
    let bannerUrl = "";

    if (bannerImage) {
      try {
        setUploadStatus("Uploading banner image...");

        const formData = new FormData();
        formData.append("file", bannerImage);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_PRESET ?? "manilla_uploads"
        );

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        if (!cloudName || cloudName === "demo") {
          setUploadStatus("Cloudinary not configured ❌");
          alert(
            "Image upload is not configured. Please contact your administrator."
          );
          return;
        }

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: "POST", body: formData }
        );

        if (response.ok) {
          const result = await response.json();
          bannerUrl = result.secure_url;
          setUploadStatus("Banner uploaded successfully ✅");
        } else {
          let errorMessage = "Upload failed";
          try {
            const errorData = await response.json();
            errorMessage =
              errorData.message ||
              errorData.error?.message ||
              response.statusText;
          } catch {}
          setUploadStatus(`Upload failed: ${errorMessage}`);
          alert(`Image upload failed: ${errorMessage}`);
          return;
        }
      } catch (err) {
        console.error("Upload error:", err);
        setUploadStatus("Upload failed ❌");
        alert("Failed to upload image. Please try again or contact support.");
        return;
      }
    }

    onSubmit(subject.trim(), content, selectedIds, bannerUrl);

    // Reset form
    setSubject("");
    setContent("");
    setBannerImage(null);
    setBannerPreview("");
    setUploadStatus("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl h-[85vh] p-6 pb-32 flex flex-col relative overflow-y-scroll">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="lg:col-span-2">
              <label className="block text-sm text-black/70 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="Enter reply subject..."
              />
            </div>
            <div className="text-sm text-gray-600 flex items-center">
              Replying to {safeSelectedUsers.length} of {totalUsers} users
            </div>
          </div>

          {/* Banner upload */}
          <div className="mb-4">
            <label className="block text-sm text-black/70 mb-1">
              Banner Image (Optional)
            </label>
            <div className="flex items-center gap-3">
              <input
                ref={bannerInputRef}
                type="file"
                accept="image/*"
                onChange={handleBannerSelect}
                className="text-sm"
              />
              {bannerPreview && (
                <div className="flex items-center gap-2">
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="w-24 h-16 object-cover rounded border"
                  />
                  <button
                    type="button"
                    onClick={removeBanner}
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Recommended: 600x200px for best results
            </p>
            {uploadStatus && (
              <div
                className={`mt-2 p-2 rounded text-sm ${
                  uploadStatus.includes("✅")
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : uploadStatus.includes("failed") ||
                        uploadStatus.includes("❌")
                      ? "bg-red-100 text-red-700 border border-red-300"
                      : "bg-blue-100 text-blue-700 border border-blue-300"
                }`}
              >
                {uploadStatus}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <label className="block text-sm text-black/70 mb-2">
              Reply Content
            </label>
            <NewsletterEditor
              value={content}
              onChange={handleEditorChange}
              placeholder="Write your reply here..."
            />
            <p className="text-xs text-gray-500 mt-2">
              Use the toolbar above to format your reply. All formatting will be
              preserved.
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-sm"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm disabled:opacity-50"
              disabled={
                loading ||
                !subject.trim() ||
                !content.trim() ||
                safeSelectedUsers.length === 0 ||
                uploadStatus.includes("Uploading")
              }
            >
              {/*  {loading
                ? "Sending..."
                : `Send to ${safeSelectedUsers.length} Users`} */}
              {loading
                ? "Sending..."
                : `Send to ${safeSelectedUsers.length} User${safeSelectedUsers.length !== 1 ? "s" : ""}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReplyModal;
