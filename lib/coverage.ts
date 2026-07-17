// Cobertura de entrega por código postal.
// Actualizar cuando se confirmen colonias exactas.
// Rango actual: municipio de Puebla + San Andrés Cholula + San Pedro Cholula (72000–72979)

export type CoverageResult = "covered" | "uncovered" | "invalid";

export function checkCoverage(cp: string): CoverageResult {
  const trimmed = cp.trim();
  if (!/^\d{5}$/.test(trimmed)) return "invalid";
  const num = parseInt(trimmed, 10);
  if (num >= 72000 && num <= 72979) return "covered";
  return "uncovered";
}
