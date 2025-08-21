import {
  facebook,
  instagram,
  twitter,
  github,
  scanQRcode,
} from "../../public/icons";

export const navlinks: {
  href?: string;
  label: string;
  children?: { href: string; label: string }[];
}[] = [
  { href: "/", label: "Home" },
  {
    label: "Company",
    children: [
      { href: "/company", label: "About Us" },
      { href: "/company/career", label: "Career" },
      { href: "/company/contact", label: "Contact" },
    ],
  },
  {
    label: "Manilla Suite",
    children: [
      { href: "/manillaSuit/card", label: "Manilla Card" },
      { href: "/manillaSuit/manillaToken", label: "Manilla Token" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/legal", label: "Legal" },
];

export const FooterLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", link: "/" },

      { name: "Company", link: "/company" },
      { name: "Manilla Suite", link: "/manillaSuit/card" },
      { name: "Legal", link: "/legal" },
    ],
  },

  {
    title: "Links",
    links: [
      { name: "Terms & Policy", link: "/" },
      { name: "Blog", link: "/blog" },
      { name: "Stake MNLA", link: "https://vault.manilla.finance" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", href: "/" },
  { src: twitter, alt: "twitter logo", href: "/" },
  { src: instagram, alt: "instagram logo", href: "/" },
  { src: github, alt: "github logo", href: "/" },
];

export const QRcode = [{ src: scanQRcode, alt: "download manilla app" }];

// constants/index.ts
export const Buttons = [
  { label: "Download App", href: "#download", variant: "secondary" },
  {
    label: "Learn More",
    onClick: () => console.log("Clicked"),
    variant: "ghost",
  },
];

export const accordionData = [
  {
    id: 1,
    title: "Privacy Policy",
    content: `This is the detailed content for Privacy Policy. 
You can customize this text to whatever you want shown when expanded.`,
  },
  {
    id: 2,
    title: "Section Two",
    content: `This is the detailed content for Section Two.
More text can go here describing section two.`,
  },
  {
    id: 3,
    title: "Section Three",
    content: `This is the detailed content for Section Three.
Add your legal terms, policies or other info here.`,
  },
];

export interface Blog {
  id: number;
  title: string;
  slug: string; // Used for the blog URL e.g., /blog/my-first-post
  category: string;
  image: string; // Main blog image URL
  content: string;
  excerpt: string; // Short preview of the blog
  authorName: string;
  authorImage: string; // Author profile image URL
  date: string; // Publish date
}

// blog data
export const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding the Basics of Blockchain",
    slug: "basics-of-blockchain-1",
    category: "Technology",
    image: "/images/blogimage1.png",
    excerpt:
      "Blockchain is a decentralized ledger that allows secure transactions.",
    content: `The world of e-commerce is evolving at lightning speed, driven by advances in technology, changing consumer behavior, and the growing influence of Web3. As we step into 2025, brands and shoppers alike are witnessing a revolution in how online transactions are made, managed, and experienced.
1. Crypto-Powered Payments
In 2025, cryptocurrencies like Polygon, Solana, and specialized tokens (such as Pepperlyl Token) are becoming everyday payment methods. Platforms like CheetahHPVQ are leading the charge, allowing users to shop seamlessly with digital currencies, bypassing traditional banking barriers and offering faster, cheaper, and more secure transactions.

Why it matters:
Crypto payments reduce transaction costs, ensure faster settlements, and open up global markets without borders.

2. Tokenized Receipts and NFT Ownership
Forget traditional receipts — 2025 is about NFT receipts! After a purchase, customers receive tokenized proof of transaction stored on the blockchain. These NFTs can serve as verifiable ownership certificates, loyalty rewards, or even assets for future staking and earning opportunities.

Why it matters:
It adds a layer of transparency, ownership, and utility to every transaction — turning simple purchases into valuable assets.

3. AI-Driven Personalization
Artificial Intelligence is taking center stage. From recommending products based on previous behavior to customizing entire shopping experiences in real-time, AI ensures that every user feels seen, understood, and catered to — automatically.

Why it matters:
Hyper-personalized shopping increases customer loyalty, boosts conversion rates, and improves overall user satisfaction.

4. Augmented Reality (AR) Shopping Experiences
Imagine trying out furniture in your home via your phone or previewing how clothes fit before buying. In 2025, AR integration in e-commerce is becoming mainstream, allowing customers to make smarter, more confident purchases.

Why it matters:
Reducing returns and improving the shopping experience by bridging the gap between online and offline buying.

5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "Adewale Marcus",
    authorImage: "/images/blogauthor.png",
    date: "Aug 13, 2025",
  },
  {
    id: 2,
    title: "The Rise of NFT Art in 2025",
    slug: "rise-of-nft-art-2025-1",
    category: "Art",
    image: "/images/blogimage2.png",
    excerpt:
      "NFTs have changed the way artists monetize digital art. Here's how...",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "Ada Lovelace",
    authorImage: "/images/blogauthor.png",
    date: "Aug 12, 2025",
  },
  {
    id: 3,
    title: "Tips for Remote Work Productivity",
    slug: "remote-work-productivity-tips-1",
    category: "Lifestyle",
    image: "/images/blogimage3.png",
    excerpt:
      "Working remotely can be challenging. Follow these productivity tips...",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "John Doe",
    authorImage: "/images/blogauthor.png",
    date: "Aug 10, 2025",
  },
  {
    id: 4,
    title: "Understanding the Basics of Blockchain",
    slug: "basics-of-blockchain-2",
    category: "Technology",
    image: "/images/blogimage1.png",
    excerpt:
      "Blockchain is a decentralized ledger that allows secure transactions.",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "Adewale Marcus",
    authorImage: "/images/blogauthor.png",
    date: "Aug 13, 2025",
  },
  {
    id: 5,
    title: "The Rise of NFT Art in 2025",
    slug: "rise-of-nft-art-2025-2",
    category: "Art",
    image: "/images/blogimage2.png",
    excerpt:
      "NFTs have changed the way artists monetize digital art. Here's how...",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "Ada Lovelace",
    authorImage: "/images/blogauthor.png",
    date: "Aug 12, 2025",
  },
  {
    id: 6,
    title: "Tips for Remote Work Productivity",
    slug: "remote-work-productivity-tips-2",
    category: "Lifestyle",
    image: "/images/blogimage3.png",
    excerpt:
      "Working remotely can be challenging. Follow these productivity tips...",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "John Doe",
    authorImage: "/images/blogauthor.png",
    date: "Aug 10, 2025",
  },
  {
    id: 7,
    title: "Understanding the Basics of Blockchain",
    slug: "basics-of-blockchain-3",
    category: "Technology",
    image: "/images/blogimage1.png",
    excerpt:
      "Blockchain is a decentralized ledger that allows secure transactions.",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "Adewale Marcus",
    authorImage: "/images/blogauthor.png",
    date: "Aug 13, 2025",
  },
  {
    id: 8,
    title: "The Rise of NFT Art in 2025",
    slug: "rise-of-nft-art-2025-3",
    category: "Art",
    image: "/images/blogimage2.png",
    excerpt:
      "NFTs have changed the way artists monetize digital art. Here's how...",
    content: `5. Decentralized Marketplaces
Instead of relying solely on centralized giants, consumers are moving toward decentralized e-commerce platforms built on blockchain. These platforms empower buyers and sellers with direct peer-to-peer transactions, transparent reviews, and community-driven governance.

Why it matters:
It promotes fairness, lowers costs, protects user data, and gives control back to both shoppers and merchants.`,
    authorName: "Ada Lovelace",
    authorImage: "/images/blogauthor.png",
    date: "Aug 12, 2025",
  },
  {
    id: 9,
    title: "Tips for Remote Work Productivity",
    slug: "remote-work-productivity-tips-3",
    category: "Lifestyle",
    image: "/images/blogimage3.png",
    excerpt:
      "Working remotely can be challenging. Follow these productivity tips...",
    content: `lorem`,
    authorName: "John Doe",
    authorImage: "/images/blogauthor.png",
    date: "Aug 10, 2025",
  },
];
