import React from 'react';
import { Helmet } from 'react-helmet-async';
import BrandingHero from '../components/Branding/BrandingHero';
import WhatIsIdentity from '../components/Branding/WhatIsIdentity';
import Expertise from '../components/Branding/Expertise';
import DecodeStrategy from '../components/Branding/DecodeStrategy';
import BrandingCTA from '../components/Branding/BrandingCTA';

const Branding = () => {
  return (
    <>
      <Helmet>
        <title>Branding | PitchBrands</title>
        <meta name="description" content="Build a brand people remember. Built to stand out. Designed to scale." />
      </Helmet>
      
      <div className="branding-page pt-[90px] overflow-hidden">
        <BrandingHero />
        <WhatIsIdentity />
        <Expertise />
        <DecodeStrategy />
        <BrandingCTA />
      </div>
    </>
  );
};

export default Branding;
