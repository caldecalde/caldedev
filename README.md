# caldedev — Portfolio

Portafolio personal de **Andrés Calderón Castro**, Full Stack Developer, construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

🔗 Repositorio: [github.com/caldecalde/caldedev](https://github.com/caldecalde/caldedev)

## Estructura

```text
src/
  data/profile.ts       # Nombre, bio, links y proyectos (editar aquí)
  layouts/Layout.astro  # Layout base (head, meta tags, estilos globales)
  components/           # Header, Hero, About, Projects, Contact, Footer
  pages/index.astro     # Ensambla las secciones de la página principal
```

Para agregar proyectos, edita el arreglo `projects` en [src/data/profile.ts](src/data/profile.ts).

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                                |
| :----------------- | :----------------------------------------------------- |
| `npm install`       | Instala las dependencias                               |
| `npm run dev`       | Levanta el servidor de desarrollo en `localhost:4321`  |
| `npm run build`     | Genera el sitio de producción en `./dist/`             |
| `npm run preview`   | Previsualiza el build de producción localmente         |

## Despliegue en Vercel

1. Sube este repositorio a GitHub (ya está conectado a `caldecalde/caldedev`).
2. En [vercel.com](https://vercel.com), importa el repositorio.
3. Vercel detecta Astro automáticamente (build: `npm run build`, output: `dist`). No requiere configuración adicional.
4. Cada push a `main` genera un nuevo despliegue.
