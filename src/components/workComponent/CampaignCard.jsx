import React from 'react';
import { motion } from 'framer-motion';

export default function CampaignCard({ campaigns }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-sm font-medium">{campaign.category}</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{campaign.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{campaign.description}</p>

            {/* Campaign Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-primary">{campaign.reach}</div>
                <div className="text-xs text-gray-600">Reach</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-primary">{campaign.engagement}</div>
                <div className="text-xs text-gray-600">Engagement</div>
              </div>
            </div>

            {/* Goals */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Campaign Goals:</h4>
              <div className="flex flex-wrap gap-2">
                {campaign.goals.map((goal, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>

            {/* Sample Images */}
            <div className="flex gap-2 mb-4">
              {campaign.samples.slice(0, 3).map((sample, idx) => (
                <img
                  key={idx}
                  src={sample}
                  alt=""
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ))}
              {campaign.samples.length > 3 && (
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-xs">
                  +{campaign.samples.length - 3}
                </div>
              )}
            </div>

            <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              View Campaign
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}