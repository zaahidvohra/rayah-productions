import React from "react";
import HeroCarousel from "../components/homeComponent/HeroCarousel";
import SloganSection from "../components/homeComponent/SloganSection";
import TextContainer from "../components/TextContainer";
import OurWorkSection from "../components/homeComponent/OurWorkSection";
import OurClientsSection from "../components/homeComponent/OurClientsSection";
import FeaturedServicesSection from "../components/homeComponent/FeaturedServicesSection";

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
    <div className="min-h-screen bg-background">
      {/* Hero Carousel */}
      <HeroCarousel images={heroImages} />

      {/* Slogan Section */}
      <SloganSection data={sloganData} />

      {/* Who We Are Section */}
      <TextContainer
        title={whoWeAreData.title}
        content={whoWeAreData.content}
        className="bg-background"
      />

      {/* What We Do Section */}
      <TextContainer
        title={whatWeDoData.title}
        content={whatWeDoData.content}
        highlights={whatWeDoData.highlights}
        className="bg-accent-light"
      />

      {/* Our Work Section */}
      <OurWorkSection workData={ourWorkData} />

      {/* Our Clients Section */}
      <OurClientsSection clientsData={ourClientsData} />

      {/* Featured Services Section */}
      <FeaturedServicesSection data={featuredServicesData} />
    </div>
  );
}