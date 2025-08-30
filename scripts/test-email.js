const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

async function testEmail() {
  try {
    console.log('Testing email functionality...');
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    console.log('GMAIL_PASSWORD:', process.env.GMAIL_PASSWORD ? 'Set' : 'Not set');
    
    // Test the email service
    const { sendEmail } = await import('../src/app/lib/email.ts');
    
    const result = await sendEmail(
      'test@example.com',
      'Test Email',
      '<h1>Test Email</h1><p>This is a test email from Manilla Technologies.</p>',
      'Test Email\n\nThis is a test email from Manilla Technologies.'
    );
    
    console.log('Email test result:', result);
    
    process.exit(0);
  } catch (error) {
    console.error('Email test error:', error);
    process.exit(1);
  }
}

testEmail();
