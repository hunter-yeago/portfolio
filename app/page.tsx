import IntroParagraph from "../app/components/IntroParagraph";
import ArticlesPreview from "./components/ArticlesPreview";
import ProjectSection from "./components/ProjectSection";

import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  return (
    <main className="md:mt-16 flex flex-col gap-8">
      <IntroParagraph />
      <ProjectSection projects={data.projects} />
    </main>
  );
}
