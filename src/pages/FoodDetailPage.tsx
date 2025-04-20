
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { foodItems } from "@/data/foodData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, ArrowLeft } from "lucide-react";

const FoodDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const food = foodItems.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-bistro-brown mb-4">Food item not found</h2>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: quantity,
      description: food.description,
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="ghost" 
            className="mb-6 text-bistro-brown hover:text-bistro-orange flex items-center"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in">
            {/* Food Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Food Details */}
            <div>
              {food.isPopular && (
                <span className="inline-block bg-bistro-orange text-white text-xs font-bold py-1 px-3 rounded-full mb-3">
                  Popular
                </span>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold text-bistro-brown mb-3">
                {food.name}
              </h1>
              
              <p className="text-2xl font-bold text-bistro-orange mb-6">
                ${food.price.toFixed(2)}
              </p>
              
              <p className="text-gray-700 mb-6">
                {food.longDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-bistro-brown mb-2">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {food.ingredients.map((ingredient, index) => (
                    <span 
                      key={index}
                      className="bg-bistro-cream px-3 py-1 rounded-full text-sm text-bistro-brown"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-bistro-brown mb-2">Nutrition Facts</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="block text-gray-500 text-sm">Calories</span>
                    <span className="block text-bistro-brown font-semibold">{food.nutritionFacts.calories}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="block text-gray-500 text-sm">Protein</span>
                    <span className="block text-bistro-brown font-semibold">{food.nutritionFacts.protein}g</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="block text-gray-500 text-sm">Carbs</span>
                    <span className="block text-bistro-brown font-semibold">{food.nutritionFacts.carbs}g</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <span className="block text-gray-500 text-sm">Fat</span>
                    <span className="block text-bistro-brown font-semibold">{food.nutritionFacts.fat}g</span>
                  </div>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-gray-300 rounded-full">
                  <button 
                    className="w-10 h-10 flex items-center justify-center text-bistro-brown hover:text-bistro-orange focus:outline-none transition-colors"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center font-medium text-bistro-brown">
                    {quantity}
                  </span>
                  <button 
                    className="w-10 h-10 flex items-center justify-center text-bistro-brown hover:text-bistro-orange focus:outline-none transition-colors"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <Button 
                  className="bg-bistro-orange hover:bg-bistro-orange/90 text-white px-8 py-2.5 rounded-full flex items-center space-x-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
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

export default FoodDetailPage;
