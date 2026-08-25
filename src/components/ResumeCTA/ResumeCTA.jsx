import { HiOutlineArrowDownTray } from 'react-icons/hi2';
import ScrollReveal from '../react-bits/ScrollReveal';
import Magnet from '../react-bits/Magnet';
import { links } from '../../data/profile';

export default function ResumeCTA() {
  return (
    <section className="bg-coral">
      <div className="container-content py-16 sm:py-20">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4" style={{ color: 'rgb(16 32 29 / 0.65)' }}>
              resume
            </p>
            <h2 className="editorial-heading text-4xl sm:text-5xl font-semibold text-night">
              Want the complete picture?
            </h2>
            <p className="mt-5 text-night/80 text-base sm:text-lg leading-snug">
              View my experience, projects and technical background in one place.
            </p>
            <Magnet className="mt-8">
              <a
                href={links.resumePdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-night text-night-text font-medium text-sm rounded-full px-6 py-3.5 hover:bg-night-soft transition-colors"
              >
                Download Resume <HiOutlineArrowDownTray aria-hidden="true" />
              </a>
            </Magnet>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
