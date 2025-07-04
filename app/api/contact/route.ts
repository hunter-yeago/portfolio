export const runtime = "nodejs";

// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }

  const requests = rateLimitStore.get(ip).filter((time: number) => time > windowStart);
  rateLimitStore.set(ip, requests);

  if (requests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  requests.push(now);
  rateLimitStore.set(ip, requests);
  return true;
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json({ error: "Invalid input", details: validationResult.error.errors }, { status: 400 });
    }

    const { name, email, subject, message } = validationResult.data;

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Send email using external service (example with SendGrid)
    await sendEmail({
      from: process.env.EMAIL_USER!,
      to: process.env.RECIPIENT_EMAIL!,
      subject: `Contact Form: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #495057; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #495057;">${sanitizedMessage.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="margin-top: 20px; padding: 10px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from your website contact form.</p>
            <p>Sender IP: ${ip}</p>
            <p>Timestamp: ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${sanitizedName}
        Email: ${email}
        Subject: ${sanitizedSubject}
        
        Message:
        ${sanitizedMessage}
        
        ---
        Sent from website contact form
        IP: ${ip}
        Time: ${new Date().toISOString()}
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Email service function - choose one of these implementations:

// Option 1: Using SendGrid (recommended for production)
import sgMail from "@sendgrid/mail";

// Initialize once with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

console.log("sgMail", sgMail);
console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY);

async function sendEmail(options: { from: string; to: string; subject: string; html: string; text: string }) {
  try {
    const msg = {
      to: options.to,
      from: options.from,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    await sgMail.send(msg);
  } catch (error: any) {
    if (error.response) {
      console.error("SendGrid error response:", error.response.body);
    }
    console.error("the error", error);
    throw new Error(`SendGrid API error: ${error.message}`);
  }
}
