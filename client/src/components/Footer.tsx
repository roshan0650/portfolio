import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * Footer Component - Premium Minimal Footer
 * Design Philosophy: Clean, distraction-free, social links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:hello@roshan.dev',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Copyright */}
          <div className="text-sm text-white/50">
            <p>© {currentYear} Roshan.  </p>
          </div>

          {/* Center: Tagline */}
          <div className="text-center text-sm text-white/60">
            <p></p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 text-white/60 hover:text-white"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
