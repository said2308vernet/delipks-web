export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "beneficios-meal-prep",
    title: "5 beneficios del meal prep que cambiarán tu semana",
    excerpt:
      "Preparar tus comidas con anticipación no solo ahorra tiempo — mejora tu alimentación, reduce el estrés y te ayuda a mantener tus objetivos.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-20",
  },
  {
    slug: "proteinas-para-tu-dia",
    title: "¿Cuánta proteína necesitas al día? Guía práctica",
    excerpt:
      "La proteína es clave para recuperarte, mantenerte saciado y construir músculo. Te explicamos cuánta necesitas según tu objetivo.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80&auto=format&fit=crop",
    category: "Nutrición",
    date: "2026-06-15",
  },
  {
    slug: "desayunos-rapidos-saludables",
    title: "7 desayunos saludables en menos de 10 minutos",
    excerpt:
      "No necesitas horas en la cocina para empezar bien el día. Estas opciones son rápidas, nutritivas y deliciosas.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80&auto=format&fit=crop",
    category: "Recetas",
    date: "2026-06-10",
  },
  {
    slug: "mitos-comida-saludable",
    title: "6 mitos sobre la comida saludable que debes dejar de creer",
    excerpt:
      "Comer sano no significa comer aburrido, caro o sin sabor. Desmontamos los mitos más comunes que frenan tu cambio de hábitos.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "2026-06-05",
  },
  {
    slug: "hidratacion-rendimiento",
    title: "Hidratación y rendimiento: lo que nadie te dice",
    excerpt:
      "El agua no solo quita la sed. Una buena hidratación mejora tu concentración, digestión y hasta tu estado de ánimo.",
    image:
      "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&q=80&auto=format&fit=crop",
    category: "Bienestar",
    date: "2026-05-28",
  },
  {
    slug: "snacks-saludables-oficina",
    title: "Los mejores snacks saludables para la oficina",
    excerpt:
      "Evita las máquinas expendedoras con estas opciones fáciles de llevar que te mantienen con energía toda la tarde.",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80&auto=format&fit=crop",
    category: "Recetas",
    date: "2026-05-20",
  },
];
