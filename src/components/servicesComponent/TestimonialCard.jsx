// TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-accent-dark text-lg">⭐</span>
        ))}
      </div>
      <p className="mb-6 italic text-text-body">
        "{testimonial.text}"
      </p>
      <div>
        <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
        <p className="text-sm text-text-body">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;