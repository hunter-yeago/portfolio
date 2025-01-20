import { Annotation, NavItem } from "./types";

export const annotations: Annotation[] = [
  { id: "creating", type: "highlight", color: "#C1D37F", iterations: 1, multiline: true }, // hunter green highlight
  { id: "techstack", type: "highlight", color: "#7FBEEB", iterations: 1, multiline: true }, // hunter green red highlight
  { id: "solving-challenges", type: "highlight", color: "#FE938C", iterations: 1, multiline: true }, // light red highlight
  
  { id: "prof-links", type: "box", color: "red" }, // red pen circle
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
  // { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" },
];