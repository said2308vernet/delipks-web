export interface BlogSource {
  name: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  content: string;
  sources: BlogSource[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "tipos-de-pan",
    title: "Tipos de pan: del más saludable al menos nutritivo",
    excerpt:
      "No todos los panes son iguales. Descubre cuáles te nutren de verdad y cuáles solo te llenan de calorías vacías.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-24",
    content: `El pan es uno de los alimentos más consumidos en México, pero no todos los panes aportan lo mismo a tu cuerpo. Elegir bien puede marcar la diferencia entre un desayuno nutritivo y uno que solo te deja con hambre dos horas después.

## ¿Qué hace que un pan sea saludable?

Un pan saludable se distingue por tres cosas: granos enteros como ingrediente principal, un buen contenido de fibra (al menos 3 g por rebanada) y la menor cantidad posible de azúcares añadidos. Si en la etiqueta lo primero que aparece es "harina de trigo refinada", es señal de que no es la mejor opción.

## Los panes más saludables

**Pan integral 100%** — El clásico que nunca falla. Hecho con el grano completo, conserva la fibra, vitaminas del grupo B y minerales. Busca que diga "100% integral" y no solo "estilo integral".

**Pan de granos germinados** — Los granos se dejan germinar antes de molerlos, lo que aumenta la disponibilidad de nutrientes y reduce los antinutrientes. Es más fácil de digerir y tiene un perfil de aminoácidos más completo.

**Pan de masa madre** — La fermentación natural reduce el índice glucémico del pan, lo que significa que tu azúcar en sangre sube más lento. Además, es más fácil de digerir gracias a las bacterias beneficiosas del proceso.

**Pan de centeno** — Rico en fibra y con un sabor más denso. Ideal para quienes buscan saciedad. El centeno integral es mejor que el centeno refinado.

**Pan de avena** — Combina la fibra soluble de la avena (buena para el colesterol) con la estructura del pan. Busca versiones donde la avena sea el ingrediente principal.

## Opciones intermedias

**Pan multigrano** — Suena saludable, pero "multigrano" solo significa que tiene varios tipos de grano, no necesariamente integrales. Revisa la etiqueta para asegurarte de que los granos sean enteros.

**Pan light o bajo en calorías** — Reduce calorías por rebanada, pero a veces a costa de agregar más aditivos. No es malo, pero no siempre es mejor que un buen pan integral.

## Los menos nutritivos

**Pan blanco** — Hecho con harina refinada, pierde la mayor parte de la fibra y nutrientes durante el procesamiento. Se digiere rápido y puede causar picos de azúcar en sangre.

**Pan de caja dulce** — Las versiones con canela, miel o chocolate agregan azúcares innecesarios. Son más un postre que un alimento base.

**Bolillo y telera** — Muy populares en México, pero están hechos con harina refinada y tienen poco valor nutricional más allá de las calorías. No son el enemigo, pero no deberían ser tu pan de todos los días.

## ¿El pan engorda?

No por sí solo. Lo que importa es qué pan eliges, cuánto comes y con qué lo acompañas. Un pan integral con aguacate y huevo es una comida completa. Un bolillo con mayonesa y jamón procesado es otra historia.

## Cómo incluir pan en tu alimentación

El pan puede ser un excelente vehículo de nutrientes. Úsalo para armar desayunos y comidas balanceadas: combínalo con proteína (huevo, pollo, queso fresco), grasa saludable (aguacate, aceite de oliva) y vegetales. La clave no es eliminar el pan, sino elegir el correcto.`,
    sources: [
      { name: "Harvard T.H. Chan School of Public Health — Whole Grains", url: "https://www.hsph.harvard.edu/nutritionsource/whole-grains/" },
      { name: "American Heart Association — Whole Grains & Fiber", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/whole-grains-refined-grains-and-dietary-fiber" },
      { name: "Mayo Clinic — Whole Grains: Hearty Options", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/whole-grains/art-20047826" },
    ],
  },
  {
    slug: "meal-prep-alto-en-proteina",
    title: "Meal prep alto en proteína: la guía completa",
    excerpt:
      "Aprende a preparar tus comidas de la semana con el balance perfecto de proteína para tus objetivos.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-22",
    content: `La proteína es el macronutriente que tu cuerpo necesita para reparar músculos, mantener tu sistema inmune y sentirte saciado. Pero conseguir suficiente proteína cada día puede ser un reto si no planificas con anticipación.

## ¿Por qué es importante la proteína?

Tu cuerpo no puede almacenar proteína como lo hace con los carbohidratos o las grasas. Eso significa que necesitas un suministro constante a lo largo del día. La proteína contiene aminoácidos esenciales que tu cuerpo no produce por sí solo.

## ¿Cuánta proteína necesitas?

Como referencia general, entre 1.2 y 2.0 gramos por kilo de peso corporal al día es un buen rango. Si pesas 70 kg y entrenas regularmente, apuntar a 25-35 g de proteína por comida es un buen objetivo.

## Fuentes de proteína para tu meal prep

**Proteínas animales:** pechuga de pollo, pavo molido, salmón, atún, huevo, carne magra de res.

**Proteínas vegetales:** lentejas, garbanzos, frijoles negros, tofu, edamame.

**Complementos:** yogur griego, queso cottage, semillas de chía, almendras.

## Cómo organizar tu meal prep semanal

**Paso 1 — Elige 2-3 proteínas base.** No necesitas variedad infinita. Pollo + huevo + lentejas cubren toda la semana.

**Paso 2 — Cocina por lotes.** Dedica 1-2 horas el domingo a cocinar todas tus proteínas. Hornea el pollo, hierve los huevos, prepara las legumbres.

**Paso 3 — Acompaña con carbohidratos complejos.** Arroz integral, quinoa, camote o avena. Cocínalos en la misma sesión.

**Paso 4 — No olvides los vegetales.** Brócoli, espinaca, pimientos, calabaza. Puedes asarlos en tandas grandes.

**Paso 5 — Almacena correctamente.** Usa contenedores herméticos y refrigera. La mayoría de los platillos duran 3-4 días en buenas condiciones.

## Errores comunes

No variar las fuentes de proteína, olvidar las grasas saludables en el plato, no sazonar bien (comer sano no tiene que ser aburrido), y preparar más de 5 días de comida sin congelar.

## La alternativa más fácil

Si no tienes tiempo para cocinar, los planes de Delipks están diseñados con el balance de proteína que necesitas. Cada platillo incluye una porción calculada de proteína, carbohidratos y vegetales, listos para comer.`,
    sources: [
      { name: "Harvard Health — How much protein do you need?", url: "https://www.health.harvard.edu/blog/how-much-protein-do-you-need-every-day-201506188096" },
      { name: "Academy of Nutrition and Dietetics — Protein", url: "https://www.eatright.org/food/nutrition/dietary-guidelines-and-myplate/how-much-protein-should-i-eat" },
      { name: "USDA — Dietary Guidelines for Americans", url: "https://www.dietaryguidelines.gov/" },
    ],
  },
  {
    slug: "frutas-permitidas-en-keto",
    title: "Frutas permitidas en la dieta keto: cuáles sí y cuáles no",
    excerpt:
      "¿Keto significa cero frutas? No necesariamente. Estas opciones bajas en carbohidratos sí tienen lugar en tu plan.",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-18",
    content: `La dieta cetogénica limita los carbohidratos a un rango muy bajo, generalmente entre 20 y 50 g netos por día. Muchas frutas son naturalmente altas en azúcares, pero eso no significa que todas estén prohibidas.

## ¿Por qué importan los carbohidratos en keto?

Para mantenerte en cetosis, tu cuerpo debe usar grasa como fuente principal de energía en lugar de glucosa. Excederte en carbohidratos — incluso de fuentes naturales como la fruta — puede sacarte de ese estado.

El truco está en elegir frutas con alto contenido de fibra y bajo contenido de azúcar, y controlar las porciones.

## Frutas aptas para keto

**Aguacate** — Con solo 2 g de carbohidratos netos por porción y lleno de grasas saludables, es el rey de la dieta keto. Técnicamente es una fruta.

**Fresas** — Aproximadamente 6 g de carbohidratos netos por taza. Son dulces, versátiles y ricas en vitamina C.

**Frambuesas** — Unas de las frutas con más fibra. Alrededor de 7 g netos por taza.

**Moras azules (en moderación)** — Más altas en carbohidratos que otras berries, pero media taza es manejable.

**Limón y lima** — Perfectos para dar sabor a tus platillos y agua. Muy bajos en carbohidratos.

**Tomate** — Sí, es una fruta. Con 5 g netos por taza, es un básico en ensaladas y salsas.

**Coco** — La pulpa de coco tiene pocos carbohidratos netos y mucha grasa saludable. Ideal para snacks.

## Frutas que debes evitar en keto

**Plátano** — Con 27 g de carbohidratos por pieza, un solo plátano puede usar toda tu cuota diaria.

**Mango** — Delicioso pero con casi 50 g de carbohidratos por pieza. Definitivamente no es keto-friendly.

**Uvas** — Son pequeñas pero engañosas: una taza tiene cerca de 26 g de carbohidratos.

**Piña** — Alta en azúcares naturales. Una taza supera los 20 g de carbohidratos netos.

**Manzana** — Aunque parecen inofensivas, una manzana mediana tiene alrededor de 22 g netos.

## Consejos prácticos

Come las frutas permitidas como parte de un platillo (en ensaladas, con yogur griego, en smoothies con grasa) en lugar de solas. Esto ayuda a moderar la respuesta glucémica y mantiene tu estado de cetosis.`,
    sources: [
      { name: "Harvard T.H. Chan — Diet Review: Ketogenic Diet", url: "https://www.hsph.harvard.edu/nutritionsource/healthy-weight/diet-reviews/ketogenic-diet/" },
      { name: "USDA FoodData Central — Nutrient Database", url: "https://fdc.nal.usda.gov/" },
      { name: "Mayo Clinic — Low-carb diet", url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/low-carb-diet/art-20045831" },
    ],
  },
  {
    slug: "pavo-vs-res-molida",
    title: "Pavo molido vs. res molida: ¿cuál conviene más?",
    excerpt:
      "Dos de las proteínas más usadas en la cocina. Te decimos cuándo elegir cada una según lo que buscas.",
    image:
      "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-14",
    content: `Pavo molido y res molida son dos de las proteínas más versátiles en la cocina. Ambas funcionan para hamburguesas, albóndigas, tacos, boloñesa y más. Pero sus perfiles nutricionales son bastante diferentes.

## Perfil nutricional comparado (por 100 g)

**Pavo molido (93% magro):** 150 calorías, 21 g proteína, 7 g grasa, rico en selenio y fósforo.

**Res molida (90% magra):** 176 calorías, 20 g proteína, 10 g grasa, rica en hierro, zinc y vitamina B12.

## ¿Cuándo elegir pavo?

El pavo es tu mejor opción si buscas reducir calorías y grasa saturada sin sacrificar proteína. Su sabor es más suave, lo que lo hace perfecto para platillos donde los condimentos y salsas dominan: tacos con mucha salsa, stir-fry con vegetales, wraps de lechuga o albóndigas en caldillo.

## ¿Cuándo elegir res?

La res aporta más hierro y B12, nutrientes clave para la energía y la recuperación muscular. Además, su sabor es más intenso y satisfactorio. Es ideal para platillos donde la carne es protagonista: hamburguesas, pasta boloñesa, picadillo o chili.

## ¿Y para bajar de peso?

Si tu objetivo principal es perder grasa, el pavo molido magro te da más proteína por caloría. Pero la res magra (90/10 o superior) también funciona bien dentro de un plan balanceado. La diferencia calórica no es enorme.

## ¿Y para ganar músculo?

Ambas son excelentes fuentes de proteína completa. La res tiene una ligera ventaja por su mayor densidad calórica y contenido de creatina natural, pero el pavo es igualmente efectivo.

## El veredicto

No hay un ganador absoluto. Lo ideal es alternar entre ambas durante la semana para obtener la variedad de nutrientes que cada una ofrece. Lo que realmente importa es la calidad del producto y cómo lo preparas.`,
    sources: [
      { name: "USDA FoodData Central — Ground Turkey & Ground Beef", url: "https://fdc.nal.usda.gov/" },
      { name: "Harvard Health — Red meat and heart disease", url: "https://www.health.harvard.edu/staying-healthy/red-meat-and-heart-disease" },
      { name: "American Heart Association — Meat, Poultry & Fish", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/meat-poultry-and-fish" },
    ],
  },
  {
    slug: "tipos-de-lechuga",
    title: "Tipos de lechuga y su valor nutricional: no todas son iguales",
    excerpt:
      "Antes de armar tu próxima ensalada, conoce qué aporta cada tipo de lechuga a tu cuerpo.",
    image:
      "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-10",
    content: `La ensalada es un básico de la alimentación saludable, pero no todas las lechugas aportan lo mismo. Algunas están llenas de vitaminas y minerales, mientras que otras son poco más que agua crujiente.

## Lechugas clásicas

**Lechuga romana** — La más equilibrada. Con solo 8 calorías por taza, aporta vitamina A, vitamina K y folato. Es crujiente, versátil y funciona tanto en ensaladas como en tacos y wraps.

**Lechuga orejona (iceberg)** — La más conocida pero la menos nutritiva. Tiene alrededor de 10 calorías por taza y es mayormente agua. Aporta algo de vitamina K y folato, pero cantidades mínimas comparada con otras opciones. Está bien para dar textura, pero no debería ser tu única base.

**Lechuga mantequilla (Boston/Bibb)** — Hojas suaves y delicadas con un sabor ligeramente dulce. Aporta hierro, potasio y vitamina A. Perfecta para wraps porque sus hojas son flexibles y amplias.

**Lechuga de hoja verde** — Ligera (5 calorías por taza) con buen contenido de vitaminas A y K. Una opción cotidiana confiable.

**Lechuga de hoja roja** — Similar a la verde pero con un extra: antocianinas, los pigmentos que le dan su color rojo y actúan como antioxidantes.

## Hojas verdes que suben el nivel

**Espinaca** — Una de las hojas más densas en nutrientes. Rica en hierro, vitamina C, calcio y ácido fólico. Funciona cruda en ensaladas o cocida como guarnición.

**Arúgula** — Sabor picante y ligeramente amargo. Alta en vitamina K, vitamina C y calcio. Excelente para dar personalidad a cualquier ensalada.

**Kale (col rizada)** — El más nutritivo de todos. Alto en fibra, vitamina A, C y K, calcio y antioxidantes. Su textura es más dura, así que masajear las hojas con un poco de limón y aceite las suaviza.

## Cómo armar una ensalada nutritiva

La base importa, pero el complemento también. Combina tus hojas verdes con proteína (pollo, huevo, atún, garbanzos), grasa saludable (aguacate, nueces, aceite de oliva) y un carbohidrato complejo (quinoa, camote, elote). Así transformas una ensalada aburrida en una comida completa.`,
    sources: [
      { name: "USDA FoodData Central — Leafy Greens Nutrition", url: "https://fdc.nal.usda.gov/" },
      { name: "Harvard T.H. Chan — Vegetables and Fruits", url: "https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/" },
      { name: "NIH — Vitamin K Fact Sheet", url: "https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/" },
    ],
  },
  {
    slug: "calorias-al-correr",
    title: "¿Cuántas calorías quemas corriendo? La guía real",
    excerpt:
      "Correr es uno de los ejercicios que más calorías quema, pero los números dependen de más factores de los que crees.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80&auto=format&fit=crop",
    category: "Ejercicio",
    date: "2026-06-06",
    content: `Correr es una de las formas más eficientes de quemar calorías. Pero la cantidad exacta depende de varios factores: tu peso, la velocidad, el terreno y tu condición física.

## Estimaciones por intensidad (30 minutos)

**Trote ligero (8 km/h):** Entre 240 y 355 calorías, dependiendo de tu peso corporal. Es el ritmo donde puedes mantener una conversación.

**Carrera moderada (10 km/h):** Entre 300 y 440 calorías. Ritmo constante pero con esfuerzo notable.

**Carrera rápida (12+ km/h):** Entre 375 y 555 calorías. Ritmo intenso, difícil de mantener por mucho tiempo.

Estas cifras son estimaciones. Una persona de 60 kg quemará menos que una de 85 kg al mismo ritmo.

## Beneficios más allá de las calorías

Correr no solo quema grasa. También mejora tu salud cardiovascular, aumenta tu capacidad pulmonar, fortalece huesos y articulaciones, mejora tu calidad de sueño y libera endorfinas que elevan tu estado de ánimo.

## Cómo maximizar la quema calórica

**Intervalos:** Alterna entre sprints de 30 segundos y recuperación de 1 minuto. Esto eleva tu metabolismo por horas después de terminar.

**Cuestas:** Correr en subida aumenta la intensidad sin necesidad de ir más rápido.

**Distancia progresiva:** Aumenta tu distancia un 10% cada semana para evitar lesiones y seguir progresando.

**Consistencia:** Es mejor correr 3 veces por semana de forma consistente que una sesión épica cada dos semanas.

## Alimentación y running

Lo que comes antes y después de correr importa tanto como la carrera misma. Antes: un snack ligero con carbohidratos (un plátano, una barra de avena). Después: proteína y carbohidratos para recuperar (pollo con arroz, un smoothie con proteína).

Un plan de alimentación bien diseñado potencia tus resultados al correr. No se trata solo de quemar, sino de nutrir tu cuerpo para que rinda.`,
    sources: [
      { name: "Harvard Health — Calories burned in 30 minutes", url: "https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" },
      { name: "Mayo Clinic — Exercise for weight loss", url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/exercise/art-20050999" },
      { name: "American Council on Exercise — Calorie Expenditure", url: "https://www.acefitness.org/resources/everyone/tools-calculators/physical-activity-calorie-counter/" },
    ],
  },
  {
    slug: "deficit-calorico-para-bajar-de-peso",
    title: "¿Cuántas calorías necesitas quemar para bajar de peso?",
    excerpt:
      "La respuesta no es tan simple como parece. Aquí te explicamos cómo funciona el déficit calórico de forma realista.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "2026-05-30",
    content: `Bajar de peso se reduce a un principio simple: gastar más energía de la que consumes. Pero la ejecución tiene matices que muchos ignoran.

## El principio del déficit calórico

Tu cuerpo quema calorías constantemente — al respirar, digerir, caminar, pensar. La suma de todo eso es tu gasto energético total diario. Para perder peso, necesitas consumir menos calorías de las que gastas.

Como referencia general, un déficit de 300 a 500 calorías al día permite una pérdida gradual y sostenible de 0.5 a 1 kg por semana.

## Factores que afectan tu gasto calórico

**Metabolismo basal (BMR):** Las calorías que tu cuerpo quema en reposo total. Depende de tu edad, peso, estatura y composición corporal.

**Nivel de actividad:** Desde sedentario (trabajo de oficina) hasta muy activo (entrenamiento diario). Esto puede duplicar tu gasto total.

**Masa muscular:** Más músculo significa más calorías quemadas en reposo. Por eso el entrenamiento de fuerza es clave para bajar de peso.

## Estrategias que funcionan

**Muévete más, sin obsesionarte.** Caminar 30 minutos al día, subir escaleras, estacionarte lejos. Los pequeños cambios suman más de lo que crees.

**Come alimentos densos en nutrientes.** Un plato con pollo, vegetales y arroz integral te mantiene satisfecho por horas. Una bolsa de papitas con las mismas calorías te deja con hambre en 30 minutos.

**No elimines grupos de alimentos.** Las dietas extremas funcionan a corto plazo pero son imposibles de mantener. Mejor aprende a comer bien de forma permanente.

**Cuida lo que bebes.** Refrescos, jugos, cafés con crema y alcohol pueden sumar cientos de calorías invisibles.

**Prioriza el sueño.** Dormir mal aumenta el cortisol, el hambre y la tendencia a comer de más. 7-8 horas hacen una diferencia real.

## La clave es la consistencia

No necesitas ser perfecto cada día. Necesitas ser consistente la mayoría de los días. Un déficit moderado y sostenido es infinitamente más efectivo que una dieta extrema que abandonas en dos semanas.`,
    sources: [
      { name: "NIH — Calorie Deficit and Weight Loss", url: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment" },
      { name: "Mayo Clinic — Counting calories", url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/calories/art-20048065" },
      { name: "Harvard Health — Calorie counting made easy", url: "https://www.health.harvard.edu/staying-healthy/calorie-counting-made-easy" },
    ],
  },
  {
    slug: "pollo-vs-pescado",
    title: "Pollo vs. pescado: ¿cuál es más saludable para ti?",
    excerpt:
      "Dos proteínas que nunca faltan en un plan de alimentación saludable. ¿Pero cuál deberías comer más seguido?",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-05-24",
    content: `El pollo y el pescado son las dos proteínas más recomendadas en cualquier plan de alimentación saludable. Ambos son magros, versátiles y nutritivos, pero cada uno tiene ventajas distintas.

## Perfil nutricional comparado (por 100 g)

**Pechuga de pollo:** 165 calorías, 31 g proteína, 3.6 g grasa. Rica en vitamina B6, niacina y fósforo.

**Salmón:** 208 calorías, 20 g proteína, 13 g grasa. Rico en omega-3, vitamina D y vitamina B12.

**Tilapia:** 128 calorías, 26 g proteína, 2.6 g grasa. Bajo en grasa y calorías, buena fuente de selenio.

## ¿Cuándo elegir pollo?

El pollo es el rey de la proteína magra. Si tu objetivo es maximizar proteína con mínima grasa y calorías, la pechuga de pollo es difícil de superar. Es económico, fácil de encontrar y se adapta a cualquier cocina: a la plancha, deshebrado, en caldo, con salsa.

## ¿Cuándo elegir pescado?

El pescado — especialmente los grasos como salmón, sardina y atún — aporta ácidos grasos omega-3 que el pollo no tiene. Los omega-3 son esenciales para la salud del corazón, el cerebro y la reducción de inflamación. Si no comes pescado al menos 2 veces por semana, probablemente te faltan estos nutrientes.

## Para bajar de peso

Ambos funcionan bien. El pollo tiene menos calorías por gramo de proteína, pero el pescado graso te mantiene más saciado gracias a las grasas saludables. Elige según tu presupuesto y preferencia.

## Para ganar músculo

El pollo gana ligeramente por su mayor contenido de proteína por caloría. Pero el pescado es importante para la recuperación muscular gracias a su efecto antiinflamatorio.

## El veredicto

No elijas uno sobre el otro — alterna ambos durante la semana. Come pollo 3-4 veces y pescado 2-3 veces para obtener lo mejor de ambos mundos. Tu cuerpo necesita tanto la proteína magra del pollo como los omega-3 del pescado.`,
    sources: [
      { name: "USDA FoodData Central — Chicken & Fish Nutrition", url: "https://fdc.nal.usda.gov/" },
      { name: "American Heart Association — Fish and Omega-3 Fatty Acids", url: "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/fish-and-omega-3-fatty-acids" },
      { name: "Harvard T.H. Chan — Fish: Friend or Foe?", url: "https://www.hsph.harvard.edu/nutritionsource/fish/" },
    ],
  },
  {
    slug: "tips-para-correr-mas-rapido",
    title: "9 tips para correr más rápido y por más tiempo",
    excerpt:
      "No importa si apenas empiezas o ya corres 10K. Estos consejos te ayudarán a mejorar tu rendimiento.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80&auto=format&fit=crop",
    category: "Ejercicio",
    date: "2026-05-18",
    content: `Correr más rápido y por más tiempo no es cuestión de esforzarte más — es cuestión de entrenar más inteligente. Estos 9 tips aplican tanto si estás empezando como si ya tienes experiencia.

## 1. Cuida tu postura

Corre erguido, con los hombros relajados y la mirada al frente (no al piso). Tus brazos deben moverse de adelante hacia atrás, no de lado a lado. Una buena postura reduce el desperdicio de energía.

## 2. Establece metas realistas

No intentes duplicar tu distancia de un día para otro. Establece metas semanales medibles: "esta semana correré 1 km más" o "reduciré 10 segundos por kilómetro". Los pequeños avances construyen grandes resultados.

## 3. Integra entrenamiento de intervalos

Alterna entre periodos de alta intensidad (sprints de 30-60 segundos) y recuperación activa (trote suave de 1-2 minutos). Los intervalos mejoran tu velocidad y capacidad cardiovascular más rápido que correr al mismo ritmo siempre.

## 4. Haz carreras largas y lentas

Una vez por semana, corre a un ritmo cómodo (donde puedas hablar) por más tiempo del habitual. Esto construye tu base aeróbica y enseña a tu cuerpo a usar la grasa como combustible.

## 5. No descuides el entrenamiento de fuerza

Piernas fuertes corren más rápido. Sentadillas, desplantes, peso muerto y ejercicios de core mejoran tu potencia y reducen el riesgo de lesiones. 2-3 sesiones por semana son suficientes.

## 6. Descansa de verdad

Los días de descanso no son opcionales. Tu cuerpo se adapta y mejora durante la recuperación, no durante el ejercicio. Incluye al menos 1-2 días de descanso completo por semana.

## 7. Alimenta tu rendimiento

Los carbohidratos son el combustible principal para correr. No los elimines. Combínalos con proteína para la recuperación y grasas saludables para la energía sostenida.

## 8. Busca compañía

Correr con alguien — un amigo, un grupo, o incluso siguiendo un plan virtual — te mantiene motivado y consistente. La responsabilidad compartida funciona.

## 9. Aprende a respirar

Respira con el diafragma, no solo con el pecho. Un patrón común es inhalar durante 3 pasos y exhalar durante 2. Esto mantiene un flujo de oxígeno constante y evita el típico dolor de costado.`,
    sources: [
      { name: "American College of Sports Medicine — Running Tips", url: "https://www.acsm.org/education-resources/trending-topics-resources/physical-activity-guidelines" },
      { name: "Mayo Clinic — Running: How to get started", url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/running/art-20546886" },
      { name: "NIH — Benefits of Physical Activity", url: "https://www.nhlbi.nih.gov/health/heart/physical-activity/benefits" },
    ],
  },
  {
    slug: "plato-balanceado-sin-contar-calorias",
    title: "Cómo armar un plato balanceado sin contar calorías",
    excerpt:
      "Olvídate de las apps y las básculas. Con este método visual comes bien sin complicarte la vida.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "2026-05-12",
    content: `Contar calorías funciona para algunas personas, pero para la mayoría es insostenible a largo plazo. La buena noticia es que puedes comer bien sin necesidad de pesar cada gramo de comida.

## El método del plato

Imagina tu plato dividido en secciones. Este método visual es simple, efectivo y no requiere ninguna herramienta:

**La mitad del plato: vegetales.** Cualquier combinación de verduras cocidas o crudas. Brócoli, espinacas, pimientos, calabaza, ensalada, tomate. Los vegetales aportan fibra, vitaminas y volumen con pocas calorías.

**Un cuarto del plato: proteína.** Pollo, pescado, huevo, carne magra, tofu o legumbres. La proteína te mantiene saciado y protege tu masa muscular.

**Un cuarto del plato: carbohidratos complejos.** Arroz integral, quinoa, camote, pasta integral, tortilla de maíz o pan integral. Los carbohidratos son tu fuente principal de energía.

**Un extra pequeño: grasa saludable.** Aguacate, aceite de oliva, nueces o semillas. No necesitas mucho, pero no debes eliminarlo.

## ¿Por qué funciona?

Porque automatiza el balance sin que tengas que pensar. Si la mitad de tu plato siempre son vegetales, es muy difícil comer de más. Si siempre incluyes proteína, te mantienes saciado. Si los carbohidratos son un cuarto, las porciones se regulan solas.

## Errores comunes

**Platos de pura proteína y nada más.** La proteína sola no es una comida completa. Necesitas fibra y energía de los vegetales y carbohidratos.

**Eliminar carbohidratos.** Tu cerebro funciona con glucosa. Sin carbohidratos, tu energía, concentración y humor se desploman.

**Confundir "saludable" con "aburrido".** Usa especias, salsas caseras, hierbas frescas, limón, chile. Comer bien debe saber bien.

**Saltarse comidas.** Llegar con hambre extrema a la siguiente comida casi siempre termina en exceso. Mejor come con regularidad y porciones adecuadas.

## Aplícalo en tu día a día

Este método funciona para desayuno, comida y cena. Un desayuno balanceado puede ser: huevos revueltos (proteína) + tortilla de maíz (carbohidrato) + nopales y salsa (vegetales) + aguacate (grasa). Simple, completo y sin contar una sola caloría.`,
    sources: [
      { name: "Harvard T.H. Chan — Healthy Eating Plate", url: "https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/" },
      { name: "USDA — MyPlate", url: "https://www.myplate.gov/" },
      { name: "WHO — Healthy Diet Fact Sheet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
    ],
  },
  {
    slug: "beneficios-del-agua",
    title: "8 beneficios de tomar suficiente agua todos los días",
    excerpt:
      "El hábito más simple y más ignorado. Tomar suficiente agua transforma tu energía, tu piel y tu rendimiento.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "2026-05-06",
    content: `El agua representa más del 60% de tu cuerpo. Cada célula, tejido y órgano la necesita para funcionar. Y aun así, la mayoría de las personas no toman la suficiente.

## ¿Cuánta agua necesitas?

La recomendación general es entre 2 y 3 litros al día para adultos, pero varía según tu peso, actividad física y clima. En ciudades cálidas como Puebla, necesitas más. Una forma simple de medirlo: si tu orina es amarillo claro, vas bien.

## Los 8 beneficios principales

## 1. Más energía y menos fatiga

La deshidratación leve — incluso un 1-2% de pérdida de líquidos — reduce tu energía y capacidad de concentración. Antes de buscar un café, prueba con un vaso de agua.

## 2. Mejor digestión

El agua ayuda a descomponer los alimentos y mover todo a través de tu sistema digestivo. Sin suficiente agua, el estreñimiento es casi inevitable.

## 3. Piel más saludable

La hidratación adecuada mantiene tu piel elástica y con mejor apariencia. No es una solución mágica, pero la diferencia entre piel hidratada y deshidratada es visible.

## 4. Control de peso

Tomar agua antes de comer te ayuda a sentirte más lleno y comer porciones adecuadas. Además, muchas veces confundimos sed con hambre.

## 5. Rendimiento físico

Durante el ejercicio, pierdes agua a través del sudor. Una pérdida del 2% de tu peso en agua reduce notablemente tu rendimiento. Hidratarte antes, durante y después del ejercicio es fundamental.

## 6. Menos dolores de cabeza

La deshidratación es una de las causas más comunes de dolor de cabeza. Antes de tomar una pastilla, toma dos vasos de agua y espera 30 minutos.

## 7. Riñones más sanos

Tus riñones necesitan agua para filtrar toxinas de la sangre. Una hidratación adecuada reduce el riesgo de piedras en los riñones y infecciones urinarias.

## 8. Mejor humor

Estudios muestran que la deshidratación leve afecta tu estado de ánimo, aumenta la irritabilidad y reduce la capacidad de pensar con claridad.

## Tips para tomar más agua

Lleva una botella reutilizable contigo, toma un vaso al despertar, uno antes de cada comida y uno antes de dormir. Agregar limón, pepino o menta hace que sea más fácil si no te gusta el agua sola.`,
    sources: [
      { name: "Mayo Clinic — Water: How much should you drink?", url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256" },
      { name: "Harvard Health — How much water should you drink?", url: "https://www.health.harvard.edu/staying-healthy/how-much-water-should-you-drink" },
      { name: "NIH — Water & Nutrition", url: "https://www.nhlbi.nih.gov/health/educational/wecan/eat-right/water.htm" },
    ],
  },
  {
    slug: "errores-comunes-al-comer-saludable",
    title: "10 errores que cometes al intentar comer saludable",
    excerpt:
      "Crees que comes bien pero no ves resultados. Probablemente estás cayendo en alguno de estos errores sin darte cuenta.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-04-28",
    content: `Muchas personas creen que están comiendo saludable pero no ven cambios en su peso, energía o bienestar. El problema no siempre es lo que comes, sino los errores invisibles que sabotean tus esfuerzos.

## 1. Confundir "natural" con "saludable"

Que algo sea natural no significa que sea bajo en calorías. La granola, la miel, los jugos naturales y el aceite de coco son naturales pero calóricamente densos. Úsalos con moderación.

## 2. Eliminar grupos de alimentos completos

Quitarte los carbohidratos, las grasas o los lácteos sin razón médica genera deficiencias nutricionales y hace tu dieta insostenible. El balance es más efectivo que la restricción.

## 3. No comer suficiente proteína

La proteína te mantiene saciado, protege tu músculo y acelera tu metabolismo. Si tu plato típico es arroz con verduras sin proteína, estás dejando fuera un pilar fundamental.

## 4. Saltarte comidas para "compensar"

Te excediste ayer y hoy no desayunas. Este patrón solo genera más hambre, peores decisiones alimenticias y un metabolismo errático. Mejor vuelve a tu rutina normal.

## 5. Creer que las ensaladas siempre son saludables

Una ensalada con aderezo cremoso, crutones, queso parmesano y tocino puede tener más calorías que una hamburguesa. El problema no es la ensalada, sino lo que le pones encima.

## 6. Ignorar las calorías líquidas

Jugos, smoothies, cafés con crema, refrescos y alcohol pueden sumar 500-800 calorías diarias sin que te des cuenta. Son las calorías más fáciles de eliminar.

## 7. Comer demasiado rápido

Tu cerebro tarda unos 20 minutos en registrar que estás lleno. Si comes en 5 minutos, probablemente estás comiendo de más sin sentirlo. Mastica despacio.

## 8. No planificar tus comidas

Sin plan, terminas pidiendo comida rápida o comiendo lo primero que encuentras. Dedicar 30 minutos el domingo a planear tu semana cambia todo.

## 9. Obsesionarte con la perfección

Un día "malo" no arruina una semana de buena alimentación. La consistencia del 80-90% es más importante que buscar el 100% y rendirte cuando fallas.

## 10. No dormir suficiente

Dormir menos de 7 horas aumenta la hormona del hambre (grelina) y reduce la hormona de saciedad (leptina). Puedes comer perfecto pero si no duermes, tu cuerpo te pedirá más comida.

## El mensaje final

Comer saludable no es complicado, pero requiere consciencia. Corregir estos errores uno por uno es más efectivo que cualquier dieta de moda. Empieza por el que más te identificó.`,
    sources: [
      { name: "Harvard T.H. Chan — Mindful Eating", url: "https://www.hsph.harvard.edu/nutritionsource/mindful-eating/" },
      { name: "NIH — Sleep and Obesity", url: "https://www.niddk.nih.gov/health-information/professionals/clinical-tools-patient-management/overweight-obesity/health-risks" },
      { name: "WHO — Healthy Diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
    ],
  },
];
