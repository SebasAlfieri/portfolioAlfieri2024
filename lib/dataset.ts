import {
  DataSetNavigationType,
  DataSetExperienceType,
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
