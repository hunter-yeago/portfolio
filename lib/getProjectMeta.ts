// projectMeta.ts

import { electrifyMeta } from "@/data/projects/electrify-chicago.meta";

export const projectMetaMap = {
  "electrify-chicago": electrifyMeta,
  // "other-project": otherMeta,
} as const;

export type ProjectSlug = keyof typeof projectMetaMap;

export function getProjectMeta(slug: ProjectSlug) {
  return projectMetaMap[slug];
}

export function generateStaticParams() {
  return Object.keys(projectMetaMap).map((slug) => ({ slug }));
}
