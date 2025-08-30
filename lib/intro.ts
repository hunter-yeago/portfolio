import fs from "fs";
import path from "path";

export interface i_Intro {
  headline: string;
  paragraphs: string[];
}

export function getIntro(): i_Intro {
  const filePath = path.join(process.cwd(), "data", "intro_paragraph.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents) as i_Intro;
}
