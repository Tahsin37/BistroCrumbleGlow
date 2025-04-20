
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default"
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-bistro-brown mb-3">
              Contact <span className="text-bistro-orange">Us</span>
            </h1>
            <p className="text-gray-600">
              We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or have feedback to share, please don't hesitate to reach out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8 animate-fade-in">
              <h2 className="text-2xl font-bold text-bistro-brown mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-md border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-md border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-md border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-bistro-orange hover:bg-bistro-orange/90 text-white font-medium rounded-full px-8 py-3"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Info & Map */}
            <div className="animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-bistro-brown mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-bistro-orange/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bistro-brown">Address</h3>
                      <p className="text-gray-600">123 Gourmet Street, Foodie City, FC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-bistro-orange/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bistro-brown">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-bistro-orange/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bistro-brown">Email</h3>
                      <p className="text-gray-600">info@bistrocrumbleglow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-bistro-orange/10 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bistro-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bistro-brown">Opening Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 11:00 AM - 10:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-sm h-64 bg-gray-200">
                <div className="w-full h-full bg-cover bg-center" style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3')" 
                }}>
                  <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-20">
                    <span className="px-4 py-2 bg-white text-bistro-brown font-medium rounded-md shadow-sm">
                      Interactive Map Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
