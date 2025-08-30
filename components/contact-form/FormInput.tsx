"use client";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id,
  label,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      {error && <p className=" text-red-600">{error}</p>}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
      />
    </div>
  );
}
