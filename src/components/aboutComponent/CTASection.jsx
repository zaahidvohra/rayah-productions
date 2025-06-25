import React from 'react';

const CTASection = ({ cta, onButtonClick }) => {
return (
<div className="text-center bg-gradient-to-r from-primary to-accent-dark rounded-3xl p-12 text-white">
    <h3 className="font-heading text-3xl font-bold mb-4">{cta.title}</h3>
    <p className="font-body text-xl mb-8 text-accent-light/90">
        {cta.description}
    </p>
    <button
        className="bg-white text-primary font-heading font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        onClick={onButtonClick}>
        {cta.buttonText}
    </button>
</div>
);
};

export default CTASection;