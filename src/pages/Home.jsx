import React from "react";
import HeroCarousel from "../components/homeComponent/HeroCarousel";
import SloganSection from "../components/homeComponent/SloganSection";
import OurWorkSection from "../components/homeComponent/OurWorkSection";
import OurClientsSection from "../components/homeComponent/OurClientsSection";
import FeaturedServicesSection from "../components/homeComponent/FeaturedServicesSection";
import TestimonialsSection from "../components/homeComponent/TestimonialsSection";

// Import data
import { heroImages } from "../data/heroData";
import {
  sloganData,
  ourWorkData,
  ourClientsData,
  featuredServicesData,
  filters,
  testimonials,
} from "../data/homeData";
import FinalCta from "../components/homeComponent/FinalCta";
import ServiceCards from "../components/homeComponent/ServiceCards";

export default function Home() {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const [testimonialSlide, setTestimonialSlide] = React.useState(0);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <HeroCarousel images={heroImages} />

      {/* Slogan Section */}
      <SloganSection data={sloganData} />

      {/* Featured Services Section */}
      <FeaturedServicesSection
        data={featuredServicesData}
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ServiceCards />

      {/* Our Work Section */}
      <OurWorkSection workData={ourWorkData} />

      {/* Our Clients Section */}
      <OurClientsSection clientsData={ourClientsData} />
      <TestimonialsSection
        testimonials={testimonials}
        slideIndex={testimonialSlide}
        setSlideIndex={setTestimonialSlide}
      />

      <FinalCta />
    </div>
  );
}
