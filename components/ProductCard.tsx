
import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
      <div className="aspect-square w-full overflow-hidden bg-slate-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
           <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-orange-500 hover:text-white transition-colors shadow-lg">
             <Eye className="w-5 h-5" />
           </button>
           <button 
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg"
           >
             <ShoppingCart className="w-5 h-5" />
           </button>
        </div>
        {product.featured && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            Hot Pick
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold text-slate-800 truncate pr-2">
            {product.name}
          </h3>
          <p className="text-sm font-bold text-orange-600">${product.price.toFixed(2)}</p>
        </div>
        <p className="text-xs text-slate-500 mb-3 line-clamp-1">{product.description}</p>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-slate-700">{product.rating}</span>
          <span className="text-[10px] text-slate-400 ml-1">(40+ Reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
