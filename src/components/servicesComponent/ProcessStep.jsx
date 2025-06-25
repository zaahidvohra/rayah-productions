// ProcessStep.jsx
import React from 'react';

const ProcessStep = ({ step }) => {
    return (
        <div className="text-center">
            <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg bg-gradient-to-r from-primary to-accent-dark">
                {step.step}
            </div>
            <h3 className="font-heading text-xl font-bold mb-4 text-text-primary">
                {step.title}
            </h3>
            <p className="text-text-body">
                {step.description}
            </p>
        </div>
    );
};

export default ProcessStep;