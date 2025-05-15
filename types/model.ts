export type DataSetNavigationType = {
  items: navigationDataSetType[];
};

export interface navigationDataSetType {
  id: number;
  label: string;
  link: string;
}

export type DataSetExperienceType = {
  items: experiencesDataSetType[];
};

export interface experiencesDataSetType {
  company: string;
  role: string;
  info: string;
  dates: string;
}

export interface DataSetProjectsType {
  items: projectsDataSetType[];
}

export interface projectsDataSetType {
  link: string;
  name: string;
  description: string;
  technologies: string[];
  company: number;
}

export type DataSetSkillsType = {
  items: {
    id: number;
    name: string;
    category?: string; // opcional, si después querés agrupar
  }[];
};
