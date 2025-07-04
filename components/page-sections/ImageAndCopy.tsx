import { ProjectSection } from "@/types/types";
import Image from "next/image";

interface Props {
  section: ProjectSection;
}

export default function ImageAndCopy({ section }: Props) {
  return (
    <div className="space-y-4">
      {section.title && (
        <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
      )}
      {section.text?.map((paragraph, index) => (
        <div className="flex flex-col md:flex-row gap-4" key={index}>
          <p className="text-gray-700 leading-relaxed flex-1">
            {paragraph.information}
          </p>
          {paragraph.image && (
            <div className="flex-shrink-0 w-full md:w-1/2">
              <Image
                src={paragraph.image.url}
                alt={paragraph.image.alt}
                width={600}
                height={350}
                className="rounded shadow-md object-cover w-full h-full"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
