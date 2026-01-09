import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { HighlightsSection } from '@/components/HighlightsSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { AIInsights } from '@/components/AIInsights';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lakshmi Moksha Boya | Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Lakshmi Moksha Boya - Aspiring Software Engineer and AI & Data Science Enthusiast. SAP ABAP Certified professional with hands-on experience in software development and AI projects."
        />
        <meta
          name="keywords"
          content="Lakshmi Moksha Boya, Software Engineer, Portfolio, SAP ABAP, Data Science, AI, Developer"
        />
        <link rel="canonical" href="https://moksha-portfolio.com" />
      </Helmet>

      <div className="min-h-screen relative overflow-hidden">
        <Navigation />
        <main>
          <HeroSection />
          <Reveal delay={0.1}>
            <HighlightsSection />
          </Reveal>
          <Reveal>
            <AboutSection />
          </Reveal>
          <Reveal>
            <SkillsSection />
          </Reveal>
          <Reveal>
            <ProjectsSection />
          </Reveal>
          <Reveal>
            <EducationSection />
          </Reveal>
          <Reveal>
            <CertificationsSection />
          </Reveal>
          <Reveal>
            <ContactSection />
          </Reveal>
        </main>
        <Footer />
        <AIInsights />
      </div>
    </>
  );
};

export default Index;
