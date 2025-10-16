import React from "react";
import HeroSection from "../components/homeComponent/HeroSection";
import OurWorkSection from "../components/homeComponent/OurWorkSection";
import OurClientsSection from "../components/homeComponent/OurClientsSection";

// Import data
import {
  ourWorkData,
  // ourClientsData,
} from "../data/homeData";
import FinalCta from "../components/homeComponent/FinalCta";
import ServiceCards from "../components/homeComponent/ServiceCards";
import PortfolioSection from "../components/homeComponent/PortfolioSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary">

      {/* Hero Section */}
      <HeroSection/>

      <ServiceCards />

      {/* Our Work Section */}
      <OurWorkSection workData={ourWorkData} />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Our Clients Section */}
      <OurClientsSection />

      <FinalCta />
    </div>
  );
}
