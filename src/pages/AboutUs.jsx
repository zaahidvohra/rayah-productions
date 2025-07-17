import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Lightbulb, 
  Target, 
  Users, 
  Linkedin,
  ChevronRight
} from 'lucide-react';


// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent-light rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-dark rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center space-x-2 text-sm text-text-body opacity-70 mb-8">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight size={16} />
          <span>About Us</span>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
            Driving Digital Success,{' '}
            <span className="text-primary">One Business at a Time.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-body leading-relaxed max-w-3xl mx-auto">
            At Rayah Productions, we believe in the transformative power of digital marketing. 
            Founded on the principle of delivering tangible results and building lasting partnerships, 
            we are your dedicated ally in navigating the ever-evolving online landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Since our inception, our mission has been clear: to empower businesses with 
                cutting-edge digital strategies that not only attract attention but convert leads 
                into loyal customers. We're not just marketers; we're growth partners.
              </p>
              <p className="text-text-body leading-relaxed">
                We pride ourselves on transparency, innovation, and a client-first approach. 
                Every strategy we craft is data-driven, customized, and designed for measurable 
                impact, ensuring you see real returns on your digital investment.
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

// Founder Section Component
const FounderSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Meet Our Visionary: Moin Vohra
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent-dark rounded-full flex items-center justify-center">
                  <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary bg-opacity-20 rounded-full flex items-center justify-center">
                      <Users size={48} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">
                    Moin Vohra, Founder & CEO
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-text-body leading-relaxed">
                    Rayah Productions was founded by Moin Vohra, a seasoned digital strategist 
                    with a passion for helping businesses unlock their online potential. With 
                    years of experience in the digital realm, Moin envisioned a company that 
                    cuts through the noise, delivering clear, effective, and results-oriented 
                    marketing solutions.
                  </p>
                  <p className="text-text-body leading-relaxed">
                    Moin's leadership is anchored in a philosophy of continuous learning and 
                    adapting to the dynamic digital landscape. He believes in fostering strong 
                    client relationships built on trust, transparency, and a shared commitment 
                    to success.
                  </p>
                </div>

                <div className="bg-accent-light rounded-lg p-6 border-l-4 border-accent-dark">
                  <p className="text-text-primary italic text-lg font-medium">
                    "Our success is directly tied to yours. We don't just build campaigns; we build futures."
                  </p>
                  <p className="text-text-body mt-2 font-semibold">- Moin Vohra</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Linkedin size={20} className="text-primary" />
                  <a href="/" className="text-primary hover:text-opacity-80 transition-colors font-medium">
                    Connect with Moin on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Call to Action Section Component
const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
            Your Digital Journey Starts Here
          </h2>
          <p className="text-lg text-text-body leading-relaxed mb-12">
            We are more than just a marketing agency; we are your strategic partner in 
            achieving sustainable growth. Explore our services or connect with us to 
            discover how Rayah Productions can elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center space-x-2">
              <span>See Our Services</span>
              <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Us Page Component
const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OurStorySection />
      <FounderSection />
      <CTASection />
    </div>
  );
};

export default AboutUsPage;