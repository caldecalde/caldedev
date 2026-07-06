export const profile = {
  name: "Andrés Calderón Castro",
  title: "Full Stack Developer",
  tagline: "Construyo software que resuelve problemas, no que los crea.",
  bio: [
    "En mis 7 años como programador, he aprendido que el software debe resolver problemas, no crearlos. Me considero un desarrollador orientado a soluciones, siempre buscando la ruta más óptima, limpia y documentada para cada reto técnico.",
    "El panorama tecnológico cambia rápido y me adapto con él: adopto la Inteligencia Artificial como mi mejor aliada en el desarrollo (desde prompt engineering hasta integración de LLMs), usándola a conveniencia para optimizar tiempos, automatizar procesos y enfocar mi energía creativa en la arquitectura de software que realmente importa.",
  ],
  email: "andres.ccm24@gmail.com",
  social: {
    github: "https://github.com/caldecalde",
    linkedin: "https://www.linkedin.com/in/andrés-calderón-castro-8208171a8/",
  },
} as const;

export type Project = {
  name: string;
  description: string;
  link?: string;
  repo?: string;
  tags?: string[];
};

// Aún sin proyectos publicados — agrega aquí cuando estén listos.
export const projects: Project[] = [];
