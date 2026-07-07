// Datos independientes del idioma. Los textos traducibles (bio, tagline,
// etiquetas de UI) viven en src/i18n/ui.ts.
export const profile = {
  name: "Andrés Calderón Castro",
  title: "Full Stack Developer",
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
