import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import Preloader from './components/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { MainBackground } from './components/ui/background-components';
import Home from './pages/Home';
import About from './pages/About';
import InfluencerMarketing from './pages/InfluencerMarketing';
import SocialMediaMarketing from './pages/SocialMediaMarketing';
import Branding from './pages/Branding';
import PerformanceMarketing from './pages/PerformanceMarketing';
import ContentMarketing from './pages/ContentMarketing';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Max 2 seconds as requested

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        {loading && <Preloader />}
        <MainBackground>
          <div className={`app-container ${loading ? 'loading' : ''}`}>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/influencer-marketing" element={<InfluencerMarketing />} />
                <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
                <Route path="/branding" element={<Branding />} />
                <Route path="/performance-marketing" element={<PerformanceMarketing />} />
                <Route path="/content-marketing" element={<ContentMarketing />} />
                <Route path="/blog/meta-vs-google-ads" element={<Blog1 />} />
                <Route path="/blog/7-signs-wasting-meta-ads" element={<Blog2 />} />
                <Route path="/blog/performance-marketing-for-beginners" element={<Blog3 />} />
                <Route path="/blog/brand-identity-guide-startups" element={<Blog4 />} />
                <Route path="/blog/d2c-brands-scaling-influencer-marketing" element={<Blog5 />} />
                {/* Other routes can be added here, but the brief focuses on a single page flow mostly */}
              </Routes>
            </main>
            <Footer />
          </div>
        </MainBackground>
      </Router>
    </HelmetProvider>
  );
}

export default App;
