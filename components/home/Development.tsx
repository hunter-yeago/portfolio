"use client";

import { projectMetaMap } from "@/lib/projectMeta";
import PreviewCard from "./PreviewCard";

export default function Development() {
  const projects = Object.values(projectMetaMap);

  return (
    <section
      id="development"
      className="min-w-full bg-surface"
    >
      <div className="container flex flex-col gap-4 justify-center items-center">
        <div className="max-w-5xl">
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
      </div>
    </section>
  );
}
