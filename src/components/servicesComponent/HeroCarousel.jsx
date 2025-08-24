import React, { useState, useEffect } from 'react'

export default function HeroCarousel({ images, showButtons = false, autoSlide = true, slideInterval = 4000 }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-advance slides when not hovered
  useEffect(() => {
    if (!isHovered && autoSlide) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
      }, slideInterval)

      return () => clearInterval(interval)
    }
  }, [isHovered, images.length, autoSlide, slideInterval])

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
    <div
      className="relative h-[550px] md:h-[550px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with your color palette */}
            <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-accent-light z-10">
        <div className="max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in-up text-white drop-shadow-lg">
            {images[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200 text-accent-light drop-shadow-md">
            {images[currentSlide].description}
          </p>
          {showButtons && (
            <div className="space-x-4 animate-fade-in-up animation-delay-400">
              <button className="bg-accent-dark hover:bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-accent-light">
                View Portfolio
              </button>
              <button className="border-2 border-accent-light text-accent-light hover:bg-accent-light hover:text-text-primary px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-accent-light hover:text-white transition-all duration-300 z-20 group"
      >
        <div className="bg-primary bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 group-hover:scale-110 transition-all duration-300 border border-accent-light border-opacity-30">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-accent-light hover:text-white transition-all duration-300 z-20 group"
      >
        <div className="bg-primary bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 group-hover:scale-110 transition-all duration-300 border border-accent-light border-opacity-30">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-accent-dark scale-125 ring-2 ring-accent-light ring-opacity-50'
                : 'bg-accent-light bg-opacity-60 hover:bg-opacity-90'
              }`}
          />
        ))}
      </div>
    </div>
  )
}