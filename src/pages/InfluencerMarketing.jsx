import React from 'react';
import { Helmet } from 'react-helmet-async';
import InfluencerHero from '../components/Influencer/InfluencerHero';
import WhyInfluencer from '../components/Influencer/WhyInfluencer';
import RightVoiceCarousel from '../components/Influencer/RightVoiceCarousel';
import ProcessSteps from '../components/Influencer/ProcessSteps';
import WhyChooseUs from '../components/Influencer/WhyChooseUs';
import InfluencerCTA from '../components/Influencer/InfluencerCTA';

const InfluencerMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Influencer Marketing | PitchBrands</title>
        <meta name="description" content="Collaboration that grows your business. Build authentic partnerships with creators to increase visibility, engagement and growth." />
      </Helmet>
      
      <div className="influencer-page pt-[90px] overflow-hidden">
        <InfluencerHero />
        <WhyInfluencer />
        <RightVoiceCarousel />
        <ProcessSteps />
        <WhyChooseUs />
        <InfluencerCTA />
      </div>
    </>
  );
};

export default InfluencerMarketing;
