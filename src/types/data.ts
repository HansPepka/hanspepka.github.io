export interface NavbarLink {
  label: string;
  path: string;
}

export interface Navbar {
  links: NavbarLink[];
}

export interface HomeSections {
  banner: boolean;
  experience: boolean;
  project: boolean;
  skills?: boolean;
  education: boolean;
  testimonial: boolean;
  blog?: boolean;
}

export interface Home {
  sections: HomeSections;
}

type Visual = {
  navbar: Navbar;
  home: Home;
};

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  /** Optional path to a photo, e.g. "/assets/me.png". Leave empty to auto-detect public/assets/profile.(jpg|jpeg|png|webp). */
  photo?: string;
  bio: string;
}

/** Any link left as an empty string ("") is hidden on the site. */
export interface ContactInfo {
  email?: string;
  github?: string;
  linkedin?: string;
  x?: string;
  /** Older name for "x" — still supported. */
  twitter?: string;
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
}

/** Category name -> list of skills, e.g. { "Languages": ["TypeScript"] } */
export type Skills = Record<string, string[]>;

export interface Project {
  id?: string;
  title: string;
  description: string;
  technologies: string[];
  live_url: string;
  code_repo_url: string;
  cover: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  companyWebsite: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  keyResponsibilities: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  title: string;
  company: string;
  feedback: string;
}

export interface Data {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  skills: Skills;
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  testimonials: Testimonial[];
  visual: Visual;
}
