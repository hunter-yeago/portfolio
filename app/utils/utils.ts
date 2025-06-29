import fs from "fs";
import path from "path";

export function getData() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}
