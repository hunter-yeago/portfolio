"use client";

import { projectMetaMap } from "@/lib/projectMeta";
import PreviewCard from "./PreviewCard";

export default function ProjectPreview() {
  const projects = Object.values(projectMetaMap);

  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-3xl">Projects</h2>
      <div className="flex flex-col gap-4 justify-center">
        {projects.map((project) => (
          <PreviewCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
