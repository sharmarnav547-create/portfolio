import React from 'react';
import { Helmet } from 'react-helmet-async';
import PerformanceHero from '../components/Performance/PerformanceHero';
import AdsEarnKeep from '../components/Performance/AdsEarnKeep';
import PerformanceServices from '../components/Performance/PerformanceServices';
import AttentionToAcquisition from '../components/Performance/AttentionToAcquisition';

const PerformanceMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Performance Marketing | PitchBrands</title>
        <meta name="description" content="Growth that's built to scale. Clicks are easy. Revenue is harder." />
      </Helmet>
      
      <div className="performance-page pt-[90px] overflow-hidden">
        <PerformanceHero />
        <AdsEarnKeep />
        <PerformanceServices />
        <AttentionToAcquisition />
      </div>
    </>
  );
};

export default PerformanceMarketing;
