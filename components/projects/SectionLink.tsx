import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SectionLink({ text, link, image_url, image_alt }: { text: string; link: string; image_url: string; image_alt: string }) {
  const isExternal = link.startsWith("http://") || link.startsWith("https://");
  // const [showTooltip, setShowTooltip] = useState(false);

  // Simple preview text — you can customize or fetch dynamically
  // const previewText = isExternal ? "External link — opens in new tab" : "Internal link";

  return (
    // <span className="relative inline-block" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
    <span className="relative inline-block">
      <Link
        href={link}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`${text} - ${isExternal ? "opens in a new tab" : "internal link"}`}
        className="text-blue-600 hover:underline"
      >
        {text}
      </Link>
    </span>
  );
}

// {showTooltip && (
//   <div
//     role="tooltip"
//     className="absolute z-10 w-[200px] aspect-square border-2 border-gray-800 text-xs text-white bg-gray-800 rounded shadow-md bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
//   >
//     {/* {previewText} */}
//     <div className="relative w-full h-full">
//       <Image className="absolute top-0 left-0 w-full h-full" src={image_url} width={200} height={200} alt={image_alt} />
//     </div>
//   </div>
// )}
