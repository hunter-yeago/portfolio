import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import { projectMeta, projectMetaMap, ProjectSlug } from "@/lib/projectMeta";
import dynamic from "next/dynamic";

const MDXContent = dynamic(
  () => import("@/components/projects/mdx/MDXContent"),
  { ssr: false },
);

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
  const project = projectMeta(slug as ProjectSlug);

  return <MDXContent source={mdxSource} project={project} />;
}
