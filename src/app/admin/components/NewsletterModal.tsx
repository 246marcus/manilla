"use client";

import { useState, useRef } from "react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (subject: string, content: string, selectedUserIds: string[]) => void;
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (subject.trim() && content.trim()) {
      const selectedIds = selectedUsers.map(user => user._id);
      
      let finalContent = content;
      let bannerUrl = "";
      
      // Upload banner image to Cloudinary
      if (bannerImage) {
        try {
          const formData = new FormData();
          formData.append('file', bannerImage);
          formData.append('upload_preset', 'manilla_uploads');
          
          const response = await fetch('https://api.cloudinary.com/v1_1/demo/image/upload', {
            method: 'POST',
            body: formData,
          });
          
          if (response.ok) {
            const result = await response.json();
            bannerUrl = result.secure_url;
          }
        } catch (error) {
          console.error('Banner upload failed:', error);
        }
      }
      
      finalContent = generateBeautifulEmailHTML(subject, content, bannerUrl);
      
      onSubmit(subject.trim(), finalContent, selectedIds);
      setSubject("");
      setContent("");
      setBannerImage(null);
      setBannerPreview("");
    }
  };

  const generateBeautifulEmailHTML = (subject: string, content: string, bannerUrl: string) => {
    const logoHTML = `
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="/images/ManillaTechnologies1.png" alt="Manilla Technologies" style="max-width: 180px; height: auto;" />
      </div>
    `;

    const bannerHTML = bannerUrl ? `
      <div style="text-align: center; margin-bottom: 40px;">
        <img src="${bannerUrl}" alt="Newsletter Banner" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>
    ` : '';
    
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #1a202c;
            background-color: #f7fafc;
          }
          .email-wrapper {
            background-color: #f7fafc;
            padding: 20px 0;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .email-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.025em;
          }
          .email-content {
            padding: 40px 30px;
            background: #ffffff;
          }
          .email-content h1 {
            color: #2d3748;
            font-size: 22px;
            font-weight: 600;
            margin: 0 0 20px 0;
            line-height: 1.3;
          }
          .email-content h2 {
            color: #2d3748;
            font-size: 18px;
            font-weight: 600;
            margin: 25px 0 15px 0;
            line-height: 1.3;
          }
          .email-content h3 {
            color: #2d3748;
            font-size: 16px;
            font-weight: 600;
            margin: 20px 0 12px 0;
            line-height: 1.3;
          }
          .email-content p {
            margin: 0 0 16px 0;
            color: #4a5568;
            font-size: 16px;
            line-height: 1.6;
          }
          .email-content ul, .email-content ol {
            margin: 0 0 16px 0;
            padding-left: 24px;
            color: #4a5568;
          }
          .email-content li {
            margin-bottom: 8px;
            font-size: 16px;
            line-height: 1.5;
          }
          .email-content a {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
          }
          .email-content a:hover {
            text-decoration: underline;
          }
          .email-content strong {
            font-weight: 600;
            color: #2d3748;
          }
          .email-footer {
            background: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
          }
          .email-footer p {
            color: #718096;
            font-size: 14px;
            margin: 0 0 15px 0;
          }
          .social-links {
            margin-top: 20px;
          }
          .social-links a {
            display: inline-block;
            margin: 0 8px;
            color: #667eea;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
          }
          .social-links a:hover {
            text-decoration: underline;
          }
          .divider {
            margin: 0 8px;
            color: #cbd5e0;
          }
          @media only screen and (max-width: 600px) {
            .email-container {
              margin: 0 10px;
              border-radius: 8px;
            }
            .email-header, .email-content, .email-footer {
              padding: 30px 20px;
            }
            .email-header h1 {
              font-size: 20px;
            }
            .email-content h1 {
              font-size: 20px;
            }
            .email-content h2 {
              font-size: 16px;
            }
            .email-content h3 {
              font-size: 15px;
            }
            .email-content p, .email-content li {
              font-size: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-container">
            <div class="email-header">
              ${logoHTML}
              <h1>${subject}</h1>
            </div>
            
            ${bannerHTML}
            
            <div class="email-content">
              ${content}
            </div>
            
            <div class="email-footer">
              <p>© 2024 Manilla Technologies. All rights reserved.</p>
              <div class="social-links">
                <a href="https://manillatechnologies.com">Website</a>
                <span class="divider">•</span>
                <a href="https://linkedin.com/company/manilla-technologies">LinkedIn</a>
                <span class="divider">•</span>
                <a href="https://twitter.com/manillatech">Twitter</a>
                <span class="divider">•</span>
                <a href="mailto:contact@manillatechnologies.com">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
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

  // Simple formatting functions
  const addBold = () => {
    const textarea = document.getElementById('newsletter-content') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newText = content.substring(0, start) + `<strong>${selectedText}</strong>` + content.substring(end);
    setContent(newText);
  };

  const addLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      const textarea = document.getElementById('newsletter-content') as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = content.substring(start, end);
      const newText = content.substring(0, start) + `<a href="${url}">${selectedText}</a>` + content.substring(end);
      setContent(newText);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl h-[90vh] p-6 flex flex-col">
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
          </div>

          {/* Simple Content Editor */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm text-black/70">Content</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={addBold}
                  className="px-3 py-1 text-xs border rounded hover:bg-gray-100 font-bold"
                  title="Make selected text bold"
                >
                  Bold
                </button>
                <button
                  type="button"
                  onClick={addLink}
                  className="px-3 py-1 text-xs border rounded hover:bg-gray-100"
                  title="Add link to selected text"
                >
                  Link
                </button>
              </div>
            </div>
            <textarea
              id="newsletter-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 p-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write your newsletter content here..."
              style={{ 
                fontFamily: 'Arial, sans-serif', 
                lineHeight: '1.6',
                minHeight: '300px'
              }}
            />
            <p className="text-xs text-gray-500 mt-1">
              Use the Bold and Link buttons above to format your text.
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
