import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Trophy, Users, Zap } from 'lucide-react';
// import gujaratTourismLogo from '../../assets/GT.jpeg';
// import aussizzGroupLogo from '../../assets/Aussizz.jpeg';
// import victoryGroupLogo from '../../assets/VictoryGroup.jpeg';
// import musicanaAppLogo from '../../assets/Musicana.jpeg';

export default function CinematicSpotlightCarousel() {
  const gujaratTourismLogo = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259357/GT_jckc6o.png';
  const aussizzGroupLogo = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259353/Aussizz_qyv6es.jpg';
  const victoryGroupLogo = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259361/VictoryGroup_kyclxv.png';
  const musicanaAppLogo = 'https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259359/Musicana_q7kvne.jpg';

  const clientsData = {
    title: "Our Spotlight Clients",
    subtitle: "Brands we've brought to life with cinematic storytelling",
    clients: [
      {
        name: "Victory Group",
        logo: victoryGroupLogo,
        content: "Created thumb-stopping social content. Increased community interactions by 60% with trend-led reels and consistent storytelling.",
        icon: Trophy,
        // Dark Navy to Royal Blue (Matches the outer ring of the seal)
        color: "from-[#0b2341] to-[#1d4e89]" 
      },
      {
        name: "Aussizz Group",
        logo: aussizzGroupLogo,
        content: "Drove leads with smart content calendars, targeted campaigns, and creator collaborations that hit the mark.",
        icon: Zap,
        // Corporate Blue (Matches the 'AUSSIZZ' text, makes the Red Kangaroo pop)
        color: "from-[#00539f] to-[#4facfe]"
      },
      {
        name: "Musicana App",
        logo: musicanaAppLogo,
        content: "Crafted digital identity with powerful narratives. Turned a new app into a growing brand story.",
        icon: Star,
        // Cinematic Red (Matches the Musicana 'M' logo)
        color: "from-[#d60000] to-[#8a0000]"
      },
      {
        name: "Gujarat Tourism",
        logo: gujaratTourismLogo,
        content: "Brought festivals and forgotten folklore alive on screens. Executed India's top influencer meets and campaigns.",
        icon: Users,
        // Heritage Earth/Orange (Matches the Lion and the heritage vibe)
        color: "from-[#c25e00] to-[#e68e35]"
      }
    ]
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % clientsData.clients.length);
    }, 3000);
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
    // FIX 1: Reduced py-12 to py-8 for mobile to make it shorter
    <section className="py-8 md:py-16 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 md:w-32 h-20 md:h-32 rounded-full bg-primary animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 md:w-24 h-16 md:h-24 rounded-full bg-accent-dark animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary font-heading mb-4 px-2">
            {clientsData.title}
          </h2>
          <p className="text-base md:text-xl text-text-body font-body max-w-2xl mx-auto px-4">
            {clientsData.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* FIX 2: Reduced height from h-[26rem] to h-[22rem] on mobile */}
          <div className="relative h-[22rem] md:h-96 flex items-center justify-center">
            
            {/* FIX 3: Added 'hidden md:block' to hide buttons on mobile */}
            <button
              onClick={goToPrev}
              className="hidden md:block absolute left-8 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 text-text-primary transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="hidden md:block absolute right-8 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 text-text-primary transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative w-full flex items-center justify-center perspective-1000">
              {clientsData.clients.map((client, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + clientsData.clients.length) % clientsData.clients.length;
                const isNext = index === (currentIndex + 1) % clientsData.clients.length;
                
                let positionClasses = '';
                let zIndex = 0;
                
                if (isActive) {
                  positionClasses = 'translate-x-0 scale-100 opacity-100';
                  zIndex = 20;
                } else if (isPrev) {
                  positionClasses = 'translate-x-0 md:-translate-x-80 scale-95 md:scale-75 opacity-0 md:opacity-40';
                  zIndex = 10;
                } else if (isNext) {
                  positionClasses = 'translate-x-0 md:translate-x-80 scale-95 md:scale-75 opacity-0 md:opacity-40';
                  zIndex = 10;
                } else {
                  positionClasses = 'translate-x-0 scale-50 opacity-0 pointer-events-none';
                  zIndex = 0;
                }

                const IconComponent = client.icon;

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-out transform ${positionClasses}`}
                    style={{ zIndex }}
                  >
                    {/* FIX 4: Adjusted card height h-[20rem] to match container */}
                    <div className={`relative w-[85vw] max-w-sm md:w-96 h-[20rem] md:h-80 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-white/20 bg-white ${isActive ? 'ring-2 md:ring-4 ring-primary/30' : ''}`}>
                      
                      <div className={`relative w-full h-24 md:h-32 bg-gradient-to-br ${client.color} opacity-90 flex items-center justify-center`}>
                        <img className="w-full h-full object-contain drop-shadow-md" src={client.logo} alt={client.name} />
                        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm">
                          <IconComponent size={18} className="text-white" />
                        </div>
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent animate-pulse"></div>
                        )}
                      </div>
                      
                      {/* Reduced padding on mobile p-5 -> p-4 */}
                      <div className="relative bg-white/95 h-[calc(100%-6rem)] md:h-[calc(100%-8rem)] p-4 md:p-6 flex flex-col text-left">
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                          {client.name}
                        </h3>
                        
                        <p className="text-text-body font-body text-sm leading-relaxed flex-grow overflow-y-auto scrollbar-hide">
                          {client.content}
                        </p>
                        
                        <div className="mt-2 flex items-center space-x-2 pt-2 border-t border-gray-100">
                          <div className="w-8 md:w-12 h-1 bg-primary/60 rounded-full"></div>
                          <Star size={12} className="text-primary" />
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 opacity-5 bg-noise pointer-events-none"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center mt-4 md:mt-12 space-x-3">
            {clientsData.clients.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125 ring-2 ring-primary/30 w-4 md:w-6' 
                    : 'bg-primary/30 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .perspective-1000 { perspective: 1000px; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .bg-noise {
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
}