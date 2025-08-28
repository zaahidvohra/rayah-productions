// TestimonialCard.jsx
import React from 'react';
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group relative h-full">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 h-full flex flex-col">

        {/* Project Image Placeholder */}
        <div className="mb-6 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium">Project Image</p>
          </div>
        </div>

        {/* Quote */}
        <div className="mb-4 flex-grow">
          <p className="text-text-body italic leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Rating */}
        {testimonial.rating && (
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${index < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        )}

        {/* Client Info */}
        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
            <span className="text-primary font-bold">
              {testimonial.name ? testimonial.name.charAt(0).toUpperCase() : 'C'}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
            <p className="text-sm text-text-body">{testimonial.title}</p>
            {testimonial.company && (
              <p className="text-sm text-primary font-medium">{testimonial.company}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;



/*** 
 
image add karne k liye seedha testimonial data m ek feild add kar dena image ka aur bas yaha map kar dena

import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';

export const testimonialsData = [
  {
    name: "Amit Berojgar",
    quote: "jhoothi tareef",
    image: project1, 
    rating: 5
  },
  {
    name: "Zaahid Mazdoor", 
    quote: "jhoothi tareef!",
    image: project2,
    rating: 5
  }
];

  {testimonial.image ? (
  <img 
    src={testimonial.image} 
    alt={`${testimonial.name} project`}
    className="w-full h-48 object-cover rounded-xl"
  />
) : (
)} 
  
***/