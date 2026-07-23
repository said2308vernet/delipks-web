export const site = {
  name: "delipks",
  whatsappNumber: "522216544335",
  deliveryZones: ["Puebla", "Cholula"],
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const trustItems = [
  {
    icon: "leaf",
    title: "Ingredientes frescos",
    description: "Cocinados semanalmente, conservación validada para toda la semana",
  },
  {
    icon: "stethoscope",
    title: "Supervisión nutricional",
    description: "Menús diseñados por nutriólogos",
  },
  {
    icon: "box",
    title: "Empaque que conserva",
    description: "Frescura garantizada al abrir",
  },
  {
    icon: "pin",
    title: "Cobertura local",
    description: `${site.deliveryZones.join(" y ")}`,
  },
];

export const steps = [
  {
    number: 1,
    title: "Elige tu plan",
    description: "En el sitio web, según tu objetivo",
  },
  {
    number: 2,
    title: "Confirma por WhatsApp",
    description: "Validamos pedido, fecha y entrega",
  },
  {
    number: 3,
    title: "Preparamos tu pedido",
    description: "Cocinado fresco y bien empacado",
  },
  {
    number: 4,
    title: "Recibe en tu puerta",
    description: "Entrega puntual donde estés",
  },
];

export const goals = {
  featured: {
    icon: "leaf",
    title: "Alimentación saludable",
    description:
      "Ingredientes de calidad y balance nutricional en cada platillo, para que comas bien y te sientas con energía todos los días, sin esfuerzo.",
  },
  supporting: [
    {
      icon: "briefcase",
      title: "Para tu semana ocupada",
      description:
        "Sin cocinar, sin lavar trastes, sin ir al súper. Recupera tu tiempo y come bien igual.",
    },
    {
      icon: "barbell",
      title: "Para tu rendimiento",
      description:
        "Macros pensados para entrenar y recuperar, sin perder tiempo en meal prep.",
    },
  ],
};

export const featuredDishes = [
  { name: "Bowl mediterráneo",        kcal: 420, protein: 22 },
  { name: "Salmón con espárragos",    kcal: 380, protein: 38 },
  { name: "Buddha bowl de garbanzo",  kcal: 450, protein: 18 },
  { name: "Pollo a la mostaza",       kcal: 410, protein: 42 },
];

export const plans = [
  {
    id: "basico",
    label: "Plan básico",
    includes: ["5 comidas"],
    totalMeals: 5,
    priceOneTime: 900,
    priceSubscription: 810,
    popular: false,
    // Estimado nutricional por comida (se actualizará con recetas reales)
    nutrition: { label: "por comida aprox.", kcal: "~500 kcal", protein: "~35g prot" },
  },
  {
    id: "equilibrado",
    label: "Plan equilibrado",
    includes: ["5 desayunos", "5 comidas"],
    totalMeals: 10,
    priceOneTime: 1650,
    priceSubscription: 1485,
    popular: true,
    nutrition: { label: "por día aprox.", kcal: "~880 kcal", protein: "~57g prot" },
  },
  {
    id: "completo",
    label: "Plan completo",
    includes: ["5 desayunos", "5 comidas", "5 cenas"],
    totalMeals: 15,
    priceOneTime: 2400,
    priceSubscription: 2160,
    popular: false,
    nutrition: { label: "por día aprox.", kcal: "~1,240 kcal", protein: "~85g prot" },
  },
];

export const subscriptionDiscountLabel = "-10%";

export const faqs = [
  {
    question: "¿Cómo hago mi pedido?",
    answer:
      "Elige tu plan en el sitio y confírmalo por WhatsApp. Nuestro equipo te ayuda a definir tu plan, fecha de inicio y zona de entrega.",
  },
  {
    question: "¿Cuándo debo hacer mi pedido?",
    answer:
      "El cierre de pedidos es cada viernes a las 8pm para la semana siguiente. Te recomendamos confirmar antes para asegurar tu lugar.",
  },
  {
    question: "¿En qué zonas entregan?",
    answer: `Entregamos en ${site.deliveryZones.join(" y ")}. Escríbenos por WhatsApp para confirmar si llegamos a tu colonia.`,
  },
  {
    question: "¿Qué días entregan?",
    answer:
      "Entregamos una vez por semana, los domingos, con toda tu semana de lunes a viernes lista de una sola vez.",
  },
  {
    question: "¿El precio incluye la entrega a domicilio?",
    answer:
      "Sí, la entrega está incluida en todos los planes. No hay costo adicional por el envío dentro de nuestra zona de cobertura.",
  },
  {
    question: "¿Los precios incluyen IVA?",
    answer:
      "Sí. Todos los precios publicados ya incluyen IVA. Sin cargos ocultos.",
  },
  {
    question: "¿Cómo llega empacada la comida?",
    answer:
      "En una caja organizada y etiquetada por día. Cada platillo viene en recipiente sellado listo para refrigerar. No necesitas ningún contenedor adicional.",
  },
  {
    question: "¿Tengo que calentar la comida o viene lista para comer?",
    answer:
      "La mayoría de los platillos son listos para comer o solo requieren un calentamiento rápido de 2 a 3 minutos en microondas. Todo viene indicado en la etiqueta.",
  },
  {
    question: "¿Qué pasa si tengo alguna alergia o intolerancia?",
    answer:
      "Escríbenos por WhatsApp antes de confirmar tu pedido. Hacemos lo posible por adaptar tu menú o indicarte qué platillos evitar según tu caso.",
  },
  {
    question: "¿Puedo cancelar o pausar mi suscripción?",
    answer:
      "Sí. Puedes cancelar o pausar tu suscripción en cualquier momento escribiéndonos por WhatsApp. Sin penalizaciones ni trámites complicados.",
  },
  {
    question: "¿Qué pasa si no estoy en casa cuando llegue la entrega?",
    answer:
      "Coordinamos contigo previamente el horario de entrega. Si surge algún imprevisto, te avisamos antes de llegar para encontrar la mejor solución.",
  },
  {
    question: "¿Cuánto dura fresca la comida?",
    answer:
      "Nuestros platillos conservan su frescura toda la semana gracias a nuestro empaque especializado y nuestro proceso de conservación. Los primeros días se mantienen refrigerados y los de jueves-viernes se ultracongelan justo después de prepararse, para que los recibas siempre en su punto óptimo.",
  },
];
