import React from 'react';
import CTASection from '../components/aboutComponent/CTASection';
// import HeroSection from '../components/aboutComponent/HeroSection';
import AboutHero from '../components/aboutComponent/AboutHero';
import OurStorySection from '../components/aboutComponent/OurStorySection';

// Main About Us Page Component
const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <HeroSection /> */}
      <AboutHero />
      <OurStorySection />
      {/* <FounderSection /> */}
      <CTASection />
    </div>
  );
};

export default AboutUsPage;