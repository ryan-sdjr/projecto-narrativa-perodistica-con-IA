import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const seccion = z.object({
  id: z.string(),
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
