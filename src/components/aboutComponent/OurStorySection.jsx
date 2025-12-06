import { Shield, Lightbulb, Target, Users } from 'lucide-react';
// Values Card Component
const ValueCard = ({ icon: Icon, title, description }) => {
    return (
      <div className="bg-secondary rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Icon size={24} className="text-white" />
          </div>
        </div>
        <h4 className="font-heading font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <p className="text-sm text-text-body">
          {description}
        </p>
      </div>
    );
  };
  
// Our Story Section Component
const OurStorySection = () => {
    const values = [
      {
        icon: Shield,
        title: "Integrity",
        description: "We believe in honest, transparent communication"
      },
      {
        icon: Lightbulb,
        title: "Innovation",
        description: "Cutting-edge strategies for modern challenges"
      },
      {
        icon: Target,
        title: "Results-Driven",
        description: "Every campaign is designed for measurable impact"
      },
      {
        icon: Users,
        title: "Client-Centric",
        description: "Your success is our primary focus"
      }
    ];
  
    return (
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
              Who We Are & What Drives Us
            </h2>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent-dark rounded-2xl flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Target size={40} className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-dark rounded-full animate-rotate"></div>
            </div>
  
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                  The Rayah Productions Difference
                </h3>
                <p className="text-text-body leading-relaxed mb-6">
                  Rayah Productions isn’t just another digital agency - we’re your creative allies in this beautiful chaos of the online world.
                  Founded on the belief that stories sell better than ads, we’ve spent the past 8 years helping brands not just shine, but speak with clarity, charm and conviction.
  
                </p>
                <p className="text-text-body leading-relaxed">
                  From migration giants to tourism tales, from apps to artisans our portfolio spans across industries, but always circles back to one thing: <b>Real human connection.</b>
                </p>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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