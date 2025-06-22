import React from 'react';
import ReactCompareImage from 'react-compare-image';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider({ beforeAfterItems }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {beforeAfterItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          </div>
          
          <div className="aspect-video">
            <ReactCompareImage
              leftImage={item.before}
              rightImage={item.after}
              sliderLineColor="#2563eb"
              sliderLineWidth={3}
              handleSize={40}
              hover={true}
            />
          </div>
          
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between text-sm text-gray-600">
              <span>← Before</span>
              <span>After →</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
