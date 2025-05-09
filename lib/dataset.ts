import {
  DataSetNavigationType,
  DataSetExperienceType,
  DataSetProjectsType,
  // FaqDataType,
  // SocialsDataType,
  // NominatedsDataType,
  // DataSetSponsorsType
} from "@/types/model";

export const navigation: DataSetNavigationType = {
  items: [
    { id: 1, label: "Profile", link: "profile" },
    { id: 2, label: "Projects", link: "projects" },
    { id: 3, label: "Contact", link: "contact" },
  ],
};

export const experience: DataSetExperienceType = {
  items: [
    {
      company: "Contenidos Digitales",
      role: "Front End Developer",
      info: "Use of Spotify API to analyze music data from users and create experiences in conjunction with major brands.",
      dates: "November 2021 - Present",
    },
    {
      company: "Metros2Digital",
      role: "Front End Developer",
      info: "Develope of housing and plots sales apps that companies workers use to sell, administrate and advise clients.",
      dates: "February 2022 - Present",
    },
    {
      company: "Reflejar",
      role: "Front End Developer",
      info: "My first experience in the field, a simple landing page",
      dates: "September 2021 - November 2021",
    },
  ],
};

export const projects: DataSetProjectsType = {
  items: [
    // contenidos 1
    // metros2 2
    // freelance 3
    {
      company: 1,
      name: "Podcasts Awards Spotify",
      description:
        "A phased web app for Spotify where users vote for their favorite podcasts, and winners are revealed at the end.",
      technologies: ["Nextjs", "TypeScript"],
      link: "https://podcastawards.byspotify.com/",
    },
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
    {
      company: 2,
      name: "The Corner",
      description:
        "A promotional landing page for The Corner, focused on apartment sales",
      technologies: ["NextJs", "TypeScript", "Strapi", "Zapier"],
      link: "https://www.thecorner.uy/",
    },
    {
      company: 2,
      name: "Qube",
      description:
        "A promotional landing page for Qube, focused on apartment sales",
      technologies: ["NextJs", "TypeScript", "Strapi", "Zapier"],
      link: "https://www.qubedesarrollos.com.ar/",
    },
  ],
};
