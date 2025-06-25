// CTASection.jsx
import React from 'react';

const CTASection = () => {
    return (
        <section className="py-20 px-6 text-white bg-gradient-to-br from-primary to-accent-dark">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                    Ready to Elevate Your Brand?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's create something extraordinary together. Get in touch to discuss your project and receive a custom quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 bg-accent-light text-primary">
                        Start Your Project
                    </button>
                    <button className="border-2 border-accent-light px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-accent-light hover:bg-accent-light hover:text-primary">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;