"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { SingleProject } from "@/types/types";
import HeroImage from "../core/HeroImage";
import TechStackList from "../interactive/TechStackList";
import LinkList from "../interactive/LinkList";
import Title from "../core/Title";
import CityWideStats from "../interactive/CityWideStats";
import SectionLink from "../core/SectionLink";
import JumpLink from "../interactive/JumpLink";
import BuildingCard from "../interactive/BuildingCard";
import HyperLink from "../core/Hyperlink";
import RestaurantCard from "../interactive/RestaurantCard";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
  project: SingleProject;
}

export default function MDXContent({ source, project }: MDXContentProps) {
  const components = {
    BuildingCard,
    Title,
    CityWideStats,
    SectionLink,
    JumpLink,
    HyperLink,
    RestaurantCard,
  };
  return (
    <>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      
      <HeroImage
        mobileImage={project.preview}
        image={{ url: project.hero.url, alt: project.hero.alt }}
      />

      {project.links && (
          <LinkList items={[project.links.repo, project.links.live_site]} />
      )}

      <TechStackList items={project.tech_stack} useLinks />
      <MDXRemote {...source} components={components} />
    </>
  );
}
