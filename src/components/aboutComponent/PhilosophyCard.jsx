import React from 'react';

const PhilosophyCard = ({ philosophy }) => {
    return (
        <div className="grid lg:grid-cols-1 gap-16 mb-20 place-items-center">
            <div className="bg-gradient-to-br from-accent-light to-accent-light/50 rounded-3xl p-8 max-w-xl w-full mx-auto">
                <h3 className="font-heading text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
                    <span className="text-3xl">{philosophy.icon}</span>
                    {philosophy.title}
                </h3>
                <div className="space-y-4 font-body text-text-body leading-relaxed">
                    <p>
                        "{philosophy.quote}"
                    </p>
                    <p>
                        {philosophy.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhilosophyCard;