
import { Code, TrendingUp, Brain, Tv } from 'lucide-react';
import { Project } from '../types/portfolio';

export const projects: Project[] = [
    {
        title: 'Live Code Editor',
        description:
            'A browser-based code editor supporting HTML, CSS, and JavaScript with real-time code execution and output rendering. Designed for fast prototyping and learning.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        icon: Code,
        gradient: 'from-violet-500/20 to-purple-500/20',
        github: 'https://github.com/Moksha-132/Online-Live-Code-Editor',
    },
    {
        title: 'AI Data Insights',
        description:
            'An offline AI-powered data analytics system that converts raw CSV data into explainable insights. Features automated profiling, interactive dashboards, and a local LLaMA-based assistant.',
        techStack: ['Python', 'LLaMA', 'Pandas', 'Flask'],
        icon: TrendingUp,
        gradient: 'from-blue-500/20 to-cyan-500/20',
        github: 'https://github.com/Moksha-132/AI-Data-Analyst-LLAMA3.2-',
    },
    {
        title: 'AI Concept Explainer',
        description:
            'An interactive web application that explains AI concepts across beginner, intermediate, and advanced levels. Features text-based explanations with optional voice support.',
        techStack: ['Streamlit', 'Python', 'LLM (Ollama)'],
        icon: Brain,
        gradient: 'from-purple-500/20 to-indigo-500/20',
        github: 'https://github.com/Moksha-132/Offline-AI-Tutor-',
    },
    {
        title: 'OTT Platform Clone',
        description:
            'A streaming platform clone featuring a modern UI with movie and series browsing, responsive design, dynamic content handling, and clean navigation.',
        techStack: ['React', 'APIs', 'CSS', 'UI Components'],
        icon: Tv,
        gradient: 'from-fuchsia-500/20 to-pink-500/20',
        github: 'https://github.com/Moksha-132/Jimoflix-OTT-Platform-Clone',
    },
];
