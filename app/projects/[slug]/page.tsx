import { notFound } from "next/navigation";
import Image from "next/image";
import TechStackList from "@components/projects/TechStackList";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import JumpLink from "@components/projects/JumpLink";
import DescriptionArticles from "@components/projects/DescriptionArticles";
import { ProjectSection } from "@/types/types";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) return notFound();

  return (
    <main className="mt-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p>{project.preview.description}</p>
      <Image
        src={project.hero.url}
        alt={`${project.hero.alt}`}
        width={800}
        height={400}
        className="rounded shadow-md"
      />
      <TechStackList items={project.tech_stack} useLinks />

      <ul className="flex flex-wrap gap-3 mt-8">
        {project.sections?.map((section: ProjectSection, index: number) => {
          return (
            <li key={index}>
              <JumpLink section={section.title} index={index} />
            </li>
          );
        })}
      </ul>

      {project.sections && <DescriptionArticles sections={project.sections} />}
    </main>
  );
}
