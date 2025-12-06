import React from 'react';
// import HeroSection from '../components/contactusComponent/HeroSection';
import TextContainer from '../components/TextContainer';
import ContactInfo from '../components/contactusComponent/ContactInfo';
import ContactForm from '../components/contactusComponent/ContactForm';
import { contactData } from '../data/contactData';

const ContactPage = () => {
  return (
    // FIX: overflow-x-hidden on the absolute parent prevents any horizontal scrolling
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      
      {/* Hero Section */}
      {/* <HeroSection ... /> */}

      {/* FIX: Replaced 'container' with 'w-full max-w-7xl mx-auto'. 
          This ensures the box is perfectly centered with equal margins. */}
      <div className="w-full max-w-7xl mx-auto px-5 py-8 md:py-16">
        
        {/* FIX: Reduced gap-10 to gap-8 to prevent pushing width on small screens */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start w-full">
          
          {/* Left Content Section */}
          <div className="space-y-8 md:space-y-12 w-full">
            <TextContainer
              title={contactData.about.title}
              content={contactData.about.content}
              highlights={contactData.about.highlights}
              className="py-0"
            />
            <ContactInfo contactInfo={contactData.contactInfo} />
          </div>

          {/* Right Contact Form */}
          <div className="w-full">
            <ContactForm formConfig={contactData.form} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;