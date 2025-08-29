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
      className="p-6 border-4 cursor-pointer focus:border-gray-800 focus:outline-none 
                 flex flex-col gap-8 rounded-lg shadow-lg bg-white
                 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100
                 hover:border-gray-800 hover:shadow-2xl hover:-translate-y-1
                 transition-all duration-300 ease-in-out"
      aria-label={`learn about my work on the ${project.title} project`}
      href={`/projects/${project.slug}`}
    >
      {/* Preview Image */}
      <div className="hidden md:block relative aspect-[16/9] overflow-hidden rounded-md">
        <Image
          className="absolute w-full h-full object-cover"
          src={project.preview.image}
          alt={`${project.title} preview image`}
          width={300}
          height={300}
        />
      </div>

      {/* Text + Tech Stack */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          {project.title} -
          <span className="text-gray-500"> {project.type}</span>
        </h2>

        <div className="flex flex-col gap-1 text-gray-700">
          {project.preview.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <TechStackList items={project.tech_stack} useLinks={false} />
      </div>
    </Link>
  );
}
