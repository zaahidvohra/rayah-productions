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

    // ✅ Initialize EmailJS (already correct)
    useEffect(() => {
        if (formConfig?.emailConfig?.userId) {
            emailjs.init(formConfig.emailConfig.userId);
        }
    }, [formConfig]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ FIXED: real submit logic (NO UI CHANGE)
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // prevent double clicks
        setIsSubmitting(true);

        try {
            await emailjs.send(
                formConfig.emailConfig.serviceId,
                formConfig.emailConfig.templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    eventDate: formData.eventDate,
                    message: formData.message
                }
            );

            // optional but safe UX
            alert('Message sent successfully!');

            // reset form (logic only)
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                eventDate: '',
                message: ''
            });

        } catch (error) {
            console.error('EmailJS error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="lg:sticky lg:top-8 w-full">
            <div className="bg-white rounded-3xl shadow-2xl border border-accent-light/30 overflow-hidden w-full max-w-full">

                <div className="bg-primary p-5 md:p-8 text-white">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                            {formConfig.icon && (() => {
                                const IconComponent = formConfig.icon;
                                return <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />;
                            })()}
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-heading text-xl md:text-2xl font-bold truncate">
                                {formConfig.title}
                            </h3>
                            <p className="font-body text-sm md:text-base text-white/90">
                                {formConfig.subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 md:p-8">
                    <div className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2 w-full">
                                <label className="font-body text-sm font-medium text-text-primary">
                                    Full Name *
                                </label>
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

                            <div className="space-y-2 w-full">
                                <label className="font-body text-sm font-medium text-text-primary">
                                    Email Address *
                                </label>
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2 w-full">
                                <label className="font-body text-sm font-medium text-text-primary">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body placeholder-text-body/50 focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div className="space-y-2 w-full">
                                <label className="font-body text-sm font-medium text-text-primary">
                                    Service Type *
                                </label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                                    required
                                >
                                    <option value="">Select a service</option>
                                    {formConfig.services.map((service, index) => (
                                        <option key={index} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2 w-full">
                            <label className="font-body text-sm font-medium text-text-primary">
                                Event Date
                            </label>
                            <input
                                type="date"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body focus:outline-none focus:border-primary transition-all bg-accent-light/10"
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label className="font-body text-sm font-medium text-text-primary">
                                Project Details *
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                className="w-full px-4 py-3 border-2 border-accent-light/50 rounded-xl font-body text-text-body placeholder-text-body/50 focus:outline-none focus:border-primary transition-all resize-none bg-accent-light/10"
                                placeholder="Tell me about your vision..."
                                required
                            />
                        </div>

                        {/* 🔒 NO UI CHANGE – button stays exactly same */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="w-full bg-primary text-white py-3 md:py-4 rounded-xl font-heading font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? 'Sending...' : (
                                <>
                                    Send Message <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;
