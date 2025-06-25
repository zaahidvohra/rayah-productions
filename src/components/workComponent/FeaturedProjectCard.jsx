import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturedProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 bg-white rounded-2xl shadow-lg overflow-hidden`}
    >
      {/* Image/Video Section */}
      <div className="lg:w-1/2">
        {project.type === 'video' ? (
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={project.media}
              className="w-full h-full"
              allowFullScreen
              title={project.title}
            />
          </div>
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
        
        {/* Strategy Details */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">What We Did:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.strategy.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            View More
          </button>
          {project.videoUrl && (
            <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
              Watch Video
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}