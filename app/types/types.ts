// Updated Types

export interface TechStackItem {
  name: string;
  key: string;
}

export interface ProjectSection {
  title?: string;
  text?: string;
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
  hero: string;
  tech_stack: TechStackItem[];
  sections?: ProjectSection[];
}
