import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Trophy, Users, Zap } from 'lucide-react';

export default function CinematicSpotlightCarousel() {
  const clientsData = {
    title: "Our Spotlight Clients",
    subtitle: "Brands we've brought to life with cinematic storytelling",
    clients: [
      {
        name: "Victory Group",
        logo: "🏆",
        content: "Created thumb-stopping social content. Increased community interactions by 60% with trend-led reels and consistent storytelling.",
        icon: Trophy,
        color: "from-amber-400 to-orange-500"
      },
      {
        name: "Aussizz Group",
        logo: "🎯",
        content: "Drove leads with smart content calendars, targeted campaigns, and creator collaborations that hit the mark.",
        icon: Zap,
        color: "from-blue-400 to-purple-500"
      },
      {
        name: "Musicana App",
        logo: "🎵",
        content: "Crafted digital identity with powerful narratives. Turned a new app into a growing brand story.",
        icon: Star,
        color: "from-pink-400 to-red-500"
      },
      {
        name: "Gujarat Tourism",
        logo: "🏛️",
        content: "Brought festivals and forgotten folklore alive on screens. Executed India's top influencer meets and campaigns like 'Gujarat Ki Kahaniyan'.",
        icon: Users,
        color: "from-green-400 to-teal-500"
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance spotlight every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % clientsData.clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, clientsData.clients.length]);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % clientsData.clients.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => prev === 0 ? clientsData.clients.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      {/* Background Cinema Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent-dark animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-text-primary font-heading mb-4">
            {clientsData.title}
          </h2>
          <p className="text-xl text-text-body font-body max-w-2xl mx-auto">
            {clientsData.subtitle}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">

          {/* Main Spotlight Area */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-8 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-text-primary hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-8 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-text-primary hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Spotlight Cards */}
            <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
              {clientsData.clients.map((client, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + clientsData.clients.length) % clientsData.clients.length;
                const isNext = index === (currentIndex + 1) % clientsData.clients.length;
                
                let position = 'translate-x-0 scale-75 opacity-30';
                let zIndex = 1;
                
                if (isActive) {
                  position = 'translate-x-0 scale-100 opacity-100';
                  zIndex = 10;
                } else if (isPrev) {
                  position = '-translate-x-80 scale-75 opacity-40';
                  zIndex = 5;
                } else if (isNext) {
                  position = 'translate-x-80 scale-75 opacity-40';
                  zIndex = 5;
                } else {
                  position = 'translate-x-0 scale-50 opacity-0';
                  zIndex = 1;
                }

                const IconComponent = client.icon;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-out ${position}`}
                    style={{ zIndex }}
                  >
                    <div className={`relative w-96 h-80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20 ${isActive ? 'ring-4 ring-primary/30' : ''}`}>
                      {/* Top Image Section with Logo */}
                      <div className={`relative w-full h-32 bg-gradient-to-br ${client.color} opacity-90 flex items-center justify-center`}>
                        <div className="text-6xl">{client.logo}</div>
                        
                        {/* Icon in top right corner */}
                        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                          <IconComponent size={20} />
                        </div>
                        
                        {/* Spotlight Effect on image section */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent animate-pulse"></div>
                        )}
                      </div>
                      
                      {/* Content Section */}
                      <div className="relative bg-white/95 backdrop-blur-sm h-48 p-6 flex flex-col">
                        {/* Company Name */}
                        <h3 className="text-2xl font-bold font-heading text-text-primary mb-4">
                          {client.name}
                        </h3>
                        
                        {/* Content */}
                        <p className="text-text-body font-body leading-relaxed flex-grow text-sm">
                          {client.content}
                        </p>
                        
                        {/* Bottom accent */}
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="w-12 h-1 bg-primary/60 rounded-full"></div>
                          <Star size={14} className="text-primary" />
                        </div>
                      </div>
                      
                      {/* Film grain overlay */}
                      <div className="absolute inset-0 opacity-5 bg-noise"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-12 space-x-3">
            {clientsData.clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125 ring-2 ring-primary/30' 
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Control */}
        {/* <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-text-primary font-medium"
          >
            {isAutoPlaying ? 'Pause Spotlight' : 'Resume Spotlight'}
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        .bg-noise {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 100px 100px, 80px 80px, 120px 120px;
        }
      `}</style>
    </section>
  );
}