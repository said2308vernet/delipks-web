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
    slug: "ultraprocesados-y-salud-cardiovascular",
    title: "Ultraprocesados y corazón: lo que revela la evidencia más reciente",
    excerpt:
      "Nueva evidencia científica de 2026 vincula los alimentos ultraprocesados con un mayor riesgo cardiovascular — pero el panorama completo es más matizado de lo que parece.",
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "PENDING",
    content: `Los alimentos ultraprocesados llevan años en la mira de la ciencia, pero la evidencia publicada en 2026 le puso números más concretos al problema — y también añadió matices importantes que vale la pena entender antes de sacar conclusiones apresuradas.

## Lo que encontró la ciencia este año

Datos publicados en el American Journal of Preventive Medicine y difundidos en 2026 estiman que entre el 23% y el 38% de los eventos cardíacos podrían estar relacionados con el consumo de alimentos ultraprocesados. Es un rango amplio, pero incluso en su extremo más bajo representa una proporción considerable de casos.

Otro estudio de este año, publicado en la revista Radiology, encontró que una mayor ingesta de ultraprocesados se asocia con mayor infiltración de grasa en los músculos del muslo — una señal de que el impacto de estos alimentos va más allá del corazón y también afecta la calidad del tejido muscular.

A esto se suma evidencia de tres estudios franceses recientes que encontraron que ciertos colorantes y conservantes presentes en productos ultraprocesados están asociados a un mayor riesgo de cáncer, diabetes, enfermedades cardiovasculares e hipertensión.

## El matiz que cambia la conversación

Aquí está la parte que muchos titulares dejaron fuera: otro estudio de 2026, también difundido este año, sugiere que la calidad general de la dieta podría importar más que el nivel de procesamiento por sí solo. Los investigadores encontraron que comer de forma saludable con alimentos mínimamente procesados redujo el riesgo de enfermedades cardíacas en un 18%, mientras que incluso las versiones "más saludables" de ultraprocesados redujeron el riesgo en un 14%.

**La conclusión práctica** — no todo lo ultraprocesado es igual de dañino, y no toda comida "natural" es automáticamente mejor. Lo que más predice el riesgo sigue siendo el patrón general de tu alimentación: cuánta fibra, proteína de calidad y vegetales comes, frente a cuánto azúcar añadida, sodio y aditivos consumes regularmente.

## ¿Qué significa esto en la práctica?

No se trata de eliminar por completo todo lo que viene en empaque — eso es poco realista para la mayoría de las personas. Se trata de identificar los ultraprocesados que más pesan en tu dieta diaria: refrescos, botanas fritas, embutidos, pan dulce industrial, cereales azucarados. Esos son los que vale la pena reducir primero.

## Cómo aplicarlo esta semana

Revisa qué tan seguido aparecen ultraprocesados en tus comidas principales (no en antojos ocasionales, sino en lo que comes todos los días). Prioriza tener siempre a la mano una opción de comida hecha con ingredientes reconocibles — proteína, vegetales, carbohidratos complejos — para que no termines recurriendo a lo empacado por falta de tiempo. Ese es, al final, el problema que un plan de comidas semanal resuelve de raíz.`,
    sources: [
      { name: "Infobae — Nueva evidencia científica revela el impacto de los alimentos ultraprocesados en la salud cardiovascular (2026)", url: "https://www.infobae.com/salud/ciencia/2026/07/17/nueva-evidencia-cientifica-revela-el-impacto-de-los-alimentos-ultraprocesados-en-la-salud-cardiovascular/" },
      { name: "Infobae — La comida saludable podría importar más que el nivel de procesamiento, sugiere un estudio (2026)", url: "https://www.infobae.com/salud/2026/07/30/la-comida-saludable-podria-importar-mas-que-el-nivel-de-procesamiento-sugiere-un-estudio/" },
      { name: "Gastrolab — La ciencia lo confirma: estudio revela que alimentos ultraprocesados afectan grasa y salud muscular (2026)", url: "https://www.gastrolabweb.com/saludable/2026/4/15/la-ciencia-lo-confirma-estudio-revela-que-alimentos-ultraprocesados-afectan-grasa-salud-muscular-66650.html" },
    ],
  },
  {
    slug: "sueno-y-metabolismo-2026",
    title: "Dormir mal sabotea tu metabolismo: lo que confirma la ciencia en 2026",
    excerpt:
      "Antes de cambiar tu dieta o tu rutina de ejercicio, la evidencia más reciente sugiere revisar algo más básico: cuánto y qué tan bien estás durmiendo.",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "PENDING",
    content: `Muchas personas intentan mejorar su energía, su peso o su rendimiento ajustando solo lo que comen o cuánto se ejercitan. Pero la evidencia publicada en 2026 pone el foco en un factor que suele quedar en último lugar: el sueño.

## El hallazgo central de este año

Una investigación de Columbia University Irving Medical Center, publicada en la revista Nature en mayo de 2026, analizó datos de miles de personas y encontró que los adultos que dormían menos de 6 horas o más de 8 horas por noche presentaban señales de envejecimiento acelerado en distintos sistemas del cuerpo. No se trata solo de sentirte cansado — dormir mal parece dejar huella medible en órganos y tejidos.

## La conexión con el metabolismo

Un especialista en sueño entrevistado en agosto de 2026 lo resume de forma directa: muchas personas intentan corregir alteraciones metabólicas u hormonales sin obtener resultados porque el verdadero problema está en la falta de descanso. La calidad del sueño, señala, debería formar parte de cualquier estrategia seria para mejorar la salud metabólica — no ser una idea de último momento.

Esto coincide con lo que se sabe desde hace tiempo sobre la relación entre sueño y hambre: dormir poco altera las hormonas que regulan el apetito, aumentando la sensación de hambre y reduciendo la señal de saciedad. El resultado práctico es que, sin importar qué tan bien planees tus comidas, un mal descanso puede empujarte a comer de más.

## Lo que se observó a nivel cerebral

Investigación adicional presentada en México durante el Día Mundial del Sueño 2026, por la Clínica de Trastornos del Sueño de la Facultad de Medicina de la UNAM, encontró en estudios de metabolismo cerebral una disminución en la actividad de regiones asociadas a la regulación de recompensa y motivación cuando el sueño es insuficiente — lo que ayuda a explicar por qué, cansado, es más difícil resistir un antojo o mantener buenos hábitos.

## ¿Cuánto es "suficiente"?

La ciencia sigue apuntando al mismo rango que llevamos años escuchando: entre 7 y 8 horas por noche para la mayoría de los adultos. Lo nuevo en 2026 es la evidencia de que tanto dormir de menos como dormir de más de forma sostenida se asocian con peores marcadores de salud — el objetivo no es maximizar horas, sino sostener un rango consistente.

## Tres ajustes simples

**Un horario constante** — acostarte y despertar a la misma hora, incluso los fines de semana, ayuda más que perseguir una noche "perfecta" ocasional.

**Menos pantallas antes de dormir** — la luz azul y la estimulación mental retrasan la liberación de melatonina, la hormona que te ayuda a conciliar el sueño.

**Cenas más ligeras y más temprano** — cenar pesado justo antes de acostarte dificulta un sueño profundo y reparador. Si ya sabes qué vas a cenar y a qué hora, es más fácil sostener este hábito.`,
    sources: [
      { name: "Infobae — Un estudio revela cómo el sueño altera la edad biológica de tus órganos (2026)", url: "https://www.infobae.com/salud/ciencia/2026/05/14/un-estudio-revela-como-el-sueno-altera-la-edad-biologica-de-tus-organos/" },
      { name: "Noticias de Álava — ¿Dormir mal engorda? Un experto en sueño desvela por qué no descansar puede hacerte ganar peso (2026)", url: "https://www.noticiasdealava.eus/buzz-on/2026/08/09/experto-sueno-desvela-dormir-mal-engorda-javier-albares-11422956.html" },
      { name: "Gaceta FM UNAM — Día Mundial del Sueño 2026: Dormir bien, vivir mejor", url: "https://gaceta.facmed.unam.mx/index.php/2026/03/19/dia-mundial-del-sueno-2026-dormir-bien-vivir-mejor/" },
    ],
  },
  {
    slug: "obesidad-en-mexico-2026",
    title: "Obesidad en México 2026: qué dice la nueva estrategia nacional y cómo aplica en tu día a día",
    excerpt:
      "Más de 3 de cada 4 adultos en México viven con sobrepeso u obesidad. Así es la nueva estrategia del gobierno federal para atender el problema — y qué puedes hacer tú desde ya.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "PENDING",
    content: `México sigue enfrentando una de las crisis de sobrepeso y obesidad más altas del mundo. Los datos más recientes, difundidos en 2026, y la respuesta que está preparando el gobierno federal dan un panorama claro de dónde estamos parados.

## Los números de 2026

De acuerdo con datos recientes, el 76.2% de la población adulta en México vive con exceso de peso — una cifra que coloca al país entre los de mayor prevalencia a nivel mundial. Desglosado por la Encuesta Nacional de Salud y Nutrición (Ensanut), 37.3% de los adultos presenta sobrepeso y 38.9% obesidad.

El problema tampoco se limita a los adultos. La prevalencia de sobrepeso y obesidad en adolescentes ya alcanza el 41%, y una de las tendencias más preocupantes es que la diferencia que solía existir entre zonas rurales y urbanas prácticamente desapareció — el problema ya no es exclusivo de las ciudades.

Otro cambio notable de los últimos cinco años: la brecha de 10 puntos porcentuales que existía entre la obesidad en hombres y en mujeres adultas se redujo casi a cero, según la Ensanut 2020-2024.

## La respuesta del gobierno federal

El 4 de marzo de 2026, en el marco del Día Mundial de la Obesidad, el secretario de Salud federal presentó la Estrategia de Desaceleración del Sobrepeso y la Obesidad en México — un plan que busca frenar el ritmo de crecimiento de estas cifras a nivel nacional, con un llamado explícito a que la población se sume al esfuerzo.

## ¿Por qué te debería importar aunque no tengas sobrepeso?

Porque el problema no es solo individual — es estructural. Cuando 3 de cada 4 adultos a tu alrededor conviven con exceso de peso, el entorno completo (lo que se vende en la calle, lo que se sirve en el trabajo, lo que es "normal" comer) empuja en esa dirección. Entender la magnitud del problema ayuda a no normalizar patrones que, en el agregado, generan estas cifras.

## Qué puedes controlar desde tu propia mesa

Ninguna estrategia nacional reemplaza las decisiones diarias. Lo que sí puedes controlar, sin necesidad de una dieta extrema, es:

**Reducir la fricción de comer bien** — si comer saludable requiere más esfuerzo que pedir comida rápida, la mayoría de los días pierde la opción más fácil. Planear tu semana (o resolverla con un servicio que ya lo haga por ti) cambia esa ecuación.

**Priorizar porciones consistentes de proteína y vegetales** — los patrones que la evidencia relaciona con menor riesgo de obesidad no son dietas restrictivas, sino platos balanceados sostenidos en el tiempo.

**No esperar una solución rápida** — las cifras de México se construyeron durante décadas. Los cambios individuales sostenibles también toman tiempo, y eso está bien.`,
    sources: [
      { name: "Milenio — Obesidad en México 2026: 76.2% de los adultos vive con exceso de peso", url: "https://www.milenio.com/content/salud-y-nutricion/mexico-emergencia-obesidad-adultos-3-de-cada-4-2026" },
      { name: "Proceso — Secretaría de Salud presenta estrategia contra la obesidad y el sobrepeso en México (2026)", url: "https://www.proceso.com.mx/nacional/2026/3/5/secretaria-de-salud-presenta-estrategia-contra-la-obesidad-el-sobrepeso-en-mexico-369686.html" },
      { name: "La Jornada — Sobrepeso y obesidad siguen al alza en México", url: "https://www.jornada.com.mx/noticia/2025/11/12/sociedad/sobrepeso-y-obesidad-siguen-al-alza-en-mexico" },
    ],
  },
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
