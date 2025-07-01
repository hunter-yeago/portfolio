import { ProjectSection } from "@/app/types/types";

interface Props {
  section: ProjectSection;
  key: number;
}

export default function CopyOnly({ section, key }: Props) {
  return (
    <section key={key} className="space-y-4">
      {section.title && <h3 className="text-xl font-semibold mb-2">{section.title}</h3>}

      {section.text?.map((paragraph, i) => (
        <p key={i} className="text-gray-700 leading-relaxed">
          {paragraph.information}
        </p>
      ))}
    </section>
  );
}
