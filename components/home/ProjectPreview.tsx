"use client";

import { projectMetaMap } from "@/lib/projectMeta";
import PreviewCard from "./PreviewCard";

export default function ProjectPreview() {
  const projects = Object.values(projectMetaMap);

  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-3xl">Development Experience</h2>
      <p>say a little bit more about something here would be good</p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <PreviewCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
