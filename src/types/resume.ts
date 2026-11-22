export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  dateOfBirth: string;
  github?: string;
  linkedin?: string;
  portfolioUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  boardOrUniversity: string;
  year?: string;
  percentage: string;
  status?: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    levelLabel: 'Proficient' | 'Intermediate' | 'Familiar' | 'Advanced';
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  summary: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string; // e.g. "Academic / Project Trainee", "Internship", "Full-time"
  bullets: string[];
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  native?: boolean;
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    title: string;
    subtitle: string;
    careerObjective: string;
    contact: ContactInfo;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  languages: LanguageItem[];
  strengths: StrengthItem[];
  certifications?: {
    title: string;
    issuer: string;
    year: string;
  }[];
}
