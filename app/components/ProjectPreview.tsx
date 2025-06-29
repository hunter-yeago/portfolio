import Image from "next/image";
import { SingleProject } from "../types/types";
import Link from "next/link";
import techIcons from "@/app/utils/techIcons";

interface Props {
  project: SingleProject;
}

export default function ProjectPreview({ project }: Props) {
  return (
    <Link
      className="p-6 border-4 cursor-pointer focus:border-gray-800 focus:outline-none flex gap-14 justify-between rounded-xl shadow-lg hover:shadow-xl max-w-[800px]"
      aria-label={`learn about my work on the ${project.title} project`}
      href={`/projects/${project.slug}`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          {project.title} -<span className="text-gray-500"> {project.type}</span>
        </h2>

        <div className="flex flex-col gap-1">
          {project.preview.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className="flex flex-wrap gap-2 text-lg text-white mt-auto">
          {project.tech_stack.map((item, index) => {
            const icon = techIcons[item.key];

            return (
              <li key={`${project.title}-${item.key}-${index}`} className="bg-gray-800 px-2 py-1 rounded flex items-center gap-2">
                <span>{item.name}</span>
                {icon && <span className="text-lg">{icon}</span>}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative min-w-[200px] min-h-[200px] overflow-hidden">
        <Image className="absolute w-full h-full object-cover" src={project.preview.image} alt={`${project.title} preview image`} width={300} height={300} />
      </div>
    </Link>
  );
}
