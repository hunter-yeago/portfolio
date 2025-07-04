import { getAllProjects } from "@/lib/projects";
import IntroParagraph from "@components/home/IntroParagraph";
import ProjectSection from "@components/projects/ProjectSection";
import { getIntroParagraph } from "@/lib/intro_paragraph";
import ContactForm from "@/components/contact-form/ContactForm";

export default function Home() {
  const introData = getIntroParagraph();
  return (
    <main className="md:mt-16 flex flex-col gap-8">
      <IntroParagraph data={introData} />
      <ProjectSection projects={getAllProjects()} />
      <ContactForm />
    </main>
  );
}
