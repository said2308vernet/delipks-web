import "server-only";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

// Misma base de datos Postgres (Neon) que usa delipks-admin -- delipks-web
// solo escribe en pedidos_paypal, ver db/schema.sql en delipks-admin.
let cachedSql: NeonQueryFunction<false, true> | null = null;

function getSql() {
  if (!cachedSql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("Falta la variable de entorno DATABASE_URL.");
    }
    cachedSql = neon(connectionString, { fullResults: true });
  }
  return cachedSql;
}

export const sql: NeonQueryFunction<false, true> = ((...args: Parameters<NeonQueryFunction<false, true>>) =>
  getSql()(...args)) as NeonQueryFunction<false, true>;
