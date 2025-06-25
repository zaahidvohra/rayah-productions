// OptimizedServicesPage.jsx
import React, { useState } from 'react';
import { servicesData, testimonialsData, processData } from '../data/ServicesData';
import TextContainer from '../components/TextContainer';
import HeroSection from '../components/servicesComponent/HeroSection_s';
import ServiceCard from '../components/servicesComponent/ServiceCard';
import TestimonialCard from '../components/servicesComponent/TestimonialCard';
import ProcessStep from '../components/servicesComponent/ProcessStep';
import CTASection from '../components/servicesComponent/CTASection';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceToggle = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <TextContainer
            title="Professional Services"
            content="From cinematic storytelling to strategic social media optimization, I deliver comprehensive creative solutions that drive results"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeService === service.id}
                onToggle={() => handleServiceToggle(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent-light to-secondary">
        <div className="max-w-6xl mx-auto">
          <TextContainer
            title="My Creative Process"
            content="A structured approach that ensures exceptional results every time"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {processData.map((process, index) => (
              <ProcessStep key={index} step={process} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <TextContainer
            title="Client Success Stories"
            content="Hear from clients who've experienced the impact of professional videography and strategic social media optimization"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServicesPage;