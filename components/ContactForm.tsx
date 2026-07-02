"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/content/site";

const FIELD_CLASSES =
  "w-full border border-fog bg-icy px-4 py-3 text-sm text-ink placeholder:text-mist/80 outline-none transition-colors duration-300 focus:border-teal focus:bg-white";

/**
 * Contact form in the style of the reference design. There is no backend —
 * submitting composes a pre-filled email in the visitor's mail client.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Website enquiry from ${name}${company ? ` — ${company}` : ""}`;
    const body = [
      message,
      "",
      "—",
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      country ? `Country: ${country}` : null,
      email ? `Email: ${email}` : null,
    ]
      .filter((line): line is string => line !== null)
      .join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-bold text-ink">The contact form</h3>
      <div>
        <label htmlFor="cf-name" className="sr-only">
          Your name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="cf-company" className="sr-only">
          Company name
        </label>
        <input
          id="cf-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="cf-country" className="sr-only">
          Country
        </label>
        <input
          id="cf-country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="cf-email" className="sr-only">
          E-mail
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          className={FIELD_CLASSES}
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">
          Your message
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className={`${FIELD_CLASSES} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-teal px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-aqua hover:text-petrol"
      >
        Send
      </button>
      <p className="text-xs leading-relaxed text-mist">
        Sending opens your email client with the message pre-filled — or write
        to us directly at{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="link-underline font-medium text-teal"
        >
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}
