export type TipoPlatillo = "desayuno" | "comida" | "cena";

export type Receta = {
  slug: string;
  nombre: string;
  tipos: TipoPlatillo[];
  introduccion: string;
  image: string;
  nutricion: {
    calorias: number;
    proteina: number;
    carbohidratos: number;
    grasa: number;
  };
  destacado: boolean;
};

// Catalogo de recetas activas, exportado desde delipks-admin (comite de menus).
// Los 4 elementos nutricionales (calorias, proteina, carbohidratos, grasa) son
// siempre los mismos en toda la web para mantener consistencia.
export const recetas: Receta[] = [
  {
    "slug": "albondigas-de-pollo-en-salsa-de-jitomate-parmesano-y-espinacas",
    "nombre": "Albóndigas de pollo en salsa de jitomate, parmesano y espinacas",
    "tipos": [
      "comida"
    ],
    "introduccion": "Albóndigas de pollo suaves con un toque verde de espinaca, bañadas en una salsa casera de jitomate y coronadas con parmesano que se funde al calentarlas en casa.",
    "image": "/recetas/albondigas-de-pollo-en-salsa-de-jitomate-parmesano-y-espinacas.webp",
    "nutricion": {
      "calorias": 500,
      "proteina": 36,
      "carbohidratos": 48,
      "grasa": 16
    },
    "destacado": true
  },
  {
    "slug": "albondigas-de-res-en-salsa-de-jitomate-y-guajillo-con-arroz",
    "nombre": "Albóndigas de res en salsa de jitomate y guajillo con arroz",
    "tipos": [
      "comida"
    ],
    "introduccion": "Albóndigas jugosas de res bañadas en una salsa de jitomate con un toque de chile guajillo, servidas sobre arroz blanco.",
    "image": "/recetas/albondigas-de-res-en-salsa-de-jitomate-y-guajillo-con-arroz.webp",
    "nutricion": {
      "calorias": 490,
      "proteina": 28,
      "carbohidratos": 52,
      "grasa": 17
    },
    "destacado": false
  },
  {
    "slug": "brochetas-de-pollo-marinadas-en-achiote-y-citricos-con-arroz",
    "nombre": "Brochetas de pollo marinadas en achiote y cítricos con arroz",
    "tipos": [
      "comida"
    ],
    "introduccion": "Cubos de pollo jugoso marinados en achiote, naranja y limón, con ese sabor yucateco que despierta el apetito, acompañados de arroz blanco y verduras salteadas.",
    "image": "/recetas/brochetas-de-pollo-marinadas-en-achiote-y-citricos-con-arroz.webp",
    "nutricion": {
      "calorias": 480,
      "proteina": 38,
      "carbohidratos": 55,
      "grasa": 10
    },
    "destacado": false
  },
  {
    "slug": "burrito-horneado-de-huevo-y-frijol",
    "nombre": "Burrito horneado de huevo y frijol",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Tortilla rellena de huevo horneado bien cuajado, frijol y queso Oaxaca fundido, envuelta y horneada para sellar todo el sabor: un desayuno contundente que aguanta perfecto hasta jueves o viernes.",
    "image": "/recetas/burrito-horneado-de-huevo-y-frijol.webp",
    "nutricion": {
      "calorias": 655,
      "proteina": 39,
      "carbohidratos": 49,
      "grasa": 33
    },
    "destacado": true
  },
  {
    "slug": "cerdo-a-la-mexicana-con-pure-de-papa-y-ensalada-de-col",
    "nombre": "Cerdo a la mexicana con puré de papa y ensalada de col",
    "tipos": [
      "comida"
    ],
    "introduccion": "Cerdo guisado al estilo a la mexicana —jitomate, cebolla y chile fresco— acompañado de puré de papa cremoso y ensalada de col crujiente.",
    "image": "/recetas/cerdo-a-la-mexicana-con-pure-de-papa-y-ensalada-de-col.webp",
    "nutricion": {
      "calorias": 520,
      "proteina": 28,
      "carbohidratos": 48,
      "grasa": 24
    },
    "destacado": false
  },
  {
    "slug": "cerdo-en-adobo-con-arroz-y-verduras",
    "nombre": "Cerdo en adobo con arroz y verduras",
    "tipos": [
      "comida"
    ],
    "introduccion": "Cerdo bañado en un adobo profundo de chiles guajillo y ancho, con el toque justo de vinagre, acompañado de arroz y verduras de raíz suaves.",
    "image": "/recetas/cerdo-en-adobo-con-arroz-y-verduras.webp",
    "nutricion": {
      "calorias": 500,
      "proteina": 27,
      "carbohidratos": 50,
      "grasa": 20
    },
    "destacado": false
  },
  {
    "slug": "cerdo-en-adobo-deshebrado-con-arroz-y-verduras",
    "nombre": "Cerdo en adobo deshebrado con arroz y verduras",
    "tipos": [
      "cena"
    ],
    "introduccion": "Cerdo deshebrado bañado en un adobo de chiles secos, acompañado de arroz esponjoso y verduras salteadas. Formato ligero, distinto del plato fuerte.",
    "image": "/recetas/cerdo-en-adobo-deshebrado-con-arroz-y-verduras.webp",
    "nutricion": {
      "calorias": 420,
      "proteina": 26,
      "carbohidratos": 44,
      "grasa": 14
    },
    "destacado": false
  },
  {
    "slug": "empanadas-horneadas-de-picadillo-de-res",
    "nombre": "Empanadas horneadas de picadillo de res",
    "tipos": [
      "cena"
    ],
    "introduccion": "Empanadas de masa dorada al horno, rellenas de un picadillo de res sazonado y bien reducido, con papa, zanahoria y chícharo.",
    "image": "/recetas/empanadas-horneadas-de-picadillo-de-res.webp",
    "nutricion": {
      "calorias": 480,
      "proteina": 18,
      "carbohidratos": 46,
      "grasa": 24
    },
    "destacado": false
  },
  {
    "slug": "enchiladas-de-frijol-y-queso-con-arroz",
    "nombre": "Enchiladas de frijol y queso con arroz",
    "tipos": [
      "comida"
    ],
    "introduccion": "Enchiladas caseras bañadas en salsa, rellenas de frijol cremoso y queso que se derrite justo al calentarlas en casa, acompañadas de arroz.",
    "image": "/recetas/enchiladas-de-frijol-y-queso-con-arroz.webp",
    "nutricion": {
      "calorias": 480,
      "proteina": 18,
      "carbohidratos": 68,
      "grasa": 15
    },
    "destacado": false
  },
  {
    "slug": "ensalada-de-camarones-con-vinagreta-citrica-y-pepino-jitomate",
    "nombre": "Ensalada de camarones con vinagreta cítrica y pepino-jitomate",
    "tipos": [
      "cena"
    ],
    "introduccion": "Camarón cocido a punto justo, pepino y jitomate recién cortados, con un toque cítrico que refresca al final del día. Una cena ligera y fresca para arrancar la semana.",
    "image": "/recetas/ensalada-de-camarones-con-vinagreta-citrica-y-pepino-jitomate.webp",
    "nutricion": {
      "calorias": 260,
      "proteina": 28,
      "carbohidratos": 12,
      "grasa": 11
    },
    "destacado": true
  },
  {
    "slug": "ensalada-mediterranea-de-garbanzo-con-verduras-frescas",
    "nombre": "Ensalada mediterránea de garbanzo con verduras frescas",
    "tipos": [
      "cena"
    ],
    "introduccion": "Garbanzo, verduras crujientes, aceitunas y un toque de queso fresco, bañados en una vinagreta de hierbas.",
    "image": "/recetas/ensalada-mediterranea-de-garbanzo-con-verduras-frescas.webp",
    "nutricion": {
      "calorias": 340,
      "proteina": 13,
      "carbohidratos": 34,
      "grasa": 18
    },
    "destacado": true
  },
  {
    "slug": "frittata-individual-de-huevo-con-calabacita-y-elote",
    "nombre": "Frittata individual de huevo con calabacita y elote",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Huevo horneado con calabacita, granos de elote y un toque de rajas de poblano, coronado con cotija: sabores mexicanos que le dan personalidad propia.",
    "image": "/recetas/frittata-individual-de-huevo-con-calabacita-y-elote.webp",
    "nutricion": {
      "calorias": 415,
      "proteina": 30,
      "carbohidratos": 16,
      "grasa": 26
    },
    "destacado": false
  },
  {
    "slug": "lasana-de-res-con-salsa-de-jitomate-y-queso",
    "nombre": "Lasaña de res con salsa de jitomate y queso",
    "tipos": [
      "comida"
    ],
    "introduccion": "Capas de pasta suave, carne de res guisada en salsa de jitomate casera y queso que se funde justo cuando la calientas en casa.",
    "image": "/recetas/lasana-de-res-con-salsa-de-jitomate-y-queso.webp",
    "nutricion": {
      "calorias": 560,
      "proteina": 32,
      "carbohidratos": 42,
      "grasa": 26
    },
    "destacado": false
  },
  {
    "slug": "milanesa-de-pollo-horneada-con-pure-de-camote-y-ensalada",
    "nombre": "Milanesa de pollo horneada con puré de camote y ensalada",
    "tipos": [
      "comida"
    ],
    "introduccion": "Milanesa de pollo empanizada y horneada hasta quedar doradita, sin necesidad de fritura, acompañada de puré de camote naturalmente dulce y ensalada fresca.",
    "image": "/recetas/milanesa-de-pollo-horneada-con-pure-de-camote-y-ensalada.webp",
    "nutricion": {
      "calorias": 540,
      "proteina": 40,
      "carbohidratos": 45,
      "grasa": 20
    },
    "destacado": true
  },
  {
    "slug": "molletes-horneados-de-frijol-con-queso-oaxaca",
    "nombre": "Molletes horneados de frijol con queso Oaxaca",
    "tipos": [
      "cena"
    ],
    "introduccion": "Pan horneado con una capa generosa de frijoles y queso Oaxaca, listo para gratinar en casa hasta quedar dorado y derretido. Se acompaña con pico de gallo fresco.",
    "image": "/recetas/molletes-horneados-de-frijol-con-queso-oaxaca.webp",
    "nutricion": {
      "calorias": 470,
      "proteina": 18,
      "carbohidratos": 48,
      "grasa": 21
    },
    "destacado": false
  },
  {
    "slug": "omelette-horneado-individual-de-espinaca-y-champinon",
    "nombre": "Omelette horneado individual de espinaca y champiñón",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Huevo esponjoso horneado con espinaca fresca y champiñones salteados: un clásico reconfortante, con toque de queso, perfecto para un desayuno salado y satisfactorio.",
    "image": "/recetas/omelette-horneado-individual-de-espinaca-y-champinon.webp",
    "nutricion": {
      "calorias": 430,
      "proteina": 36,
      "carbohidratos": 7,
      "grasa": 29
    },
    "destacado": false
  },
  {
    "slug": "overnight-oats-con-manzana-y-canela",
    "nombre": "Overnight oats con manzana y canela",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Avena reposada toda la noche con manzana en cubitos y un toque cálido de canela: cremosa, dulce de forma natural y lista para disfrutarse fría.",
    "image": "/recetas/overnight-oats-con-manzana-y-canela.webp",
    "nutricion": {
      "calorias": 440,
      "proteina": 17,
      "carbohidratos": 80,
      "grasa": 8.5
    },
    "destacado": false
  },
  {
    "slug": "overnight-oats-de-chocolate-con-cacao-y-chispas-de-chocolate",
    "nombre": "Overnight oats de chocolate con cacao y chispas de chocolate",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "La versión chocolatosa de nuestra avena favorita: cremosa, con cacao real, plátano y chispas de chocolate semiamargo. Se siente como postre, pero empieza bien el día.",
    "image": "/recetas/overnight-oats-de-chocolate-con-cacao-y-chispas-de-chocolate.webp",
    "nutricion": {
      "calorias": 520,
      "proteina": 20,
      "carbohidratos": 90,
      "grasa": 14
    },
    "destacado": true
  },
  {
    "slug": "panque-horneado-de-avena-y-platano-con-nuez",
    "nombre": "Panqué horneado de avena y plátano con nuez",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Un panqué casero, húmedo y ligeramente dulce, hecho con avena, plátano maduro y nuez, acompañado de fruta fresca.",
    "image": "/recetas/panque-horneado-de-avena-y-platano-con-nuez.webp",
    "nutricion": {
      "calorias": 690,
      "proteina": 21,
      "carbohidratos": 104,
      "grasa": 27
    },
    "destacado": false
  },
  {
    "slug": "parfait-de-yogurt-con-granola-y-fruta-de-temporada",
    "nombre": "Parfait de yogurt con granola y fruta de temporada",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Capas de yogurt cremoso, granola tostada con nuez y fruta fresca de temporada: un desayuno ligero, refrescante y listo en segundos, ideal para arrancar el día sin encender la estufa.",
    "image": "/recetas/parfait-de-yogurt-con-granola-y-fruta-de-temporada.webp",
    "nutricion": {
      "calorias": 380,
      "proteina": 12,
      "carbohidratos": 57,
      "grasa": 10
    },
    "destacado": true
  },
  {
    "slug": "picadillo-de-res-enchipotlado-con-arroz-y-verduras",
    "nombre": "Picadillo de res enchipotlado con arroz y verduras",
    "tipos": [
      "comida"
    ],
    "introduccion": "Carne molida de res guisada con jitomate y un toque ahumado de chipotle, con zanahoria y chícharo, servida sobre arroz blanco.",
    "image": "/recetas/picadillo-de-res-enchipotlado-con-arroz-y-verduras.webp",
    "nutricion": {
      "calorias": 510,
      "proteina": 30,
      "carbohidratos": 50,
      "grasa": 20
    },
    "destacado": false
  },
  {
    "slug": "pollo-a-la-plancha-con-quinoa-y-verduras-asadas",
    "nombre": "Pollo a la plancha con quinoa y verduras asadas",
    "tipos": [
      "comida"
    ],
    "introduccion": "Pechuga sellada a la plancha con hierbas y limón, acompañada de quinoa esponjada y verduras asadas coloridas.",
    "image": "/recetas/pollo-a-la-plancha-con-quinoa-y-verduras-asadas.webp",
    "nutricion": {
      "calorias": 430,
      "proteina": 42,
      "carbohidratos": 32,
      "grasa": 14
    },
    "destacado": true
  },
  {
    "slug": "pollo-en-salsa-verde-con-arroz-y-verduras-asadas",
    "nombre": "Pollo en salsa verde con arroz y verduras asadas",
    "tipos": [
      "comida"
    ],
    "introduccion": "Pechuga jugosa bañada en una salsa verde fresca de tomatillo y chile serrano, acompañada de arroz suelto y un mix de verduras asadas con un toque ahumado.",
    "image": "/recetas/pollo-en-salsa-verde-con-arroz-y-verduras-asadas.webp",
    "nutricion": {
      "calorias": 480,
      "proteina": 38,
      "carbohidratos": 45,
      "grasa": 14
    },
    "destacado": true
  },
  {
    "slug": "quesadilla-de-desayuno-de-rajas-y-queso-oaxaca",
    "nombre": "Quesadilla de desayuno de rajas y queso Oaxaca",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Tortilla dorada rellena de rajas de poblano, elote y abundante queso Oaxaca derretido: el antojo mexicano de siempre, convertido en desayuno práctico.",
    "image": "/recetas/quesadilla-de-desayuno-de-rajas-y-queso-oaxaca.webp",
    "nutricion": {
      "calorias": 670,
      "proteina": 32,
      "carbohidratos": 48,
      "grasa": 39
    },
    "destacado": false
  },
  {
    "slug": "quesadillas-de-tinga-de-pollo-con-queso-oaxaca",
    "nombre": "Quesadillas de tinga de pollo con queso Oaxaca",
    "tipos": [
      "cena"
    ],
    "introduccion": "Tortilla doblada y rellena de tinga de pollo jugosa con queso Oaxaca, lista para dorar en casa hasta quedar crujiente y derretida por dentro.",
    "image": "/recetas/quesadillas-de-tinga-de-pollo-con-queso-oaxaca.webp",
    "nutricion": {
      "calorias": 460,
      "proteina": 24,
      "carbohidratos": 38,
      "grasa": 24
    },
    "destacado": false
  },
  {
    "slug": "salmon-horneado-en-costra-de-hierbas-con-quinoa-y-verduras",
    "nombre": "Salmón horneado en costra de hierbas con quinoa y verduras",
    "tipos": [
      "comida"
    ],
    "introduccion": "Un filete jugoso bajo una costra dorada de hierbas frescas, acompañado de quinoa esponjosa y verduras asadas con un toque dulce. Un platillo que se siente de restaurante.",
    "image": "/recetas/salmon-horneado-en-costra-de-hierbas-con-quinoa-y-verduras.webp",
    "nutricion": {
      "calorias": 520,
      "proteina": 34,
      "carbohidratos": 42,
      "grasa": 22
    },
    "destacado": true
  },
  {
    "slug": "sopa-de-garbanzo-ahumada-estilo-poblano",
    "nombre": "Sopa de garbanzo ahumada estilo poblano",
    "tipos": [
      "cena"
    ],
    "introduccion": "Una sopa reconfortante de garbanzo con un fondo ahumado que recuerda los sabores de Puebla.",
    "image": "/recetas/sopa-de-garbanzo-ahumada-estilo-poblano.webp",
    "nutricion": {
      "calorias": 230,
      "proteina": 11,
      "carbohidratos": 34,
      "grasa": 6
    },
    "destacado": false
  },
  {
    "slug": "sopa-de-lentejas-con-platano-macho",
    "nombre": "Sopa de lentejas con plátano macho",
    "tipos": [
      "cena"
    ],
    "introduccion": "Lentejas suaves en un caldo aromático, con el toque dulce y reconfortante del plátano macho.",
    "image": "/recetas/sopa-de-lentejas-con-platano-macho.webp",
    "nutricion": {
      "calorias": 290,
      "proteina": 13,
      "carbohidratos": 50,
      "grasa": 5
    },
    "destacado": false
  },
  {
    "slug": "tacos-de-coliflor-asada-con-frijoles-y-salsa-verde",
    "nombre": "Tacos de coliflor asada con frijoles y salsa verde",
    "tipos": [
      "cena"
    ],
    "introduccion": "Coliflor asada hasta dorar sus bordes, acompañada de frijoles cremosos y una salsa verde fresca. Una cena vegetariana ligera y llena de sabor tostado.",
    "image": "/recetas/tacos-de-coliflor-asada-con-frijoles-y-salsa-verde.webp",
    "nutricion": {
      "calorias": 340,
      "proteina": 12,
      "carbohidratos": 48,
      "grasa": 12
    },
    "destacado": true
  },
  {
    "slug": "tamal-de-frijol-o-rajas-con-queso",
    "nombre": "Tamal de frijol o rajas con queso",
    "tipos": [
      "desayuno"
    ],
    "introduccion": "Masa de maíz suave y esponjada al vapor, rellena de frijol o rajas con queso Oaxaca: el sabor tradicional mexicano de siempre, listo para descongelar entre semana.",
    "image": "/recetas/tamal-de-frijol-o-rajas-con-queso.webp",
    "nutricion": {
      "calorias": 675,
      "proteina": 21,
      "carbohidratos": 72,
      "grasa": 35
    },
    "destacado": false
  },
  {
    "slug": "taquitos-dorados-al-horno-de-tinga-de-pollo-con-col-y-crema-ligera",
    "nombre": "Taquitos dorados al horno de tinga de pollo con col y crema ligera",
    "tipos": [
      "cena"
    ],
    "introduccion": "Taquitos enrollados a mano, rellenos de tinga de pollo jugosa y horneados hasta quedar dorados y crujientes por fuera. Se acompañan de col morada y crema ligera aparte.",
    "image": "/recetas/taquitos-dorados-al-horno-de-tinga-de-pollo-con-col-y-crema-ligera.webp",
    "nutricion": {
      "calorias": 430,
      "proteina": 24,
      "carbohidratos": 40,
      "grasa": 20
    },
    "destacado": false
  },
  {
    "slug": "tazon-de-tofu-al-horno-estilo-cajun-con-arroz-integral-y-verduras-asadas",
    "nombre": "Tazón de tofu al horno estilo cajún con arroz integral y verduras asadas",
    "tipos": [
      "comida"
    ],
    "introduccion": "Cubos de tofu horneado (no frito) con especias cajún que despiertan el paladar, sobre una cama de arroz integral y verduras asadas coloridas.",
    "image": "/recetas/tazon-de-tofu-al-horno-estilo-cajun-con-arroz-integral-y-verduras-asadas.webp",
    "nutricion": {
      "calorias": 430,
      "proteina": 20,
      "carbohidratos": 55,
      "grasa": 14
    },
    "destacado": true
  },
  {
    "slug": "terrina-de-lentejas-al-horno-con-hierbas-y-especias",
    "nombre": "Terrina de lentejas al horno con hierbas y especias",
    "tipos": [
      "comida"
    ],
    "introduccion": "Una terrina rústica de lentejas horneadas con hierbas, especias y un toque ahumado, bañada en salsa de jitomate. Firme, sustanciosa y llena de sabor de cocina de casa.",
    "image": "/recetas/terrina-de-lentejas-al-horno-con-hierbas-y-especias.webp",
    "nutricion": {
      "calorias": 410,
      "proteina": 22,
      "carbohidratos": 58,
      "grasa": 10
    },
    "destacado": false
  },
  {
    "slug": "tinga-de-pollo-con-arroz-integral-y-ejotes-salteados",
    "nombre": "Tinga de pollo con arroz integral y ejotes salteados",
    "tipos": [
      "comida"
    ],
    "introduccion": "Pollo deshebrado en un guisado ahumado de jitomate y chipotle, con la frescura del arroz integral y ejotes salteados.",
    "image": "/recetas/tinga-de-pollo-con-arroz-integral-y-ejotes-salteados.webp",
    "nutricion": {
      "calorias": 460,
      "proteina": 32,
      "carbohidratos": 55,
      "grasa": 12
    },
    "destacado": false
  },
  {
    "slug": "wrap-de-atun-con-vinagreta-citrica-y-verduras",
    "nombre": "Wrap de atún con vinagreta cítrica y verduras",
    "tipos": [
      "comida"
    ],
    "introduccion": "Un wrap fresco y ligero, relleno de atún sazonado con una vinagreta cítrica que despierta el paladar, acompañado de una ensalada crujiente.",
    "image": "/recetas/wrap-de-atun-con-vinagreta-citrica-y-verduras.webp",
    "nutricion": {
      "calorias": 420,
      "proteina": 30,
      "carbohidratos": 45,
      "grasa": 14
    },
    "destacado": false
  },
  {
    "slug": "wrap-de-pollo-en-salsa-verde-con-verduras",
    "nombre": "Wrap de pollo en salsa verde con verduras",
    "tipos": [
      "cena"
    ],
    "introduccion": "Pechuga de pollo deshebrada y cocinada lentamente en salsa verde, envuelta junto con verduras salteadas en una tortilla suave.",
    "image": "/recetas/wrap-de-pollo-en-salsa-verde-con-verduras.webp",
    "nutricion": {
      "calorias": 380,
      "proteina": 26,
      "carbohidratos": 34,
      "grasa": 14
    },
    "destacado": false
  }
];
