const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Import the Blog model
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["E-commerce", "Crypto", "Finance", "Technology", "Art", "Lifestyle"],
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: 200,
  },
  authorName: {
    type: String,
    required: true,
    trim: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  publishedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

async function createSampleBlogs() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Sample blog data
    const sampleBlogs = [
      {
        title: "Understanding the Basics of Blockchain",
        category: "Technology",
        image: "/images/blogimage1.png",
        content: `The world of e-commerce is evolving at lightning speed, driven by advances in technology, changing consumer behavior, and the growing influence of Web3. As we step into 2025, brands and shoppers alike are witnessing a revolution in how online transactions are made, managed, and experienced.

1. Crypto-Powered Payments
In 2025, cryptocurrencies like Polygon, Solana, and specialized tokens (such as Pepperlyl Token) are becoming everyday payment methods. Platforms like CheetahHPVQ are leading the charge, allowing users to shop seamlessly with digital currencies, bypassing traditional banking barriers and offering faster, cheaper, and more secure transactions.

Why it matters:
Crypto payments reduce transaction costs, ensure faster settlements, and open up global markets without borders.

2. Tokenized Receipts and NFT Ownership
Forget traditional receipts — 2025 is about NFT receipts! After a purchase, customers receive tokenized proof of transaction stored on the blockchain. These NFTs can serve as verifiable ownership certificates, loyalty rewards, or even assets for future staking and earning opportunities.

Why it matters:
It adds a layer of transparency, ownership, and utility to every transaction — turning simple purchases into valuable assets.`,
        excerpt: "Blockchain is a decentralized ledger that allows secure transactions.",
        authorName: "Adewale Marcus",
        authorImage: "/images/blogauthor.png",
        status: "published",
      },
      {
        title: "The Rise of NFT Art in 2025",
        category: "Art",
        image: "/images/blogimage2.png",
        content: `NFTs have revolutionized the art world, providing artists with new ways to monetize their digital creations. In 2025, we're seeing unprecedented growth in the NFT art market, with artists from all backgrounds embracing this new medium.

The democratization of art ownership through NFTs has opened up opportunities for both established and emerging artists. Digital art can now be easily tokenized, sold, and traded on various platforms, creating a more accessible art market for collectors worldwide.

Key trends in 2025 include:
- AI-generated art NFTs
- Interactive digital art experiences
- Fractional ownership of high-value pieces
- Integration with virtual and augmented reality`,
        excerpt: "NFTs have changed the way artists monetize digital art. Here's how...",
        authorName: "Ada Lovelace",
        authorImage: "/images/blogauthor.png",
        status: "published",
      },
      {
        title: "Tips for Remote Work Productivity",
        category: "Lifestyle",
        image: "/images/blogimage3.png",
        content: `Working remotely can be challenging, but with the right strategies, you can maintain high productivity levels. Here are some proven tips for remote work success:

1. Create a Dedicated Workspace
Set up a specific area in your home for work. This helps create a mental separation between work and personal life.

2. Establish a Routine
Stick to regular working hours and take scheduled breaks. This helps maintain work-life balance.

3. Use Productivity Tools
Leverage technology to stay organized and communicate effectively with your team.

4. Take Regular Breaks
Short breaks throughout the day can help maintain focus and prevent burnout.

5. Stay Connected
Regular communication with colleagues helps maintain team cohesion and reduces feelings of isolation.`,
        excerpt: "Working remotely can be challenging. Follow these productivity tips...",
        authorName: "John Doe",
        authorImage: "/images/blogauthor.png",
        status: "published",
      },
      {
        title: "The Future of Digital Payments",
        category: "Finance",
        image: "/images/blogimage1.png",
        content: `Digital payments are rapidly evolving, with new technologies and platforms emerging every day. The future of payments is becoming more seamless, secure, and accessible to everyone.

Key developments include:
- Contactless payments becoming the norm
- Biometric authentication for enhanced security
- Integration with IoT devices
- Real-time payment processing
- Cross-border payment solutions

These innovations are making financial transactions faster, more secure, and more convenient for consumers and businesses alike.`,
        excerpt: "Digital payments are transforming how we handle money in the modern world.",
        authorName: "Sarah Johnson",
        authorImage: "/images/blogauthor.png",
        status: "draft",
      },
    ];

    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs');

    // Create sample blogs
    for (const blogData of sampleBlogs) {
      const blog = new Blog(blogData);
      await blog.save();
      console.log(`Created blog: ${blogData.title}`);
    }

    console.log('Sample blogs created successfully');
    
  } catch (error) {
    console.error('Error creating sample blogs:', error);
  } finally {
    await mongoose.disconnect();
  }
}

createSampleBlogs();
