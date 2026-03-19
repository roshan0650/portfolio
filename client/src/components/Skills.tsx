import ScrollReveal from './ScrollReveal';
import { Palette, Code, Figma, Zap } from 'lucide-react';

/**
 * Skills Section - Signal > Noise
 * Design Philosophy: Minimal cards with micro hover interactions
 * Interaction: Scale + glow on hover
 */

interface Skill {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'User research, wireframing, prototyping, and design systems',
      icon: <Palette size={24} />,
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, and modern tooling',
      icon: <Code size={24} />,
    },
    {
      id: 'design-systems',
      title: 'Design Systems',
      description: 'Component architecture, design tokens, and documentation',
      icon: <Figma size={24} />,
    },
    {
      id: 'performance',
      title: 'Performance & Optimization',
      description: 'Web vitals, accessibility, SEO, and user experience',
      icon: <Zap size={24} />,
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/10">
      <div className="container max-w-5xl">
        <ScrollReveal direction="up" delay={0}>
          <div className="space-y-16">
            {/* Section header */}
            <div>
              <h2 className="font-serif-section text-4xl md:text-5xl mb-6">
                Skills & Expertise
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-white to-white/20" />
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal
                  key={skill.id}
                  direction="up"
                  delay={index * 100}
                >
                  <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 p-6 cursor-pointer h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-4 p-3 bg-white/10 rounded-lg w-fit group-hover:bg-white/20 transition-colors">
                      <div className="text-white/80 group-hover:text-white transition-colors">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                      {skill.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed flex-grow">
                      {skill.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Tech stack */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'HTML5',
                  'CSS3',
                  'Prompt Engineering',
                  'Tailwind CSS',
                  'Figma',
                  'Next.js',
                  'Firebase',
                  
              
                ].map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
