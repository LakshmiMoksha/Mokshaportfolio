import { LucideIcon } from 'lucide-react';

export interface Skill {
    name: string;
    icon: string | LucideIcon;
    isLucide?: boolean;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    icon: LucideIcon;
    gradient: string;
    github: string;
    demo?: string;
}

export interface Education {
    degree: string;
    field: string;
    institution: string;
    period: string;
    cgpa: string;
    icon: LucideIcon;
    highlights: string[];
}

export interface Certification {
    title: string;
    issuer: string;
    description: string;
    featured: boolean;
    skills: string[];
    link: string;
}

export interface Highlight {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Experience {
    company: string;
    position: string;
    location: string;
    period: string;
    icon: LucideIcon;
    description: string[];
}

export interface SiteConfig {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    resumeFileName: string;
    resumePath: string;
    contactEmail: string;
    socials: {
        linkedin: string;
        github: string;
        youtube: string;
    };
}
