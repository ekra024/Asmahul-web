import React from 'react';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;