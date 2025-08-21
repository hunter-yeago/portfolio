import Image from "next/image";
import { SingleProject } from "../../types/types";
import Link from "next/link";
import TechStackList from "../projects/interactive/TechStackList";

interface Props {
  project: SingleProject;
}

export default function PreviewCard({ project }: Props) {
  return (
    <Link
      className="p-6 border-4 cursor-pointer focus:border-gray-800 focus:outline-none flex flex-col gap-8 rounded-lg shadow-lg hover:border-gray-800"
      aria-label={`learn about my work on the ${project.title} project`}
      href={`/projects/${project.slug}`}
    >

      <div className="hidden md:block relative aspect-[16/9] overflow-hidden transition-transform duration-500 hover:scale-105">
        <Image
          className="absolute w-full h-full object-cover"
          src={project.preview.image}
          alt={`${project.title} preview image`}
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          {project.title} -
          <span className="text-gray-500"> {project.type}</span>
        </h2>

        <div className="flex flex-col gap-1">
          {project.preview.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <TechStackList items={project.tech_stack} useLinks={false} />
      </div>

      
    </Link>
  );
}
