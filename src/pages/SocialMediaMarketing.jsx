import React from 'react';
import { Helmet } from 'react-helmet-async';
import SocialHero from '../components/SocialMedia/SocialHero';
import WhySocialMatters from '../components/SocialMedia/WhySocialMatters';
import WhatWeDo from '../components/SocialMedia/WhatWeDo';
import Platforms from '../components/SocialMedia/Platforms';
import Framework from '../components/SocialMedia/Framework';
import SocialCTA from '../components/SocialMedia/SocialCTA';

const SocialMediaMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Marketing | PitchBrands</title>
        <meta name="description" content="Grow Beyond Likes. Build a Brand People Remember." />
      </Helmet>
      
      <div className="social-media-page pt-[90px] overflow-hidden">
        <SocialHero />
        <WhySocialMatters />
        <WhatWeDo />
        <Platforms />
        <Framework />
        <SocialCTA />
      </div>
    </>
  );
};

export default SocialMediaMarketing;
