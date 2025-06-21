import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    emailjs.init('iQ5YaXcmSbLQeghWZ');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      alert('Please fill in all required fields marked with *');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email template parameters
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service_type: formData.service,
        event_date: formData.eventDate || 'Not specified',
        message: formData.message,
        submission_date: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const response = await emailjs.send(
        '1andonlyamit',
        'template_d028eih',
        emailParams
      );

      console.log('Email sent successfully:', response);

      alert('🎉 Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('❌ Sorry, there was an error sending your message. Please contact us directly at amit@gmail.com or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: '📷',
      title: 'Portrait Photography',
      desc: 'Capturing the essence of personality through professional portrait sessions',
      color: 'from-primary to-amber-600'
    },
    {
      icon: '🎥',
      title: 'Cinematic Videography',
      desc: 'Creating film-quality narratives that tell your story with artistic vision',
      color: 'from-accent-dark to-primary'
    },
    {
      icon: '📅',
      title: 'Event Coverage',
      desc: 'Documenting your special moments with discretion and creative flair',
      color: 'from-primary to-rose-600'
    },
    {
      icon: '🏆',
      title: 'Commercial Production',
      desc: 'Elevating brands through compelling visual content and marketing materials',
      color: 'from-accent-dark to-orange-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '👁️' },
    { number: '50+', label: 'Happy Clients', icon: '❤️' },
    { number: '8+', label: 'Years Experience', icon: '📸' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent-dark text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Create Visual
              <span className="block text-accent-light">Magic Together</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-accent-light/90 leading-relaxed">
              Every frame tells a story. Every moment deserves to be captured with artistry and passion.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content Section */}
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="font-heading text-4xl font-bold text-text-primary mb-6">
                Why Choose Me?
              </h2>
              <div className="space-y-4 font-body text-lg text-text-body leading-relaxed">
                <p>
                  With over 8 years of experience in visual storytelling, I specialize in capturing
                  the authentic emotions and genuine moments that make your story unique. My approach
                  combines technical expertise with artistic vision to deliver images and videos that
                  not only document your moments but elevate them into timeless art.
                </p>
                <p>
                  Whether you're planning an intimate wedding, launching a new brand, or celebrating
                  a milestone, I'm here to ensure every detail is captured with the attention and
                  creativity it deserves.
                </p>
              </div>
            </div>

            {/* Services Showcase */}
            <div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-8">My Expertise</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group ${activeCard === index
                      ? 'border-primary bg-primary/5 shadow-lg scale-105'
                      : 'border-accent-light/30 hover:border-primary/50 hover:bg-accent-light/20'
                      }`}
                    onMouseEnter={() => setActiveCard(index)}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <h4 className="font-heading font-semibold text-text-primary mb-2">{service.title}</h4>
                    <p className="font-body text-text-body text-sm leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-accent-light to-accent-light/50 rounded-3xl p-8">
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-6 text-center">
                Trusted by Many
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-dark rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="font-heading text-2xl font-bold text-text-primary mb-1">{stat.number}</div>
                    <div className="font-body text-sm text-text-body">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-text-primary">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent-dark rounded-xl flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-text-body">Email</p>
                    <p className="font-heading font-semibold text-text-primary">amit@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-dark to-primary rounded-xl flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-text-body">Phone</p>
                    <p className="font-heading font-semibold text-text-primary">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-rose-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="font-body text-sm text-text-body">Location</p>
                    <p className="font-heading font-semibold text-text-primary">Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="font-body text-sm text-text-body mb-4">Follow my work</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/moin_2896/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <span className="text-white text-lg">📷</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <span className="text-white text-lg">🎥</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <span className="text-white text-lg">💼</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-2xl border border-accent-light/30 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary to-accent-dark p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-3xl">📤</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">Start Your Project</h3>
                    <p className="font-body text-accent-light/90">Let's discuss your vision</p>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-text-primary">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body placeholder-text-body/50 focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-text-primary">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body placeholder-text-body/50 focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-text-primary">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body placeholder-text-body/50 focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-sm font-medium text-text-primary">Service Type *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Portrait Photography">Portrait Photography</option>
                        <option value="Cinematic Videography">Cinematic Videography</option>
                        <option value="Event Coverage">Event Coverage</option>
                        <option value="Commercial Production">Commercial Production</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-text-primary">Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium text-text-primary">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body placeholder-text-body/50 focus:outline-none focus:border-primary transition-all resize-none bg-accent-light/10"
                      placeholder="Tell me about your vision, event details, timeline, budget range, and any specific requirements..."
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent-dark text-white py-4 rounded-xl font-heading font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-lg">📤</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-4">
                    <div className="flex items-center gap-2 justify-center text-text-body">
                      <span className="font-body text-sm">Response within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;