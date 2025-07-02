import { useEffect } from "react";
import { annotate, annotationGroup } from "rough-notation";
import { Annotation } from "@/app/types";

export function useAnnotations(annotationList: Annotation[]) {
  useEffect(() => {
    const annotationInstances = annotationList
      .map((annotation) => {
        const targetElement = document.getElementById(annotation.id);
        if (!targetElement) {
          console.error(`Element with id "${annotation.id}" not found`);
          return null;
        }

        return annotate(targetElement, {
          type: annotation.type,
          color: annotation.color,
          padding: annotation.padding,
          iterations: annotation.iterations,
          multiline: annotation.multiline,
          brackets: annotation.brackets,
          strokeWidth: annotation.strokeWidth,
          animationDuration: annotation.animationDuration,
        });
      })
      .filter((a): a is ReturnType<typeof annotate> => a !== null);

    const annotationGroupInstance = annotationGroup(annotationInstances);
    annotationGroupInstance.show();

    return () => {
      annotationGroupInstance.hide();
    };
  }, [annotationList]);
}
