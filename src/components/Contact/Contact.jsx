import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../react-bits/ScrollReveal';
import Magnet from '../react-bits/Magnet';
import { links } from '../../data/profile';
import { useTheme } from '../../context/ThemeContext';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const { theme } = useTheme();

  // NOTE: This form has no backend wired up yet. Submitting only shows a
  // local confirmation state. Wire it to a real endpoint (e.g. Formspree,
  // a serverless function, or your own API) before relying on it.
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };

  return (
    <section id="contact" className="section">
      <div className="container-content grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <SectionHeading
            eyebrow="contact"
            title={
              theme === 'light' ? (
                <>
                  Let's build <span className="font-accent-italic">something</span>.
                </>
              ) : (
                "Let's build something."
              )
            }
            subtitle="I'm open to software engineering, full-stack development and interesting product opportunities."
          />

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnet>
              <a
                href={links.email}
                className="inline-flex items-center gap-2 bg-mint-500 text-ink-900 font-medium text-sm rounded-full px-6 py-3.5 hover:bg-mint-300 transition-colors"
              >
                Email Me <HiOutlineArrowUpRight aria-hidden="true" />
              </a>
            </Magnet>
            <a href={links.linkedin.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-200 hover:text-mint-400">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={links.github.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-200 hover:text-mint-400">
              <FiGithub /> GitHub
            </a>
          </div>
        </div>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="rounded-lg border border-ink-700 bg-ink-800/50 p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-ink-400 mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-ink-900 border border-ink-600 rounded-md px-4 py-2.5 text-ink-100 placeholder:text-ink-500 focus:border-mint-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-ink-400 mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-ink-900 border border-ink-600 rounded-md px-4 py-2.5 text-ink-100 placeholder:text-ink-500 focus:border-mint-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-ink-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-ink-900 border border-ink-600 rounded-md px-4 py-2.5 text-ink-100 placeholder:text-ink-500 focus:border-mint-500 outline-none resize-none"
                placeholder="What are you working on?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-mint-500 text-ink-900 font-medium text-sm rounded-full px-6 py-3 hover:bg-mint-300 transition-colors"
            >
              {status === 'sent' ? 'Message received — thank you' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="text-xs text-ink-400 text-center">
                This demo form isn't connected to a backend yet — email is still the reliable way to reach me.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
