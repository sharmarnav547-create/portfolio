import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';

// Critical above-the-fold components
import Hero from '../components/Hero/Hero';
import WhyWeExist from '../components/WhyWeExist/WhyWeExist';
import Process from '../components/Process/Process';

import './Home.css';

// Lazy load below-the-fold components
const Services = lazy(() => import('../components/Services/Services'));
const VideoIntro = lazy(() => import('../components/VideoIntro/VideoIntro'));
const Funnel = lazy(() => import('../components/Funnel/Funnel'));
const ClientLogos = lazy(() => import('../components/ClientLogos/ClientLogos'));
const CaseStudies = lazy(() => import('../components/CaseStudies/CaseStudies'));
const Stats = lazy(() => import('../components/Stats/Stats'));
const Testimonials = lazy(() => import('../components/Testimonials/Testimonials'));
const Blog = lazy(() => import('../components/Blog/Blog'));
const Contact = lazy(() => import('../components/Contact/Contact'));
const FinalCTA = lazy(() => import('../components/FinalCTA/FinalCTA'));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Futurism | Premium Sci-Fi Digital Agency</title>
        <meta name="description" content="We build attention, growth, authority, and revenue. The world's most advanced digital agency." />
        <meta property="og:title" content="Futurism | Premium Digital Agency" />
        <meta property="og:description" content="Experience the future of digital agencies." />
      </Helmet>
      
      <div className="home-page">
        <Hero />
        <WhyWeExist />
        <Process />
        
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
          <Services />
          <VideoIntro />
          <Funnel />
          <ClientLogos />
          <CaseStudies />
          <Stats />
          <Testimonials />
          <Blog />
          <Contact />
          <FinalCTA />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
