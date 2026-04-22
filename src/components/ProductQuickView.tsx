import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, ShoppingBag, Heart, Share2, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Product } from "../types";
import { formatCurrency, cn } from "../lib/utils";

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  currency: 'INR' | 'USD';
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (productId: string) => void;
}

export default function ProductQuickView({ 
  product, 
  isOpen, 
  currency, 
  isWishlisted,
  onClose, 
  onAddToCart,
  onToggleWishlist
}: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-natural-ink/70 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-50 p-2 bg-white/20 hover:bg-white text-white hover:text-natural-ink rounded-full transition-all shadow-xl backdrop-blur-md"
            >
              <X size={24} />
            </button>

            {/* Image Section */}
            <div className="flex-1 h-1/2 md:h-full bg-natural-border relative group">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                <span className="px-4 py-2 bg-natural-ink text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md text-emerald-800 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  <ShieldCheck size={14} />
                  Authenticated Craft
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-16 overflow-y-auto bg-white flex flex-col">
              <div className="mb-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-natural-ink mb-4 leading-tight">
                      {product.name}
                    </h2>
                    <div className="price-tag text-2xl text-amber-900 font-bold">
                      {formatCurrency(product.price, currency)}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => onToggleWishlist(product.id)}
                      className={cn(
                        "p-4 rounded-full border border-natural-border transition-all hover:scale-110",
                        isWishlisted ? "bg-red-500 border-red-500 text-white" : "hover:text-red-500"
                      )}
                    >
                      <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                    </button>
                    <button className="p-4 rounded-full border border-natural-border hover:text-blue-600 transition-all hover:scale-110">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-natural-text/70 font-light text-lg leading-relaxed mb-8 italic">
                  {product.description}
                </p>

                <div className="space-y-4 mb-12">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-natural-text/40">Heritage Highlights</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {product.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-natural-bg rounded-2xl border border-natural-border/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-natural-ink">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 py-8 border-y border-natural-border mb-12">
                  <div className="text-center space-y-2">
                    <Truck size={20} className="mx-auto text-natural-text/40" />
                    <p className="text-[10px] font-bold uppercase tracking-tighter">Carbon Neutral Shipping</p>
                  </div>
                  <div className="text-center space-y-2">
                    <ShieldCheck size={20} className="mx-auto text-natural-text/40" />
                    <p className="text-[10px] font-bold uppercase tracking-tighter">Artisan Certification</p>
                  </div>
                  <div className="text-center space-y-2">
                    <RotateCcw size={20} className="mx-auto text-natural-text/40" />
                    <p className="text-[10px] font-bold uppercase tracking-tighter">Hassle-free Returns</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-auto flex gap-4">
                <button 
                  onClick={() => { onAddToCart(product); onClose(); }}
                  className="flex-1 py-6 bg-natural-ink text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-gold-accent hover:text-natural-ink transition-all flex items-center justify-center gap-4 shadow-2xl"
                >
                  <ShoppingBag size={20} />
                  Acquire This Piece
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
