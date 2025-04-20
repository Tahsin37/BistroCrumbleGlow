
import React from "react";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default HomePage;
