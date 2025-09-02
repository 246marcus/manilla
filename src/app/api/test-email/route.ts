import { NextResponse } from "next/server";
import { renderNewsletterEmail } from "../../lib/email-renderer";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const subject = searchParams.get('subject') || 'Test Newsletter';
    const content = searchParams.get('content') || '<h2>Welcome to our newsletter!</h2><p>This is a test email with <strong>rich content</strong> and <a href="https://example.com">links</a>.</p><ul><li>Feature 1</li><li>Feature 2</li><li>Feature 3</li></ul>';
    const bannerUrl = searchParams.get('bannerUrl') || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=200&fit=crop';

    const html = await renderNewsletterEmail(subject, content, bannerUrl);

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { message: "Error generating test email" },
      { status: 500 }
    );
  }
}
