import "server-only";
import { sql } from "@/lib/db";

export type CoverageResult = "covered" | "uncovered" | "invalid";

// Cobertura real (editable desde el admin, tabla cobertura_cp) -- distinto
// del rango fijo en lib/coverage.ts, que solo alimenta el widget informativo
// "¿Llegamos a tu zona?" del home y no bloquea ni afecta pedidos reales.
export async function checkCoverageDb(cp: string): Promise<CoverageResult> {
  const trimmed = cp.trim();
  if (!/^\d{5}$/.test(trimmed)) return "invalid";
  const num = parseInt(trimmed, 10);

  const { rows } = await sql`
    select 1 from cobertura_cp
    where activo = true and cp_desde <= ${num} and cp_hasta >= ${num}
    limit 1
  `;
  return rows.length > 0 ? "covered" : "uncovered";
}
