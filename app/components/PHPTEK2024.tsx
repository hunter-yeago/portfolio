import Image from "next/image";
import Link from "next/link";
import hunterImage from "../../public/images/hunter-at-phptek.png";

export default function PHPTEK2024() {
  return (
    <article
      className="bg-white p-4 rounded border-2 shadow min-h-[20rem] flex flex-col gap-4 w-full
        md-custom:flex-row"
      aria-label="information about my time spent at the PHP conference PHP TEK in twenty twenty four"
    >
      <figure className="relative object-cover h-full">
        <Image className="object-cover h-full" src={hunterImage} alt="Picture of me at PHP TEK 2024" />
        <figcaption className="text-center absolute bottom-0 left-1 text-white"> Picture by Dwayne McDaniel</figcaption>
      </figure>

      <div className="p-4 flex flex-col gap-4">
        <p className="text-gray-700">
          {" "}
          I went to PHP[TEK] 2024, and here&apos;s my article about it , and here&apos;s my article about it! , and here&apos;s my article about it! , and
          here&apos;s my article about it!{" "}
        </p>
        <p className="text-gray-700">
          {" "}
          I went to PHP[TEK] 2024, and here&apos;s my article about it , and here&apos;s my article about it! , and here&apos;s my article about it! , and
          here&apos;s my article about it!
        </p>
        <Link
          className="w-40 text-center bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600"
          href="/ArticlesPreview/php-tek-2024"
          target="_blank"
          aria-label="View my LinkedIn - opens in a new tab"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}
