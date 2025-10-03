import { render } from '@react-email/render';
import { UnifiedEmail } from '../../emails/NewsletterEmail';

export const renderNewsletterEmail = async (
  subject: string,
  content: string,
  bannerUrl?: string
): Promise<string> => {
  const emailComponent = (
    <UnifiedEmail
      subject={subject}
      content={content}
      bannerUrl={bannerUrl}
      showSubject={true}
      type="newsletter"
    />
  );

  return await render(emailComponent);
};

export const renderWaitlistEmail = async (
  content: string,
  bannerUrl?: string
): Promise<string> => {
  const emailComponent = (
    <UnifiedEmail
      content={content}
      bannerUrl={bannerUrl}
      showSubject={false}
      type="waitlist"
    />
  );

  return await render(emailComponent);
};

export const renderContactEmail = async (
  content: string,
  bannerUrl?: string
): Promise<string> => {
  const emailComponent = (
    <UnifiedEmail
      content={content}
      bannerUrl={bannerUrl}
      showSubject={false}
      type="contact"
    />
  );

  return await render(emailComponent);
};

