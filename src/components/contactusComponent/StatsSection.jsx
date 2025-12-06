// src/components/StatsSection.jsx
import React from 'react';

const StatsSection = ({ stats, title = "Trusted by Many" }) => {
    return (
        <div className="bg-accent-light/50 rounded-3xl p-8">
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-6 text-center">
                {title}
            </h3>
            <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <div key={index} className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <IconComponent className="w-8 h-8 text-primary" />
                            </div>
                            <div className="font-heading text-2xl font-bold text-text-primary mb-1">{stat.number}</div>
                            <div className="font-body text-sm text-text-body">{stat.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StatsSection;