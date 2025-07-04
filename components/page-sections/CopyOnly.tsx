import { ProjectSection } from "@/types/types";

interface Props {
  section: ProjectSection;
}

export default function CopyOnly({ section }: Props) {
  return (
    <div className="space-y-4">
      {section.title && (
        <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
      )}
      {section.text?.map((paragraph, i) => (
        <p key={i} className="text-gray-700 leading-relaxed">
          {paragraph.information}
        </p>
      ))}
    </div>
  );
}
