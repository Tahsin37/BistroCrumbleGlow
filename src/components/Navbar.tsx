
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-bistro-brown hover:text-bistro-orange transition-colors font-bold text-2xl md:text-3xl"
          >
            Bistro<span className="text-bistro-orange">Crumble</span>
            <span className="text-bistro-green">Glow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-bistro-brown hover:text-bistro-orange transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-bistro-brown hover:text-bistro-orange transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-bistro-brown hover:text-bistro-orange transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-bistro-brown hover:text-bistro-orange transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="relative p-2">
                <ShoppingCart className="h-6 w-6 text-bistro-brown hover:text-bistro-orange transition-colors" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-bistro-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-bistro-brown hover:text-bistro-orange"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Link
              to="/"
              className="block text-bistro-brown hover:text-bistro-orange transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block text-bistro-brown hover:text-bistro-orange transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="block text-bistro-brown hover:text-bistro-orange transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-bistro-brown hover:text-bistro-orange transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
