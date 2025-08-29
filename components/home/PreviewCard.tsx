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
      className="max-w-[1000px] p-6 sm:p-12 border-4 cursor-pointer focus:border-gray-800 focus:outline-none grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-14 justify-between rounded-xl shadow-lg hover:border-gray-800 hover:shadow-xl"
      aria-label={`learn about my work on the ${project.title} project`}
      href={`/projects/${project.slug}`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          {project.title}
          <div className="text-gray-500"> {project.type}</div>
        </h2>

        <div className="flex flex-col gap-1">
          {project.preview.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="w-full h-60 md:h-full relative overflow-hidden">
          <Image
            className="absolute w-full h-full object-contain"
            src={project.preview.image}
            alt={`${project.title} preview image`}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="hidden md:block">
        <TechStackList items={project.tech_stack} useLinks={false} />
      </div>
    </Link>
  );
}
