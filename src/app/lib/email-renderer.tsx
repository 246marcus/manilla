import { render } from '@react-email/render';
import { NewsletterEmail } from '../../emails/NewsletterEmail';

export const renderNewsletterEmail = async (
  subject: string,
  content: string,
  bannerUrl?: string
): Promise<string> => {
  const emailComponent = (
    <NewsletterEmail
      subject={subject}
      content={content}
      bannerUrl={bannerUrl}
    />
  );

  return await render(emailComponent);
};
