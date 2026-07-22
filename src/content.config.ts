import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Esquema de las secciones de la página.
 * Cada archivo .md en src/content/site/ es una sección.
 *
 * Para los editores:
 * - Para agregar una nueva sección, copia un .md existente y cámbiale el campo `id`.
 * - Para reordenar secciones, cambia el número en `orden` (menor = aparece primero).
 * - El campo `slug` se usa para el id de la URL (#introduccion, #ejes, etc).
 */
const seccion = z.object({
  id: z.string(),
  slug: z.string(),
  titulo: z.string(),
  subtitulo: z.string().optional(),
  orden: z.number().int().nonnegative(),
  oculto: z.boolean().default(false),
});

const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: seccion,
});

export const collections = { site };
