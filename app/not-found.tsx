export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen px-8">
      <h1 className="text-4xl text-center">404 - Page Not Found</h1>
      <p className="text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <a
        className="w-40 text-center bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600"
        href="/"
        aria-label="View my LinkedIn - opens in a new tab"
      >
        Return Home
      </a>
    </div>
  );
}
