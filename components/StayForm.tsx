"use client";

import { useState } from "react";
import { copy, roomValues, site } from "@/content/site";
import type { Lang } from "@/lib/routes";

export function StayForm({ lang }: { lang: Lang }) {
  const text = copy[lang].form;
  const [status, setStatus] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus(text.need);
      return;
    }
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${String(data.get("phone") ?? "").trim()}`,
      `Guests: ${String(data.get("guests") ?? "").trim()}`,
      `Arrival: ${String(data.get("arrival") ?? "")}`,
      `Departure: ${String(data.get("departure") ?? "")}`,
      `House: ${String(data.get("room") ?? "")}`,
      `Language: ${lang}`,
      "",
      message,
    ];
    const href = `mailto:${site.email}?subject=${encodeURIComponent(text.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus(text.sent);
    window.location.href = href;
  }

  return (
    <form id="enquiry" className="grid gap-4" onSubmit={onSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={text.name} name="name" autoComplete="name" required />
        <Field label={text.email} name="email" type="email" autoComplete="email" required />
        <Field label={text.phone} name="phone" type="tel" autoComplete="tel" />
        <Field label={text.guests} name="guests" type="number" min={1} />
        <Field label={text.arrival} name="arrival" type="date" />
        <Field label={text.departure} name="departure" type="date" />
      </div>
      <label className="grid gap-1.5 text-sm">
        {text.room}
        <select name="room" className="rounded-xl border border-line bg-paper px-3 py-3 text-ink" defaultValue="">
          <option value="">{text.roomAny}</option>
          {roomValues.map(([value, en, th]) => (
            <option key={value} value={value}>
              {lang === "th" ? th : en}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm">
        {text.message}
        <textarea name="message" required rows={5} className="rounded-xl border border-line bg-paper px-3 py-3 text-ink" />
      </label>
      <div>
        <button type="submit" className="rounded-xl bg-clay px-5 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:bg-moss-deep">
          {text.submit}
        </button>
        <p className="mt-3 text-sm text-muted">{text.hint}</p>
        <p className="mt-2 text-sm text-moss-deep" role="status" aria-live="polite">
          {status}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  min?: number;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        min={min}
        className="rounded-xl border border-line bg-paper px-3 py-3 text-ink"
      />
    </label>
  );
}
