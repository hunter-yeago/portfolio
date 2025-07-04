"use client";
import { SingleProject } from "@/types/types";
import ProjectPreview from "./ProjectPreview";

interface Props {
  projects: SingleProject[];
}

export default function ProjectSection({ projects }: Props) {
  const renderProjects = (projects: SingleProject[]) => {
    return projects.map((project: SingleProject) => <ProjectPreview key={project.title} project={project} />);
  };

  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h2 className="text-3xl">Projects</h2>

      <div className="flex flex-col gap-4 justify-center">{renderProjects(projects)}</div>
    </section>
  );
}
