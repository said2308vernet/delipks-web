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
    "introduccion": "Jugosas albóndigas de pollo con un toque verde de espinaca, bañadas en una salsa casera de jitomate y coronadas con parmesano que se derrite justo al calentarlas: reconfortante desde el primer bocado.",
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
    "introduccion": "Una jugosa mezcla de albóndigas de res bañadas en una salsa profunda de jitomate y chile guajillo, servidas sobre arroz blanco esponjado: sabor de casa en cada cucharada.",
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
    "introduccion": "Cubos de pollo jugoso marinados en achiote, naranja y limón —ese sabor yucateco que despierta el antojo—, acompañados de arroz blanco y verduras salteadas al punto.",
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
    "introduccion": "Una generosa tortilla rellena de huevo esponjoso, frijol cremoso y queso Oaxaca bien fundido, horneada para sellar todo el sabor: el desayuno contundente que se te va a antojar entre semana.",
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
    "introduccion": "Cerdo tierno guisado a la mexicana con jitomate, cebolla y chile fresco, acompañado de un cremoso puré de papa y una ensalada de col bien crujiente: el combo perfecto de suave y crocante.",
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
    "introduccion": "Cerdo bañado en un adobo profundo de chiles guajillo y ancho con el toque justo de vinagre, acompañado de arroz suelto y verduras de raíz tiernas: sabor que se queda contigo.",
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
    "introduccion": "Cerdo deshebrado y jugoso, bañado en un adobo casero de chiles secos, acompañado de arroz esponjoso y verduras salteadas: una versión más ligera, igual de sabrosa.",
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
    "introduccion": "Empanadas de masa dorada y crujiente, rellenas de un picadillo de res bien sazonado con papa, zanahoria y chícharo: el antojo casero que se come con las manos.",
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
    "introduccion": "Una deliciosa mezcla de frijol cremoso y queso derretido envuelta en tortillas bañadas en salsa casera, acompañada de arroz: comfort food que sabe a hecho en casa.",
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
    "introduccion": "Una refrescante mezcla de camarón cocido en su punto, pepino y jitomate recién cortados, bañada en una vinagreta cítrica: ligera, jugosa y perfecta para arrancar la semana.",
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
    "introduccion": "Una fresca mezcla de garbanzo, verduras crujientes, aceitunas y queso fresco, bañada en una vinagreta de hierbas: colorida, ligera y llena de sabor mediterráneo.",
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
    "introduccion": "Huevo esponjoso horneado con calabacita, granos de elote y un toque de rajas de poblano, coronado con cotija: sabores mexicanos con personalidad propia en cada bocado.",
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
    "introduccion": "Capas de pasta suave, carne de res guisada en una salsa de jitomate casera y queso gratinado que se funde justo al calentarla: reconfortante de principio a fin.",
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
    "introduccion": "Milanesa de pollo empanizada y horneada hasta quedar dorada y crujiente por fuera, jugosa por dentro, acompañada de un puré de camote naturalmente dulce y ensalada fresca.",
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
    "introduccion": "Pan crujiente con una capa generosa de frijoles cremosos y queso Oaxaca, listo para gratinar en casa hasta quedar dorado y derretido, acompañado de pico de gallo fresco.",
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
    "introduccion": "Huevo esponjoso horneado con espinaca fresca, champiñones salteados y un toque de queso derretido: un clásico reconfortante para arrancar el día bien satisfecho.",
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
    "introduccion": "Una cremosa mezcla de avena, manzana en cubitos y un toque cálido de canela, reposada toda la noche: dulce de forma natural, lista para disfrutarse fría.",
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
    "introduccion": "La versión chocolatosa de nuestra avena favorita: cremosa, con cacao real, plátano y chispas de chocolate semiamargo derritiéndose encima. Se antoja como postre, alimenta como desayuno.",
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
    "introduccion": "Un panqué casero, húmedo y ligeramente dulce, con avena, plátano maduro y nuez tostada, acompañado de fruta fresca: como recién salido del horno de la abuela.",
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
    "introduccion": "Capas de yogurt cremoso, granola tostada con nuez y fruta fresca de temporada: fresco, crujiente y listo en segundos para arrancar el día sin encender la estufa.",
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
    "introduccion": "Carne molida de res guisada en jitomate con un toque ahumado de chipotle, zanahoria y chícharo, servida sobre arroz blanco esponjado: sabor casero con un puntito picosito.",
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
    "introduccion": "Pechuga jugosa sellada a la plancha con hierbas frescas y limón, acompañada de quinoa esponjada y un colorido mix de verduras asadas: simple, fresco y lleno de sabor.",
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
    "introduccion": "Pechuga jugosa bañada en una salsa verde fresca de tomatillo y chile serrano, acompañada de arroz suelto y un mix de verduras asadas con ese toque ahumado que se antoja.",
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
    "introduccion": "Tortilla dorada y crujiente rellena de rajas de poblano, elote y abundante queso Oaxaca bien derretido: el antojo mexicano de siempre, ahora como desayuno práctico.",
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
    "introduccion": "Tortilla rellena de tinga de pollo jugosa y queso Oaxaca, lista para dorar en casa hasta quedar crujiente por fuera y derretida por dentro: se antoja solo de leerlo.",
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
    "introduccion": "Un filete jugoso bajo una costra dorada de hierbas frescas, acompañado de quinoa esponjosa y verduras asadas con un toque dulce: se siente (y sabe) a platillo de restaurante.",
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
    "introduccion": "Una sopa cremosa y reconfortante de garbanzo con un fondo ahumado que recuerda los sabores de Puebla: el abrazo tibio que se antoja cualquier día de la semana.",
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
    "introduccion": "Lentejas suaves en un caldo aromático y reconfortante, con el toque dulce del plátano macho: sencilla, casera y de esas que se antojan repetir.",
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
    "introduccion": "Coliflor asada hasta dorar sus bordes, acompañada de frijoles cremosos y una salsa verde bien fresca: una cena vegetariana ligera con ese sabor tostado que engancha.",
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
    "introduccion": "Masa de maíz suave y esponjada al vapor, rellena de frijol cremoso o rajas con queso Oaxaca derretido: el sabor tradicional mexicano de siempre, listo para antojarte entre semana.",
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
    "introduccion": "Taquitos enrollados a mano, rellenos de tinga de pollo jugosa y horneados hasta quedar dorados y crujientes por fuera, acompañados de col morada fresca y crema ligera: el antojo de siempre, más ligero.",
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
    "introduccion": "Cubos de tofu dorados al horno con especias cajún que despiertan el paladar, sobre una cama de arroz integral y un colorido mix de verduras asadas: sabor con mucha personalidad.",
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
    "introduccion": "Una deliciosa mezcla de lentejas horneadas con hierbas, especias y un toque ahumado, bañada en salsa de jitomate: firme, sustanciosa y con ese sabor de cocina de casa que reconforta.",
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
    "introduccion": "Pollo deshebrado y jugoso en un guisado ahumado de jitomate y chipotle, acompañado de arroz integral y ejotes salteados: sabor casero con el picorcito justo.",
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
    "introduccion": "Una fresca mezcla de atún sazonado con vinagreta cítrica y verduras crujientes, envuelta en un wrap ligero: rápido, sabroso y muy satisfactorio.",
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
    "introduccion": "Pechuga de pollo deshebrada y jugosa, cocinada lentamente en salsa verde, envuelta junto con verduras salteadas en una tortilla suave: práctico y lleno de sabor casero.",
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
