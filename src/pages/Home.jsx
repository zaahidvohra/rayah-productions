import React, { useState, useEffect } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Sample images - replace these with your actual images
  const images = [
    {
      url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Professional Photography",
      description: "Capturing moments that tell your unique story"
    },
    {
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      title: "Cinematic Videography",
      description: "Creating visual narratives that inspire and engage"
    },
    {
      url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Event Coverage",
      description: "Preserving your special moments with artistic excellence"
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Commercial Production",
      description: "Elevating your brand through compelling visual content"
    }
  ]

  // Auto-advance slides when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
      }, 4000) // Change slide every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isHovered, images.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div 
        className="relative h-[450px] md:h-[550px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              {images[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              {images[currentSlide].description}
            </p>
            <div className="space-x-4 animate-fade-in-up animation-delay-400">
              <button className="bg-accent-dark hover:bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Portfolio
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-text-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-light transition-all duration-300 z-20 group"
        >
          <div className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 group-hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-accent-light transition-all duration-300 z-20 group"
        >
          <div className="bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 group-hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-accent-light scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Additional Homepage Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-8">Welcome to Rayah Productions</h2>
          <p className="text-xl text-text-primary leading-relaxed max-w-3xl mx-auto">
            We specialize in creating stunning visual content that captures the essence of your brand, 
            event, or personal story. From corporate videos to wedding photography, we bring your vision to life 
            with creativity and professionalism.
          </p>
        </div>
      </section>
    </div>
  )
}