import React from 'react';
import { aboutData } from '../data/aboutData';
import HeroSection from '../components/aboutComponent/HeroSection';
import TextContainer from '../components/TextContainer';
import PhilosophyCard from '../components/aboutComponent/PhilosophyCard';
import SkillsSection from '../components/aboutComponent/SkillsSection';
import TimelineSection from '../components/aboutComponent/TimeLineSection';
import AchievementsSection from '../components/aboutComponent/AchievementsSection';
import CTASection from '../components/aboutComponent/CTASection';

const AboutPage = () => {
  const handleCTAClick = () => {
    // Handle contact button click - navigate to contact page or open contact modal
    console.log('Contact button clicked');
    // You can add navigation logic here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        personal={aboutData.personal}
        coverImages={aboutData.coverImages}
      />

      {/* About Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Introduction Section */}
        <TextContainer
          title={aboutData.introduction.title}
          content={aboutData.introduction.paragraphs.join(' ')}
          className="mb-0"
        />

        {/* Philosophy Section */}
        <PhilosophyCard philosophy={aboutData.philosophy} />

        {/* Skills Section */}
        <SkillsSection skills={aboutData.skills} />

        {/* Journey Timeline */}
        <TimelineSection journey={aboutData.journey} />

        {/* Achievements */}
        <AchievementsSection achievements={aboutData.achievements} />

        {/* Call to Action */}
        <CTASection
          cta={aboutData.cta}
          onButtonClick={handleCTAClick}
        />
      </div>
    </div>
  );
};

export default AboutPage;