import {
  aboutusIcon,
  blogicon,
  dropdownIcon,
  logofbsimple,
  logoinstagram1,
  twitter,
  ManillaTechologies1,
  logogithub1,
  scanQRcode,
} from "../../public/icons";

import {
  aboutManillapay1,
  aboutManillapay2,
  product,
  heropicture,
  aboutus,
} from "../../public/images";

export const navlinks: { href: string; label: string }[] = [
  { href: "#home", label: "Home" },
  { href: "#company", label: "Company" },
  { href: "#manillasuit", label: "Manilla Suite" },
  { href: "#blog", label: "Blog" },
  { href: "#legal", label: "Legal" },
];

export const FooterLinks = [
  {
    title: "Explore",
    links: [
      { name: "Home", link: "#home" },

      { name: "Company", link: "#company" },
      { name: "Manilla Suit", link: "#manillasuit" },
      { name: "Legal", link: "#legal" },
    ],
  },

  {
    title: "Links",
    links: [
      { name: "Terms & Policy", link: "/" },
      { name: "Blog", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: logofbsimple, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: logoinstagram1, alt: "instagram logo" },
  { src: logogithub1, alt: "github logo" },
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
