import { motion } from "motion/react";
import { Plus, Info, Heart, Share2 } from "lucide-react";
import { Product } from "../types";
import { formatCurrency, cn } from "../lib/utils";

interface ProductCardProps {
  product: Product;
  currency: 'INR' | 'USD';
  isWishlisted?: boolean;
  onAddToCart: (p: Product) => void;
  onViewDetail: (p: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onViewArtisan?: (productId: string) => void;
}

export default function ProductCard({ 
  product, 
  currency, 
  isWishlisted, 
  onAddToCart, 
  onViewDetail, 
  onToggleWishlist,
  onViewArtisan 
}: ProductCardProps) {
  
  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href, // Sharing the current page as catalog item
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied!');
    }
  };

  const getStockStatus = () => {
    if (product.stock === 0) return { label: "Out of Stock", color: "bg-red-500", disabled: true };
    if (product.stock < 5) return { label: `Only ${product.stock} Left`, color: "bg-orange-500 animate-pulse", disabled: false };
    return { label: "In Stock", color: "bg-emerald-500", disabled: false };
  };

  const stock = getStockStatus();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-natural-border hover:shadow-2xl transition-all duration-500 relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-natural-border">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-natural-ink/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            disabled={stock.disabled}
            className="p-4 bg-white text-natural-ink rounded-full hover:bg-gold-accent hover:scale-110 transition-all shadow-xl hover:rotate-12 disabled:opacity-50 disabled:grayscale"
            title="Add to Cart"
          >
            <Plus size={22} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onViewDetail(product); }}
            className="p-4 bg-white text-natural-ink rounded-full hover:bg-gold-accent hover:scale-110 transition-all shadow-xl hover:-rotate-12"
            title="View Details"
          >
            <Info size={22} />
          </button>
        </div>
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <div className="flex flex-col gap-2">
            <span className="px-3 py-1 bg-natural-ink/80 backdrop-blur-sm text-[9px] font-bold uppercase tracking-[0.2em] text-white rounded-full self-start">
              {product.category}
            </span>
            <span className={cn(
              "px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white rounded-full self-start shadow-sm",
              stock.color
            )}>
              {stock.label}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <button 
              onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
              className={cn(
                "p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg hover:scale-125 border-2",
                isWishlisted 
                  ? "bg-red-500 border-red-500 text-white animate-bounce" 
                  : "bg-white/80 border-white text-natural-ink hover:text-red-500"
              )}
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={handleShare}
              className="p-2.5 bg-white/80 backdrop-blur-md border border-white text-natural-ink rounded-full hover:text-blue-600 transition-all shadow-lg hover:scale-110"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {onViewArtisan && (
          <button 
            onClick={() => onViewArtisan(product.id)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gold-accent/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-natural-ink rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
          >
            Meet Artisan
          </button>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="serif-title text-xl font-bold text-natural-ink leading-tight">
            {product.name}
          </h3>
          <span className="price-tag text-amber-900 border-b-2 border-gold-accent/40 font-bold whitespace-nowrap">
            {formatCurrency(product.price, currency)}
          </span>
        </div>
        <p className="text-sm text-natural-text/70 font-light line-clamp-2 leading-relaxed mb-6">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex -space-x-1">
            {product.highlights.slice(0, 3).map((h, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 bg-natural-bg border border-natural-border text-[8px] text-emerald-800 uppercase font-bold rounded-md"
                title={h}
              >
                {h}
              </span>
            ))}
          </div>
          <button 
            disabled={product.stock === 0}
            onClick={() => onAddToCart(product)}
            className="flex-shrink-0 px-4 py-2 bg-natural-ink text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-gold-accent hover:text-natural-ink transition-all disabled:opacity-50 disabled:grayscale"
          >
            {product.stock === 0 ? "Unavailable" : "Select Piece"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

