import CopyOnly from "../page-sections/CopyOnly";
import ImageAndCopy from "../page-sections/ImageAndCopy";
import { ProjectSection } from "@/types/types";

interface Props {
  sections: ProjectSection[];
}

export default function DescriptionArticles({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  return (
    <section aria-label="details about this project">
      {sections.map((section, index) => (
        <article key={index} id={section.title} className="scroll-mt-12 mb-8" aria-label={`${section.title} section`}>
          {renderSection(section)}
        </article>
      ))}
    </section>
  );
}

function renderSection(section: ProjectSection) {
  switch (section.type) {
    case "copy-only":
      return <CopyOnly section={section} />;
    case "image-and-copy":
      return <ImageAndCopy section={section} />;
    default:
      return <p className="text-gray-500 italic">Unknown section type</p>;
  }
}
