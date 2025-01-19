import { Annotation, NavItem } from "./types";

export const annotations: Annotation[] = [
  { id: "chicago", type: "highlight", color: "#7FBEEB" }, // blue highlight
  { id: "40websites", type: "highlight", color: "#C1D37F" }, // hunter green highlight
  { id: "delightful", type: "highlight", color: "#FE938C" }, // light red highlight
  { id: "linkedin", type: "circle", color: "red" }, // red pen circle
];

export const links = [
  {
    id: "LinkedIn",
    href: "https://www.linkedin.com/in/hunter-yeago/",
    bgClass: "bg-[#7FBEEB] text-black",
  },
  {
    id: "Resume",
    href: "https://drive.google.com/file/d/1wwDmAvaOK3_vVJL6qeQAVk6Uegp8mUwv/view",
    bgClass: "bg-[#C1D37F] text-gold",
  },
  {
    id: "GitHub",
    href: "https://github.com/hunter-yeago",
    bgClass: "bg-[#fe938c] text-black",
  },
];

export const navData: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];