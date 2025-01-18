export interface Annotation {
  id: string;
  type: "underline" | "highlight" | "circle";
  color: string;
  padding?: [number, number];
}