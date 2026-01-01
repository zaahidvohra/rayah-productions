// CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight
} from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
            Your Digital Journey Starts Here
          </h2>
          <p className="text-lg text-text-body leading-relaxed mb-12">
            We are more than just a marketing agency; we are your strategic partner in 
            achieving sustainable growth. Explore our services or connect with us to 
            discover how Rayah Media can elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center space-x-2">
              <span>See Our Services</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
              Let's Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;