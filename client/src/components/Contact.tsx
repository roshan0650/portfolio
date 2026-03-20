import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Contact Section - Frictionless Communication
 * Design Philosophy: Minimal form, distraction-free, social integration
 * Interaction: Smooth form submission, hover effects
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to send message';
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (e) {
          // If response isn't JSON, fallback to status text
          errorMessage = `Server Error: ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/roshan0650',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/roshan-sk-670806317/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:roshan00179@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/10">
      <div className="container max-w-3xl">
        <ScrollReveal direction="up" delay={0}>
          <div className="space-y-12">
            {/* Section header */}
            <div>
              <h2 className="font-serif-section text-4xl md:text-5xl mb-6">
                Let's Connect
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-white to-white/20" />
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Message */}
              <ScrollReveal direction="up" delay={100}>
                <div className="space-y-4">
                  <p className="font-sans-body text-white/80">
                    Have a project in mind? I'd love to hear about it. Whether it's
                    a design challenge, frontend implementation, or a full product
                    vision, let's explore how we can work together.
                  </p>
                  <p className="font-sans-body text-white/80">
                    I'm always open to discussing new ideas, creative projects, or
                    opportunities to be part of your vision.
                  </p>

                  {/* Social Links */}
                  <div className="pt-6 space-y-4">
                    <p className="text-sm text-white/60 uppercase tracking-wider">
                      Connect
                    </p>
                    <div className="flex items-center gap-4">
                      {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/70 hover:text-white"
                            aria-label={link.label}
                          >
                            <Icon size={20} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right: Form */}
              <ScrollReveal direction="up" delay={200}>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name input */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-300"
                    />
                  </div>

                  {/* Email input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-300"
                    />
                  </div>

                  {/* Message textarea */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitted ? (
                      <>
                        <span>Message sent!</span>
                      </>
                    ) : loading ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  {/* Error message */}
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                </form>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
