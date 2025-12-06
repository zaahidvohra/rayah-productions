import React from 'react';
// import HeroSection from '../components/contactusComponent/HeroSection';
import TextContainer from '../components/TextContainer';
import ContactInfo from '../components/contactusComponent/ContactInfo';
import ContactForm from '../components/contactusComponent/ContactForm';
import { contactData } from '../data/contactData';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <HeroSection
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        description={contactData.hero.description}
      /> */}

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content Section */}
          <div className="space-y-12">
            {/* About Section using TextContainer */}
            <TextContainer
              title={contactData.about.title}
              content={contactData.about.content}
              highlights={contactData.about.highlights}
              className="py-0"
            />
            {/* Contact Information */}
            <ContactInfo contactInfo={contactData.contactInfo} />
          </div>

          {/* Right Contact Form */}
          <ContactForm formConfig={contactData.form} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;