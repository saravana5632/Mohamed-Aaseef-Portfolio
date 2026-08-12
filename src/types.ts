export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  dob: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
}

export interface AboutDetails {
  introduction: string;
  careerObjective: string;
  dreamRoles: string[];
  areasOfInterest: string[];
  quickInfo: {
    label: string;
    value: string;
    iconName?: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  isFeatured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  whyCreated: string;
  myRoleTitle: string;
  myRoleResponsibilities: string[];
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isLiveDemoAvailable: boolean;
  imagePlaceholderTitle?: string;
  imagePath?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrLevel: string;
  fieldOfStudy?: string;
  currentDetails?: string;
  yearOrGraduation: string;
  location: string;
  percentage?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  skillsLearned: string[];
  credentialUrl?: string;
  imagePath?: string;
  pdfPath?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Competition' | 'Academic' | 'Event' | 'Milestone';
  date?: string;
  description: string;
  issuerOrOrganizer?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export interface InterestsData {
  technology: string[];
  career: string[];
  hobbies: string[];
  other: string[];
}
