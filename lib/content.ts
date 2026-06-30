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
    description: "Preparados a diario, sin congelar",
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
  { name: "Bowl mediterráneo" },
  { name: "Salmón con espárragos" },
  { name: "Buddha bowl de garbanzo" },
  { name: "Pollo a la mostaza" },
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
  },
  {
    id: "equilibrado",
    label: "Plan equilibrado",
    includes: ["5 desayunos", "5 comidas"],
    totalMeals: 10,
    priceOneTime: 1650,
    priceSubscription: 1485,
    popular: true,
  },
  {
    id: "completo",
    label: "Plan completo",
    includes: ["5 desayunos", "5 comidas", "5 cenas"],
    totalMeals: 15,
    priceOneTime: 2400,
    priceSubscription: 2160,
    popular: false,
  },
];

export const subscriptionDiscountLabel = "-10%";

export const faqs = [
  {
    question: "¿Cómo hago mi pedido?",
    answer:
      "Elige tu plan en el sitio y confírmalo por WhatsApp. Nuestro equipo te ayuda a definir fechas y entrega.",
  },
  {
    question: "¿En qué zonas entregan?",
    answer: `Entregamos en ${site.deliveryZones.join(" y ")}. Escríbenos por WhatsApp para confirmar tu colonia.`,
  },
  {
    question: "¿Qué días entregan?",
    answer:
      "Entregamos los domingos y miércoles. La entrega del domingo cubre tus platillos de inicio de semana y la del miércoles el resto, completando tu plan de lunes a viernes.",
  },
  {
    question: "¿Puedo cancelar mi suscripción cuando quiera?",
    answer:
      "Sí. Puedes cancelar o pausar tu suscripción en cualquier momento escribiéndonos por WhatsApp.",
  },
  {
    question: "¿Cuánto dura fresca la comida?",
    answer:
      "Nuestros platillos conservan su frescura varios días en refrigeración gracias a nuestro empaque especializado.",
  },
];
