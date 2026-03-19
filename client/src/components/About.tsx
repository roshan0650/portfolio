import ScrollReveal from './ScrollReveal';

/**
 * About Section - Clarity, Not Story
 * Design Philosophy: Sharp, concise messaging focused on value proposition
 * Content: Design + development synergy, problem-solving, product mindset
 */

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/10">
      <div className="container max-w-4xl">
        <ScrollReveal direction="up" delay={0}>
          <div className="space-y-12">
            {/* Section title */}
            <div>
              <h2 className="font-serif-section text-4xl md:text-5xl mb-6">
                About
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-white to-white/20" />
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <p className="font-sans-body text-white/80 leading-relaxed">
                I'm a UI Designer and Frontend Developer with a passion for creating
                digital products that are both beautiful and functional. My approach
                combines design thinking with engineering rigor—I don't just build
                interfaces, I solve problems.
              </p>

              <p className="font-sans-body text-white/80 leading-relaxed">
                With experience in design systems, component architecture, and
                user-centered development, I bridge the gap between design and
                implementation. I believe the best products emerge when design and
                development work in harmony, informed by real user needs and
                constrained by technical reality.
              </p>

              <p className="font-sans-body text-white/80 leading-relaxed">
                I'm driven by the challenge of creating experiences that feel
                intentional, polished, and effortless to use. Whether it's refining
                a micro-interaction or architecting a scalable design system, I
                approach every project with the same rigor: clarity, precision, and
                a relentless focus on the user.
              </p>
            </div>

            {/* Key stats or highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
              <ScrollReveal direction="up" delay={100}>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    
                  </p>
                  <p className="text-sm text-white/60"></p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  
                  </p>
                  <p className="text-sm text-white/60"></p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    
                  </p>
                  <p className="text-sm text-white/60"></p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
