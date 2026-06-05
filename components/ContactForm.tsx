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
    const subject = encodeURIComponent(`Contacto desde portafolio - ${form.name || "Visitante"}`);
    const body = encodeURIComponent(`${form.message}\n\nNombre: ${form.name}\nEmail: ${form.email}`);
    return `mailto:kevinrd1171@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  function validate(): FormErrors {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "El nombre es requerido.";
    if (!form.email.trim()) {
      nextErrors.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Ingresa un correo válido.";
    }
    if (!form.message.trim()) nextErrors.message = "El mensaje es requerido.";
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Completa los campos requeridos antes de preparar el mensaje.");
      return;
    }

    setStatus("Mensaje listo. Usa el botón de correo para abrir tu cliente de email.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
      <div className="mb-7">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-emerald-200">Contacto directo</p>
        <h3 className="mt-3 text-2xl font-black text-white">Cuéntame sobre tu oportunidad o proyecto.</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">El formulario prepara un correo con tu mensaje para mantener la experiencia rápida, segura y sin dependencias pesadas.</p>
      </div>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          Nombre
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/10"
            placeholder="Tu nombre"
            autoComplete="name"
          />
          {errors.name ? <span className="text-xs text-rose-300">{errors.name}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/10"
            placeholder="tu@email.com"
            autoComplete="email"
          />
          {errors.email ? <span className="text-xs text-rose-300">{errors.email}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-200">
          Mensaje
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="min-h-36 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/10"
            placeholder="Háblame del rol, proyecto, entrevista o idea turística/digital."
          />
          {errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}
        </label>
      </div>
      {status ? <p className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-100">{status}</p> : null}
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition duration-300 hover:-translate-y-1">
          Preparar mensaje
        </button>
        <a href={mailtoHref} className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-5 py-3 text-sm font-black text-emerald-100 transition duration-300 hover:-translate-y-1 hover:bg-emerald-300/20">
          Enviar email
        </a>
      </div>
    </form>
  );
}
