import { motion } from "motion/react";
import { Vendor } from "../types";
import { MapPin, ArrowUpRight } from "lucide-react";

interface VendorShowcaseProps {
  vendors: Vendor[];
  onViewSpotlight: (vendor: Vendor) => void;
}

export default function VendorShowcase({ vendors, onViewSpotlight }: VendorShowcaseProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-natural-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-800 gold-border pb-2 mb-4 inline-block">Heritage Hubs (Vendors)</h3>
            <h2 className="text-4xl md:text-5xl font-serif italic text-natural-ink">
              Our Partner Collectives
            </h2>
          </div>
          <p className="text-natural-text/70 font-light max-w-sm mb-1 italic">
            Each piece is born in the workshop of these master collectives, where traditions are preserved and skills are honored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {vendors.map((vendor) => (
            <motion.div 
              key={vendor.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-3xl earthy-card"
            >
              <img 
                src={vendor.image} 
                alt={vendor.name}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-natural-ink via-natural-ink/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-2 text-gold-accent text-xs font-bold uppercase tracking-widest mb-4">
                  <MapPin size={14} />
                  {vendor.location}
                </div>
                <h3 className="text-3xl font-serif italic text-white mb-4 group-hover:text-gold-accent transition-colors">
                  {vendor.name}
                </h3>
                <p className="text-white/80 font-light mb-8 max-w-md leading-relaxed text-sm">
                  {vendor.story}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/20 pt-6">
                  <span className="text-[10px] uppercase tracking-widest text-white/50">Specialty</span>
                  <span className="text-xl font-serif text-white italic">{vendor.specialty}</span>
                </div>
              </div>
              
              <button 
                onClick={() => onViewSpotlight(vendor)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-gold-accent hover:text-natural-ink transition-all z-20"
              >
                <ArrowUpRight size={20} />
              </button>
              
              <div 
                className="absolute inset-0 cursor-pointer z-10" 
                onClick={() => onViewSpotlight(vendor)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

