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
