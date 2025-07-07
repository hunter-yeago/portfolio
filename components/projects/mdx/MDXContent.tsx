"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { SingleProject } from "@/types/types";
import HeroImage from "../core/HeroImage";
import TechStackList from "../interactive/TechStackList";
import components from "./mdxComponents";
import LinkList from "../interactive/LinkList";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  project: SingleProject;
}

export default function MDXContent({ source, project }: MDXContentProps) {
  return (
    <main className="mx-auto px-4">
      <h1 className="text-2xl font-bold mt-12">{project.title}</h1>
      <HeroImage url={project.hero.url} alt={project.hero.alt} />
      <LinkList items={[project.links.repo, project.links.live_site]} />;
      <div className="mb-8">
        <TechStackList items={project.tech_stack} useLinks />
      </div>
      <MDXRemote {...source} components={components} />
    </main>
  );
}
