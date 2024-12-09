import Link from "next/link";


export default function ThankYou() {
    return(
        <p className="flex gap-1 mx-auto w-4/5 text-center">
          {/* //Folder// */}
          <Link href="https://iconscout.com/icons/folder"className="text-underline font-size-sm"target="_blank">Folder</Link>
        by
        <Link
          href="https://iconscout.com/contributors/font-awesome"
          className="text-underline font-size-sm"
        >
          Font Awesome
        </Link>
        on
        <Link href="https://iconscout.com" className="text-underline font-size-sm">IconScout</Link>
        </p>)
}