import IntroParagraph from "../app/components/IntroParagraph";
import ArticlesPreview from "./components/ArticlesPreview";
import ProjectSection from "./components/ProjectSection";

import { getData } from "./utils/utils";

export default function Home() {
  const data = getData();
  return (
    <main className="md:mt-16 flex flex-col gap-8">
      <IntroParagraph />
      <ProjectSection projects={data.projects} />
    </main>
  );
}
