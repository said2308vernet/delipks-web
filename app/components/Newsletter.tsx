"use client";

import { useState } from "react";

const MAILCHIMP_URL =
  "https://delipks.us14.list-manage.com/subscribe/post?u=73f6a27d9985163fef07e4cff&id=8d57edd8be&f_id=00dab8e5f0";

const objectives = [
  "Comer más saludable",
  "Ahorrar tiempo en la cocina",
  "Mejorar mi rendimiento deportivo",
];

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="rounded-2xl border border-border bg-white p-10 text-center">
          <span className="mb-3 inline-block text-4xl">✅</span>
          <h3 className="mb-2 font-display text-xl font-semibold text-ink">
            ¡Listo, te suscribiste!
          </h3>
          <p className="text-sm text-muted">
            Revisa tu correo para confirmar tu suscripción. Pronto recibirás tips, recetas y ofertas exclusivas.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="rounded-2xl border border-border bg-white p-7 lg:p-9">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
              Newsletter
            </span>
            <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
              Recibe tips, recetas y ofertas
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Suscríbete y cada semana te enviamos contenido sobre alimentación saludable y
              promociones exclusivas para suscriptores. Sin spam, cancela cuando quieras.
            </p>
          </div>

          <form
            action={MAILCHIMP_URL}
            method="post"
            target="_blank"
            onSubmit={() => setTimeout(() => setSubmitted(true), 500)}
            className="space-y-4"
          >
            <div>
              <label htmlFor="nl-name" className="mb-1.5 block text-[13px] font-medium text-ink">
                Nombre
              </label>
              <input
                type="text"
                name="FNAME"
                id="nl-name"
                required
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="nl-lname" className="mb-1.5 block text-[13px] font-medium text-ink">
                Apellidos
              </label>
              <input
                type="text"
                name="LNAME"
                id="nl-lname"
                required
                placeholder="Tus apellidos"
                className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="nl-email" className="mb-1.5 block text-[13px] font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                name="EMAIL"
                id="nl-email"
                required
                placeholder="tu@email.com"
                className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="nl-phone" className="mb-1.5 block text-[13px] font-medium text-ink">
                Celular
              </label>
              <input
                type="tel"
                name="PHONE"
                id="nl-phone"
                required
                placeholder="221 000 0000"
                className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-[13px] font-medium text-ink">¿Cuál es tu objetivo? *</legend>
              <div className="space-y-2">
                {objectives.map((obj) => (
                  <label key={obj} className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3.5 py-2.5 text-sm text-muted transition-colors hover:border-primary hover:text-ink">
                    <input
                      type="radio"
                      name="MMERGE6"
                      value={obj}
                      required
                      className="accent-primary"
                    />
                    {obj}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Honeypot anti-bot */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_73f6a27d9985163fef07e4cff_8d57edd8be" tabIndex={-1} defaultValue="" />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
            >
              Suscribirme
            </button>

            <p className="text-center text-[11px] text-muted">
              Sin spam · Cancela cuando quieras · Tus datos están protegidos
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
