import {
  DataSetNavigationType,
  DataSetExperienceType,
  DataSetProjectsType,
  DataSetSkillsType,
} from "@/types/model";

export const navigation: DataSetNavigationType = {
  items: [
    { id: 1, label: "Profile", link: "profile" },
    { id: 2, label: "Projects", link: "projects" },
    { id: 3, label: "Contact", link: "contact" },
  ],
};

export const skills: DataSetSkillsType = {
  items: [
    { id: 1, name: "JavaScript", category: "Language" },
    { id: 2, name: "ReactJs", category: "Framework" },
    { id: 3, name: "NextJs", category: "Framework" },
    { id: 4, name: "RESTful APIs", category: "API" },
    { id: 5, name: "TypeScript", category: "Language" },
    { id: 6, name: "Version Control", category: "Language" },
  ],
};

export const familiarities: DataSetSkillsType = {
  items: [
    { id: 1, name: "Redux", category: "Language" },
    { id: 2, name: "ReactNative", category: "Language" },
    { id: 3, name: "Node", category: "Language" },
    { id: 4, name: "Blazor", category: "Framework" },
    { id: 5, name: "Firebase", category: "Framework" },
    { id: 6, name: "WordPress", category: "API" },
    { id: 7, name: "TypeScript", category: "Language" },
    { id: 8, name: "Google Analytics", category: "Other" },
  ],
};

export const experience: DataSetExperienceType = {
  items: [
    {
      company: "Contenidos Digitales",
      role: "Front End Developer",
      info: "Use of Spotify API to analyze music data from users and create experiences in conjunction with major brands.",
      dates: "November 2022 - Present",
    },
    {
      company: "Metros2Digital",
      role: "Front End Developer",
      info: "Develope of housing and plots sales apps that companies workers use to sell, administrate and advise clients.",
      dates: "February 2023 - Present",
    },
    {
      company: "Reflejar",
      role: "Front End Developer",
      info: "My first freelance experience in the field, a simple landing page",
      dates: "September 2022 - December 2022",
    },
  ],
};

export const projects: DataSetProjectsType = {
  items: [
    // contenidos 1
    // metros2 2
    // freelance 3
    {
      company: 2,
      name: "Concepto Casa",
      description:
        "A promotional website for a premium architecture studio, focused on the design and development of exclusive, high-end residential homes.",
      technologies: ["NextJs", "TypeScript", "Strapi", "Zapier"],
      link: "https://www.conceptocasa.cc/",
    },
    {
      company: 1,
      name: "Coca-Cola Comparte una Playlist",
      description:
        "A marketing site for Coca-Cola where people search for their name and get a Spotify playlist with music related to his name. With geolocation language function for LATAM or Brasil.",
      technologies: ["Nextjs", "TypeScript", "RESTAPI"],
      link: "https://www.comparteunaplaylist.com.mx/",
    },
    {
      company: 2,
      name: "Qube",
      description:
        "A promotional landing page for Qube, focused on apartment sales",
      technologies: ["NextJs", "TypeScript", "Strapi", "Zapier"],
      link: "https://www.qubedesarrollos.com.ar/",
    },
    // {
    //   company: 1,
    //   name: "Podcasts Awards Spotify",
    //   description:
    //     "A phased web app for Spotify where users vote for their favorite podcasts, and winners are revealed at the end.",
    //   technologies: ["Nextjs", "TypeScript"],
    //   link: "https://podcastawards.byspotify.com/",
    // },
    {
      company: 2,
      name: "Ventas Marevera",
      description:
        "A sales-oriented web platform designed for both internal employees and external clients. Employees can manage users, process sales, generate PDFs, and send emails. Clients access a guest section where they can explore available lots and send information requests via email.",
      technologies: ["NextJs", "TypeScript", "Strapi", "API", "HubSpot"],
      link: "https://ventas.marevera.com/guest/",
    },
    {
      company: 2,
      name: "Ventas Terralago",
      description:
        "A sales-oriented web platform designed for both internal employees and external clients. Employees can manage users, process sales, generate PDFs, and send emails. Clients access a guest section where they can explore available lots and send information requests via email.",
      technologies: ["NextJs", "TypeScript", "Strapi", "API", "HubSpot"],
      link: "https://ventas.terralago.mx/guest",
    },
    // {
    //   company: 2,
    //   name: "The Corner",
    //   description:
    //     "A promotional landing page for The Corner, focused on apartment sales",
    //   technologies: ["NextJs", "TypeScript", "Strapi", "Zapier"],
    //   link: "https://www.thecorner.uy/",
    // },
  ],
};
