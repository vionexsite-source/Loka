
import { Product } from './types';

export const CATEGORIES = ['All', 'Electronics', 'Home', 'Lifestyle', 'Fashion'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Sunset Glow Lamp',
    description: 'Ambient LED lamp that mimics the perfect orange sunset for your living room.',
    price: 45.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    featured: true,
  },
  {
    id: '2',
    name: 'Amber Noise Headphones',
    description: 'Premium wireless noise-canceling headphones in a signature burnt orange finish.',
    price: 199.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    featured: true,
  },
  {
    id: '3',
    name: 'Citrus Squeeze Tote',
    description: 'Eco-friendly canvas tote bag with vibrant orange screen printing.',
    price: 24.50,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1544816153-0973055ce714?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Marmalade Smart Watch',
    description: 'Track your fitness with this sleek, orange-strapped smart companion.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Tangelo Leather Chair',
    description: 'Ergonomic office chair upholstered in high-quality tangelo-colored leather.',
    price: 349.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Neon Coral Sneakers',
    description: 'Lightweight running shoes that pop with every stride.',
    price: 89.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
  },
  {
    id: '7',
    name: 'Copper Vacuum Flask',
    description: 'Keeps beverages hot or cold for 24 hours. Metallic orange coating.',
    price: 32.00,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1602143393494-710f71f598f0?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '8',
    name: 'Orange Ceramic Set',
    description: 'Handcrafted ceramic bowls and plates for a warm dining experience.',
    price: 65.00,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  }
];
