import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SloganSection from "../components/SloganSection";
import TextContainer from "../components/TextContainer";
import OurWorkSection from "../components/OurWorkSection";
import OurClientsSection from "../components/OurClientsSection";
import FeaturedServicesSection from "../components/FeaturedServicesSection";

// Import data
import { heroImages } from "../data/heroData";
import {
  sloganData,
  whoWeAreData,
  whatWeDoData,
  ourWorkData,
  ourClientsData,
  featuredServicesData,
} from "../data/homeData";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel images={heroImages} />

      {/* Slogan Section */}
      <SloganSection sloganData={sloganData} />

      {/* Who We Are Section */}
      <TextContainer
        title={whoWeAreData.title}
        content={whoWeAreData.content}
        className="bg-white"
      />

      {/* What We Do Section */}
      <TextContainer
        title={whatWeDoData.title}
        content={whatWeDoData.content}
        highlights={whatWeDoData.highlights}
        className="bg-gray-50"
      />

      {/* Our Work Section */}
      <OurWorkSection workData={ourWorkData} />

      {/* Our Clients Section */}
      <OurClientsSection clientsData={ourClientsData} />

      {/* Featured Services Section */}
      <FeaturedServicesSection servicesData={featuredServicesData} />
    </div>
  );
}
