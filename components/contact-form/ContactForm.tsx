"use client";

import { useState } from "react";
import FormInput from "./FormInput";

import FormStatus from "./FormStatus";
import FormTextarea from "./FormTextArea";
import { FormData, FormErrors } from "@/types/types";
import { validateForm, submitContactForm } from "@/utils/form";
import HoneyPot from "./HoneyPot";
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validateForm(formData);
    setErrors(errors);

    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContactForm(formData);

      if (result.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      className="flex flex-col px-4 md:px-16 gap-4 w-[min(900px,100%)] mx-auto items-center"
      id="contact"
    >
      <h2 className="text-3xl">Contact</h2>
      <div className="p-6 bg-white rounded-lg shadow-lg w-full">
        <FormStatus status={submitStatus} />

        {submitStatus !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              id="name"
              label="Name *"
              value={formData.name}
              error={errors.name}
              placeholder="Your full name"
              onChange={handleChange}
            />

            <FormInput
              id="email"
              label="Email *"
              type="email"
              value={formData.email}
              error={errors.email}
              placeholder="your.email@example.com"
              onChange={handleChange}
            />

            <FormInput
              id="subject"
              label="Subject *"
              value={formData.subject}
              error={errors.subject}
              placeholder="What's this about?"
              onChange={handleChange}
            />

            <FormTextarea
              id="message"
              label="Message *"
              value={formData.message}
              error={errors.message}
              placeholder="Your message here..."
              onChange={handleChange}
            />

            <HoneyPot value={formData.website} onChange={handleChange} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
