
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleProceedToCheckout = () => {
    toast({
      title: "Coming Soon!",
      description: "Our checkout feature is under development and will be available soon.",
      variant: "default"
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-bistro-brown mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Button 
              className="bg-bistro-orange hover:bg-bistro-orange/90 text-white px-8 py-2.5 rounded-full"
              onClick={() => navigate("/menu")}
            >
              Explore Menu
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold text-bistro-brown mb-8">Your Cart</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center border-b border-gray-200 p-4 animate-fade-in"
                  >
                    <div className="sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow sm:ml-6">
                      <h3 className="text-lg font-semibold text-bistro-brown">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-bistro-orange font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mt-4 sm:mt-0">
                      <div className="flex items-center border border-gray-300 rounded-full mb-4 sm:mb-0">
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-bistro-brown hover:text-bistro-orange transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium text-bistro-brown">
                          {item.quantity}
                        </span>
                        <button 
                          className="w-8 h-8 flex items-center justify-center text-bistro-brown hover:text-bistro-orange transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button 
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold text-bistro-brown mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-gray-700">
                      <span>{item.name} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold text-bistro-brown">
                    <span>Total</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-bistro-orange hover:bg-bistro-orange/90 text-white py-3 rounded-full flex items-center justify-center space-x-2"
                  onClick={handleProceedToCheckout}
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
