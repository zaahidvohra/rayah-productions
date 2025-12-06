// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

const ContactForm = ({ formConfig }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        emailjs.init(formConfig.emailConfig.userId);
    }, [formConfig.emailConfig.userId]);

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
                formConfig.emailConfig.serviceId,
                formConfig.emailConfig.templateId,
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

    return (
        <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-2xl border border-accent-light/30 overflow-hidden">
                {/* Form Header */}
                <div className="bg-primary p-8 text-white">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            {formConfig.icon && (() => {
                                const IconComponent = formConfig.icon;
                                return <IconComponent className="w-7 h-7 text-white" />;
                            })()}
                        </div>
                        <div>
                            <h3 className="font-heading text-2xl font-bold">{formConfig.title}</h3>
                            <p className="font-body text-white/90">{formConfig.subtitle}</p>
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
                                    {formConfig.services.map((service, index) => (
                                        <option key={index} value={service}>{service}</option>
                                    ))}
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
                            className="w-full bg-primary text-white py-4 rounded-xl font-heading font-semibold text-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending Message...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5" />
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
    );
};

export default ContactForm;