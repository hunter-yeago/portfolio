import Intro from "@components/home/IntroParagraph";
import Projects from "@/components/home/Projects";
import { getIntroParagraph } from "@/lib/intro_paragraph";
import ContactForm from "@/components/contact-form/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col gap-8" id="main">
      <Intro data={getIntroParagraph()} />
      <Projects />
      <ContactForm />
    </main>
  );
}
