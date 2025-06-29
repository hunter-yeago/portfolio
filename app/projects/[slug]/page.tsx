import { notFound } from "next/navigation";
import Image from "next/image";
import { ProjectSection, SingleProject } from "@/app/types/types";
import { getData } from "@/app/utils/utils";
import techIcons from "@/app/utils/techIcons";

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getData().projects.find((project: SingleProject) => project.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <Image src={project.hero} alt={`${project.title} screenshot`} width={800} height={400} className="rounded shadow-md" />

      {project.sections?.map((section: ProjectSection, index: number) => (
        <section key={index} className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.text}</p>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2">
            {section.image && section.alt && (
              <Image src={section.image} alt={section.alt} width={600} height={350} className="rounded shadow-md object-cover" />
            )}
          </div>
        </section>
      ))}

      <div>
        <a href="/" className="underline text-blue-500">
          ← Back to Projects
        </a>
      </div>
    </main>
  );
}
