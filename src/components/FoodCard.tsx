
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { FoodItem } from "@/data/foodData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
      quantity: 1,
      description: food.description,
    });
  };

  return (
    <Card className="group overflow-hidden border border-border/50 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in">
      <Link to={`/food/${food.id}`} className="block">
        <div className="relative overflow-hidden h-48">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {food.isPopular && (
            <div className="absolute top-2 right-2 bg-bistro-orange text-white text-xs font-bold py-1 px-2 rounded-full">
              Popular
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-bistro-brown group-hover:text-bistro-orange transition-colors">
            {food.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {food.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-bistro-brown font-bold">
              ${food.price.toFixed(2)}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-bistro-orange text-bistro-orange hover:bg-bistro-orange hover:text-white transition-colors"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default FoodCard;
