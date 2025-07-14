export default function HoneyPot({
  value,
  onChange,
}: {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="hidden">
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
        htmlFor="website"
      >
        Honeypot
      </label>
      <input
        className="className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 `}"
        type="text"
        name="website"
        value={value ?? ""}
        autoComplete="false"
        aria-hidden="true"
        tabIndex={-1}
        onChange={onChange}
      />
    </div>
  );
}
