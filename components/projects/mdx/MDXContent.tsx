"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { ProjectMeta } from "@/types/types";
import HeroImage from "../core/HeroImage";
import TechStackList from "../interactive/TechStackList";
import components from "./mdxComponents";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  meta: ProjectMeta;
}

export default function MDXContent({ source, meta }: MDXContentProps) {
  return (
    <main className="mx-auto px-4">
      <h1 className="text-2xl font-bold mt-12">{meta.title}</h1>
      <HeroImage url={meta.hero.url} alt={meta.hero.alt} />

      <div className="mb-8">
        <TechStackList items={meta.tech_stack} useLinks />
      </div>

      <MDXRemote {...source} components={components} />
    </main>
  );
}
