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

      <div className="w-fit mx-auto sm:mx-0">
        <h2 className="text-xl font-semibold text-primary-300 mt-4 mb-2 capitalize">Project Links</h2>
        <LinkList items={[project.links.repo, project.links.live_site]} />
      </div>

      <div className="mb-8">
        <TechStackList items={project.tech_stack} useLinks />
      </div>
      <MDXRemote {...source} components={components} />
    </main>
  );
}
