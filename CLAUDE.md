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

---

## 📱 CANALES DIGITALES

| Canal | Uso |
|---|---|
| Instagram | Principal — contenido de comida, reels, ventas |
| Facebook | Comunidad y anuncios pagados |
| TikTok | Videos cortos |
| WhatsApp | Ventas directas, atención al cliente |
| Email | Captura de leads via Mailchimp |

**Horario de atención:** L–V 8am–8pm · Sáb 9am–3pm · Respuesta máx. 30 min

---

## 🌐 SECCIONES REQUERIDAS EN LA WEB

### Obligatorias antes del 25 de julio 2026:
1. **Hero** — tagline + CTA primario + imagen apetitosa
2. **Cómo funciona** — 3-4 pasos (pide → preparamos → entregamos → disfruta)
3. **Los 3 planes** — Básico, Intermedio, Completo con descripción y precio
4. **Muestra del menú** — ejemplo semana típica (fotos pendientes del chef)
5. **Formulario Mailchimp** — lista de espera / pedidos
6. **Botón WhatsApp** — flotante, siempre visible en móvil y desktop
7. **Footer** — logo, redes, horarios, zona de entrega, aviso de privacidad

### Post-lanzamiento:
8. Testimonios · 9. Sobre nosotros · 10. FAQ · 11. Blog/Recetas

---

## 📣 TONO Y VOZ DE MARCA

**Personalidad:** cálida, cercana, profesional. No clínica. No pretenciosa.

✅ USAR: tuteo (tú/tu), "alimentación", "frescura", "sin cocinar", "entregamos a tu puerta"  
❌ EVITAR: "usted", "dieta", "calorías", "bajar de peso", precios sin confirmar

**CTAs principales:**
- Hero: `"Ver planes"` / `"Quiero empezar"`
- Planes: `"Pedir ahora"` — siempre en naranja `#F5812D`
- Flotante: botón WhatsApp

---

## 🔧 STACK TECNOLÓGICO

| Herramienta | Uso |
|---|---|
| **Next.js** | Framework web |
| **Vercel** | Hosting y despliegue automático |
| **GitHub** | Control de versiones |
| **Mailchimp** | Formulario de captura de leads |
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

1. Los planes son siempre **Básico / Intermedio / Completo** — nunca otra variante
2. No hardcodear precios hasta tener confirmación del Doc 05
3. Tono en tuteo — sin "usted", sin lenguaje médico
4. CTAs de alta conversión en verde primario `#007a3d` (color oficial del sitio)
5. Botón WhatsApp debe ser visible y funcional en todo momento
6. Verificar que el formulario Mailchimp esté conectado antes del lanzamiento
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
