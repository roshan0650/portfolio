import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - First Impression = Authority
 * Design Philosophy: Minimal, bold typography, subtle entrance animation
 * Animation: Staggered fade-in with upward motion
 */

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-cover bg-center"
      style={{backgroundImage: "url('/background.jpeg')"}}
    >
      {/* Overlays for text readability */}
      <div className="absolute inset-0 -z-10 bg-black/5" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/2 via-transparent to-black/5" />

      <div className="container max-w-4xl">
        <div className="text-center space-y-8">
          {/* Main heading with staggered animation */}
          <div
            className={`transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl">
              Roshan
            </h1>
          </div>

          {/* Role with delay */}
          <div
            className={`transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isLoaded ? '100ms' : '0ms',
            }}
          >
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
              UI Designer & Frontend Developer
            </p>
          </div>

          {/* Tagline with delay */}
          <div
            className={`transition-all duration-700 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isLoaded ? '200ms' : '0ms',
            }}
          >
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Designing clean, user-centric digital experiences. I blend design thinking
              with frontend engineering to create products that feel intentional and
              polished.
            </p>
          </div>

          {/* CTA Buttons with delay */}
          <div
            className={`transition-all duration-700 ease-out pt-4 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isLoaded ? '300ms' : '0ms',
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 hover:gap-3"
              >
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 font-medium transition-all duration-300"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
