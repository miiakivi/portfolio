export interface ProjectDetails {
  project: {
    image: string;
    url: string;
    text: ProjectDetailsText;
  };
}

export interface ProjectDetailsText {
  [key: string]: {
    title: string;
    description: string;
  };
}
