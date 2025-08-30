import Intro from "@/components/home/Intro";

import Development from "@/components/home/Development";
import Contact from "@/components/contact-form/Contact";
import { getIntro } from "@/lib/intro";

export default function Home() {
  return (
    <main className="flex flex-col gap-8" id="main">
      <Intro data={getIntro()} />
      <Development />
      <Contact />
    </main>
  );
}
