import { SingleProject } from "@/types/types";
import fs from "fs";
import path from "path";

const projectsDir = path.join(process.cwd(), "data", "projects");

export function getProjectBySlug(slug: string): SingleProject | null {
  const fullPath = path.join(projectsDir, `${slug}.json`);
  if (!fs.existsSync(fullPath)) return null;
  return JSON.parse(fs.readFileSync(fullPath, "utf-8")) as SingleProject;
}

export function getAllProjects(): SingleProject[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".json"))
    .map(
      (file) =>
        JSON.parse(
          fs.readFileSync(path.join(projectsDir, file), "utf-8"),
        ) as SingleProject,
    );

  // optional sort / filter
  // .sort((a, b) => (a.metadata?.year ?? 0) - (b.metadata?.year ?? 0))
}
