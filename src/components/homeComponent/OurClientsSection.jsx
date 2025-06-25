import React from 'react'

export default function OurClientsSection({ clientsData }) {
  return (
    <section className="py-20 px-6 bg-accent-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-6">
            {clientsData.title}
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-xl font-body text-text-primary opacity-80 max-w-2xl mx-auto">
            {clientsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-12">
          {clientsData.clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-primary group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <h3 className="text-sm font-semibold text-text-primary text-center mb-2">
                {client.name}
              </h3>
              <p className="text-xs text-text-primary opacity-70 text-center italic">
                "{client.testimonial}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-text-primary mb-8 max-w-3xl mx-auto">
            Join our growing family of satisfied clients who trust us to capture their most important moments and create compelling visual stories.
          </p>
          <button className="bg-primary hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-accent-light">
            Become Our Client
          </button>
        </div>
      </div>
    </section>
  )
}