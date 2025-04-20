
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { foodItems, categories } from "@/data/foodData";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const MenuPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(foodItems);

  useEffect(() => {
    filterItems();
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    // Update URL when category changes
    if (selectedCategory !== "All") {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  const filterItems = () => {
    let filtered = foodItems;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredItems(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-bistro-brown mb-3">
              Our <span className="text-bistro-orange">Menu</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our delicious offerings, made with fresh ingredients and crafted with care.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-8">
            {/* Search Box */}
            <div className="relative max-w-md w-full md:w-1/2 mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for dishes, ingredients..."
                className="pl-10 rounded-full border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter - Mobile (Select) */}
            <div className="md:hidden w-full mx-auto max-w-md">
              <select
                className="w-full rounded-full border-gray-300 focus:border-bistro-orange focus:ring-bistro-orange py-2 px-4"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter - Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 mb-10">
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

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
            </p>
          </div>

          {/* Food Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-bistro-brown mb-2">No items found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                className="border-bistro-orange text-bistro-orange hover:bg-bistro-orange hover:text-white"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
