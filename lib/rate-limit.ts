import "server-only";
import { sql } from "@/lib/db";

// Mismo mecanismo que delipks-admin/lib/rate-limit.ts -- tabla compartida
// rate_limits (misma base Neon, ver schema.sql en delipks-admin). Ventana
// fija con upsert atomico, sin plataforma externa (Upstash/Vercel KV).
//
// Falla abierto a proposito: si Neon tiene un hipo transitorio, dejar pasar
// la peticion es mejor que tumbar el checkout de PayPal completo -- el rate
// limiting es una defensa contra abuso, no debe volverse un punto unico de
// falla para ventas reales.
export async function dentroDelLimite(clave: string, maximo: number, ventanaMinutos: number): Promise<boolean> {
  try {
    const { rows } = await sql`
      insert into rate_limits (clave, contador, ventana_inicio)
      values (${clave}, 1, now())
      on conflict (clave) do update set
        contador = case when rate_limits.ventana_inicio < now() - (${ventanaMinutos} || ' minutes')::interval
                        then 1 else rate_limits.contador + 1 end,
        ventana_inicio = case when rate_limits.ventana_inicio < now() - (${ventanaMinutos} || ' minutes')::interval
                        then now() else rate_limits.ventana_inicio end
      returning contador
    `;
    const contador = rows[0]?.contador as number;
    return contador <= maximo;
  } catch (err) {
    console.error(`No se pudo aplicar rate limiting para "${clave}", se deja pasar la petición:`, err);
    return true;
  }
}

export function ipDelRequest(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "desconocida";
}
