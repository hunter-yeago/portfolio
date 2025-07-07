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
  SiDigitalocean,
  SiNetlify,
  SiJavascript,
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  laravel: <SiLaravel />,
  react: <SiReact />,
  tailwind: <SiTailwindcss />,
  vue: <SiVuedotjs />,
  python: <SiPython />,
  pandas: <SiPandas />,
  sass: <SiSass />,
  typescript: <SiTypescript />,
  php: <SiPhp />,
  graphql: <SiGraphql />,
  d3js: <SiD3Dotjs />,
  docker: <SiDocker />,
  github: <SiGithub />,
  live_site: <SiVercel />,
  gcp: <SiGooglecloud />,
  wordpress: <SiWordpress />,
  ga4: <SiGoogleanalytics />,
  gtm: <SiGoogletagmanager />,
  gridsome: <SiGridsome />,
  inertiajs: <SiInertia />,
  digital_ocean: <SiDigitalocean />,
  netlify: <SiNetlify />,
  javascript: <SiJavascript />,
};

export function TechIcon({ icon }: { icon: string | undefined }) {
  if (!icon || !(icon in techIcons)) return null;
  return <span className="text-lg">{techIcons[icon]}</span>;
}
