import ScrollReveal from './ScrollReveal';
import { ArrowRight, ExternalLink } from 'lucide-react';

/**
 * Projects Section - Conversion Engine
 * Design Philosophy: Glassmorphic cards with elevation + glow on hover
 * Interaction: Scale, glow, and smooth transitions
 */

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  caseStudyUrl?: string;
  screenshot?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'fullfill',
      title: 'FullFill',
      description:
        'Smart Meal Attendance System - A comprehensive platform designed to streamline meal management and attendance tracking for institutions.',
      tags: ['UI/UX', 'React', 'Firebase'],
      impact: 'Reduced meal tracking time by 60%, improved user satisfaction by 85%',
      caseStudyUrl: '#',
      screenshot: '/fullfill-screenshot.png.png',
    },
    {
      id: 'solvelabs',
      title: 'SolveLabs',
      description:
        'AI-powered Idea & Collaboration Platform - Connecting innovators and enabling seamless collaboration on groundbreaking projects.',
      tags: ['AI', 'Web App', 'Design System'],
      impact: 'Helps to find ideas that are impactful and solve something in the real world and Helps to network with innovators,investors and mentors across India',
      caseStudyUrl: '#',
      screenshot: '/solvelabs-screenshot.png.png',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/10">
      <div className="container max-w-5xl">
        <ScrollReveal direction="up" delay={0}>
          <div className="space-y-16">
            {/* Section header */}
            <div>
              <h2 className="font-serif-section text-4xl md:text-5xl mb-6">
                Featured Work
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-white to-white/20" />
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction="up"
                  delay={index * 150}
                >
                  <div className="group relative">
                    {/* Background glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-white/20 hover:bg-white/8 transition-all duration-300">
                      <div className="p-8 space-y-6">
                        {/* Top: Content */}
                        <div className="space-y-4">
                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-semibold">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/70 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Impact */}
                          <div className="pt-2">
                            <p className="text-sm text-white/50 mb-1">Impact</p>
                            <p className="text-white/80 font-medium">
                              {project.impact}
                            </p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 pt-4">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 hover:bg-white/15 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Link */}
                        <a
                          href={project.caseStudyUrl}
                          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors group/link"
                        >
                          View Case Study
                          <ArrowRight
                            size={18}
                            className="group-hover/link:translate-x-1 transition-transform"
                          />
                        </a>
                      </div>

                      {/* Screenshot Image */}
                      {project.screenshot && (
                        <div className="relative bg-black/20 -mx-8 -mb-8 p-8 flex items-center justify-center">
                          <img
                            src={project.screenshot}
                            alt={`${project.title} screenshot`}
                            className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* View all projects CTA */}
            <div className="pt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                View all projects
                <ExternalLink
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
