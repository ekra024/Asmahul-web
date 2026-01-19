import React from 'react';
import HeroSection from './HeroSection';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

const Home = () => {
  return (
    <div className=''>
      <HeroSection />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;