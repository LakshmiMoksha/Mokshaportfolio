
import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data';
import { SectionBackground } from './SectionBackground';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <SectionBackground />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Experience
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="gradient-text">History</span>
          </h2>
          <p className="text-muted-foreground">
            A track record of professional growth and hands-on experience in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-[-3rem] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              )}

              {/* Experience Card */}
              <div className="relative flex gap-6">
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center z-10">
                  <exp.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card-elevated p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((point, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
