import React from 'react';
// import { Camera, Clapperboard } from 'lucide-react';
import AboutFallback from '../../assets/aboutimg.jpeg';

const AboutHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden flex items-center justify-center h-[550px] md:h-[550px]">
      
      {/* === 1. BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0">
        <img 
          src={AboutFallback} 
          alt="Video Editing Timeline" 
          className="w-full h-full object-cover"
        />
        
        {/* Color Tint: This tints the dark Premiere image to match your 'Primary' color 
            so it doesn't look like a random dark patch. */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-secondary/10"></div> {/* Slight dim for depth */}
      </div>

      {/* === 2. THE CONTENT CARD === */}
      {/* This 'Frosted' card solves your readability issue while keeping the light theme */}
      <div className="relative z-10 max-w-4xl mx-4 w-full">
        <div className="bg-secondary/60 backdrop-blur-md border border-white/50 p-8 md:p-12 rounded-3xl shadow-2xl text-center">
          
          {/* Floating Icons
          <div className="flex justify-center gap-4 mb-6">
            <div className="p-3 bg-white rounded-2xl shadow-sm animate-bounce duration-[3000ms]">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 bg-white rounded-2xl shadow-sm animate-bounce duration-[3000ms] delay-700">
              <Clapperboard className="w-6 h-6 text-accent-dark" />
            </div>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 leading-tight">
            We Are <span className="text-primary">Rayah Productions</span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-xl text-text-body leading-relaxed font-medium opacity-90">
              More than just a marketing agency. We are visual storytellers, 
              creative strategists, and your partners in digital growth.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-50"></div>
          </div>

        </div>
        
        {/* Optional: Add a subtle glow behind the card to separate it from the busy image */}
        <div className="absolute -inset-4 bg-white/20 blur-xl -z-10 rounded-[3rem]"></div>
      </div>

    </section>
  );
};

export default AboutHero;