import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, Leaf, Globe, Heart, User } from "lucide-react";
import { cn } from "../lib/utils";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  cartCount: number;
  wishlistCount: number;
  currency: 'INR' | 'USD';
  setCurrency: (currency: 'INR' | 'USD') => void;
  isLoggedIn: boolean;
  onLoginClick: () => void;
}

export default function Navbar({ 
  activePage, 
  setActivePage, 
  cartCount, 
  wishlistCount, 
  currency, 
  setCurrency,
  isLoggedIn,
  onLoginClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: "Collection", id: "shop" },
    { name: "Artisans", id: "vendors" },
    { name: "Wishlist", id: "wishlist" },
    { name: "Journal", id: "blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full gradient-animate shadow-lg">
      {/* Top Utility Bar (Amazon style) */}
      <div className="bg-natural-ink/30 backdrop-blur-sm border-b border-white/10 px-8 py-2 hidden lg:flex justify-end items-center gap-6 text-[9px] font-bold uppercase tracking-widest text-white/70">
        <button className="hover:text-gold-accent transition-colors">Track Order</button>
        <button className="hover:text-gold-accent transition-colors">Gift Cards</button>
        <button className="hover:text-gold-accent transition-colors">Help Center</button>
      </div>

      <div className="h-20 px-8 flex items-center justify-between text-white">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActivePage("home")}
        >
          <div className="w-10 h-10 rounded-full border-2 border-gold-accent flex items-center justify-center bg-white/10 overflow-hidden">
            <motion.span 
              className="text-xl font-bold text-gold-accent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              M
            </motion.span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white leading-none">
              Mitti & Mudra
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60 mt-1 hidden sm:block">
              Soul of the Soil
            </p>
          </div>
        </div>

        {/* Desktop Nav Center */}
        <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={cn(
                  "transition-all hover:text-gold-accent cursor-pointer",
                  activePage === item.id ? "text-gold-accent" : "text-white"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section: Auth + Wishlist + Cart */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Currency */}
          <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20">
            <button
              onClick={() => setCurrency('INR')}
              className={cn(
                "px-3 py-1 rounded-full whitespace-nowrap text-[9px] font-bold transition-all",
                currency === 'INR' ? "bg-white text-natural-ink" : "text-white hover:text-gold-accent"
              )}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={cn(
                "px-3 py-1 rounded-full whitespace-nowrap text-[9px] font-bold transition-all",
                currency === 'USD' ? "bg-white text-natural-ink" : "text-white hover:text-gold-accent"
              )}
            >
              USD
            </button>
          </div>

          <div className="h-6 w-px bg-white/20" />

          {/* Auth (Amazon-like grouping) */}
          <button 
            onClick={onLoginClick}
            className="flex flex-col items-start group"
          >
            <span className="text-[9px] font-medium opacity-60 lowercase">Hello, Sign in</span>
            <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-gold-accent transition-colors flex items-center gap-1">
              {isLoggedIn ? 'Your Account' : 'Login / SignUp'}
              <X size={10} className="rotate-45" />
            </span>
          </button>

          {/* Wishlist Icon */}
          <button 
            onClick={() => setActivePage("wishlist")}
            className="relative p-2 hover:text-gold-accent transition-colors group"
            title="Wishlist"
          >
            <Heart size={20} fill={activePage === "wishlist" ? "currentColor" : "none"} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-natural-ink text-[8px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-md">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button 
            onClick={() => setActivePage("checkout")}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-natural-ink rounded-full border border-white/20 hover:bg-gold-accent transition-all shadow-xl group"
          >
            <div className="relative">
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-natural-ink text-white text-[8px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Cart</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setActivePage("checkout")}
            className="relative"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold-accent text-natural-ink text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-natural-ink">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="absolute top-full left-0 right-0 bg-natural-ink p-6 flex flex-col gap-6 lg:hidden shadow-xl origin-top z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "text-left text-sm uppercase tracking-widest py-2 border-b border-white/5",
                    activePage === item.id ? "text-gold-accent font-bold" : "text-white/70"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="pt-4 space-y-4">
              <button 
                onClick={() => { onLoginClick(); setIsOpen(false); }}
                className="w-full py-4 bg-white/10 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <User size={14} />
                {isLoggedIn ? 'Your Account' : 'Login / SignUp'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

