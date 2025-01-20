import { Annotation, NavItem } from "./types";

// Rough Annoation Docs
// https://roughnotation.com/
// https://glitch.com/~basic-rough-notation -- sandbox w/code
// https://basic-rough-notation.glitch.me/
// https://github.com/linkstrifer/react-rough-notation

export const annotations: Annotation[] = [
  { id: "creating", type: "highlight", color: "#C1D37F", multiline: true, animationDuration: 800 }, // hunter green highlight
  { id: "techstack", type: "highlight", color: "#7FBEEB", multiline: true, animationDuration: 1000 }, // hunter green red highlight --increased animation time since there are more characters
  { id: "solving-challenges", type: "highlight", color: "#FE938C", multiline: true, animationDuration: 900 }, // light red highlight
  { id: "prof-links", type: "box", color: "red", animationDuration: 1000, iterations: 1 }, // red pen box
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