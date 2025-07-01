import { notFound } from "next/navigation";
import Image from "next/image";
import { ProjectSection, SingleProject } from "@/app/types/types";
import { getData } from "@/app/utils/utils";
import CopyOnly from "@/app/components/page-sections/CopyOnly";
import ImageAndCopy from "@/app/components/page-sections/ImageAndCopy";
import TechStackList from "@/app/components/TechStackList";

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getData().projects.find(
    (project: SingleProject) => project.slug === params.slug,
  );

  if (!project) return notFound();

  return (
    <section className="mt-8 space-y-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p>{project.preview.description}</p>
      <Image
        src={project.hero_image.url}
        alt={`${project.hero_image.alt}`}
        width={800}
        height={400}
        className="rounded shadow-md"
      />
      <TechStackList items={project.tech_stack} />

      {project.sections?.map((section: ProjectSection, index: number) => {
        if (section.type === "copy-only")
          return <CopyOnly section={section} key={index} />;
        else if (section.type === "image-and-copy")
          return <ImageAndCopy section={section} key={index} />;
      })}
    </section>
  );
}
