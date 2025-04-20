
import React, { useState } from "react";
import FoodCard from "@/components/FoodCard";
import { foodItems, categories } from "@/data/foodData";
import { Button } from "@/components/ui/button";

const FeaturedSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFoods = selectedCategory === "All"
    ? foodItems
    : foodItems.filter(food => food.category === selectedCategory);

  return (
    <section className="py-16 bg-bistro-cream/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bistro-brown mb-3">
            Featured <span className="text-bistro-orange">Delicacies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring the finest ingredients and flavors from around the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-bistro-orange text-white"
                  : "border-bistro-brown/30 text-bistro-brown hover:bg-bistro-orange/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
