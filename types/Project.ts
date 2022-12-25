export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  creationDate: string;
  updated: ProjectUpdated;
  links: ProjectLink[];
}

export interface ProjectUpdated {
  description: string;
  date: string;
}

export interface ProjectLink {
  title: string;
  href: string;
  type: ProjectLinkType;
}

export type ProjectLinkType = "application" | "image";
