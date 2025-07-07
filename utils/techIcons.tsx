import React from "react";
import {
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
  SiPython,
  SiPandas,
  SiSass,
  SiTypescript,
  SiPhp,
  SiGraphql,
  SiD3Dotjs,
  SiDocker,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import InertiaLogo from "@/components/logos/InertiaLogo";
import GridsomeLogo from "@components/logos/GridsomeLogo";

const techIcons: Record<string, JSX.Element> = {
  laravel: <SiLaravel title="Laravel" />,
  react: <SiReact title="React" />,
  tailwind: <SiTailwindcss title="Tailwind CSS" />,
  vue: <SiVuedotjs title="Vue.JS" />,
  python: <SiPython title="Python" />,
  pandas: <SiPandas title="Pandas" />,
  sass: <SiSass title="SASS" />,
  inertiajs: <InertiaLogo />,
  typescript: <SiTypescript title="Typescript" />,
  php: <SiPhp title="PHP" />,
  gridsome: <GridsomeLogo />,
  graphql: <SiGraphql />,
  d3js: <SiD3Dotjs />,
  docker: <SiDocker />,
  github: <SiGithub />,
  live_site: <SiVercel />,
};

export default techIcons;

export function TechIcon({ icon }: { icon: string | undefined }) {
  if (!icon) return null;

  return <span className="text-lg">{techIcons[icon]}</span>;
}
