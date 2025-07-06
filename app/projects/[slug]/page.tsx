import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

import MDXContent from "@/components/projects/mdx/MDXContent";
import { notFound } from "next/navigation";
import { projectMeta, projectMetaMap, ProjectSlug } from "@/lib/projectMeta";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(projectMetaMap).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const slug = params.slug;

  if (!(slug in projectMetaMap)) {
    return notFound();
  }

  const mdxFilePath = path.join(process.cwd(), "data/projects", `${slug}.mdx`);

  if (!fs.existsSync(mdxFilePath)) {
    return notFound();
  }

  const mdxContent = fs.readFileSync(mdxFilePath, "utf-8");
  const mdxSource = await serialize(mdxContent);

  const meta = projectMeta(slug as ProjectSlug);

  return <MDXContent source={mdxSource} meta={meta} />;
}
