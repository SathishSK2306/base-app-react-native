export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
};

export const products: Product[] = [
  {
    id: 'wireless-headphones',
    name: 'Wireless Headphones',
    price: 1999,
    category: 'Audio',
    description: 'Comfortable wireless headphones with good battery life and clear sound.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
  },
  {
    id: 'smart-watch',
    name: 'Smart Watch',
    price: 2499,
    category: 'Wearables',
    description: 'Track fitness, messages, and steps with a sleek everyday smartwatch.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    rating: 4.7,
  },
  {
    id: 'bluetooth-speaker',
    name: 'Bluetooth Speaker',
    price: 1499,
    category: 'Audio',
    description: 'Portable speaker with deep bass, rich sound, and a long-lasting battery.',
    image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    rating: 4.6,
  },
  {
    id: 'running-shoes',
    name: 'Running Shoes',
    price: 2799,
    category: 'Footwear',
    description: 'Lightweight and breathable running shoes for daily movement and workouts.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    rating: 4.9,
  },
  {
    id: 'backpack',
    name: 'Backpack',
    price: 1299,
    category: 'Accessories',
    description: 'A durable backpack with organized storage for your daily essentials.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    rating: 4.5,
  },
  {
    id: 't-shirt',
    name: 'T-Shirt',
    price: 799,
    category: 'Fashion',
    description: 'A soft cotton T-shirt that is comfortable for everyday wear.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    rating: 4.4,
  },
  {
    id: 'coffee-mug',
    name: 'Coffee Mug',
    price: 599,
    category: 'Home',
    description: 'A ceramic mug designed for cozy coffee and tea moments.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    rating: 4.3,
  },
  {
    id: 'sunglasses',
    name: 'Sunglasses',
    price: 1099,
    category: 'Fashion',
    description: 'Uv-protected sunglasses with a lightweight frame for outdoor comfort.',
    image: 'https://images.unsplash.com/photo-1577803947579-9f4e1f666d42?auto=format&fit=crop&w=900&q=80',
    rating: 4.6,
  },
  {
    id: 'phone-case',
    name: 'Phone Case',
    price: 699,
    category: 'Accessories',
    description: 'Shock-resistant phone case that protects your device in everyday use.',
    image: 'https://images.unsplash.com/photo-1603791239531-1e3f9d0c2f0f?auto=format&fit=crop&w=900&q=80',
    rating: 4.5,
  },
  {
    id: 'water-bottle',
    name: 'Water Bottle',
    price: 899,
    category: 'Lifestyle',
    description: 'A reusable insulated bottle that keeps drinks fresh throughout the day.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    rating: 4.7,
  },
];
