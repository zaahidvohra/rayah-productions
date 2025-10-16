import React from 'react';
import { Video, Camera, CameraIcon, Edit3, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      name: 'Video Production',
      icon: <Video className="w-8 h-8" />,
      description: 'From corporate films to drone shots, our lenses find the moment that matters. We direct, shoot, and edit videos that not only inform - but to captivate attention.',
      features: ['Corporate Videos', 'Commercial Shoots', 'Event Coverage', 'Drone Footage']
    },
    {
      id: 2,
      name: 'Cinematic Photography',
      icon: <Camera className="w-8 h-8" />,
      description: 'Be it products, people, or places - our frames narrate elegance. Our photos whisper stories before the captions speak.',
      features: ['Brand Photography', 'Event Photography', 'Portrait Sessions', 'Product Photography']
    },
    {
      id: 3,
      name: 'Social Media Management',
      icon: <CameraIcon className="w-8 h-8" />,
      description: 'We don’t just post. We plan, converse, respond, analyze and eventually help your brand thriving across every scroll and swipe.',
      features: ['Content Strategy', 'Daily Posting', 'Community Management', 'Analytics & Reporting']
    },
    {
      id: 4,
      name: 'Content Creation',
      icon: <Edit3 className="w-8 h-8" />,
      description: ' From scripts to reels, graphics to words - we design content tailored for different platforms, audiences, and purposes. ',
      features: ['Short-Form Videos', 'Graphic Design', 'Copywriting', 'Brand Storytelling']
    },
    {
      id: 5,
      name: 'Social Media Optimization',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Timing. Hashtags. Audience behaviour. We deep dive into patterns to boost engagement and bring real, organic growth.',
      features: ['Hashtag Strategy', 'Posting Schedule', 'Audience Analysis', 'Growth Optimization']
    },
    {
      id: 6,
      name: 'Influencer Collaboration',
      icon: <Users className="w-8 h-8" />,
      description: 'We don’t just find influencers. We match your story with the voice that amplifies it best. With authenticity and strategy.',
      features: ['Partnership Strategy', 'Collaboration Management', 'Campaign Development', 'Performance Tracking']
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
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-all duration-200 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;