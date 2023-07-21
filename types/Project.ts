export interface ProjectType {
  slug: string;
  title: string;
  description: string;
  creationDate: string;
  content: string;
  updated: ProjectUpdated;
  links: ProjectLink[];
  icon?: string;
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

export type ProjectLinkType = "application" | "image" | "readme";
