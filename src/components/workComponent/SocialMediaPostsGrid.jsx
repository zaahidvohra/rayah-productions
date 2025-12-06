import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

// Import your real data
import { socialMediaPosts } from '../../data/workData';

const SocialMediaPostsGrid = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {socialMediaPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }} // Changed to whileInView for better scroll effect
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-200 hover:shadow-lg transition-all duration-300"
            onClick={() => setIndex(i)} // Opens the Lightbox
          >
            {/* Image forced to cover the square area */}
            <img
              src={post.src}
              alt={post.alt || "Social Media Post"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/80 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-secondary text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="font-heading font-bold text-lg block mb-1">
                  {post.category || "Social"}
                </span>
                <div className="bg-secondary/20 p-2 rounded-full inline-block backdrop-blur-sm">
                   <ArrowsPointingOutIcon className="w-5 h-5 text-secondary" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Screen Viewer */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={socialMediaPosts}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
      />
    </>
  );
};

export default SocialMediaPostsGrid;