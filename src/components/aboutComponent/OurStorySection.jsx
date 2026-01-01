import React from 'react';
import { Shield, Lightbulb, Target, Users } from 'lucide-react';

// Reusable Value Card Component
const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/60 border border-primary/10 hover:shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
    <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold text-text-primary mb-1 font-heading">{title}</h4>
      <p className="text-sm text-text-body leading-relaxed">{description}</p>
    </div>
  </div>
);

const OurStorySection = () => {
  // Your Cloudinary Logo
  const logoUrl = "https://res.cloudinary.com/dtgjz2fdi/image/upload/v1767259340/rayahLogo_oj1fvi.png";

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in honest, transparent communication."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge strategies for modern challenges."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every campaign is designed for measurable impact."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our primary focus."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6 relative inline-block">
            Who We Are & What Drives Us
            {/* Decorative underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full opacity-60"></div>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* === LEFT COLUMN: LOGO DISPLAY === */}
          <div className="relative flex justify-center lg:justify-start group">
            {/* 1. Gradient Background Frame (The colored border effect) */}
            <div className="relative w-full max-w-sm md:max-w-md aspect-square bg-primary rounded-[2rem] p-1.5 shadow-2xl transform group-hover:rotate-0 transition-transform duration-700 ease-out">
              
              {/* 2. White Inner Card (Clean background for the logo) */}
              <div className="w-full h-full bg-white rounded-[1.8rem] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                
                {/* 3. The Logo */}
                <img 
                  src={logoUrl} 
                  alt="Rayah Media Logo" 
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle watermark glow behind logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-light rounded-full opacity-50 animate-pulse -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* === RIGHT COLUMN: CONTENT === */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                The Rayah Media Difference
              </h3>
              
              <p className="text-text-body leading-relaxed mb-6 text-lg">
                Rayah Media isn’t just another digital agency — we’re your creative allies in the chaos of the online world.
                Founded on the belief that stories sell better than ads, we’ve spent the past 8 years helping brands speak with clarity, charm, and conviction.
              </p>
              
              {/* Highlight Box */}
              <div className="bg-white/60 border-l-4 border-primary p-4 rounded-r-lg backdrop-blur-sm">
                <p className="text-text-body italic">
                  From migration giants to tourism tales, our portfolio spans industries but always circles back to one thing: <span className="font-bold text-primary">Real human connection.</span>
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;