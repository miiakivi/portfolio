export interface ProjectDetails {
  project: Project;
  index: number;
}

export interface Project {
  image: string;
  url: string;
  text: ProjectDetailsText;
  favorite?: boolean;
}

export interface ProjectDetailsText {
  [key: string]: {
    title: string;
    description: string;
  };
}
