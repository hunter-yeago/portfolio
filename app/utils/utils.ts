import fs from "fs";
import path from "path";

export function getData(file: string) {
  const filePath = path.join(process.cwd(), "data", file + ".json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}
