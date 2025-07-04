import { getAllProjects } from "@/lib/projects";
import IntroParagraph from "@components/home/IntroParagraph";
import ProjectSection from "@components/projects/ProjectSection";
import { getIntroParagraph } from "@/lib/intro_paragraph";
import ContactForm from "@/components/contact-form/ContactForm";

export default function Home() {
  return (
    <main className="md:mt-16 flex flex-col gap-16">
      <IntroParagraph data={getIntroParagraph()} />
      <ProjectSection projects={getAllProjects()} />
      <ContactForm />
    </main>
  );
}
