import React from 'react'

export default function TextContainer({ title, content, highlights = [], className = "", align = "center" }) {
  const alignmentMap = {
    left: "text-left items-start",
    right: "text-right items-end",
    center: "text-center items-center"
  }

  const alignment = alignmentMap[align] || alignmentMap.center

  return (
    <section className={`py-6 px-6 ${className}`}>
      <div className={`max-w-5xl mx-auto flex flex-col ${alignment}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
          {title}
        </h2> 

        <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>


        <div className={`text-lg font-body text-text-primary leading-relaxed space-y-8 ${align === 'center' ? 'text-center md:text-justify' : ''}`}>
          <p className={`text-base leading-relaxed ${align !== 'center' ? 'w-full' : 'max-w-4xl mx-auto'}`}>
            {content}
          </p>

          {highlights.length > 0 && (
            <div className={`grid md:grid-cols-1 gap-6 mt-12 ${align !== 'center' ? 'w-full' : 'max-w-4xl mx-auto'}`}>
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-all duration-300">
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
