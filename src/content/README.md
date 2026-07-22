# 📝 Guía para editores de contenido

Bienvenido/a. Esta carpeta contiene **todo el texto** que se muestra en la página web. Si solo quieres cambiar palabras, párrafos o títulos, **este es el único lugar que necesitas tocar**.

---

## ¿Cómo edito el contenido?

1. Abre el proyecto en **VS Code** o **Cursor** (cualquier editor de texto sirve).
2. Entra a la carpeta `src/content/site/`.
3. Verás varios archivos `.md` (Markdown). Cada uno es una sección de la página.
4. Haz clic en el archivo que quieras editar.
5. Cambia el texto entre los títulos `##`.
6. Guarda con `Ctrl + S`.
7. En la terminal, ejecuta: `npm run dev`
8. Abre `http://localhost:4321` en tu navegador para ver el cambio.

---

## ¿Qué archivo edito para cada parte?

| Parte de la página | Archivo |
|---|---|
| Menú superior (logo, nombre del sitio) | `header.md` |
| Imagen y título principal | `hero.md` |
| Introducción y Determinantes de salud mental | `intro.md` |
| Los 3 ejes temáticos (cada uno por separado) | `ejes/eje-1.md`, `ejes/eje-2.md`, `ejes/eje-3.md` |
| Texto junto al cerebro 3D | `brain-viewer.md` |
| Conclusiones | `conclusions.md` |
| Referencias / bibliografía | `bibliography.md` |

---

## ¿Qué puedo editar?

✅ **Sí puedes:**
- Cambiar cualquier texto entre los `##` (títulos), `###` (subtítulos) y párrafos.
- Agregar, quitar o cambiar viñetas con `-`.
- Agregar links con `[texto](https://url)`.
- Agregar **negrita** con `**palabra**` o *cursiva* con `*palabra*`.
- Agregar imágenes con `![descripción](url)`.

❌ **No necesitas tocar:**
- El bloque al inicio del archivo entre líneas `---` (se llama "frontmatter"). Solo edítalo si sabes lo que haces.
- El nombre de los archivos.
- Nada fuera de esta carpeta (`src/content/`).

---

## ¿Cómo cambio el orden de las secciones?

En el bloque `---` de cada archivo, hay un campo `orden`. El número más bajo aparece primero.

```yaml
orden: 1   # aparece primero
orden: 5   # aparece después
```

---

## ¿Cómo agrego un nuevo eje temático?

1. Ve a la carpeta `src/content/site/ejes/`.
2. Copia el archivo `eje-1.md` y renómbralo como `eje-4.md`.
3. Cambia los campos del frontmatter:

```yaml
---
id: eje-4
slug: eje-4
titulo: "Eje 4: Nuevo tema"
subtitulo: "Descripción corta"
orden: 4
oculto: false
---
```

4. Edita el contenido debajo.
5. Para que aparezca como tab, también hay que agregarlo en `src/data/strings.json` (pide ayuda a un desarrollador para esto).

---

## ¿Cómo oculto una sección sin borrarla?

En el frontmatter, cambia:

```yaml
oculto: true
```

---

## ¿Necesito instalar algo?

Solo necesitas tener **Node.js** instalado. Si ya puedes correr `npm run dev`, ya está todo listo.

---

## ¿Algo no funciona?

Si después de guardar el `npm run dev` muestra un error en pantalla, lee el mensaje: casi siempre dice **qué archivo** y **qué campo** falta. Corrige y guarda de nuevo.

Si el error es muy técnico, contacta a un desarrollador con la pantalla de error.
