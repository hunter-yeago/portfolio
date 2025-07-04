import { notFound } from "next/navigation";
import Image from "next/image";
import { ProjectSection, SingleProject } from "@/app/types/types";
import CopyOnly from "@/app/components/page-sections/CopyOnly";
import ImageAndCopy from "@/app/components/page-sections/ImageAndCopy";
import TechStackList from "@/app/components/projects/TechStackList";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

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
    <section className="mt-8 space-y-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p>{project.preview.description}</p>
      <Image src={project.hero.url} alt={`${project.hero.alt}`} width={800} height={400} className="rounded shadow-md" />
      <TechStackList items={project.tech_stack} useLinks />

      {project.sections?.map((section: ProjectSection, index: number) => {
        if (section.type === "copy-only") return <CopyOnly section={section} key={index} />;
        else if (section.type === "image-and-copy") return <ImageAndCopy section={section} key={index} />;
      })}
    </section>
  );
}
