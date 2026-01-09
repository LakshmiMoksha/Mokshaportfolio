
import { GraduationCap, Building2, School } from 'lucide-react';
import { Education } from '../types/portfolio';

export const education: Education[] = [
    {
        degree: 'Bachelor of Technology',
        field: 'Computer Science and Engineering (Data Science)',
        institution: 'Srinivasa Ramanujan Institute Of Technology',
        period: '2022 - 2026',
        cgpa: '9.10 CGPA',
        icon: GraduationCap,
        highlights: [
            'Specialized in Data Science and Machine Learning',
            'Completed coursework in AI, Database Systems, and Software Engineering',
            'Participated in technical workshops and hackathons',
        ],
    },
    {
        degree: 'Junior College (Intermediate)',
        field: 'MPC (Maths, Physics, Chemistry)',
        institution: 'Narayana Junior College',
        period: '2022 - 2024',
        cgpa: '81.4%',
        icon: Building2,
        highlights: [
            'Focused on Advanced Mathematics and Sciences',
            'Completed rigorous curriculum for engineering entrance exams',
        ],
    },
    {
        degree: 'Secondary School (10th Standard)',
        field: 'General Education',
        institution: 'Prasad Talent English Medium School',
        period: '2020',
        cgpa: '88.5%',
        icon: School,
        highlights: [
            'Secured high percentage in all core subjects',
            'Foundation in English, Mathematics, and Social Sciences',
        ],
    },
];
