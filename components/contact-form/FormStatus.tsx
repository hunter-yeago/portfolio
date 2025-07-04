interface FormStatusProps {
  status: "success" | "error" | null;
}

const messages = {
  success: "Thank you for your message! I will get back to you soon.",
  error: "Sorry, there was an error sending your message. Please try again.",
};

export default function FormStatus({ status }: FormStatusProps) {
  if (!status) return null;

  const isSuccess = status === "success";
  const message = messages[status];
  const statusClasses = isSuccess
    ? "border-green-400 bg-green-100 text-green-700"
    : "border-red-400 bg-red-100 text-red-700";

  return (
    <p className={`mb-4 p-4 border rounded ${statusClasses}`}>{message}</p>
  );
}
