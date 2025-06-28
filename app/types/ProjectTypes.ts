export interface TechStackItem {
  name: string;
  key: string;
}

export interface SingleProject {
  title: string;
  preview_description: string[];
  tech_stack: TechStackItem[];
  logo: string;
}
