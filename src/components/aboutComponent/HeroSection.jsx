import React, { useState, useEffect } from 'react';

const HeroCarousel_a = ({ personal, coverImages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    setIsVisible(true);

    // Animated text effect
    const typeText = () => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < personal.fullName.length) {
          setAnimatedText(personal.fullName.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 150);
    };

    setTimeout(typeText, 1000);

    // Image carousel
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % coverImages.length);
    }, 4000);

    return () => {
      clearInterval(imageTimer);
    };
  }, [personal.fullName, coverImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImages[currentImageIndex]})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-light rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Profile Image Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent-light to-white shadow-2xl flex items-center justify-center border-4 border-white/30">
            <span className="text-6xl">👨‍💼</span>
          </div>

          {/* Animated Name */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-4 tracking-wide">
            {animatedText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-2xl md:text-3xl text-accent-light mb-8 opacity-90">
            {personal.tagline}
          </p>

          {/* Location & Experience */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="font-body text-lg">{personal.location}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-body text-lg">{personal.experience}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">📸</span>
              <span className="font-body text-lg">{personal.projects}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel_a;