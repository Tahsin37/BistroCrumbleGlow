
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div 
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')"
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                  About <span className="text-bistro-orange">Us</span>
                </h1>
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-bistro-brown mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Bistro Crumble Glow began as a small family-owned restaurant in 2005. What started as a passion project between siblings Maria and Antonio Rossi has grown into one of the city's most beloved culinary destinations.
              </p>
              <p className="text-gray-700 mb-4">
                Our restaurant's name reflects our philosophy: creating comforting dishes with a refined touch that bring a warm glow of satisfaction to our guests. Every recipe has been perfected over years, combining traditional techniques with innovative twists.
              </p>
              <p className="text-gray-700">
                Today, our team of talented chefs continues the tradition of excellence, using only the freshest, locally-sourced ingredients to create memorable dining experiences for our guests.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Our restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-20 animate-fade-in">
            <h2 className="text-3xl font-bold text-bistro-brown text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-bistro-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown mb-3">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. From selecting the finest ingredients to perfecting our cooking techniques, excellence is our standard.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-bistro-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to sustainable practices that respect our environment. We source locally and minimize waste in all our operations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 bg-bistro-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in building relationships. Our restaurant is a place where community thrives, and we actively give back to those around us.
                </p>
              </div>
            </div>
          </div>
          
          {/* Meet the Team */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-bistro-brown text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Chef 1 */}
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Head Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown">Antonio Rossi</h3>
                <p className="text-bistro-orange font-medium">Head Chef & Co-Founder</p>
              </div>
              
              {/* Chef 2 */}
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Executive Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown">Maria Rossi</h3>
                <p className="text-bistro-orange font-medium">Executive Chef & Co-Founder</p>
              </div>
              
              {/* Chef 3 */}
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Pastry Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown">Sophia Chen</h3>
                <p className="text-bistro-orange font-medium">Pastry Chef</p>
              </div>
              
              {/* Chef 4 */}
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Sous Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-bistro-brown">James Wilson</h3>
                <p className="text-bistro-orange font-medium">Sous Chef</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
