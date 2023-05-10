export type FoodItem = {
  name: string;
  description: string;
  price: number;
  starRatings: number;
  reviewCount: number;
  imageUrl: any;
};

export const foodItems: FoodItem[] = [
  {
    name: 'Pizza',
    description: 'Cheese garlic pizza with tomato toppings',
    price: 30,
    starRatings: 4,
    reviewCount: 107,
    imageUrl: require('../../../assets/dish-1.png'),
  },
  {
    name: 'Burger',
    description: 'Cheese burger with mayonese toppings',
    price: 30,
    starRatings: 4,
    reviewCount: 107,
    imageUrl: require('../../../assets/dish-2.png'),
  },
  {
    name: 'Pasta',
    description: 'Vegetarian pasta with creamy sause',
    price: 30,
    starRatings: 4,
    reviewCount: 107,
    imageUrl: require('../../../assets/dish-3.png'),
  },
  {
    name: 'Pizza',
    description: 'Cheese garlic pizza with tomato toppings',
    price: 30,
    starRatings: 4,
    reviewCount: 107,
    imageUrl: require('../../../assets/dish-4.png'),
  },
];
