import React, { useEffect, useRef } from "react";
import { annotate, annotationGroup } from "rough-notation";

import Image from "next/image";
import rainImage from "../../public/images/rain-image.jpg";
import { annotations } from "../data";
import ProfessionalLinks from "./ProfessionalLinks";

function IntroParagraph() {
  useEffect(() => {
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
      className="grid grid-rows mt-20 md-custom:grid-cols-[70%,30%] mx-auto"
      aria-label="information about hunter yeago and links to his professional profiles"
    >
      {/* Left Side Info / CTA Buttons */}
      <article className="flex flex-col gap-4 pb-8 md:pr-4">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Hello! I&#39;m Hunter, a web developer based in
          <span id="chicago"> Chicago</span>.
        </h1>

        <p>
          I specialize in creating tools that are user-friendly, simple, and
          delightful. As a web developer at Lettuce Entertain You,
          Chicago&apos;s
          <span id="40websites"> largest</span> restaurant company, I manage and
          create new websites for over 40+ properties, ensuring each one is
          optimized for performance and user experience.
        </p>

        <p>
          I love building tools that are simple, user-friendly, simple, and
          <span id="delightful"> delightful.</span>
        </p>

        <ProfessionalLinks />
      </article>

      {/* Right Side Image */}
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
