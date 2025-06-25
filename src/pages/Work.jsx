import React from 'react';
import { motion } from 'framer-motion';
import FeaturedProjectCard from '../components/workComponent/FeaturedProjectCard';
import MediaGalleryGrid from '../components/workComponent/MediaGalleryGrid';
import VideoPlayerGrid from '../components/workComponent/VideoPlayerGrid';
import BeforeAfterSlider from '../components/workComponent/BeforeAfterSlider';
import CampaignCard from '../components/workComponent/CampaignCard';
import SocialMediaPostsGrid from '../components/workComponent/SocialMediaPostsGrid';
import { 
  featuredProjects, 
  mediaGallery, 
  videoShowcase, 
  beforeAfterData, 
  campaignData 
} from '../data/workData';

export default function Work() {
  return (
    <div className="min-h-screen bg-accent-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent-dark text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              My Creative
              <span className="block text-accent-light">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-light/90 max-w-3xl mx-auto">
              Showcasing impactful campaigns, stunning visuals, and results-driven creative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of my most impactful work, showcasing strategic thinking and creative excellence
            </p>
          </motion.div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={index} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Grid Gallery */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Social Media Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of engaging social media content across various platforms
            </p>
          </motion.div>

          <MediaGalleryGrid mediaItems={mediaGallery} />
        </div>
      </section>

      {/* Images Grid - Social Media Posts */}
      <section className="py-20 px-6 bg-accent-light">
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
      <section className="py-20 px-6 bg-background">
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

      {/* Before/After Photo Editing */}
      <section className="py-20 px-6 bg-accent-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
              Before & After
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformation stories that showcase the power of creative design and editing
            </p>
          </motion.div>

          <BeforeAfterSlider beforeAfterItems={beforeAfterData} />
        </div>
      </section>

      {/* Brand Campaign Highlights */}
      <section className="py-20 px-6 bg-background">
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

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-accent-light/90 mb-8">
              Let's collaborate on your next project and bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start a Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                View All Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}