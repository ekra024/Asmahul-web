import React from 'react';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import SocialLinks from './SocialLinks';

const Home = () => {
  return (
    <div className=''>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="links">
        <SocialLinks />
      </section>
      <section id="about">
        
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;