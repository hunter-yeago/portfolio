"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "./mdxComponents";
import { ProjectMeta } from "@/types/types";
import HeroImage from "./HeroImage";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  meta: ProjectMeta;
}

export default function MDXContent({ source, meta }: MDXContentProps) {
  return (
    <main className="prose mx-auto px-4">
      <HeroImage url={meta.hero.url} alt={meta.hero.alt} />
      <h1>{meta.title}</h1>
      <MDXRemote {...source} components={components} />
    </main>
  );
}
