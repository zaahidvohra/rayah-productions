import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Shield } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      name: 'Web Development',
      icon: <Globe className="w-8 h-8" />,
      description: 'Custom websites and web applications built with modern technologies. We create responsive, fast, and user-friendly solutions.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      id: 2,
      name: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Native and cross-platform mobile apps for iOS and Android. Delivering seamless user experiences across all devices.',
      features: ['React Native', 'Flutter', 'iOS & Android']
    },
    {
      id: 3,
      name: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      description: 'Beautiful and intuitive user interfaces that enhance user experience. From wireframes to final designs.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 4,
      name: 'Backend Development',
      icon: <Database className="w-8 h-8" />,
      description: 'Robust server-side solutions with secure APIs and database management. Scalable architecture for your applications.',
      features: ['Node.js', 'Python', 'Database Design']
    },
    {
      id: 5,
      name: 'Custom Software',
      icon: <Code className="w-8 h-8" />,
      description: 'Tailored software solutions for your specific business needs. From concept to deployment and maintenance.',
      features: ['Business Analysis', 'Custom Development', 'Integration']
    },
    {
      id: 6,
      name: 'Security Solutions',
      icon: <Shield className="w-8 h-8" />,
      description: 'Comprehensive security audits and implementation. Protecting your digital assets and user data.',
      features: ['Security Audits', 'Vulnerability Testing', 'Compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl text-text-body max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-64 w-full"
              style={{ perspective: '1000px' }}
            >
              {/* Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Front of Card */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden bg-secondary border-2 border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent-light/50"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-primary mb-4 group-hover:text-accent-dark transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-text-body/70 font-body">
                    Hover to learn more
                  </p>
                </div>

                {/* Back of Card */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden bg-primary text-secondary rounded-xl p-6 flex flex-col justify-center shadow-lg"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="text-center">
                    <div className="text-accent-light mb-3">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-1">
                      {service.features.map((feature, index) => (
                        <div key={index} className="text-xs bg-accent-light/20 rounded-full px-2 py-1 inline-block mr-1 mb-1">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          {/* <button className="bg-primary hover:bg-accent-dark text-secondary font-heading font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button> */}
<button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;