import { renderNewsletterEmail } from './email-renderer';

// Convert markdown content to HTML for newsletter emails
const convertMarkdownToHtml = (markdown: string): string => {
  if (!markdown) return '';
  
  return markdown
    // Headings
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // Underline
    .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #667eea; text-decoration: none;">$1</a>')
    
    // Images
    .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 4px; margin: 8px 0;" />')
    
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li>$2</li>')
    
    // Wrap lists in ul/ol tags
    .replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>')
    
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|o]|<li>)(.*$)/gim, '<p>$1</p>')
    
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[h|u|o]|<li>)/g, '$1')
    .replace(/(<\/[h|u|o]|<\/li>)<\/p>/g, '$1')
    
    // Clean up extra whitespace
    .trim();
};

// Create transporter for Gmail (uses STARTTLS on port 587)
const createTransporter = async () => {
  const nodemailer = await import("nodemailer");
  return nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 587, // ✅ STARTTLS
    secure: false, // must be false for 587
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD, // Gmail App Password
    },
  });
};

// Email templates
export const emailTemplates = {
  waitlistReply: (
    firstName: string,
    lastName: string,
    replyContent: string
  ) => ({
    subject: `Response to your waitlist request - Manilla Technologies`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #099ca4 0%, #0d6efd 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Manilla Technologies</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333; margin-bottom: 20px;">Hello ${firstName} ${lastName},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Thank you for joining our waitlist. We've received your request and would like to provide you with a response.
          </p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #099ca4; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Our Response:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${replyContent}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            If you have any questions or need further assistance, please don't hesitate to reach out to us.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 14px; margin: 0;">
              Best regards,<br>
              The Manilla Technologies Team
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
      Hello ${firstName} ${lastName},
      
      Thank you for joining our waitlist. We've received your request and would like to provide you with a response.
      
      Our Response:
      ${replyContent}
      
      If you have any questions or need further assistance, please don't hesitate to reach out to us.
      
      Best regards,
      The Manilla Technologies Team
    `,
  }),

  contactReply: (
    firstName: string,
    lastName: string,
    replyContent: string
  ) => ({
    subject: `Response to your contact request - Manilla Technologies`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #099ca4 0%, #0d6efd 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Manilla Technologies</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2 style="color: #333; margin-bottom: 20px;">Hello ${firstName} ${lastName},</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Thank you for contacting us. We've received your message and would like to provide you with a response.
          </p>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #099ca4; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Our Response:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${replyContent}</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            If you have any questions or need further assistance, please don't hesitate to reach out to us.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 14px; margin: 0;">
              Best regards,<br>
              The Manilla Technologies Team
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
      Hello ${firstName} ${lastName},
      
      Thank you for contacting us. We've received your message and would like to provide you with a response.
      
      Our Response:
      ${replyContent}
      
      If you have any questions or need further assistance, please don't hesitate to reach out to us.
      
      Best regards,
      The Manilla Technologies Team
    `,
  }),

  // ✅ Merged newsletter template
  newsletter: async (subject: string, content: string, bannerUrl?: string) => {
    const htmlContent = convertMarkdownToHtml(content);
    const html = await renderNewsletterEmail(subject, htmlContent, bannerUrl);
    return {
      subject: subject,
      html: html,
      text: content,
    };
  }
};

// Send email function
export const sendEmail = async (
  to: string,
  subject: string,
  htmlContent: string,
  textContent?: string
) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: to,
      subject: subject,
      html: htmlContent,
      text: textContent || htmlContent.replace(/<[^>]*>/g, ""),
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error: unknown) {
    console.error("Email sending error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return { success: false, error: errorMessage };
  }
};

// Send reply to waitlist/contact
export const sendReply = async (
  to: string,
  firstName: string,
  lastName: string,
  replyContent: string,
  type: "waitlist" | "contact"
) => {
  const template =
    type === "waitlist"
      ? emailTemplates.waitlistReply(firstName, lastName, replyContent)
      : emailTemplates.contactReply(firstName, lastName, replyContent);

  return await sendEmail(to, template.subject, template.html, template.text);
};

// Send newsletter
export const sendNewsletter = async (
  to: string,
  subject: string,
  content: string,
  bannerUrl?: string
) => {
  const template = await emailTemplates.newsletter(subject, content, bannerUrl);
  return await sendEmail(to, template.subject, template.html, template.text);
};
