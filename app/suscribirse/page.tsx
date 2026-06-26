import Link from "next/link";

export const metadata = {
  title: "Suscríbete — Delipks Newsletter",
  description: "Recibe tips de alimentación saludable, recetas y ofertas exclusivas de Delipks.",
};

const MAILCHIMP_URL =
  "https://delipks.us14.list-manage.com/subscribe/post?u=73f6a27d9985163fef07e4cff&id=8d57edd8be&f_id=00dab8e5f0";

const objectives = [
  "Comer más saludable",
  "Ahorrar tiempo en la cocina",
  "Mejorar mi rendimiento deportivo",
];

export default function SuscribirsePage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-4">
        <Link href="/" className="text-[13px] text-muted transition-opacity hover:opacity-70">
          ← Volver al inicio
        </Link>
      </div>

      <div className="mb-8 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Newsletter
        </span>
        <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
          Recibe tips, recetas y ofertas
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          Suscríbete y cada semana te enviamos contenido sobre alimentación saludable y
          promociones exclusivas. Sin spam, cancela cuando quieras.
        </p>
      </div>

      <form
        action={MAILCHIMP_URL}
        method="post"
        className="space-y-4 rounded-2xl border border-border bg-white p-7"
      >
        <div>
          <label htmlFor="nl-name" className="mb-1.5 block text-[13px] font-medium text-ink">
            Nombre *
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
            Apellidos *
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
            Email *
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
            Celular *
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

        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-ink">
            Cumpleaños *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <select
              name="BIRTHDAY[month]"
              required
              className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary"
            >
              <option value="">Mes</option>
              {["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"].map((mes, i) => (
                <option key={mes} value={String(i + 1).padStart(2, "0")}>
                  {mes}
                </option>
              ))}
            </select>
            <select
              name="BIRTHDAY[day]"
              required
              className="w-full rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary"
            >
              <option value="">Día</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-[13px] font-medium text-ink">¿Cuál es tu objetivo? *</legend>
          <div className="space-y-2">
            {objectives.map((obj) => (
              <label key={obj} className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-border px-3.5 py-2.5 text-sm text-muted transition-colors hover:border-primary hover:text-ink">
                <input
                  type="radio"
                  name="OBJECTIVE"
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
    </main>
  );
}
