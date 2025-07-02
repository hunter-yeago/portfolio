import fs from "fs";
import path from "path";

export interface IntroParagraphData {
  headline: string;
  paragraphs: string[];
}

export function getIntroParagraph(): IntroParagraphData {
  const filePath = path.join(process.cwd(), "data", "intro_paragraph.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents) as IntroParagraphData;
}
