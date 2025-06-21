import React, { useState } from 'react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  // Custom color palette
  const colors = {
    primary: '#A36767',
    secondary: '#C89B3C',
    background: '#F5F5DC',
    accentLight: '#F4E4C1',
    textPrimary: '#4B3B42',
    textBody: '#4B3B42'
  };

  // Simple icon alternatives
  const IconCamera = () => <span className="text-2xl">🎥</span>;
  const IconZap = () => <span className="text-2xl">⚡</span>;
  const IconTrending = () => <span className="text-2xl">📈</span>;
  const IconTarget = () => <span className="text-2xl">🎯</span>;
  const IconEdit = () => <span className="text-2xl">✂️</span>;
  const IconPlay = () => <span className="text-2xl">▶️</span>;
  const IconCheck = () => <span className="text-lg">✓</span>;
  const IconStar = () => <span className="text-lg">⭐</span>;

  const services = [
    {
      id: 1,
      title: "Cinematic Videography",
      icon: <IconCamera />,
      description: "Professional video production with cinematic storytelling that captivates audiences.",
      skills: ["Adobe Premiere Pro", "After Effects", "Video Editing", "Video Post-Production", "Documentaries"],
      features: [
        "4K Cinematic Production",
        "Advanced Color Grading",
        "Professional Audio Mixing",
        "Multi-camera Setup",
        "Drone Cinematography"
      ],
      price: "Starting from 2,500 ₹"
    },
    {
      id: 2,
      title: "Motion Graphics & Animation",
      icon: <IconZap />,
      description: "Eye-catching motion graphics and animations that bring your brand to life.",
      skills: ["Motion Graphics", "After Effects", "Creative Concept Design", "Brand Development"],
      features: [
        "2D/3D Animations",
        "Logo Animations",
        "Kinetic Typography",
        "Visual Effects",
        "Brand Motion Identity"
      ],
      price: "Starting from 8000 ₹"
    },
    {
      id: 3,
      title: "Social Media Optimization",
      icon: <IconTrending />,
      description: "Strategic social media management and optimization to maximize your digital presence.",
      skills: ["Social Media Marketing", "Social Media Optimization (SMO)", "Content Strategy", "Community Engagement"],
      features: [
        "Platform-specific Content",
        "Hashtag Strategy",
        "Audience Analytics",
        "Engagement Optimization",
        "Growth Strategy"
      ],
      price: "Starting from 1,200 ₹/month"
    },
    {
      id: 4,
      title: "Brand Development & Strategy",
      icon: <IconTarget />,
      description: "Comprehensive brand development with strategic creative direction.",
      skills: ["Brand Development", "Brand Awareness", "Creative Direction", "Creative Strategy"],
      features: [
        "Brand Identity Design",
        "Brand Guidelines",
        "Market Positioning",
        "Visual Identity System",
        "Brand Messaging"
      ],
      price: "Starting from 3,000 ₹"
    },
    {
      id: 5,
      title: "Content Creation & Campaigns",
      icon: <IconEdit />,
      description: "Engaging content creation and campaign management for maximum impact.",
      skills: ["Engaging Content", "Campaigns", "Communication", "Skilled Multi-tasker"],
      features: [
        "Content Calendar Planning",
        "Multi-platform Content",
        "Campaign Strategy",
        "Performance Tracking",
        "Creative Copywriting"
      ],
      price: "Starting from 1,500 ₹"
    },
    {
      id: 6,
      title: "Video Marketing Solutions",
      icon: <IconPlay />,
      description: "Complete video marketing solutions from concept to distribution.",
      skills: ["Video", "Editing", "Social Media", "Creative Concept Design"],
      features: [
        "Promotional Videos",
        "Product Demos",
        "Testimonial Videos",
        "Social Media Clips",
        "YouTube Optimization"
      ],
      price: "Starting from 1,800 ₹"
    }
  ];

  const testimonials = [
    {
      name: "Amit Vohra",
      company: "Tech Startup",
      text: "The cinematic quality and attention to detail exceeded our expectations. Our brand video generated 300% more engagement."
    },
    {
      name: "Zaahid Suthar",
      company: "E-commerce Brand",
      text: "Social media optimization services transformed our online presence. We saw 150% growth in followers within 3 months."
    },
    {
      name: "Dono Uper k",
      company: "Fashion Brand",
      text: "The motion graphics and brand development work was phenomenal. Our new visual identity perfectly captures our essence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Cinematic Excellence
            <span className="block text-accent-light">Meets Digital Strategy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional videography and social media optimization services that elevate your brand and engage your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: colors.accentLight,
                color: colors.primary
              }}
            >
              View Portfolio
            </button>
            <button
              className="border-2 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: colors.accentLight,
                color: colors.accentLight
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.accentLight;
                e.target.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.accentLight;
              }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              Professional Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textBody }}>
              From cinematic storytelling to strategic social media optimization,
              I deliver comprehensive creative solutions that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${activeService === service.id ? '' : 'border-transparent'
                  }`}
                style={{
                  borderColor: activeService === service.id ? colors.primary : 'transparent'
                }}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="p-3 rounded-full mr-4 shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accentLight} 0%, ${colors.secondary} 100%)`,
                      color: colors.primary
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold" style={{ color: colors.textPrimary }}>
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6" style={{ color: colors.textBody }}>
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3" style={{ color: colors.textPrimary }}>Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${colors.accentLight} 0%, ${colors.secondary} 100%)`,
                          color: colors.primary
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {activeService === service.id && (
                  <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${colors.accentLight}` }}>
                    <h4 className="font-semibold mb-3" style={{ color: colors.textPrimary }}>What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center" style={{ color: colors.textBody }}>
                          <span className="mr-2 flex-shrink-0" style={{ color: colors.primary }}><IconCheck /></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                        {service.price}
                      </span>
                      <button
                        className="text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="py-20 px-6"
        style={{
          background: `linear-gradient(135deg, ${colors.accentLight} 0%, #F0E0B8 100%)`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              My Creative Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textBody }}>
              A structured approach that ensures exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Understanding your vision, goals, and target audience to create the perfect strategy."
              },
              {
                step: "02",
                title: "Creative Development",
                description: "Crafting compelling concepts and developing creative solutions tailored to your needs."
              },
              {
                step: "03",
                title: "Production & Creation",
                description: "Bringing ideas to life with professional execution and attention to detail."
              },
              {
                step: "04",
                title: "Optimization & Delivery",
                description: "Fine-tuning content and delivering results that exceed expectations."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                  }}
                >
                  {process.step}
                </div>
                <h3 className="font-heading text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                  {process.title}
                </h3>
                <p style={{ color: colors.textBody }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: colors.background }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              Client Success Stories
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textBody }}>
              Hear from clients who've experienced the impact of professional videography and strategic social media optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: colors.secondary }}><IconStar /></span>
                  ))}
                </div>
                <p className="mb-6 italic" style={{ color: colors.textBody }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold" style={{ color: colors.textPrimary }}>{testimonial.name}</h4>
                  <p className="text-sm" style={{ color: colors.textBody }}>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together. Get in touch to discuss your project and receive a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: colors.accentLight,
                color: colors.primary
              }}
            >
              Start Your Project
            </button>
            <button
              className="border-2 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: colors.accentLight,
                color: colors.accentLight
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.accentLight;
                e.target.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.accentLight;
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;