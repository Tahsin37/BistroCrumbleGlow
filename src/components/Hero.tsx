
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Welcome to{" "}
            <span className="text-bistro-orange">Bistro Crumble Glow</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Experience the finest culinary delights with a touch of elegance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-bistro-orange hover:bg-bistro-orange/90 text-white rounded-full px-8 py-2.5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white rounded-full px-8 py-2.5 font-semibold shadow-lg hover:shadow-xl hover:bg-white hover:text-bistro-brown transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              <Link to="/book-table">Book a Table</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,0L48,10.7C96,21,192,43,288,53.3C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
