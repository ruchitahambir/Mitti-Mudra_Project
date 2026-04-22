import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden p-6 md:p-12">
      <div className="w-full h-full earthy-card rounded-3xl overflow-hidden relative group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80&w=1920" 
            alt="Artisanal clay pots"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-natural-ink/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-natural-ink to-transparent opacity-80 z-20"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-30 flex flex-col md:flex-row items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-widest bg-amber-600/90 text-white px-3 py-1 rounded inline-block mb-4">
              Featured Artisanship
            </span>
            <h1 className="text-4xl md:text-7xl font-serif italic text-white leading-tight mb-4">
              Kutch Hand-Woven <br /> Textile & Craft
            </h1>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg mb-8 font-light">
              Masterpieces from the Vankar community, using natural indigo and madder root dyes. 
              Each piece is 100% organic cotton weave, born from the sacred soil of India.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-3xl text-white font-sans font-bold">₹12,499</span>
              <button 
                onClick={onCtaClick}
                className="px-8 py-3 bg-gold-accent text-natural-ink font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all shadow-xl"
              >
                Order Custom Piece
              </button>
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold vertical-text rotate-180 mb-4 whitespace-nowrap">
              Mitti & Mudra &bull; 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

