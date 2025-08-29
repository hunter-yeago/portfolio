"use client";

import { projectMetaMap } from "@/lib/projectMeta";
import PreviewCard from "./PreviewCard";

export default function ProjectPreview() {
  const projects = Object.values(projectMetaMap);

  return (
    <section
      className="flex flex-col px-4 md:px-16 py-12 gap-4 pt-12 bg-gray-50 justify-center items-center scroll-mt-36"
      id="projects"
    >
      <div className="max-w-[1400px]">
        <h2 className="text-3xl text-center font-bold mb-4">
          Development Experience
        </h2>
        <p className="text-center">
          say a little bit more about something here would be good
        </p>
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          {projects.map((project) => (
            <PreviewCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
