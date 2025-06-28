"use client";
import { SingleProject } from "../types/ProjectTypes";
import Project from "./Project";

interface Props {
  projects: SingleProject[];
}

export default function ProjectSection({ projects }: Props) {
  const renderProjects = (projects: SingleProject[]) => {
    return projects.map((project: SingleProject) => <Project project={project} />);
  };

  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h2 className="text-3xl">Projects</h2>

      <div className="flex flex-col gap-4 p-4 justify-center">{renderProjects(projects)}</div>
    </section>
  );
}
