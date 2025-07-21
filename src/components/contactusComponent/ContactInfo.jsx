// src/components/ContactInfo.jsx
import React from 'react';

const ContactInfo = ({ contactInfo }) => {
    const contactMethods = [
        {
            icon: '📧',
            label: 'Email',
            value: contactInfo.email,
            color: 'from-primary to-accent-dark'
        },
        {
            icon: '📞',
            label: 'Phone',
            value: contactInfo.phone,
            color: 'from-accent-dark to-primary'
        },
        {
            icon: '📍',
            label: 'Location',
            value: contactInfo.location,
            color: 'from-primary to-rose-600'
        }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-12 gap-8">
                {/* Get In Touch Section - 6 columns */}
                <div className="col-span-6 space-y-6">
                    <h3 className="font-heading text-2xl font-bold text-text-primary">Get In Touch</h3>
                    <div className="space-y-4">
                        {contactMethods.map((method, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}>
                                    <span className="text-xl">{method.icon}</span>
                                </div>
                                <div>
                                    <p className="font-body text-sm text-text-body">{method.label}</p>
                                    <p className="font-heading font-semibold text-text-primary">{method.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Links Section - 6 columns */}
                <div className="col-span-6 space-y-6">
                    <h3 className="font-heading text-2xl font-bold text-text-primary">Follow My Work</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {contactInfo.socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}
                            >
                                <span className="text-white text-lg">{link.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;