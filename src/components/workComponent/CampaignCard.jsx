import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

// --- Updated Assets Imports ---
// import aussizzLogo from '../../assets/Aussizz.jpeg'; 
// import musicanaLogo from '../../assets/Musicana.jpeg';
// import konzeLogo from '../../assets/konze.jpeg'; 

export default function CampaignCard() {
  // Data derived directly from your uploaded Instagram Insights
  const campaigns = [
    {
      title: "Musicana App",
      category: "Entertainment & Events",
      description: "Amplified live event coverage and artist performances to build a highly engaged community of music lovers.",
      image: 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259359/Musicana_q7kvne.jpg',
      reach: "124K", // Actual Data
      views: "1.3M", // Actual Data
      outcome: "Community Engagement",
      topContent: ["Live Concert", "Artist Spotlight", "Stage Performance"]
    },
    {
      title: "Aussizz Group",
      category: "Immigration & Education",
      description: "Implemented a Reel-first strategy focusing on visa updates and educational content, resulting in massive viral reach.",
      image: 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259353/Aussizz_qyv6es.jpg',
      reach: "66.2K", // Actual Data
      views: "865K", // Actual Data
      outcome: "Viral Growth Achieved",
      topContent: ["Visa Strategy Reel", "Visa Refused Guide", "Partner Visa Tips"] 
    },
    {
      title: "Victory Group Australia",
      category: "Immigration & Education",
      description: "Drove brand awareness for social responsibility initiatives through targeted creative campaigns.",
      image: 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259361/VictoryGroup_kyclxv.png',
      reach: "96.2K", // Actual Data
      views: "284K", // Actual Data
      outcome: "High Brand Visibility",
      topContent: ["World Env. Day", "Time is Money", "Condolence Post"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
        >
          {/* Header Image / Brand Logo Area */}
          <div className="relative h-48 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300" />
            
            {/* Logo Image (z-10) */}
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-auto h-full max-h-32 object-contain relative z-10 drop-shadow-md transform group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Category Badge (FIX: Added z-20 to ensure it sits on top) */}
            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm border border-primary/10">
              {campaign.category}
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{campaign.title}</h3>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{campaign.description}</p>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
              <div className="p-3 bg-secondary rounded-xl border border-accent-light/20">
                <div className="flex items-center gap-2 mb-1 text-primary">
                  <Users size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wide">Reach</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">{campaign.reach}</div>
              </div>
              
              <div className="p-3 bg-secondary rounded-xl border border-accent-light/20">
                <div className="flex items-center gap-2 mb-1 text-accent-dark">
                  <Eye size={16} />
                  <span className="text-xs font-semibold uppercase tracking-wide">Views</span>
                </div>
                <div className="text-2xl font-bold text-gray-800">{campaign.views}</div>
              </div>
            </div>

            {/* Top Content Tags */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={14} className="text-gray-400" />
                <span className="text-xs font-bold text-gray-500 uppercase">Top Performing Content</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {campaign.topContent.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-[11px] font-medium border border-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome Footer (Replaces the Button) */}
            <div className="pt-4 border-t border-gray-100 flex items-center font-bold text-primary bg-primary/5 -mx-6 -mb-6 px-6 py-3">
                <CheckCircle2 size={18} className="mr-2 fill-primary/20" />
                <span className="text-sm">{campaign.outcome}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}