// Create transporter for Gmail
const createTransporter = async () => {
  const nodemailer = await import('nodemailer');
  return nodemailer.default.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD, // Use app password for Gmail
    },
  });
};

// Email templates
export const emailTemplates = {
  waitlistReply: (firstName: string, lastName: string, replyContent: string) => ({
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
    `
  }),
  
  contactReply: (firstName: string, lastName: string, replyContent: string) => ({
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
    `
  }),
  
  newsletter: (subject: string, content: string) => ({
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #099ca4 0%, #0d6efd 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Manilla Technologies</h1>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0;">${subject}</h2>
            <div style="color: #666; line-height: 1.6; white-space: pre-wrap;">${content}</div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 14px; margin: 0;">
              Best regards,<br>
              The Manilla Technologies Team
            </p>
          </div>
        </div>
      </div>
    `,
    text: content
  })
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
      text: textContent || htmlContent.replace(/<[^>]*>/g, ''),
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error: any) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

// Send reply to waitlist/contact
export const sendReply = async (
  to: string,
  firstName: string,
  lastName: string,
  replyContent: string,
  type: 'waitlist' | 'contact'
) => {
  const template = type === 'waitlist' 
    ? emailTemplates.waitlistReply(firstName, lastName, replyContent)
    : emailTemplates.contactReply(firstName, lastName, replyContent);

  return await sendEmail(to, template.subject, template.html, template.text);
};

// Send newsletter
export const sendNewsletter = async (
  to: string,
  subject: string,
  content: string
) => {
  const template = emailTemplates.newsletter(subject, content);
  return await sendEmail(to, template.subject, template.html, template.text);
};
