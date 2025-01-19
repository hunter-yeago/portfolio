import { links } from "../data";
export default function ProfessionalLinks() {

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4 md-custom:justify-start">
      {links.map(({ id, href, bgClass }) => (
        <a
          key={id}
          id={id.toLowerCase()}
          className={`w-40 text-center p-2 font-medium rounded-md border border-gray-800 hover:bg-gray-800 hover:text-white ${bgClass}`}
          href={href}
          target="_blank"
          aria-label={`View Hunter Yeago's ${id} - opens in a new tab`}
        >
          View {id}
        </a>
      ))}
    </div>
  );
}
