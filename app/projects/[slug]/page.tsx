import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { getProjectMeta, projectMetaMap, ProjectSlug } from "@/lib/getProjectMeta";
import MDXContent from "@/components/projects/MDXContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(projectMetaMap).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const slug = params.slug;

  if (!(slug in projectMetaMap)) {
    return null; // 404
  }

  const mdxFilePath = path.join(process.cwd(), "data/projects", `${slug}.mdx`);

  if (!fs.existsSync(mdxFilePath)) {
    return null; // 404
  }

  const mdxContent = fs.readFileSync(mdxFilePath, "utf-8");
  const mdxSource = await serialize(mdxContent);

  const meta = getProjectMeta(slug as ProjectSlug);

  return <MDXContent source={mdxSource} meta={meta} />;
}
