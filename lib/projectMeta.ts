import { electrifyMeta } from "@/data/projects/electrify-chicago.meta";
import { essayWritingMeta } from "@/data/projects/essay-writing.meta";

export const projectMetaMap = {
  "electrify-chicago": electrifyMeta,
  "essay-writing": essayWritingMeta,
} as const;

export type ProjectSlug = keyof typeof projectMetaMap;

export function projectMeta(slug: ProjectSlug) {
  return projectMetaMap[slug];
}

export function generateStaticParams() {
  return Object.keys(projectMetaMap).map((slug) => ({ slug }));
}
