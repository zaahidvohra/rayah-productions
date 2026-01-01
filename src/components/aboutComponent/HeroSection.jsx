import React from 'react';
import AboutFallback from '../../assets/aboutimg.jpeg';

const HeroSection = ({
  imageSrc,
  title = "We Are Rayah Media",
  subtitle = "Visual Storytellers. Creative Strategists. Digital Partners.",
}) => {

  const finalImageSrc = imageSrc || AboutFallback;

  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">

      {/* === 1. BACKGROUND IMAGE === */}
      <img
        src={finalImageSrc}
        alt="Production set"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* === 2. DARKER GRADIENT OVERLAY === */}
      {/* - Base layer: Low opacity black to dim the whole image slightly (bg-black/30)
         - Gradient layer: Darkens significantly at the bottom to support the text, 
           but stays lighter at the top to blend better with a light theme website.
      */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90"></div>


      {/* === 3. TEXT CONTENT === */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Tagline */}
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 animate-fade-in-up drop-shadow-md">
            Behind The Scenes
          </p>

          {/* Main Title - Added drop-shadow-xl for maximum readability */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 uppercase tracking-wider leading-none drop-shadow-xl">
            Crafting Stories
          </h1>

          {/* Subtitle - Added drop-shadow-md */}
          <p className="text-base md:text-xl text-gray-100 font-body font-light max-w-2xl mx-auto leading-relaxed opacity-95 drop-shadow-md">
            {subtitle}
          </p>

          {/* Decorative vertical line */}
          <div className="mt-12 flex justify-center opacity-0 animate-fade-in-up animation-delay-500">
             <div className="h-16 w-px bg-gradient-to-b from-primary to-transparent shadow-lg"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 500ms;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;