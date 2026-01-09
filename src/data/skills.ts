
import {
    Database as DatabaseIcon,
    Layout,
    Brain,
    Bot,
    Wand2,
    Sparkles,
    Search,
    Video
} from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'SAP ABAP', icon: '/logos/sap-logo.png', isLucide: false },
        ],
    },
    {
        title: 'Web Technologies',
        skills: [
            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'UI/UX', icon: '/logos/uiux-logo.png', isLucide: false },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        ],
    },
    {
        title: 'Database',
        skills: [
            { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        ],
    },
    {
        title: 'AI & Technologies',
        skills: [
            { name: 'AI', icon: Bot, isLucide: true },
            { name: 'Gen AI', icon: Wand2, isLucide: true },
        ],
    },
    {
        title: 'Tools & Platforms',
        skills: [
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Excel', icon: '/logos/excel-logo.png', isLucide: false },
            { name: 'Power BI', icon: '/logos/powerbi-logo.png', isLucide: false },
            { name: 'Video Editing', icon: '/logos/video-editing-logo.png', isLucide: false },
        ],
    },
];
