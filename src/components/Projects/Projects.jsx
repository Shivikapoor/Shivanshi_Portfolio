import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../react-bits/ScrollReveal';
import ProjectCard from './ProjectCard';
import ProjectCardHorizontal from './ProjectCardHorizontal';
import { projects } from '../../data/projects';
import { useTheme } from '../../context/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section id="work" className="section">
      <div className="container-content">
        <SectionHeading
          eyebrow="selected-work"
          title={
            isLight ? (
              <>
                Built to be <span className="font-accent-italic">useful</span>.
              </>
            ) : (
              'Selected Work'
            )
          }
          subtitle="A selection of applications I've designed, developed and experimented with."
        />

        {isLight ? (
          <div className="mt-14 flex flex-col gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 100}>
                <ProjectCardHorizontal project={project} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
