import {
  facebook,
  instagram,
  twitter,
  scanQRcode,
  tiktok,
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
      { name: "Contact Us", link: "/company/contact" },
    ],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    href: "https://www.facebook.com/manillafinance",
  },
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://x.com/manilla_finance",
  },
  {
    src: instagram,
    alt: "instagram logo",
    href: "https://instagram.com/manilla_finance",
  },
  {
    src: tiktok,
    alt: "tiktok logo",
    href: "https://tiktok.com/@manilla_finance",
  },
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
