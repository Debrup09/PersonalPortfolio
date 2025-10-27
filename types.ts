// Fix: Add import for React to resolve namespace error.
import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

export interface EducationItem {
  degree: string;
  institution: string;
  cgpa: string;
  years: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  location: string;
  description: string[];
  recommendationUrl?: string;
}

export interface ProjectItem {
  title: string;
  description: string[];
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface AchievementItem {
  description: string;
  linkUrl: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  socials: SocialLink[];
  about: {
    summary: string;
    goals: string;
  };
  education: EducationItem[];
  skills: SkillCategory[];
  workExperience: WorkExperienceItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
}