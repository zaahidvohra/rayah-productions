// CreativeProcessSection.jsx
import React from 'react';

const CreativeProcessSection = ({ processData }) => {
    return (
        <section className="py-20 bg-secondary relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-10 w-20 h-20 bg-accent-dark rounded-full animate-rotate"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-accent-light rounded-full opacity-60"></div>
                <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-accent-dark rounded-full opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
                        My Creative Process
                    </h2>
                    <div className="flex items-center justify-center mb-6">
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                        <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
                        A structured approach that ensures exceptional results every time
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processData.map((process, index) => (
                        <div key={index} className="relative group">
                            {/* Connection line for desktop */}
                            {index < processData.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent-dark opacity-30 z-0"></div>
                            )}

                            <div className="relative z-10 text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-xl bg-gradient-to-r from-primary to-accent-dark text-white transform group-hover:rotate-6 transition-transform duration-300">
                                        {process.step}
                                    </div>
                                    {/* Decorative ring */}
                                    <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-accent-light mx-auto animate-pulse opacity-50"></div>
                                </div>

                                <h3 className="font-heading text-xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors duration-300">
                                    {process.title}
                                </h3>
                                <p className="text-text-body leading-relaxed">
                                    {process.description}
                                </p>

                                {/* Decorative bottom accent */}
                                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-accent-dark mx-auto rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeProcessSection;