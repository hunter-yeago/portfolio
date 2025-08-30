"use client";

import { projectMetaMap } from "@/lib/projectMeta";
import PreviewCard from "./PreviewCard";

export default function Development() {
  const projects = Object.values(projectMetaMap);

  return (
    <section
      className="flex flex-col px-4 md:px-16 py-12 gap-4 pt-12 bg-gray-50 justify-center items-center"
      id="development"
    >
      <div className="max-w-[1400px]">
        <h2 className="text-3xl text-center font-bold mb-4">Development</h2>
        <p className="text-center">
          say a little bit more about something here would be good
        </p>
        <div className="grid gap-8 pt-8">
          {projects.map((project) => (
            <PreviewCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
