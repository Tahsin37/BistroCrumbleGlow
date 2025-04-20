
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4 py-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-bistro-brown mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! The page you're looking for seems to have wandered off to taste our delicacies.</p>
          <Button asChild className="bg-bistro-brown hover:bg-bistro-brown/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
