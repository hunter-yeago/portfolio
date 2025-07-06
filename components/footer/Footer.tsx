import GithubIconLink from "./GithubIconLink";
import LinkedinIconLink from "./LinkedInIconLink";
import NavLinks from "../nav/Navlinks";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 min-h-40 border-t mt-8 p-8">
      <NavLinks />

      <ul className="ml-auto w-fit flex gap-2">
        <li>
          <LinkedinIconLink />
        </li>
        <li>
          <GithubIconLink />
        </li>
      </ul>
    </footer>
  );
}
