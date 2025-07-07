"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { SingleProject } from "@/types/types";
import HeroImage from "../core/HeroImage";
import TechStackList from "../interactive/TechStackList";
import LinkList from "../interactive/LinkList";
import Section from "../core/Section";
import Title from "../core/Title";
import Paragraph from "../core/Paragraph";
import CityWideStats from "../interactive/CityWideStats";
import SectionLink from "../core/SectionLink";
import JumpLink from "../interactive/JumpLink";
import BuildingCard from "../interactive/BuildingCard";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  project: SingleProject;
}

export default function MDXContent({ source, project }: MDXContentProps) {
  const components = {
    BuildingCard,
    Section,
    Title,
    Paragraph,
    CityWideStats,
    SectionLink,
    JumpLink,
  };
  return (
    <main className="mx-auto px-4">
      <h1 className="text-2xl font-bold mt-12">{project.title}</h1>
      <HeroImage image={{ url: project.hero.url, alt: project.hero.alt }} />

      {project.links && (
        <div className="w-fit mx-auto sm:mx-0 mb-8">
          <LinkList items={[project.links.repo, project.links.live_site]} />
        </div>
      )}

      <div className="mb-8">
        <TechStackList items={project.tech_stack} useLinks />
      </div>
      <MDXRemote {...source} components={components} />
    </main>
  );
}
