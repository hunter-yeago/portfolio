export interface TechStackItem {
  name: string;
  key: string;
  url: string;
  tooltip: string;
  category: "Frontend" | "Backend" | "Data";
}

export interface ProjectSection {
  title: string;
  text: {
    information: string;
    image: {
      url: string;
      alt: string;
    };
  }[];
  type: string;
  image: string;
  alt: string;
}

export interface SingleProject {
  title: string;
  type: string;
  slug: string;
  preview: {
    description: string[];
    image: string;
  };
  hero: {
    url: string;
    alt: string;
  };
  tech_stack: TechStackItem[];
  sections?: ProjectSection[];
}

export interface Annotation {
  id: string;
  type: "underline" | "highlight" | "circle" | "bracket" | "box";
  color: string;
  padding?: [number, number];
  iterations?: number;
  multiline?: boolean;
  brackets?: [
    "left" | "right" | "top" | "bottom",
    "left" | "right" | "top" | "bottom",
  ];
  strokeWidth?: number;
  animationDuration?: number;
}

export type NavItem = {
  name: string;
  path: string;
};

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
