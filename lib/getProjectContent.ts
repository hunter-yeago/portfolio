import fs from "fs";
import path from "path";

export async function getProjectContent(slug: string) {
  const filePath = path.join(process.cwd(), "projects", `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
}
