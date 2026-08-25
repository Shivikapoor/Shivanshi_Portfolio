import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import Certifications from '../components/Certifications/Certifications';
import ProblemSolving from '../components/ProblemSolving/ProblemSolving';
import ResumeCTA from '../components/ResumeCTA/ResumeCTA';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <ProblemSolving />
      <ResumeCTA />
      <Contact />
    </>
  );
}
