import React from "react";
import { SiLaravel, SiReact, SiTailwindcss, SiVuedotjs, SiPython, SiPandas, SiSass, SiTypescript, SiPhp } from "react-icons/si";
import InertiaLogo from "@/app/components/logos/InertiaLogo";

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
};

export default techIcons;
