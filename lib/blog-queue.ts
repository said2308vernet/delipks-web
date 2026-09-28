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
export const queuedBlogPosts: BlogPost[] = [];
