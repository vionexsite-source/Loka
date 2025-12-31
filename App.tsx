
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import AIChat from './components/AIChat';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { Sparkles, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Open cart on add
    // setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} 
        onCartToggle={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white px-4 pt-10 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                <span>The 2024 Orange Collection</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                Elevate your world <br />
                with <span className="text-orange-500 italic">Signature Orange</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                Discover curated pieces designed to bring warmth, energy, and sophisticated vibrance to your daily life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold shadow-xl shadow-orange-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold transition-all">
                  Our Story
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1558444479-c84826091ec2?auto=format&fit=crop&q=80&w=1200" 
                alt="Orange Aesthetic" 
                className="rounded-3xl shadow-2xl shadow-orange-900/10"
              />
            </div>
          </div>
        </section>

        {/* Product Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-1">Our Curated Catalog</h2>
              <p className="text-slate-500 text-sm">Finest orange-themed products selected just for you.</p>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
                    selectedCategory === cat 
                    ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-100' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-orange-200 hover:text-orange-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 text-lg">No orange treasures found matching your search.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-4 text-orange-500 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold">Amber <span className="text-orange-500">&</span> Aura</span>
            </div>
            <p className="text-slate-400 text-sm">
              Making the world a brighter, more orange place, one curated item at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400 uppercase text-xs tracking-widest">Shop</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Electronics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Home Decor</li>
              <li className="hover:text-white transition-colors cursor-pointer">Fashion</li>
              <li className="hover:text-white transition-colors cursor-pointer">Lifestyle</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sustainability</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-4">Get orange-exclusive drops and trends directly to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 bg-slate-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-orange-500 outline-none" 
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>&copy; 2024 Amber & Aura. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <AIChat products={MOCK_PRODUCTS} />
    </div>
  );
};

export default App;
