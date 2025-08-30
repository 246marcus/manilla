const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Contact Schema - Updated to match the new structure
const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  telephone: { type: String, trim: true },
  companyName: { type: String, trim: true },
  companyAddress: { type: String, trim: true },
  requestContent: { type: String, required: true, trim: true },
  requestType: { type: String, enum: ["waitlist", "contact"], required: true },
  status: { type: String, enum: ["unread", "read", "replied"], default: "unread" },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);

const sampleContacts = [
  {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    telephone: "+1-555-0123",
    companyName: "Tech Solutions Inc",
    companyAddress: "123 Business St, New York, NY 10001",
    requestContent: "Hi, I'm interested in learning more about your services. Could you please provide more information about your pricing plans?",
    requestType: "contact",
    status: "unread"
  },
  {
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.j@example.com",
    telephone: "+1-555-0456",
    companyName: "Innovation Labs",
    companyAddress: "456 Tech Ave, San Francisco, CA 94102",
    requestContent: "Hello, I represent a tech company and would like to discuss potential partnership opportunities with your platform.",
    requestType: "contact",
    status: "read"
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    telephone: "+1-555-0789",
    companyName: "Digital Payments Co",
    companyAddress: "789 Finance Blvd, Chicago, IL 60601",
    requestContent: "I'm experiencing issues with the payment processing feature. Can you help me resolve this?",
    requestType: "contact",
    status: "replied"
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    telephone: "+1-555-0321",
    companyName: "Startup Ventures",
    companyAddress: "321 Innovation Dr, Austin, TX 73301",
    requestContent: "I would love to see a mobile app version of your platform. Is this in development?",
    requestType: "waitlist",
    status: "unread"
  },
  {
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@example.com",
    telephone: "+1-555-0654",
    companyName: "E-commerce Solutions",
    companyAddress: "654 Commerce Way, Seattle, WA 98101",
    requestContent: "I'm having trouble setting up my account. The verification email hasn't arrived yet.",
    requestType: "contact",
    status: "read"
  },
  {
    firstName: "Lisa",
    lastName: "Anderson",
    email: "lisa.anderson@example.com",
    telephone: "+1-555-0987",
    companyName: "Global Trading Ltd",
    companyAddress: "987 Market St, Miami, FL 33101",
    requestContent: "I noticed an unexpected charge on my account. Can you please clarify what this is for?",
    requestType: "contact",
    status: "unread"
  },
  {
    firstName: "Robert",
    lastName: "Taylor",
    email: "robert.taylor@example.com",
    telephone: "+1-555-0124",
    companyName: "API Integration Corp",
    companyAddress: "124 Developer Rd, Boston, MA 02101",
    requestContent: "I'm a developer and would like to integrate your API. Where can I find the documentation?",
    requestType: "waitlist",
    status: "replied"
  },
  {
    firstName: "Jennifer",
    lastName: "Martinez",
    email: "jennifer.m@example.com",
    telephone: "+1-555-0567",
    companyName: "Secure Systems LLC",
    companyAddress: "567 Security Ave, Denver, CO 80201",
    requestContent: "I'm concerned about the security of my data. What measures do you have in place?",
    requestType: "contact",
    status: "read"
  }
];

async function createSampleContacts() {
  try {
    // Clear existing contacts
    await Contact.deleteMany({});
    console.log('Cleared existing contacts');

    // Insert sample contacts
    const contacts = await Contact.insertMany(sampleContacts);
    console.log(`Created ${contacts.length} sample contacts`);

    // Display created contacts
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.email} (${contact.status})`);
    });

    console.log('\nSample contacts created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error creating sample contacts:', error);
    process.exit(1);
  }
}

createSampleContacts();
