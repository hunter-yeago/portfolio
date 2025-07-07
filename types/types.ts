// ============================================================================
// CORE TYPES
// ============================================================================

export type TechCategories =
  | "Frontend"
  | "Backend"
  | "Data"
  | "Infrastructure"
  | (string & {});

export interface i_Image {
  url: string;
  alt: string;
}

// ============================================================================
// COMPONENT TYPES
// ============================================================================

// LinkList component types
export interface TechLink {
  name: string;
  url?: string;
  icon?: string;
  tooltip?: string;
  disabled?: boolean;
  category: string;
  key?: string;
}

// ============================================================================
// PROJECT TYPES
// ============================================================================

export interface ProjectPreview {
  description: string[];
  image: string;
}

export interface ProjectLinks {
  repo: TechLink;
  live_site: TechLink;
}

export interface SingleProject {
  title: string;
  type: string;
  slug: string;
  links?: ProjectLinks;
  preview: ProjectPreview;
  hero: i_Image;
  tech_stack: TechLink[];
}

// ============================================================================
// UI TYPES
// ============================================================================

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

// ============================================================================
// FORM TYPES
// ============================================================================

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
