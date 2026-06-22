import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContentHero from '../components/Content/ContentHero';
import NotJustPosting from '../components/Content/NotJustPosting';
import ContentServices from '../components/Content/ContentServices';
import StrategyFirst from '../components/Content/StrategyFirst';

const ContentMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Content Marketing | PitchBrands</title>
        <meta name="description" content="Most content gets ignored. Yours won't. Don't just post. Make an impact." />
      </Helmet>
      
      <div className="content-page pt-[90px] overflow-hidden">
        <ContentHero />
        <NotJustPosting />
        <ContentServices />
        <StrategyFirst />
      </div>
    </>
  );
};

export default ContentMarketing;
