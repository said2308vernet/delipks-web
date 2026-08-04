@AGENTS.md

# CLAUDE.md — Delipks Web Project
# Contexto estratégico y de marca para Claude Code en VS Code
# Versión: 1.1 · Julio 2026
# Fuente: Sistema de Documentación Corporativa Delipks (Docs 00–14)

---

## 🌿 QUÉ ES DELIPKS

Delipks es un servicio de **meal prep semanal** con base en **Puebla de Zaragoza, México**.
Preparamos la alimentación completa de lunes a viernes (desayunos, comidas y cenas) y la entregamos a domicilio en **una sola entrega semanal (domingo)**, lista para consumir sin cocinar ni planear.

**Sitio web:** www.delipks.com  
**Lanzamiento oficial:** 1 de agosto de 2026  
**Zona de entrega:** Puebla de Zaragoza y zona metropolitana  
**Modelo:** suscripción semanal renovable  
**Stack:** Next.js + Vercel + GitHub

---

## 🎯 PROPUESTA DE VALOR OFICIAL

> "En Delipks preparamos tu alimentación completa de lunes a viernes: desayunos, comidas y cenas listos para consumir, organizados por día y entregados en tu domicilio. Sin cocinar, sin planear, sin gastar de más."

**Tagline activo en el sitio:**
> "Comida saludable y lista, sin preocupaciones."

**Otras frases aprobadas:**
- "Tu alimentación, resuelta de lunes a viernes."
- "Comer bien debería ser fácil. Nosotros lo hacemos posible."
- "Más tiempo para vivir. Nosotros cocinamos."
- "Sin cocinar" — el alivio que genera (usar como ancla emocional)

---

## 🥗 LOS 3 PLANES — NOMENCLATURA EXACTA

> ⚠️ CRÍTICO: Usar SIEMPRE estos nombres exactos. Nunca "Intermedio", "Individual", "Pareja", "Familiar" ni "Light".

| Plan | Comidas por semana | Descripción |
|---|---|---|
| **Plan Básico** | 5 comidas | Solo comida principal, lunes a viernes. |
| **Plan Equilibrado** | 10 comidas | Desayuno + comida de lunes a viernes. El más popular. ⭐ |
| **Plan Completo** | 15 comidas | Desayuno, comida y cena de lunes a viernes. |

**Precios confirmados (suscripción / puntual):**

| Plan | Suscripción semanal | Compra puntual |
|---|---|---|
| Plan Básico | $810 MXN | $900 MXN |
| Plan Equilibrado | $1,485 MXN | $1,650 MXN |
| Plan Completo | $2,160 MXN | $2,400 MXN |

*Suscripción: compromiso mensual (4 semanas) con −10% · Precios con IVA*

**Entregas:** 1 vez por semana (domingo), cubre lunes a viernes completo. **Producción:** sábado (día previo a la entrega). **Cierre de pedidos:** viernes 8pm para la semana siguiente.

---

## 🎨 IDENTIDAD VISUAL

### Paleta de colores oficial

```css
--verde-delipks:     #005C31;  /* Principal. Botones primarios, headers, logo */
--verde-medio:       #008548;  /* Secundario. Subtítulos, iconos, highlights */
--verde-brillante:   #3DB54D;  /* Acento. Badges, checks, éxito */
--verde-claro:       #E8F5E9;  /* Fondos de sección, cards suaves */
--verde-menta:       #F0FAF3;  /* Fondos muy suaves, hover states */
--naranja-delipks:   #F5812D;  /* CTAs de conversión, precios, urgencia */
--naranja-claro:     #FFF3EA;  /* Fondos de alertas suaves */
--negro-delipks:     #060303;  /* Texto principal */
--blanco:            #FFFFFF;  /* Fondo base */
--gris-texto:        #555555;  /* Texto secundario */
--gris-borde:        #CCCCCC;  /* Bordes, divisores */
--gris-fondo:        #F7F7F7;  /* Fondos neutrales */
```

### Tipografía oficial

```css
--fuente-titulos:   'Manrope', sans-serif;   /* SemiBold 600, Bold 700 */
--fuente-cuerpo:    'Inter', sans-serif;     /* Regular 400, Medium 500 */

/* Uso:
   h1–h3, planes, CTAs → Manrope SemiBold/Bold
   Cuerpo, descripciones → Inter Regular/Medium
*/
```

### Logo
- Archivo: `L 1.2.png`
- No deformar, no cambiar colores, no agregar sombras

### Decisión — CTAs en verde (2026-08-03)
Los botones de conversión (Elegir plan / Pedir ahora, Confirmar por WhatsApp) se quedan en **verde**, no en naranja. El verde a usar es específicamente **`#008548`** — el verde de la letra "D" del isotipo de Delipks (no el `#005C31` genérico de la tabla de paleta). El naranja `#F5812D` queda reservado para posibles usos futuros de urgencia/promociones puntuales, pero no es obligatorio en los CTAs principales. Esta decisión reemplaza lo indicado en la sección "CTAs principales" y en la regla 4 más abajo.

---

## 📱 CANALES DIGITALES

| Canal | Uso |
|---|---|
| Instagram | Principal — contenido de comida, reels, ventas |
| Facebook | Comunidad y anuncios pagados |
| TikTok | Videos cortos |
| WhatsApp | Ventas directas, atención al cliente |
| Email | Sin formulario de suscripción en la web. Los correos se recaban conforme los clientes compran (vía WhatsApp) y los envíos se hacen manualmente desde el correo de Delipks |

**Horario de atención:** L–V 8am–8pm · Sáb 9am–3pm · Respuesta máx. 30 min

---

## 🌐 SECCIONES REQUERIDAS EN LA WEB

### Obligatorias antes del 25 de julio 2026:
1. **Hero** — tagline + CTA primario + imagen apetitosa
2. **Cómo funciona** — 3-4 pasos (pide → preparamos → entregamos → disfruta)
3. **Los 3 planes** — Básico, Equilibrado, Completo con descripción y precio
4. **Muestra del menú** — ejemplo semana típica (fotos pendientes del chef)
5. **Botón WhatsApp** — flotante en **móvil**; en **desktop se oculta** y su lugar lo toma el CTA fijo de WhatsApp en el Header (decisión 2026-08-03)
6. **Footer** — logo, redes, horarios, zona de entrega, aviso de privacidad

### Post-lanzamiento:
7. ~~Testimonios~~ — **quitados del home por ahora** (2026-08-03): los que había usaban avatares/fotos genéricas, no clientes reales. Reactivar solo con testimonios auténticos. · 8. Sobre nosotros · 9. FAQ · 10. Blog/Recetas

---

## 📣 TONO Y VOZ DE MARCA

**Personalidad:** cálida, cercana, profesional. No clínica. No pretenciosa.

✅ USAR: tuteo (tú/tu), "alimentación", "frescura", "sin cocinar", "entregamos a tu puerta"  
❌ EVITAR: "usted", precios sin confirmar

**Regla de "dieta"/"calorías" (actualizada 2026-08-03):**
- **Blog** (`lib/blog.ts`): sin restricción — son notas de contenido cultural/educativo, pueden usar "dieta", "calorías", "bajar de peso" libremente.
- **Resto del sitio** (Hero, Planes, Carrito, etc.): evitar únicamente la palabra **"dieta"**. "Calorías"/"kcal" y "bajar de peso" ya están permitidos fuera del blog. Esta relajación es temporal, **hasta que Delipks entre en fase 2 y 3**, momento en el que se debe revisar de nuevo el criterio.

**CTAs principales:**
- Hero: `"Ver planes"` / `"Quiero empezar"`
- Planes: `"Pedir ahora"` — en verde `#008548` (ver decisión de CTAs en verde, arriba)
- Flotante: botón WhatsApp (solo móvil)

---

## 🔧 STACK TECNOLÓGICO

| Herramienta | Uso |
|---|---|
| **Next.js** | Framework web |
| **Vercel** | Hosting y despliegue automático |
| **GitHub** | Control de versiones |
| **Meta Pixel** | Tracking de conversiones — debe estar en `<head>` de todas las páginas |

---

## 🧑 CLIENTE IDEAL

- Profesionista 28–45 años, Puebla, 8+ horas de trabajo diario
- Gasta $150–$300/día en comida fuera. Quiere comer mejor sin sacrificar tiempo
- Llega desde Instagram o WhatsApp — diseñar **mobile first**

---

## ⚠️ PENDIENTES — NO PUBLICAR AÚN

| Dato | Estado |
|---|---|
| Precios de los 3 planes | ✅ Confirmados (ver tabla de planes) |
| Fotos reales de platillos | ⏳ Pendiente del chef |
| Catálogo de recetas | ✅ 41 platillos definidos y aprobados por el Comité Delipks (Doc 04 v2.0) |
| Menú real de la semana | ⏳ Catálogo listo; falta armar las 4 semanas rotativas a partir de él |
| Zonas exactas de entrega | ⏳ Confirmar colonias |
| Días exactos de entrega | ✅ Domingo (entrega única, cubre lunes-viernes) |

---

## 🛠️ REGLAS PARA CLAUDE CODE AL EDITAR ESTE PROYECTO

1. Los planes son siempre **Básico / Equilibrado / Completo** — nunca otra variante
2. No hardcodear precios hasta tener confirmación del Doc 05
3. Tono en tuteo — sin "usted", sin lenguaje médico. Evitar la palabra "dieta" fuera del blog (ver regla actualizada arriba); "calorías"/"kcal" sí están permitidas fuera del blog
4. Colores: CTAs principales y de conversión (Elegir plan/Pedir ahora, Confirmar por WhatsApp) van en **verde `#008548`** (verde de la letra D del logo) — no en naranja, ver decisión 2026-08-03 arriba. El resto de la paleta sigue el manual de marca oficial (Doc 02)
5. Botón WhatsApp: flotante y visible en móvil; en desktop se reemplaza por el CTA de WhatsApp fijo del Header
6. No agregar formularios de suscripción/captura de leads (Mailchimp u otros) — la web no ofrece ningún punto de suscripción; los correos de clientes se recaban al comprar (WhatsApp) y los envíos se hacen manualmente desde el correo de Delipks
7. Meta Pixel en el `<head>` de todas las páginas
8. Alt text en español en todas las imágenes. Formato WebP preferido
9. Diseño **mobile first** — clientes llegan desde Instagram/WhatsApp
10. SEO: title tags con "Delipks" + servicio · meta descriptions con propuesta de valor

---

## 📊 KPIs DE LANZAMIENTO (agosto 2026)

- ≥ 30 clientes activos · ≥ 10 pedidos anticipados · ≥ 300 seguidores IG
- ≥ 3% engagement · ≥ 4.2/5 CSAT · < $150 MXN CAC · < 30 min respuesta

---

*Generado por el sistema de documentación Delipks · Julio 2026*
*Sincronizar con OneDrive\Documentos\Negocio\Delipks\ cuando haya cambios importantes*
