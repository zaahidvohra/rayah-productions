
import React from 'react'

export default function OurClientsSection({ clientsData }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-4">
            {clientsData.title}
          </h2>
          <p className="text-xl font-body text-gray-600">
            {clientsData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientsData.clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
