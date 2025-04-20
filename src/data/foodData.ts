
export interface FoodItem {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  ingredients: string[];
  nutritionFacts: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  preparationTime: number;
  isPopular: boolean;
}

export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Signature Crumble Burger",
    description: "Our famous burger with special crumble sauce",
    longDescription: "The Signature Crumble Burger is our most beloved creation, featuring a juicy, flame-grilled 8oz beef patty made from premium grass-fed beef. It's topped with our secret crumble sauce – a blend of 12 spices and ingredients that has been perfected over 20 years. Served on a freshly baked brioche bun with crisp lettuce, vine-ripened tomatoes, caramelized onions, and melted aged cheddar. Each burger is cooked to order and comes with a side of our hand-cut, twice-cooked truffle fries.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Burgers",
    tags: ["Beef", "Bestseller", "Spicy"],
    ingredients: ["Beef patty", "Brioche bun", "Crumble sauce", "Lettuce", "Tomato", "Caramelized onions", "Aged cheddar"],
    nutritionFacts: {
      calories: 850,
      protein: 45,
      carbs: 42,
      fat: 52
    },
    preparationTime: 15,
    isPopular: true
  },
  {
    id: 2,
    name: "Truffle Mushroom Pasta",
    description: "Creamy pasta with fresh truffles and wild mushrooms",
    longDescription: "Our Truffle Mushroom Pasta is a celebration of earthy flavors and luxurious ingredients. We combine fresh fettuccine pasta made in-house daily with a medley of wild mushrooms – porcini, shiitake, and oyster – sautéed to perfection. The pasta is tossed in a silky cream sauce infused with black truffle oil and topped with shaved fresh truffles when in season. Finished with aged Parmesan cheese and fresh herbs, this pasta dish delivers an unforgettable umami experience with every bite. Served with a slice of garlic bread on the side.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Pasta",
    tags: ["Vegetarian", "Truffle", "Creamy"],
    ingredients: ["Fresh fettuccine", "Wild mushrooms", "Truffle oil", "Fresh truffles", "Cream", "Parmesan", "Herbs"],
    nutritionFacts: {
      calories: 780,
      protein: 22,
      carbs: 65,
      fat: 48
    },
    preparationTime: 18,
    isPopular: true
  },
  {
    id: 3,
    name: "Mango Tango Salad",
    description: "Fresh summer salad with mango, avocado and citrus dressing",
    longDescription: "The Mango Tango Salad is a refreshing and nutritious option perfect for those seeking a lighter meal without compromising on flavor. It features a vibrant mix of ripe mango chunks, creamy avocado slices, and crisp mixed greens. We add cherry tomatoes, cucumber, red onion, and roasted pumpkin seeds for extra texture and nutrition. The salad is tossed in our house-made citrus dressing – a perfect blend of lime juice, orange zest, olive oil, and honey. For protein, you can add grilled chicken, shrimp, or tofu for an additional charge. This salad is both gluten-free and can be made vegan upon request.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Salads",
    tags: ["Healthy", "Gluten-free", "Fresh"],
    ingredients: ["Mango", "Avocado", "Mixed greens", "Cherry tomatoes", "Cucumber", "Red onion", "Pumpkin seeds", "Citrus dressing"],
    nutritionFacts: {
      calories: 320,
      protein: 5,
      carbs: 30,
      fat: 22
    },
    preparationTime: 10,
    isPopular: false
  },
  {
    id: 4,
    name: "Glow Berry Cheesecake",
    description: "Creamy cheesecake topped with fresh seasonal berries",
    longDescription: "Our famous Glow Berry Cheesecake has been a customer favorite for over a decade. Made with a buttery graham cracker crust and a rich, velvety cream cheese filling that's baked to perfection. The cheesecake is topped with our signature berry compote – a sweet and slightly tart mixture of strawberries, blueberries, raspberries, and blackberries, slowly simmered with a touch of vanilla bean and orange liqueur. Each slice is garnished with fresh berries and a light dusting of powdered sugar. For an extra indulgence, it can be served with a side of vanilla bean ice cream or whipped cream upon request.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts",
    tags: ["Sweet", "Berries", "Creamy"],
    ingredients: ["Cream cheese", "Graham cracker crust", "Mixed berries", "Sugar", "Vanilla", "Eggs", "Sour cream"],
    nutritionFacts: {
      calories: 450,
      protein: 8,
      carbs: 48,
      fat: 28
    },
    preparationTime: 0,
    isPopular: true
  },
  {
    id: 5,
    name: "Mediterranean Grilled Salmon",
    description: "Fresh salmon with herbs, lemon and olive oil",
    longDescription: "Our Mediterranean Grilled Salmon is the perfect choice for seafood lovers and health-conscious diners. We use only fresh, sustainably sourced Atlantic salmon fillets, marinated in a blend of Mediterranean herbs, garlic, lemon juice, and extra virgin olive oil. The salmon is grilled to perfection – crispy on the outside while remaining tender and moist inside. Served on a bed of lemony quinoa pilaf with roasted Mediterranean vegetables including zucchini, bell peppers, cherry tomatoes, and red onions. Finished with a drizzle of tzatziki sauce and a sprinkle of fresh dill and feta cheese. This dish is rich in omega-3 fatty acids and protein while being gluten-free.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Seafood",
    tags: ["Healthy", "Gluten-free", "Protein-rich"],
    ingredients: ["Atlantic salmon", "Mediterranean herbs", "Lemon", "Olive oil", "Quinoa", "Roasted vegetables", "Tzatziki", "Feta cheese"],
    nutritionFacts: {
      calories: 520,
      protein: 42,
      carbs: 28,
      fat: 28
    },
    preparationTime: 20,
    isPopular: true
  },
  {
    id: 6,
    name: "Crispy Calamari",
    description: "Tender calamari rings with zesty aioli dip",
    longDescription: "Our Crispy Calamari appetizer is the perfect way to start your meal. We use tender squid rings that are lightly coated in our special seasoned flour and semolina mixture for extra crunch. Each batch is flash-fried to golden perfection – crispy on the outside while maintaining a tender, non-chewy texture inside. Served with a wedge of fresh lemon and two house-made dipping sauces: a zesty garlic aioli and our signature spicy marinara. Garnished with fried parsley and served hot from the kitchen. This shareable appetizer is consistently rated as one of our most popular starters by our regular customers.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Appetizers",
    tags: ["Seafood", "Crispy", "Shareable"],
    ingredients: ["Squid rings", "Seasoned flour", "Semolina", "Garlic aioli", "Spicy marinara", "Lemon", "Parsley"],
    nutritionFacts: {
      calories: 380,
      protein: 22,
      carbs: 32,
      fat: 20
    },
    preparationTime: 12,
    isPopular: false
  },
  {
    id: 7,
    name: "Bistro Veggie Pizza",
    description: "Wood-fired pizza with seasonal vegetables and pesto",
    longDescription: "Our Bistro Veggie Pizza celebrates the finest seasonal vegetables atop our famous pizza base. The dough is made fresh daily, fermented for 48 hours to develop complex flavors, and hand-stretched to order. It's baked in our wood-fired oven that reaches 800°F, creating a perfectly charred and airy crust. The base is spread with our house-made basil pesto and topped with roasted red peppers, artichoke hearts, wild mushrooms, red onions, cherry tomatoes, and baby spinach. We finish it with fresh mozzarella, crumbled goat cheese, and a drizzle of extra virgin olive oil. After baking, it's garnished with fresh basil leaves and a sprinkle of Maldon sea salt. Perfect for vegetarians and a favorite among all our guests.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Pizza",
    tags: ["Vegetarian", "Wood-fired", "Sharing"],
    ingredients: ["House-made dough", "Basil pesto", "Seasonal vegetables", "Mozzarella", "Goat cheese", "Olive oil", "Fresh basil"],
    nutritionFacts: {
      calories: 690,
      protein: 24,
      carbs: 88,
      fat: 30
    },
    preparationTime: 15,
    isPopular: false
  },
  {
    id: 8,
    name: "Crumble Special Tiramisu",
    description: "Classic Italian dessert with our special coffee blend",
    longDescription: "Our Crumble Special Tiramisu is a decadent take on the classic Italian dessert. We layer delicate ladyfinger cookies soaked in our special espresso blend (infused with a hint of amaretto and dark rum) between clouds of mascarpone cream that's been whipped to perfection with egg yolks, sugar, and a touch of vanilla bean paste. Each serving is dusted with premium cocoa powder and garnished with chocolate shavings and a single coffee bean. The dessert is prepared in individual glass servings and allowed to set for at least 24 hours to allow the flavors to meld perfectly. The result is a perfectly balanced dessert that's not too sweet, with distinct layers of flavor and texture in every spoonful.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Desserts",
    tags: ["Italian", "Coffee", "Creamy"],
    ingredients: ["Ladyfingers", "Espresso", "Mascarpone", "Eggs", "Amaretto", "Dark rum", "Cocoa powder"],
    nutritionFacts: {
      calories: 420,
      protein: 7,
      carbs: 45,
      fat: 24
    },
    preparationTime: 0,
    isPopular: true
  }
];

export const categories = [
  "All",
  "Burgers",
  "Pasta",
  "Salads",
  "Seafood",
  "Pizza",
  "Appetizers",
  "Desserts"
];
