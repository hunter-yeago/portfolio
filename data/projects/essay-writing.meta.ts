import type { SingleProject } from "@/types/types";

export const essayWritingMeta: SingleProject = {
  title: "Essay Writing Project",
  type: "Personal",
  slug: "essay-writing",
  preview: {
    description: [
      "Are you trying to improve your writing skill in a foreign language? Activate your vocabulary with this language learning tool.",
      "This project is built in Laravel and React using Inertia.js for seamless page transitions.",
    ],
    image: "/images/essay/preview.jpg",
  },
  hero: {
    url: "/images/essay/hero.png",
    alt: "a hand writing on a piece of paper with a pen",
  },
  tech_stack: [
    {
      name: "Laravel",
      key: "laravel",
      url: "https://laravel.com/",
      tooltip: "PHP web framework known for its elegant syntax and developer-friendly tools.",
      category: "Backend",
    },
    {
      name: "PHP",
      key: "php",
      url: "https://www.php.net/",
      tooltip: "Server-side scripting language designed for web development.",
      category: "Backend",
    },
    {
      name: "React.js",
      key: "react",
      url: "https://react.dev/",
      tooltip: "JavaScript library for building user interfaces using a component-based approach.",
      category: "Frontend",
    },
    {
      name: "Inertia.js",
      key: "inertiajs",
      url: "https://inertiajs.com/",
      tooltip: "Laravel Monolith that lets you build modern single-page apps using classic server-side routing and controllers.",
      category: "Backend",
    },
    {
      name: "Tailwind",
      key: "tailwind",
      url: "https://tailwindcss.com/",
      tooltip: "Utility-first CSS framework for rapidly building custom designs.",
      category: "Frontend",
    },
  ],
};
