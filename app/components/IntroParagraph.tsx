import React, { useEffect } from "react";
import { annotate, annotationGroup } from "rough-notation";

import Image from "next/image";
import rainImage from "../../public/images/rain-image.jpg";
import { annotations } from "../data";
import ProfessionalLinks from "./ProfessionalLinks";

function IntroParagraph() {
  useEffect(() => {
    // Rough Notation JS Library Boilerplate
    const annotationInstances = annotations
      .map((annotation) => {
        const targetElement = document.getElementById(annotation.id);
        if (targetElement) {
          return annotate(targetElement, {
            type: annotation.type,
            color: annotation.color,
            padding: annotation.padding,
          });
        } else {
          console.error(`Target element with id '${annotation.id}' not found.`);
          return null;
        }
      })
      .filter((annotation) => annotation !== null) as ReturnType<
      typeof annotate
    >[];

    const annotation = annotationGroup(annotationInstances);
    annotation.show();

    
    return () => {
      annotation.hide();
    };
  }, []);

  return (
    <section
      className="grid grid-rows gap-4 md:mt-16 md-custom:grid-cols-[70%,30%] mx-auto"
      aria-label="information about hunter yeago and links to his professional profiles"
    >
      {/* Left Side Info / CTA Buttons */}
      <article className="flex text-center md:text-left flex-col gap-4 py-6">
        <h1 className="text-3xl md:text-[1.875rem] font-semibold">
          Hello! I&#39;m Hunter, a web developer based in
          <span id="chicago"> Chicago</span>.
        </h1>

        {/* Mobile Image */}
        <div className="block max-h-[300px] overflow-hidden rounded-xl md-custom:hidden">
          <Image
            className="scale-150 object-left h-full object-cover"
            priority={true}
            src={rainImage}
            alt="a man holding a broken umbrella stands next to a street light in Melbourne, Australia"
          />
        </div>

        <p>
          As a fullstack web developer, I am passionate about creating
          <span id="innovative"> innovative</span> solutions that solve
          real-world problems and make an impact. By combining my expertise in
          technologies such as Next.JS, PHP, and headless WordPress, I focus on
          building systems that streamline workflows and enhance the efficiency
          of the entire development team. For me, success is not just about
          writing code—it&#39;s about making sure everyone on the team can perform
          at their best and contribute to the mission.
        </p>

        <p>
          I&#39;m committed to delivering web solutions that not only meet technical
          requirements but also solve real-world challenges. Through my work, I
          aim to contribute to a collective sense of accomplishment, making a{" "}
          <span id="meaningful">meaningful</span> difference both in the
          development process and for the end users.
        </p>

        <p>
          Here are a few links if you&#39;d like to get more familiar with my work:
        </p>

        <ProfessionalLinks />
      </article>

      {/* Desktop - Right Side Image */}
      <div className="hidden overflow-hidden rounded-xl md-custom:block">
        <Image
          className="scale-150 object-left h-full object-cover"
          priority={true}
          src={rainImage}
          alt="a man holding a broken umbrella stands next to a street light in Melbourne, Australia"
        />
      </div>
    </section>
  );
}

export default IntroParagraph;
