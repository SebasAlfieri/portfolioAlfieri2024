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
