import React from 'react';
import { motion } from 'framer-motion';
import VideoPlayerGrid from '../components/workComponent/VideoPlayerGrid';
import CampaignCard from '../components/workComponent/CampaignCard';
import SocialMediaPostsGrid from '../components/workComponent/SocialMediaPostsGrid';
import CTASection from '../components/workComponent/CTASection';
import { videoShowcase, campaignData } from '../data/workData';

export default function Work() {
  // 1. REPLACE THIS LINK with your actual Cloudinary Image URL
  const heroImage = "https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767264389/Portfolio_iiakrl.jpg";

  return (
    <div className="min-h-screen bg-secondary">
      
      {/* === STATIC HERO SECTION === */}
      {/* Keeps exactly the same height/dimensions as your carousel */}
      <div className="relative h-[550px] md:h-[550px] overflow-hidden">
        
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Our Work"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay (Ensures text readability) */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-6"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white drop-shadow-lg">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-accent-light drop-shadow-md">
              Explore our latest projects, campaigns, and creative solutions.
            </p>
          </motion.div>
        </div>
      </div>


      {/* === EXISTING SECTIONS === */}

      {/* Images Grid - Social Media Posts */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
              Social Media Posts
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              A curated collection of social media post designs showcasing brand consistency and creative excellence
            </p>
          </motion.div>

          <SocialMediaPostsGrid />
        </div>
      </section>

      {/* Reels & Video Showcase */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
              Video Showcase
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Dynamic video content that captures attention and drives engagement
            </p>
          </motion.div>

          <VideoPlayerGrid videos={videoShowcase} />
        </div>
      </section>

      {/* Brand Campaign Highlights */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">
              Campaign Highlights
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
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