// ServicesPage.jsx
import React, { useState } from 'react';
import { servicesData, testimonialsData, processData, ctaData } from '../data/ServicesData';
import HeroSection from '../components/servicesComponent/HeroSection_s';
import ProfessionalServicesSection from '../components/servicesComponent/ProfessionalServiceSection';
import CreativeProcessSection from '../components/servicesComponent/CreativeProcessSection';
import TestimonialsSection from '../components/servicesComponent/TestimonialsSection';
import CTASection from '../components/servicesComponent/CTASection';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceToggle = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProfessionalServicesSection
        servicesData={servicesData}
        activeService={activeService}
        handleServiceToggle={handleServiceToggle}
      />
      <CreativeProcessSection processData={processData} />
      <TestimonialsSection testimonialsData={testimonialsData} />
      <CTASection ctaData={ctaData} />
    </div>
  );
};

export default ServicesPage;