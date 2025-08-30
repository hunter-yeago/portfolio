import GithubIconLink from "./GithubIconLink";
import LinkedinIconLink from "./LinkedInIconLink";

export default function Footer() {
  return (
    <footer className="border-t-2 mt-8 p-8">
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
