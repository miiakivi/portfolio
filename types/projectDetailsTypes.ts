export interface ProjectDetails {
  project: {
    image: string;
    url: string;
    text: ProjectDetailsText;
    favorite?: boolean;
  };
}

export interface ProjectDetailsText {
  [key: string]: {
    title: string;
    description: string;
  };
}
