import { checkCoverageDb } from "@/lib/coverage-db";
import { dentroDelLimite, ipDelRequest } from "@/lib/rate-limit";

export async function GET(request: Request) {
  // El frontend ya debounce esta llamada (CartDrawer.tsx), un uso normal
  // nunca se acerca a este limite -- solo frena scripts de abuso.
  const permitido = await dentroDelLimite(`coverage:ip:${ipDelRequest(request)}`, 30, 10);
  if (!permitido) {
    return Response.json({ error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." }, { status: 429 });
  }

  const cp = new URL(request.url).searchParams.get("cp") || "";
  const result = await checkCoverageDb(cp);
  return Response.json({ result });
}
