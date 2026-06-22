import React from 'react';
import { Helmet } from 'react-helmet-async';
import Story from '../components/About/Story';
import WhatIs from '../components/About/WhatIs';
import WhyUs from '../components/About/WhyUs';
import MissionVision from '../components/About/MissionVision';
import TeamCarousel from '../components/About/TeamCarousel';
import AboutCTA from '../components/About/AboutCTA';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | PitchBrands</title>
        <meta name="description" content="The story behind PitchBrands. We build brands that people connect with." />
      </Helmet>
      
      <div className="about-page pt-[90px]">
        <Story />
        <WhatIs />
        <WhyUs />
        <MissionVision />
        <TeamCarousel />
        <AboutCTA />
      </div>
    </>
  );
};

export default About;
