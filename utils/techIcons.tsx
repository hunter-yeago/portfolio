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
  SiWordpress,
  SiGoogleanalytics,
  SiGooglecloud,
  SiGoogletagmanager,
  SiGridsome,
  SiInertia,
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  laravel: <SiLaravel title="Laravel" />,
  react: <SiReact title="React" />,
  tailwind: <SiTailwindcss title="Tailwind CSS" />,
  vue: <SiVuedotjs title="Vue.JS" />,
  python: <SiPython title="Python" />,
  pandas: <SiPandas title="Pandas" />,
  sass: <SiSass title="SASS" />,
  typescript: <SiTypescript title="Typescript" />,
  php: <SiPhp title="PHP" />,
  graphql: <SiGraphql title="GraphQL" />,
  d3js: <SiD3Dotjs title="D3.js" />,
  docker: <SiDocker title="Docker" />,
  github: <SiGithub title="GitHub" />,
  live_site: <SiVercel title="Live Site" />,
  gcp: <SiGooglecloud />,
  wordpress: <SiWordpress title="WordPress" />,
  ga4: <SiGoogleanalytics />,
  gtm: <SiGoogletagmanager />,
  gridsome: <SiGridsome />,
  inertiajs: <SiInertia />,
};

export function TechIcon({ icon }: { icon: string | undefined }) {
  if (!icon || !(icon in techIcons)) return null;
  return <span className="text-lg">{techIcons[icon]}</span>;
}
