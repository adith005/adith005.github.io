export interface Project {
  id: string;
  title: string;
  tech_stack: string;
  description: string;
  github_url?: string;
  demo_url?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  qualification: string;
  place: string;
  location: string;
  marks: string;
  period: string;
  description: string;
}

export interface Publication {
  id: string;
  name: string;
  link: string;
  description: string;
  authors: string;
  publisher: string;
  year: string;
  conference: string;
}
