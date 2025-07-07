import { LinkData } from "@/types/types";
import { TechIcon } from "@/utils/techIcons";

import Link from "next/link";

export default function LinkItem({ name, url, icon, disabled = false }: LinkData) {
  const baseClasses = "flex justify-center items-center gap-2 px-2 py-1 rounded text-lg";
  const enabledClasses = "text-white bg-gray-800";
  const disabledClasses = "bg-gray-300";

  const classes = `${baseClasses} ${disabled ? disabledClasses : enabledClasses}`;

  if (disabled || !url) {
    return (
      <div className={classes}>
        <span>{name}</span>
        <TechIcon icon={icon} />
      </div>
    );
  }

  return (
    <Link href={url} target="_blank" aria-label={`${name} - opens in a new tab`} className={classes}>
      <span>{name}</span>
      <TechIcon icon={icon} />
    </Link>
  );
}
