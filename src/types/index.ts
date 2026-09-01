export interface Project {
  id: string;
  title: string;
  type: string;
  badge: string;
  category: 'Browser Extension' | 'AI & Web' | 'Developer Tool' | 'Web Application';
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  solution: string;
  techStack: string[];
  highlights: string[];
  keyFeatures: {
    title: string;
    description: string;
    icon?: string;
  }[];
  architecture: {
    title: string;
    details: string;
  }[];
  githubUrl: string;
  liveDemoUrl?: string;
  status: 'Active Build' | 'Completed' | 'Iterating';
}

export type SkillLevel = 'comfortable' | 'exploring';
export type SkillCategory = 'Programming' | 'Web Development' | 'Design & UI/UX' | 'Tools & Platforms' | 'Areas of Interest';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  iconName: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  period: string;
  score?: string;
  isCurrent?: boolean;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  grade?: string;
  verificationUrl?: string;
  skillsCovered: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  type: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
  toolsUsed: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization?: string;
  description: string;
  badge?: string;
  isCurrent?: boolean;
  tags?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}
