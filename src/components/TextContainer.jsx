import React from 'react'

export default function TextContainer({ title, content, highlights = [], className = "" }) {
  return (
    <section className={`py-20 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-6">
            {title}
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="text-lg font-body text-text-primary leading-relaxed space-y-8">
          <p className="text-center md:text-justify text-xl leading-relaxed max-w-4xl mx-auto">
            {content}
          </p>

          {highlights.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-all duration-300">
                  <div className="w-3 h-3 bg-accent-dark rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-text-primary font-medium text-lg">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}