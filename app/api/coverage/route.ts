import { checkCoverageDb } from "@/lib/coverage-db";

export async function GET(request: Request) {
  const cp = new URL(request.url).searchParams.get("cp") || "";
  const result = await checkCoverageDb(cp);
  return Response.json({ result });
}
