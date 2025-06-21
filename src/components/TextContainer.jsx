import React from 'react'

export default function TextContainer({ title, content, highlights = [], className = "" }) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="text-lg font-body text-text-primary leading-relaxed space-y-6">
          <p className="text-center md:text-left">
            {content}
          </p>
          {highlights.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-text-primary font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
