import { skillCategories } from '@/data';
import { SectionBackground } from './SectionBackground';

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <SectionBackground />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Technical Skills
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit spanning programming, web development, databases, and development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-card-elevated p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors duration-200 cursor-default group/skill"
                      style={{
                        animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                      }}
                    >
                      {typeof skill.icon === 'string' && !skill.isLucide ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-4 h-4 object-contain transition-transform duration-300 group-hover/skill:scale-110"
                        />
                      ) : (
                        (() => {
                          const Icon = skill.icon as any;
                          return <Icon className="w-4 h-4 transition-transform duration-300 group-hover/skill:scale-110" />;
                        })()
                      )}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
