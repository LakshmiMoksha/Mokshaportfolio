
import { Code, TrendingUp, Brain, Tv, Shield, Briefcase, Globe, Cloud } from 'lucide-react';
import { Project } from '../types/portfolio';

export const projects: Project[] = [
    {
        title: 'Shnoor AI Trade Intelligence',
        description:
            'An enterprise-grade AI ecosystem for global trade. Features high-accuracy OCR for complex shipping documents, automated duty calculation engines, and predictive analytics for supply chain optimization.',
        techStack: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'OCR/AI'],
        icon: Globe,
        gradient: 'from-indigo-500/20 to-blue-500/20',
        github: 'https://github.com/Moksha-132/AI-Imports-and-Exports-Website',
        demo: 'https://ai-imports-and-exports-website.vercel.app',
    },
    {
        title: 'CloudScale Storage Platform',
        description:
            'A modern, high-performance cloud storage architecture designed for security and speed. Implements advanced file management, real-time sync, and a sleek glassmorphic interface.',
        techStack: ['React', 'Node.js', 'Express', 'Cloud APIs', 'UI/UX'],
        icon: Cloud,
        gradient: 'from-cyan-500/20 to-blue-500/20',
        github: 'https://github.com/Moksha-132/Cloud-Platform',
        demo: 'https://cloud-platform-ashen.vercel.app',
    },
    {
        title: 'Live Code Editor',
        description:
            'A browser-based code editor supporting HTML, CSS, and JavaScript with real-time code execution and output rendering. Designed for fast prototyping and learning.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        icon: Code,
        gradient: 'from-violet-500/20 to-purple-500/20',
        github: 'https://github.com/Moksha-132/Online-Live-Code-Editor',
        demo: 'https://online-live-code-editor.vercel.app/',
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
    {
        title: 'Cyber Attack Detection in WSNs',
        description:
            'A machine learning-powered web application for detecting cyber attacks in Wireless Sensor Networks. Uses a unified ensemble model trained on the WSN-DS dataset to classify network intrusions with high accuracy. Features a Flask backend, interactive dashboard, and real-time attack report generation.',
        techStack: ['Python', 'Flask', 'Machine Learning', 'Cooja Simulator', 'SQLite'],
        icon: Shield,
        gradient: 'from-emerald-500/20 to-teal-500/20',
        github: 'https://github.com/Moksha-132/Cyber-Attack-Detection-in-WSNs',
    },
];
