import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import VendorShowcase from "./components/VendorShowcase";
import BlogStories from "./components/BlogStories";
import CheckoutPage from "./components/CheckoutPage";
import { PRODUCTS, VENDORS, BLOG_POSTS } from "./constants";
import { Product, Vendor } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { Leaf, Filter } from "lucide-react";
import { cn } from "./lib/utils";

import ArtisanSpotlight from "./components/ArtisanSpotlight";
import AuthModal from "./components/AuthModal";
import ProductQuickView from "./components/ProductQuickView";

function BackgroundSlideshow() {
  const images = [
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1600", // Earth/Mud texture
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1600", // Natural fibers
    "https://images.unsplash.com/photo-1493246318656-5bbd4afb09b7?auto=format&fit=crop&q=80&w=1600"  // Sand/Rock formations
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={index}
        src={images[index]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </AnimatePresence>
  );
}

export default function App() {
  const [activePage, setActivePage] = React.useState("home");
  const [selectedVendor, setSelectedVendor] = React.useState<Vendor | null>(null);
  const [cart, setCart] = React.useState<(Product & { quantity: number })[]>([]);
  const [wishlist, setWishlist] = React.useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = React.useState<string>("All");
  const [currency, setCurrency] = React.useState<'INR' | 'USD'>('INR');
  const [isAuthModalOpen, setIsAuthModalOpen] = React.useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [notification, setNotification] = React.useState<{message: string, type: 'success' | 'info'} | null>(null);

  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const navigateToSpotlight = (vendor: Vendor) => {
    setSelectedVendor(vendor);
    setActivePage("spotlight");
    window.scrollTo(0, 0);
  };

  const navigateFromProductToSpotlight = (productId: string) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      const vendor = VENDORS.find(v => v.id === product.vendorId);
      if (vendor) navigateToSpotlight(vendor);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} added to cart!`);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const isRemoving = prev.includes(productId);
      const product = PRODUCTS.find(p => p.id === productId);
      const newWishlist = isRemoving 
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      if (product) {
        showNotification(
          isRemoving ? `Removed ${product.name} from wishlist` : `Added ${product.name} to wishlist`,
          isRemoving ? 'info' : 'success'
        );
      }
      return newWishlist;
    });
  };

  const shareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mitti & Mudra - Indian Artisanal Crafts',
          text: 'Explore authentic Indian artisanal crafts and heritage textiles.',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const filteredProducts = categoryFilter === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === categoryFilter);

  const categories = ["All", "Pottery", "Textiles", "Jewelry", "Beauty", "Decor"];

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0">
            <Hero onCtaClick={() => setActivePage("shop")} />
            
            {/* Featured Section */}
            <section className="py-24 px-6 md:px-12 bg-natural-bg">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <h2 className="text-4xl md:text-5xl font-serif italic text-natural-text gold-border pb-2">
                    Featured Masterpieces
                  </h2>
                  <button 
                    onClick={() => setActivePage("shop")}
                    className="text-xs font-bold uppercase tracking-widest text-natural-ink hover:text-gold-accent transition-colors"
                  >
                    View All Collections
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PRODUCTS.slice(0, 3).map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      currency={currency}
                      isWishlisted={wishlist.includes(product.id)}
                      onAddToCart={addToCart} 
                      onViewDetail={openProductDetail} 
                      onToggleWishlist={toggleWishlist}
                      onViewArtisan={navigateFromProductToSpotlight}
                    />
                  ))}
                </div>
              </div>
            </section>

            <VendorShowcase vendors={VENDORS} onViewSpotlight={navigateToSpotlight} />
            
            <section className="py-20 bg-natural-ink text-white overflow-hidden relative">
              <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8 relative z-10">
                  <span className="text-gold-accent text-xs font-bold uppercase tracking-[0.4em]">Our Philosophy</span>
                  <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
                    Sustainable Export <br /> 
                    <span className="text-white/40">Honoring the Earth.</span>
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed text-lg max-w-xl">
                    Every export carried out by Mitti & Mudra ensures that heritage pieces arrive at your doorstep 
                    with a clean soul. Our carbon-neutral shipping preserves the scent of the monsoon for your home.
                  </p>
                </div>
                <div className="flex-1 relative">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden earthy-card border-4 border-natural-ink/50">
                    <img 
                      src="https://images.unsplash.com/photo-1590136284690-34449842bb72?auto=format&fit=crop&q=80&w=800" 
                      alt="Artisan at work"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </section>

            <BlogStories posts={BLOG_POSTS} />
          </motion.div>
        );
      
      case "shop":
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Transitioning Catalog Header Card */}
            <div className="relative mb-16 rounded-[2.5rem] overflow-hidden earthy-card border-none min-h-[400px] flex items-center justify-center text-center">
              {/* Background Slideshow */}
              <div className="absolute inset-0 z-0">
                <BackgroundSlideshow />
                <div className="absolute inset-0 bg-natural-ink/40 backdrop-blur-[2px]" />
              </div>
              
              <div className="relative z-10 px-8 py-16 space-y-6">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-5xl md:text-7xl font-serif italic text-white"
                >
                  The Catalog
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-white/80 font-light max-w-xl mx-auto text-lg leading-relaxed"
                >
                  Filter through our hand-selected collections of artisanal excellence. <br />
                  All prices inclusive of basic export processing.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={shareApp}
                  className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-natural-ink transition-all inline-flex items-center gap-2"
                >
                  Share Catalog
                </motion.button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <div className="flex items-center gap-2 mr-4 text-natural-text/40">
                <Filter size={18} />
                <span className="text-xs uppercase font-bold tracking-widest">Filter by:</span>
              </div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                    categoryFilter === cat 
                      ? "bg-natural-ink text-white border-natural-ink shadow-lg scale-105" 
                      : "bg-white text-natural-text border-natural-border hover:border-gold-accent"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    currency={currency}
                    isWishlisted={wishlist.includes(product.id)}
                    onAddToCart={addToCart} 
                    onViewDetail={openProductDetail} 
                    onToggleWishlist={toggleWishlist}
                    onViewArtisan={navigateFromProductToSpotlight}
                  />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        );

      case "vendors":
        return <VendorShowcase vendors={VENDORS} onViewSpotlight={navigateToSpotlight} />;
      
      case "spotlight":
        return selectedVendor ? (
          <ArtisanSpotlight 
            vendor={selectedVendor} 
            artisanProducts={PRODUCTS.filter(p => p.vendorId === selectedVendor.id)}
            currency={currency}
            wishlist={wishlist}
            onAddToCart={addToCart}
            onToggleWishlist={toggleWishlist}
            onBack={() => setActivePage("vendors")}
          />
        ) : null;

      case "blog":
        return <BlogStories posts={BLOG_POSTS} />;

      case "checkout":
        return (
          <CheckoutPage 
            cart={cart} 
            currency={currency}
            onUpdateQuantity={updateQuantity} 
            onRemoveItem={removeFromCart} 
            onBack={() => setActivePage("shop")}
          />
        );

      case "wishlist":
        const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif italic text-natural-ink">Your Wishlist</h1>
              <p className="text-natural-text/60 font-light max-w-xl mx-auto">Treasures you've saved for later. Each piece carries a story of its own.</p>
            </div>

            {wishlistProducts.length === 0 ? (
              <div className="text-center py-20 bg-natural-border/30 rounded-[3rem]">
                <p className="italic text-natural-text/50 mb-8 font-serif">Your wishlist is currently a clean slate...</p>
                <button 
                  onClick={() => setActivePage("shop")}
                  className="px-10 py-4 bg-natural-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-accent hover:text-natural-ink transition-all shadow-xl"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {wishlistProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    currency={currency}
                    isWishlisted={true}
                    onAddToCart={addToCart} 
                    onViewDetail={openProductDetail} 
                    onToggleWishlist={toggleWishlist}
                    onViewArtisan={navigateFromProductToSpotlight}
                  />
                ))}
              </div>
            )}
          </motion.div>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="selection:bg-gold-accent selection:text-natural-ink">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        wishlistCount={wishlist.length}
        currency={currency}
        setCurrency={setCurrency}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsAuthModalOpen(true)}
      />
      
      <main className="min-h-[80vh]">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />

      <ProductQuickView 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        currency={currency}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
      />

      {/* Earthy Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className={cn(
              "fixed bottom-12 left-1/2 z-[200] px-8 py-4 rounded-full border shadow-2xl font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 backdrop-blur-md",
              notification.type === 'success' ? "bg-natural-ink text-white border-gold-accent" : "bg-white text-natural-ink border-natural-border"
            )}
          >
            <Leaf size={16} className="text-gold-accent" />
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

