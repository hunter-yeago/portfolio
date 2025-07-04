export default function FormStatus({ status }: { status: "success" | "error" | null }) {
  if (status === "success") {
    return (
      <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">Thank you for your message! We&apos;ll get back to you soon.</div>
    );
  }

  if (status === "error") {
    return (
      <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">Sorry, there was an error sending your message. Please try again.</div>
    );
  }

  return null;
}
