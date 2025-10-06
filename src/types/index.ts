export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  features: string[];
  technologies: string[];
  icon?: string;
  thumbnail?: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  problem?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  technologies?: string[];
  date?: Date | string;
  industry?: string;
  duration?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  thumbnail?: string;
  heroImage?: string;
}

export interface CompanyInfo {
  name: string;
  founded: number;
  tagline: string;
  email: string;
  phone?: string;
  address?: {
    street?: string;
    city: string;
    state: string;
    zip: string;
  };
  socials?: {
    linkedin?: string;
    github?: string;
  };
}

export interface FormSubmission {
  name: string;
  email: string;
  company?: string;
  message?: string;
  source: string;
  timestamp: string;
}
