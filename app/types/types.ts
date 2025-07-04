export interface TechStackItem {
  name: string;
  key: string;
  url: string;
  tooltip: string;
  category: "frontend" | "backend" | "data"; // or string for flexibility
}

export interface ProjectSection {
  title?: string;
  text?: {
    information: string;
    image?: {
      url: string;
      alt: string;
    };
  }[];
  type?: string;
  image?: string;
  alt?: string;
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
