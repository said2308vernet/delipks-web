import type { BlogPost } from "./blog";

/**
 * Cola de artículos de blog listos para publicación automática semanal.
 * Este archivo NO se importa en app/blog — los posts de aquí no son públicos
 * hasta que la rutina programada los mueva a blogPosts en ./blog.ts.
 *
 * Proceso de publicación (ejecutado 1 vez por semana por una rutina programada):
 * 1. Tomar el primer elemento de `queuedBlogPosts`.
 * 2. Reemplazar su campo `date` por la fecha del día de publicación (YYYY-MM-DD).
 * 3. Insertarlo al inicio del arreglo `blogPosts` en ./blog.ts.
 * 4. Eliminarlo de `queuedBlogPosts` en este archivo.
 * 5. Verificar tipos (tsc --noEmit), hacer commit y push.
 *
 * El campo `date` de cada entrada abajo es un placeholder ("PENDING") — no usar
 * tal cual, siempre debe sobrescribirse con la fecha real de publicación.
 */
export const queuedBlogPosts: BlogPost[] = [
  {
    slug: "habitos-para-dormir-mejor-2026",
    title: "8 hábitos que sí funcionan para dormir mejor, según la ciencia más reciente",
    excerpt:
      "No se trata de dormir más horas a fuerza, sino de dormir mejor. Estos son los hábitos que la evidencia de 2026 respalda para lograrlo.",
    image:
      "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "PENDING",
    content: `Ya sabemos que dormir mal afecta el metabolismo, el ánimo y la salud a largo plazo. La pregunta que más se repite es otra: ¿qué se puede hacer, en concreto, para dormir mejor? Estos son los hábitos que la evidencia más reciente respalda.

## 1. Un horario fijo, todos los días

Acostarte y despertar a la misma hora — incluso los fines de semana — es la base de todo lo demás. Tu cuerpo regula su reloj interno con base en la consistencia, no en cuántas horas duermes una noche puntual. La recomendación general sigue siendo un ciclo de 6 a 8 horas de sueño.

## 2. Apaga las pantallas una hora antes

Este es uno de los hallazgos más citados este año: apagar las pantallas al menos una hora antes de dormir puede mejorar la calidad y continuidad del descanso en más de un 40%. La luz azul de celulares, computadoras y televisión interfiere directamente con la producción de melatonina, la hormona que le indica a tu cuerpo que es momento de dormir.

## 3. Dale a tu cerebro las dos señales que necesita

Según especialistas en sueño, el cerebro humano necesita esencialmente dos señales para reconocer que llegó la hora de dormir: **oscuridad** y **descenso de temperatura**. Por eso una habitación fresca (alrededor de 18°C), oscura y silenciosa hace más diferencia de lo que parece — más que casi cualquier suplemento o truco.

## 4. Construye una rutina nocturna progresiva

No se trata de apagar la luz de golpe. Expertos en longevidad recomiendan una transición gradual: bajar la intensidad de las luces, dejar las pantallas, y dedicar 15-20 minutos a algo tranquilo — leer, estirar, respirar profundo — para que tu cuerpo baje el nivel de alerta poco a poco antes de acostarte.

## 5. Cuidado con las siestas largas

Una siesta puede ayudar, pero solo si es corta. La recomendación es limitarla a 10-20 minutos y hacerla temprano en la tarde. Siestas más largas o tardías interfieren con tu capacidad de conciliar el sueño en la noche.

## 6. Lo que comes también importa

Ciertos alimentos son fuente natural de melatonina y triptófano, compuestos que favorecen el sueño: la leche, los pistaches y las almendras destacan en investigaciones recientes. No sustituyen un buen hábito de sueño, pero pueden ser un aliado dentro de una cena ligera.

## 7. Si usas melatonina, menos es más

Para quienes recurren a suplementos, la evidencia reciente sugiere que dosis bajas (entre 0.5 y 2 mg), tomadas 30-60 minutos antes de dormir, son igual o más efectivas que dosis altas. Como con cualquier suplemento, lo ideal es consultarlo con un profesional de salud antes de incorporarlo de forma regular.

## 8. Trátalo como un hábito, no como una urgencia de fin de semana

El error más común es intentar "recuperar" el sueño perdido durmiendo mucho el sábado. La evidencia es clara en que la consistencia entre semana pesa más que compensaciones puntuales. Dormir bien, como comer bien, funciona mejor como rutina sostenida que como parche ocasional.`,
    sources: [
      { name: "Infobae — 8 claves para mejorar el descanso nocturno y despertar renovado (2026)", url: "https://www.infobae.com/salud/2026/08/04/8-claves-para-mejorar-el-descanso-nocturno-y-despertar-renovado/" },
      { name: "Infobae — La rutina nocturna que recomienda un experto en longevidad para dormir mejor (2026)", url: "https://www.infobae.com/salud/2026/08/07/la-rutina-nocturna-que-recomienda-un-experto-en-longevidad-para-dormir-mejor/" },
      { name: "NIH — Buenos hábitos de sueño para una buena salud", url: "https://salud.nih.gov/recursos-de-salud/nih-noticias-de-salud/buenos-habitos-de-sueno-para-una-buena-salud" },
    ],
  },
];
