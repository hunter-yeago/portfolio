export interface Annotation {
  id: string;
  type: "underline" | "highlight" | "circle";
  color: string;
  padding?: [number, number];
}

export type NavItem = {
  name: string;
  path: string;
};
