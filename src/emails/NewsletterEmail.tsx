import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Img,
  Hr,
  Link,
  Preview,
} from '@react-email/components';

interface NewsletterEmailProps {
  subject: string;
  content: string;
  bannerUrl?: string;
}

export const NewsletterEmail: React.FC<NewsletterEmailProps> = ({
  subject,
  content,
  bannerUrl,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Banner Image */}
          {bannerUrl && (
            <Section style={bannerSection}>
              <Img
                src={bannerUrl}
                alt="Newsletter Banner"
                style={bannerImage}
              />
            </Section>
          )}

          {/* Content Section */}
          <Section style={contentSection}>
            <Heading style={heading}>{subject}</Heading>
            
            <div 
              style={contentStyle}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              Best regards,<br />
              The Manilla Technologies Team
            </Text>
            
            <Text style={footerLinks}>
              <Link href="https://manillatechnologies.com" style={link}>
                Website
              </Link>
              {' • '}
              <Link href="https://linkedin.com/company/manilla-technologies" style={link}>
                LinkedIn
              </Link>
              {' • '}
              <Link href="https://twitter.com/manillatech" style={link}>
                Twitter
              </Link>
              {' • '}
              <Link href="mailto:contact@manillatechnologies.com" style={link}>
                Contact
              </Link>
            </Text>
            
            <Text style={copyright}>
              © 2024 Manilla Technologies. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: 0,
  padding: 0,
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
  borderRadius: '0',
  overflow: 'hidden',
  boxShadow: 'none',
};

const bannerSection = {
  padding: '0',
  margin: '0',
};

const bannerImage = {
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '0',
};

const contentSection = {
  padding: '20px 15px',
  backgroundColor: '#ffffff',
};

const heading = {
  color: '#1a202c',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '0 0 15px 0',
  textAlign: 'left' as const,
};

const contentStyle = {
  color: '#4a5568',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
  // Additional styles for better content rendering
  '& h1': {
    color: '#1a202c',
    fontSize: '22px',
    fontWeight: '600',
    margin: '25px 0 15px 0',
    lineHeight: '1.3',
  },
  '& h2': {
    color: '#1a202c',
    fontSize: '18px',
    fontWeight: '600',
    margin: '20px 0 12px 0',
    lineHeight: '1.3',
  },
  '& h3': {
    color: '#1a202c',
    fontSize: '16px',
    fontWeight: '600',
    margin: '18px 0 10px 0',
    lineHeight: '1.3',
  },
  '& p': {
    margin: '0 0 16px 0',
    color: '#4a5568',
    fontSize: '16px',
    lineHeight: '1.6',
  },
  '& ul, & ol': {
    margin: '0 0 16px 0',
    paddingLeft: '24px',
    color: '#4a5568',
  },
  '& li': {
    marginBottom: '8px',
    fontSize: '16px',
    lineHeight: '1.5',
  },
  '& a': {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500',
  },
  '& strong': {
    fontWeight: '600',
    color: '#1a202c',
  },
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '0',
};

const footer = {
  padding: '20px 15px',
  backgroundColor: '#f8fafc',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#718096',
  fontSize: '14px',
  margin: '0 0 15px 0',
  lineHeight: '1.5',
};

const footerLinks = {
  color: '#718096',
  fontSize: '14px',
  margin: '0 0 15px 0',
  lineHeight: '1.5',
};

const link = {
  color: '#667eea',
  textDecoration: 'none',
  fontWeight: '500',
};

const copyright = {
  color: '#a0aec0',
  fontSize: '12px',
  margin: '0',
  lineHeight: '1.4',
};

export default NewsletterEmail;
