import React from 'react';
import { motion } from 'framer-motion';
// import FeaturedProjectCard from '../components/workComponent/FeaturedProjectCard';
// import MediaGalleryGrid from '../components/workComponent/MediaGalleryGrid';
import VideoPlayerGrid from '../components/workComponent/VideoPlayerGrid';
// import BeforeAfterSlider from '../components/workComponent/BeforeAfterSlider';
import CampaignCard from '../components/workComponent/CampaignCard';
import SocialMediaPostsGrid from '../components/workComponent/SocialMediaPostsGrid';
import CTASection from '../components/workComponent/CTASection';
import HeroCarousel from '../components/workComponent/HeroCarousel';
import { heroImages } from "../data/heroData"

import {
  // featuredProjects,
  // mediaGallery,
  videoShowcase,
  // beforeAfterData,
  campaignData
} from '../data/workData';

export default function Work() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <HeroCarousel
              images={heroImages}
              showButtons={false}
              autoSlide={true}
              slideInterval={5000}
            />
      {/* Images Grid - Social Media Posts */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Social Media Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated collection of social media post designs showcasing brand consistency and creative excellence
            </p>
          </motion.div>

          <SocialMediaPostsGrid posts={24} />
        </div>
      </section>

      {/* Reels & Video Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Video Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dynamic video content that captures attention and drives engagement
            </p>
          </motion.div>

          <VideoPlayerGrid videos={videoShowcase} />
        </div>
      </section>

      {/* Brand Campaign Highlights */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Campaign Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Successful brand campaigns that delivered measurable results and exceeded expectations
            </p>
          </motion.div>

          <CampaignCard campaigns={campaignData} />
        </div>
      </section>
      <CTASection />
    </div>
  );
}