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
    slug: "proteina-y-longevidad",
    title: "¿Menos proteína, más vida? Lo que dice (y no dice) el nuevo estudio sobre longevidad",
    excerpt:
      "Un estudio de 2026 sobre restricción de proteína y envejecimiento se volvió viral. Antes de cambiar tus hábitos, esto es lo que realmente encontró la ciencia — y sus límites.",
    image:
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "PENDING",
    content: `Un estudio publicado el 31 de julio de 2026 en la revista Cell Press Blue generó titulares llamativos: comer menos proteína podría ayudarte a vivir más. Pero como suele pasar con la ciencia de la nutrición, el mensaje completo es más matizado que el titular.

## Lo que encontró la revisión

Se trata de una revisión de más de 350 estudios sobre restricción de proteína y envejecimiento. El hallazgo central: en modelos animales, comer menos proteína se asoció de forma consistente con una vida más larga y saludable. En ratones, específicamente, los que llevaban dietas bajas en proteína vivieron entre 30% y 50% más que los que comían una dieta estándar.

## Cómo explican el mecanismo

Los investigadores señalan que la restricción de proteína activa una hormona llamada FGF21, que aumenta el gasto energético del cuerpo, mejora el control de azúcar en sangre y reduce la inflamación — tres factores estrechamente ligados al envejecimiento saludable.

Un dato interesante: el efecto no parece depender de reducir toda la proteína por igual, sino específicamente de reducir ciertos aminoácidos, como la isoleucina y la metionina. Es decir, el "qué" importa tanto como el "cuánto".

## Lo que el estudio NO dice

Aquí está la parte que muchos titulares omitieron. La gran mayoría de la evidencia de esta revisión proviene de estudios en ratones, ratas, moscas y peces — no en personas. Científicos independientes consultados sobre la revisión fueron claros: extrapolar directamente estos resultados a humanos es prematuro.

Los propios autores de la revisión reconocen esto y son explícitos en un punto clave: las recomendaciones de proteína deberían personalizarse según la edad, el nivel de actividad física y necesidades de salud específicas — por ejemplo, deportistas o personas embarazadas requieren más proteína, no menos.

## ¿Qué significa esto para ti, hoy?

No es una señal para bajar drásticamente tu consumo de proteína, especialmente si entrenas, si estás en un proceso de recuperación muscular, o si tu objetivo es mantener masa magra conforme envejeces — ahí la evidencia en humanos sigue siendo clara: la proteína adecuada protege el músculo y la función física.

Lo que sí es un buen recordatorio es que "más proteína siempre es mejor" tampoco es la respuesta completa. Como con la mayoría de la nutrición, el objetivo realista es un rango adecuado a tu edad y actividad — ni en exceso ni en déficit — y no perseguir titulares que aún no tienen suficiente respaldo en estudios con personas.`,
    sources: [
      { name: "TIME — Eating Less Protein May Help You Age Better and Live Longer, Research Says (2026)", url: "https://time.com/article/2026/08/03/eat-less-protein-age-better-live-longer/" },
      { name: "ScienceDaily — Eating less protein could slow aging, major review finds (2026)", url: "https://www.sciencedaily.com/releases/2026/08/260801042811.htm" },
      { name: "USC Today — Low-protein, amino acid-supplemented 'longevity diet' linked to longer healthy lifespan, lower frailty risk, better metabolic health (2026)", url: "https://today.usc.edu/low-protein-amino-acid-supplemented-longevity-diet-linked-to-longer-healthy-lifespan-lower-frailty-risk-better-metabolic-health/" },
    ],
  },
  {
    slug: "tendencias-de-nutricion-2026",
    title: "Tendencias de nutrición 2026: qué está cambiando en la forma en que comemos",
    excerpt:
      "De la salud digestiva a la sostenibilidad, así se ve el panorama de la nutrición este año, según los reportes y expertos más recientes.",
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "PENDING",
    content: `Cada año cambian las prioridades alrededor de la comida — no porque la nutrición básica cambie, sino porque la evidencia científica y los intereses de los consumidores evolucionan. Esto es lo que está marcando la conversación en 2026.

## Salud digestiva, la gran protagonista

Los alimentos fermentados están viviendo un momento importante: kéfir, kimchi, chucrut y otros fermentados están multiplicando sus ventas porque la evidencia sobre su impacto en la microbiota — y su relación con la energía diaria y la digestión — sigue creciendo. Las legumbres integrales, ricas en fibra prebiótica, también están al alza por la misma razón.

## La proteína no pierde protagonismo

La proteína se mantiene como el componente más buscado en la alimentación a nivel global, con innovaciones constantes en snacks y bebidas fortificadas. Lo que sí está cambiando es el enfoque: cada vez más personas buscan fuentes de proteína versátiles — tanto animales como vegetales — en lugar de depender de un solo tipo.

## Comer pensando en el cerebro, no solo en el cuerpo

Uno de los datos más llamativos de este año: más de la mitad de la generación Z busca activamente alimentos que impacten de forma positiva su bienestar mental, no solo su salud física. Esto está impulsando el interés en nutrientes como omega-3, antioxidantes y compuestos antiinflamatorios, tradicionalmente asociados a la salud cognitiva.

## Envejecer bien, no solo vivir más años

La conversación alrededor del "healthy aging" (envejecimiento saludable) sigue creciendo. Los consumidores buscan cada vez más productos ricos en antioxidantes, fibra, omega-3 y compuestos antiinflamatorios pensando en beneficios a largo plazo: salud cognitiva, inmunológica y metabólica — no solo en verse bien a corto plazo.

## Una nueva forma de pensar el plato

Este año también se habló de una actualización en cómo se representa visualmente una alimentación balanceada, con una base que se centra en frutas, verduras de temporada y fuentes de proteína de alta calidad — reforzando algo que la ciencia lleva años confirmando: la variedad y la calidad importan más que eliminar grupos completos de alimentos.

## Lo que estas tendencias tienen en común

Ninguna de estas tendencias es una moda pasajera de dieta extrema. Todas apuntan en la misma dirección: comer de forma más completa, con ingredientes reconocibles, pensando tanto en el cuerpo como en la mente, y sosteniendo el hábito en el tiempo en lugar de buscar resultados inmediatos.`,
    sources: [
      { name: "El Diario Ecuador — Descubre las 10 tendencias que definirán la nutrición en 2026", url: "https://www.eldiario.ec/salud-vida/las-10-tendencias-alimentarias-de-2026-nutricion-bienestar-y-el-futuro-de-tu-plato-13012026/" },
      { name: "Diario en Positivo — Tendencias de nutrición en 2026: salud digestiva, proteínas y sostenibilidad al alza", url: "https://www.diarioenpositivo.com/articulo/nutricion/tendencias-nutricion-2026-salud-digestiva-proteinas-sostenibilidad-alza/20260322150541076855.html" },
      { name: "Doestepa — Nueva pirámide alimentaria 2026, ¿Cómo afecta a tu dieta?", url: "https://www.doestepa.com/escueladelaceite/nueva-piramide-alimentaria/" },
    ],
  },
  {
    slug: "alcohol-y-salud-evidencia-2026",
    title: "Una copa al día: lo que dice la evidencia más reciente sobre alcohol y salud",
    excerpt:
      "Durante años se creyó que una copa de vino diaria era inofensiva o hasta beneficiosa. La evidencia científica de 2026 dice algo distinto.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "PENDING",
    content: `Por años circuló la idea de que una copa de vino al día era, en el peor de los casos, inofensiva — y en el mejor, buena para el corazón. La evidencia científica publicada en 2026 pone en duda esa idea de forma bastante contundente.

## El estudio que cambió la conversación

Un estudio publicado en el Journal of Studies on Alcohol and Drugs y ampliamente difundido en 2026 concluye que incluso una sola bebida alcohólica al día incrementa el riesgo de mortalidad. Se trata, según los propios investigadores, de la estimación más amplia hasta la fecha sobre el riesgo del consumo de alcohol a lo largo de la vida en términos de mortalidad y enfermedad.

Los datos son específicos: el estudio encontró un mayor riesgo de mortalidad en 1 de cada 25 personas que consumen un promedio de 14 unidades de alcohol a la semana (aproximadamente 2 bebidas diarias), mientras que consumir la mitad — 7 unidades semanales, cerca de una copa al día — también se asocia con un incremento medible del riesgo en la mayoría de las condiciones de salud analizadas.

## No solo es cantidad, también es tipo

Otro estudio de 2026 encontró que el tipo de alcohol que eliges también influye en tu riesgo de mortalidad — no todas las bebidas alcohólicas tienen el mismo perfil de riesgo, aunque ninguna queda exenta.

## ¿Y el mito del "consumo seguro"?

Un investigador citado ampliamente este año lo resume así: dos bebidas alcohólicas al día — lo que socialmente se considera "moderado" — están asociadas a un riesgo elevado de muerte prematura. La conclusión de la evidencia reciente es clara: no existe un nivel de consumo de alcohol completamente libre de riesgo. Lo que existe son distintos niveles de riesgo, y ese riesgo se acelera notablemente después de una bebida al día.

## ¿Qué significa esto en términos prácticos?

No se trata de generar alarma sobre una copa ocasional en una celebración. Se trata de dejar de ver el consumo diario o casi diario como un hábito "saludable" o neutro — una idea que durante mucho tiempo se basó en estudios con limitaciones metodológicas importantes que la evidencia más reciente ha corregido.

Si el alcohol es parte habitual de tu semana, la recomendación que se desprende de esta evidencia es simple: entre menos, mejor, y no hay una cantidad diaria que puedas considerar completamente segura. Reducir la frecuencia — no solo la cantidad por ocasión — parece ser la variable que más pesa en el riesgo a largo plazo.`,
    sources: [
      { name: "Infobae — Un estudio científico niega que una copa de vino al día pueda considerarse un consumo seguro de alcohol (2026)", url: "https://www.infobae.com/salud/2026/06/14/un-estudio-cientifico-niega-que-una-copa-de-vino-al-dia-pueda-considerarse-un-consumo-seguro-de-alcohol/" },
      { name: "La Nación — Los riesgos para la salud por el alcohol se aceleran después de una bebida al día, según un estudio (2026)", url: "https://www.lanacion.com.ar/sociedad/los-riesgos-para-la-salud-por-el-alcohol-se-aceleran-despues-de-una-bebida-al-dia-segun-un-estudio-nid09062026/" },
      { name: "COPE — Timothy Naimi: \"Dos bebidas alcohólicas al día están asociadas a un riesgo elevado de muerte prematura\" (2026)", url: "https://www.cope.es/actualidad/salud-bienestar/noticias/timothy-naimi-investigador-dos-bebidas-alcoholicas-dia-considerado-moderado-punto-vista-social-asociadas-riesgo-elevado-muerte-prematura-20260721_3381348.html" },
    ],
  },
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
