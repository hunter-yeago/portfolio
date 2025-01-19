export default function ProfessionalLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4 md-custom:justify-start">
      <a
        id="linkedin"
        className="w-40 text-center bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600"
        href="https://www.linkedin.com/in/hunter-yeago/"
        target="_blank"
        aria-label="View Hunter Yeagos LinkedIn - opens in a new tab"
      >
        View LinkedIn
      </a>

      <a
        className="w-40 text-center bg-[#7fbeeb] text-gold border border-gray-800 p-2 rounded-md hover:bg-yellow-600"
        href="https://drive.google.com/file/d/1wwDmAvaOK3_vVJL6qeQAVk6Uegp8mUwv/view"
        target="_blank"
        aria-label="View Hunter Yeagos Resume - opens in a new tab"
      >
        View Resume
      </a>

      <a
        className="w-40 text-center bg-white text-black border border-gray-800 p-2 rounded-md hover:bg-yellow-600"
        href="https://github.com/hunter-yeago"
        target="_blank"
        aria-label="View Hunter Yeagos Github - opens in a new tab"
      >
        View Github
      </a>
    </div>
  );
}
