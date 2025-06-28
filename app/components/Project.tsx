import Image from "next/image";
import { SingleProject } from "../types/ProjectTypes";
import {
  SiPhp,
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiVuedotjs,
  SiPython,
  SiPandas,
  SiSass,
} from "react-icons/si";

interface Props {
  project: SingleProject;
}

const techIcons: Record<string, JSX.Element> = {
  php: <SiPhp title="PHP" />,
  laravel: <SiLaravel title="Laravel" />,
  "next.js": <SiNextdotjs title="Next.js" />,
  react: <SiReact title="React" />,
  tailwind: <SiTailwindcss title="Tailwind CSS" />,
  typescript: <SiTypescript title="TypeScript" />,
  javascript: <SiJavascript title="JavaScript" />,
  postgresql: <SiPostgresql title="PostgreSQL" />,
  mysql: <SiMysql title="MySQL" />,
  html: <SiHtml5 title="HTML5" />,
  css: <SiCss3 title="CSS3" />,
  docker: <SiDocker title="Docker" />,
  vue: <SiVuedotjs title="Vue.js" />,
  python: <SiPython title="Python" />,
  pandas: <SiPandas title="Pandas" />,
  sass: <SiSass title="SASS" />,
};

export default function Project({ project }: Props) {
  return (
    <article
      className="p-6 border-4 flex gap-2 justify-between rounded-xl shadow-lg hover:shadow-xl max-w-[800px]"
      aria-label={`learn about my work on the ${project.title} project`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{project.title}</h2>

        <div className="flex flex-col gap-1">
          {project.preview_description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className="flex flex-wrap gap-2 text-lg text-white mt-auto">
          {project.tech_stack.map((item, index) => {
            const icon = techIcons[item.key.toLowerCase()];

            return (
              <li key={`${project.title}-${item.key}-${index}`} className="bg-gray-800 px-2 py-1 rounded flex items-center gap-1">
                {icon && <span className="text-lg">{icon}</span>}
                <span>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative min-w-[200px] min-h-[200px] overflow-hidden">
        <Image className="absolute w-full h-full object-cover" src={project.logo} alt={`${project.title} logo`} width={300} height={300} />
      </div>
    </article>
  );
}
