import React from 'react';
import { motion } from 'framer-motion';

const SocialMediaPostsGrid = ({ posts = 24 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Array.from({ length: posts }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <img
            src={`/api/placeholder/300/300?text=Post${index + 1}`}
            alt={`Social Media Post ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
              <div className="text-2xl mb-2">🔍</div>
              <p className="text-sm">View Post</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaPostsGrid;