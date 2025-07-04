import { getAllProjects } from "@/lib/projects";
import ProjectSection from "@components/projects/ProjectSection";

export default function ProjectsPage() {
  return <ProjectSection projects={getAllProjects()} />;
}
