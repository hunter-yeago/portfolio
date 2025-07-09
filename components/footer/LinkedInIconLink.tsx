export default function LinkedinIconLink() {
  return (
    <a
      href="https://www.linkedin.com/in/hunter-yeago"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Go to my LinkedIn page - opens in a new tab"
      className="group inline-block rounded-full transition duration-300"
    >
      <svg
        className="p-1 w-11 h-11 stroke-[0.5] stroke-black transition duration-300 rounded-full group-hover:stroke-1 group-focus:stroke-1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
