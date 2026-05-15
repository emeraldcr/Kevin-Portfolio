"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    return `mailto:kevinrd1171@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please complete the required fields before preparing your message.");
      return;
    }

    setStatus("Your message is ready. Use the Send Email button to open your email app.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 sm:p-8">
      <p className="mb-6 text-sm leading-6 text-slate-300">
        This form prepares your message. You can send it directly by email.
      </p>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Name
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70"
            placeholder="Your name"
          />
          {errors.name ? <span className="text-xs text-rose-300">{errors.name}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70"
            placeholder="you@example.com"
          />
          {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Message
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="min-h-36 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70"
            placeholder="Tell me about your project, opportunity or question."
          />
          {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
        </label>
      </div>
      {status ? <p className="mt-5 text-sm text-emerald-200">{status}</p> : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-emerald-300">
          Prepare Message
        </button>
        <a href={mailtoHref} className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-100 transition duration-300 hover:-translate-y-1 hover:bg-emerald-300/20">
          Send Email
        </a>
      </div>
    </form>
  );
}
