import { electrifyMeta } from "@/data/projects/electrify-chicago.meta";
import { lettuceMeta } from "@/data/projects/lettuce.meta";

export const projectMetaMap = {
  lettuce: lettuceMeta,
  "electrify-chicago": electrifyMeta,
  // "essay-writing": essayWritingMeta,
} as const;

export type ProjectSlug = keyof typeof projectMetaMap;

export function projectMeta(slug: ProjectSlug) {
  return projectMetaMap[slug];
}

export function generateStaticParams() {
  return Object.keys(projectMetaMap).map((slug) => ({ slug }));
}
