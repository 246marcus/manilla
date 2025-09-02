"use client";

import { useState, useRef, useCallback } from "react";
import NewsletterEditor from "./NewsletterEditor";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, content: string, selectedUserIds: string[], bannerUrl?: string) => void;
  loading?: boolean;
  totalUsers?: number;
  selectedUsers?: Array<{ _id: string; email: string }>;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
  totalUsers = 0,
  selectedUsers = [],
}) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const bannerInputRef = useRef<HTMLInputElement>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (subject.trim() && content.trim()) {
      const selectedIds = selectedUsers.map(user => user._id);
      
      let bannerUrl = "";
      
      // Upload banner image to Cloudinary
      if (bannerImage) {
        try {
          setUploadStatus("Uploading banner image...");
          console.log('Starting banner upload for file:', bannerImage.name, bannerImage.size, bannerImage.type);
          
          const formData = new FormData();
          formData.append('file', bannerImage);
          formData.append('upload_preset', 'manilla_uploads');
          
          // Use the proper Cloudinary account from environment variables
          const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
          console.log('Cloudinary cloud name:', cloudName);
          
          if (!cloudName || cloudName === 'demo') {
            setUploadStatus("Cloudinary not configured. Skipping image upload.");
            console.warn('Cloudinary cloud name not configured. Please set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');
            alert('Image upload is not configured. Please contact your administrator.');
            return;
          }

          console.log('Uploading to Cloudinary:', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);
          
          const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData,
          });
          
          console.log('Upload response status:', response.status);
          
          if (response.ok) {
            const result = await response.json();
            bannerUrl = result.secure_url;
            setUploadStatus("Banner uploaded successfully! ✅");
            console.log('Banner uploaded successfully:', bannerUrl);
          } else {
            let errorMessage = 'Unknown error';
            try {
              const errorData = await response.json();
              console.error('Banner upload failed:', response.status, errorData);
              console.error('Full error response:', errorData);
              errorMessage = errorData.message || errorData.error?.message || response.statusText;
            } catch (parseError) {
              console.error('Could not parse error response:', parseError);
              errorMessage = response.statusText;
            }
            
            setUploadStatus(`Upload failed: ${errorMessage}`);
            
            if (errorMessage.includes('Upload preset not found') || errorMessage.includes('preset')) {
              alert('Upload preset "manilla_uploads" not found. Please create it in your Cloudinary account.');
            } else if (errorMessage.includes('Invalid image file') || errorMessage.includes('file')) {
              alert('Invalid image file. Please try a different image.');
            } else if (errorMessage.includes('File size too large') || errorMessage.includes('size')) {
              alert('Image file is too large. Please use an image under 10MB.');
            } else {
              alert(`Upload failed: ${errorMessage}\n\nPlease check:\n1. Upload preset exists\n2. Image file is valid\n3. File size is under 10MB`);
            }
            return;
          }
        } catch (error) {
          console.error('Banner upload failed:', error);
          setUploadStatus("Upload failed. Continuing without banner.");
          alert('Failed to upload image. Please try again or contact support.');
          return;
        }
      }
      
      // Pass the banner URL separately to the API
      onSubmit(subject.trim(), content, selectedIds, bannerUrl);
      setSubject("");
      setContent("");
      setBannerImage(null);
      setBannerPreview("");
      setUploadStatus(""); // Clear status on successful submission
    }
  };

  const handleBannerSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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
    if (bannerInputRef.current) {
      bannerInputRef.current.value = "";
    }
  };



  const handleEditorChange = useCallback((value: string) => {
    setContent(value);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl h-[90vh] p-6 flex flex-col relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Beautiful Newsletter</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="lg:col-span-2">
              <label className="block text-sm text-black/70 mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="Enter newsletter subject..."
              />
            </div>
            <div className="text-sm text-gray-600 flex items-center">
              Sending to {selectedUsers.length} of {totalUsers} subscribers
            </div>
          </div>

          {/* Banner Image Upload */}
          <div className="mb-4">
            <label className="block text-sm text-black/70 mb-1">Banner Image (Optional)</label>
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
              <div className={`mt-2 p-2 rounded text-sm ${
                uploadStatus.includes('✅') 
                  ? 'bg-green-100 text-green-700 border border-green-300' 
                  : uploadStatus.includes('failed') 
                  ? 'bg-red-100 text-red-700 border border-red-300'
                  : 'bg-blue-100 text-blue-700 border border-blue-300'
              }`}>
                {uploadStatus}
              </div>
            )}
          </div>

          {/* Rich Text Editor */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm text-black/70">Content</label>
            </div>
            
            {/* React Quill Editor */}
            <NewsletterEditor
              value={content}
              onChange={handleEditorChange}
              placeholder="Write your newsletter content here..."
            />
            
            <p className="text-xs text-gray-500 mt-2">
              Use the toolbar above to format your text. All formatting will be preserved in your newsletter.
            </p>
          </div>

          <div className="flex justify-end gap-3 mt-4">
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
              disabled={loading || !subject.trim() || !content.trim() || selectedUsers.length === 0}
            >
              {loading ? "Sending..." : `Send to ${selectedUsers.length} Subscribers`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
