"use client";

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextarea({
  id,
  label,
  value,
  error,
  placeholder,
  rows = 5,
  onChange,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      {error && <p className="text-red-600">{error}</p>}
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
      />
    </div>
  );
}
