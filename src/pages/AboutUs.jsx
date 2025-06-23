import React, { useState, useEffect } from 'react';
import profileImage from '../assets/profile.jpeg';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animatedText, setAnimatedText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const fullName = "Moin Vohra";
  const tagline = "Visual Storyteller & Creative Director";

  // Simulate cover images (you can replace with actual image URLs)
  // const coverImages = [
  //   'linear-gradient(45deg, #A36767, #C89B3C)',
  //   'linear-gradient(135deg, #C89B3C, #A36767)',
  //   'linear-gradient(225deg, #A36767, #F4E4C1)',
  // ];

  const coverImages = [profileImage];

  const skills = [
    { name: 'Cinematic Photography', level: 99 },
    { name: 'Motion Graphics', level: 96 },
    { name: 'Social Media Optimization', level: 90 },
    { name: 'Media & Film Production', level: 92 },
    { name: 'Film Editing', level: 94 },
    { name: 'Video Post Production', level: 91 }
  ];

  const achievements = [
    { year: '2024', title: 'Best Photographer', organization: 'Gujarat Photography Awards' },
    { year: '2023', title: 'Excellence in Portrait Photography', organization: 'National Photography Society' },
    { year: '2022', title: 'Emerging Talent Award', organization: 'India Photography Festival' },
    { year: '2021', title: 'Commercial Photography Excellence', organization: 'Business Photography Guild' }
  ];

  const journey = [
    {
      year: 'Aug 2016 - Jul 2019',
      title: 'GSTV NEWS - Gujarat Samachar · Video Editor · Full-time',
      description: 'Video Production · Social Media · Journalism · Media Production · Adobe Photoshop · Community Engagement · Negotiation · Adobe Premiere Pro · Audio Editing · Skilled Multi-tasker · After Effects',
      icon: '🌱'
    },
    {
      year: 'Jan 2019 - Feb 2019',
      title: 'Mirchi · Video Editor · Freelance',
      description: 'Video Production · Attention to Detail · Social Media · Journalism · Adobe Photoshop · Campaigns · Adobe Premiere Pro · Brand Awareness · Audio Editing · Skilled Multi-tasker · After Effects',
      icon: '📸'
    },
    {
      year: 'Jul 2019 - Sep 2019',
      title: 'The Mrd Show Season 02 (DHWANI GAUTAM FILMS) · Video Editor · Full-time',
      description: 'Video Production · Creative Direction · Attention to Detail · Social Media · Adobe Photoshop · Leadership · Adobe Premiere Pro · Art Direction · Audio Editing · Skilled Multi-tasker · Film Production · After Effects',
      icon: '🎥'
    },
    {
      year: 'Jul 2019 - Feb 2021',
      title: 'GTPL Hathway Ltd. · Video Editor · Full-time',
      description: 'Video Production · Social Media · Adobe Photoshop · Leadership · Community Engagement · Negotiation · Adobe Premiere Pro · Audio Editing · Skilled Multi-tasker · After Effects',
      icon: '🏢'
    },
    {
      year: 'Feb 2021 - May 2024',
      title: 'KONZE · Sr. Video Editor · Fill-time',
      description: 'Video Production · Creative Direction · Engaging Content · Attention to Detail · Marketing Campaigns · Social Media · Social Media Optimization (SMO) · Brand Development · Artificial Intelligence (AI) · Adobe Photoshop · Content Strategy · Creative Strategy · Leadership · Community Engagement · Video · Market Planning · Campaigns · Adobe Premiere Pro · Art Direction · Brand Awareness · Audio Editing · Skilled Multi-tasker · After Effects · Lead Generation',
      icon: '👥'
    },
    {
      year: 'Feb 2021 - May 2024',
      title: 'Ausizz Group · Sr Video Editor · Full-time',
      description: 'Video Production · Engaging Content · Attention to Detail · Marketing Campaigns · Social Media Optimization (SMO) · Brand Development · Content Strategy · Creative Strategy · Leadership · Community Engagement · Market Planning · Campaigns · Adobe Premiere Pro · Brand Awareness · Audio Editing · Skilled Multi-tasker · After Effects',
      icon: '🌟'
    },
    {
      year: 'June 2024 - Present',
      title: 'Mantra Softech · Creative Associate · Full-time',
      description: 'Motion Graphics · Creative Concept Design · Adobe Premiere Pro · After Effects · Brand Development · Brand Awareness · Campaigns · Communication · Community Engagement · Content Strategy · Creative Direction · Creative Strategy · Documentaries · Editing · Engaging Content · Skilled Multi-tasker · Social Media Marketing · Social Media · Social Media Optimization (SMO) · Video · Video Editing · Video Post-Production',
      icon: '💡'
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Animated text effect
    const typeText = () => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullName.length) {
          setAnimatedText(fullName.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 150);
    };

    setTimeout(typeText, 1000);

    // Image carousel
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % coverImages.length);
    }, 4000);

    // Skills animation
    const skillTimer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => {
      clearInterval(imageTimer);
      clearInterval(skillTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Cover Image */}
      <div className="relative h-screen overflow-hidden">
        {/* Background with gradient overlay */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center"
          style={{ backgroundImage: `url(${coverImages[currentImageIndex]})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent-light rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Profile Image Placeholder */}
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent-light to-white shadow-2xl flex items-center justify-center border-4 border-white/30">
              <span className="text-6xl">👨‍💼</span>
            </div>

            {/* Animated Name */}
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-4 tracking-wide">
              {animatedText}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Tagline */}
            <p className="font-body text-2xl md:text-3xl text-accent-light mb-8 opacity-90">
              {tagline}
            </p>

            {/* Location & Experience */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="font-body text-lg">Vadodara, Gujarat</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-body text-lg">8+ Years Experience</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="text-2xl">📸</span>
                <span className="font-body text-lg">500+ Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Hello, I'm Moin
          </h2>
          <div className="space-y-6 font-body text-lg text-text-body leading-relaxed">
            <p>
              Welcome to my world of visual storytelling. I'm a passionate photographer and videographer
              based in the vibrant city of Vadodara, Gujarat. For over 5 years, I've been capturing
              life's most precious moments and transforming them into timeless memories.
            </p>
            <p>
              My journey began with a simple love for freezing moments in time, but it has evolved
              into a deep passion for creating cinematic experiences that tell authentic stories.
              Every frame I capture is infused with emotion, creativity, and technical excellence.
            </p>
            <p>
              Whether it's the intimate glance between newlyweds, the joy of a family celebration,
              or the professional polish of a corporate event, I believe every moment deserves to
              be captured with artistry and preserved with care.
            </p>
          </div>
        </div>

        {/* Education & Background */}
        <div className="grid lg:grid-cols-1 gap-16 mb-20 place-items-center">
          <div className="bg-gradient-to-br from-accent-light to-accent-light/50 rounded-3xl p-8 max-w-xl w-full mx-auto">
            <h3 className="font-heading text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              My Philosophy
            </h3>
            <div className="space-y-4 font-body text-text-body leading-relaxed">
              <p>
                "Photography is not just about capturing what you see, but about revealing what you feel."
              </p>
              <p>
                I work closely with my clients to understand their vision and ensure that every shot
                reflects their personality and style. Whether it's a wedding, portrait session, or
                commercial project, I'm committed to exceeding expectations and delivering exceptional results.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="font-heading text-4xl font-bold text-text-primary text-center mb-12">
            Skills & Expertise
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-semibold text-text-primary">{skill.name}</span>
                    <span className="font-body text-sm text-text-body">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-accent-light/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent-dark rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${currentSkillIndex >= index ? skill.level : 0}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h3 className="font-heading text-4xl font-bold text-text-primary text-center mb-12">
            My Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-dark" />

              <div className="space-y-8">
                {journey.map((item, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-dark rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-2xl">{item.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-accent-light/30">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-heading font-bold text-2xl text-primary">{item.year}</span>
                        <h4 className="font-heading font-semibold text-xl text-text-primary">{item.title}</h4>
                      </div>
                      <p className="font-body text-text-body leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="font-heading text-4xl font-bold text-text-primary text-center mb-12">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-r from-accent-light to-white rounded-2xl p-6 border border-accent-light/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-dark rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-primary text-lg mb-1">{achievement.year}</div>
                    <h4 className="font-heading font-semibold text-text-primary mb-2">{achievement.title}</h4>
                    <p className="font-body text-sm text-text-body">{achievement.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-accent-dark rounded-3xl p-12 text-white">
          <h3 className="font-heading text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
          <p className="font-body text-xl mb-8 text-accent-light/90">
            Let's work together to capture your special moments and bring your vision to life.
          </p>
          <button className="bg-white text-primary font-heading font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get In Touch Today
          </button>
        </div>
      </div>
    </div >
  );
};

export default AboutPage;