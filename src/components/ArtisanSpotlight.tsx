import { motion } from "motion/react";
import { Vendor, Product } from "../types";
import { formatCurrency, cn } from "../lib/utils";
import { MapPin, ArrowLeft, Instagram, Globe, Camera } from "lucide-react";
import ProductCard from "./ProductCard";

interface ArtisanSpotlightProps {
  vendor: Vendor;
  artisanProducts: Product[];
  wishlist: string[];
  currency: 'INR' | 'USD';
  onAddToCart: (p: Product) => void;
  onToggleWishlist: (productId: string) => void;
  onBack: () => void;
}

export default function ArtisanSpotlight({ vendor, artisanProducts, wishlist, currency, onAddToCart, onToggleWishlist, onBack }: ArtisanSpotlightProps) {
  return (
    <div className="min-h-screen bg-natural-bg">
      {/* Header Bio Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 bg-natural-ink text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Collectives
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-gold-accent text-xs font-bold uppercase tracking-[0.3em] mb-6">
                <MapPin size={14} />
                {vendor.location}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight">
                {vendor.name}
              </h1>
              <div className="w-24 h-1 bg-gold-accent mb-8" />
              <p className="text-xl text-white/70 font-serif italic leading-relaxed mb-8">
                "{vendor.story}"
              </p>
              <div className="text-white/60 font-light leading-relaxed space-y-4 max-w-xl text-sm">
                {vendor.biography.split('. ').map((para, i) => (
                  <p key={i}>{para}.</p>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden earthy-card border-8 border-natural-ink/50"
            >
              <img 
                src={vendor.image} 
                alt={vendor.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-12 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Camera className="text-gold-accent" size={24} />
            <h2 className="text-3xl serif-title text-natural-ink gold-border pb-2">
              At Work in the Studio
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendor.workspaceImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={cn(
                  "overflow-hidden rounded-2xl earthy-card",
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                )}
              >
                <img 
                  src={img} 
                  alt={`${vendor.name} Workspace ${i+1}`} 
                  className="w-full h-full object-cover aspect-video md:aspect-square group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-24 px-6 md:px-12 bg-natural-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-accent text-[10px] uppercase tracking-[0.4em] font-bold">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl serif-title text-natural-ink mt-4 leading-tight">
              The {vendor.name} <br /> Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisanProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                currency={currency}
                isWishlisted={wishlist.includes(product.id)}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                onViewDetail={() => {}}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

