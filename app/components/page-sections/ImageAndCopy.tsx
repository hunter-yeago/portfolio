import { ProjectSection } from "@/app/types/types";
import Image from "next/image";

interface Props {
  section: ProjectSection;
  key: number;
}

export default function ImageAndCopy({ section, key }: Props) {
  return (
    <article key={key} className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-1 space-y-4">
        {section.title && <h3 className="text-xl font-semibold mb-2">{section.title}</h3>}
        {section.text?.map((paragraph, index: number) => (
          <div className="flex gap-4" key={index}>
            <p className="text-gray-700 leading-relaxed">{paragraph.information}</p>
            {paragraph.image && (
              <div className="flex-shrink-0 w-1/2">
                <Image src={paragraph.image.url} alt={paragraph.image.alt} width={600} height={350} className="rounded shadow-md object-cover h-full w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
