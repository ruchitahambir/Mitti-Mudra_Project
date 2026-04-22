import { motion } from "motion/react";
import { formatCurrency } from "../lib/utils";
import { Trash2, Lock, ArrowLeft, Send } from "lucide-react";
import { Product } from "../types";

interface CheckoutPageProps {
  cart: (Product & { quantity: number })[];
  currency: 'INR' | 'USD';
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onBack: () => void;
}

export default function CheckoutPage({ cart, currency, onUpdateQuantity, onRemoveItem, onBack }: CheckoutPageProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingThreshold = currency === 'INR' ? 5000 : 60;
  const shippingFee = currency === 'INR' ? 500 : 7;
  const shipping = subtotal > shippingThreshold ? 0 : shippingFee;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-natural-bg py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-natural-text/60 hover:text-natural-ink transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Collections
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Order Summary */}
          <div>
            <h2 className="text-3xl font-serif italic text-natural-ink mb-8 gold-border pb-2 inline-block">
              Your Selection
            </h2>
            
            {cart.length === 0 ? (
              <div className="bg-natural-border p-12 rounded-3xl text-center">
                <p className="text-natural-text/60 font-light mb-8 italic">Your basket is currently empty of earthy treasures.</p>
                <button 
                  onClick={onBack}
                  className="px-8 py-3 bg-natural-ink text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-accent hover:text-natural-ink transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-2xl earthy-card border border-natural-border group">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-20 h-24 object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif italic font-bold text-lg text-natural-ink">{item.name}</h3>
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-natural-text/40 hover:text-red-800 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-natural-text/50 uppercase tracking-widest mb-3">{item.category}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 bg-natural-bg rounded-full px-3 py-1 border border-natural-border">
                          <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-natural-ink font-bold text-sm">-</button>
                          <span className="text-xs font-bold">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-natural-ink font-bold text-sm">+</button>
                        </div>
                        <span className="font-bold text-natural-ink">{formatCurrency(item.price * item.quantity, currency)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 pt-8 border-t-2 border-dashed border-natural-border">
              <div className="flex justify-between text-sm text-natural-text/60 mb-2">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal, currency)}</span>
              </div>
              <div className="flex justify-between text-sm text-natural-text/60 mb-4">
                <span>Shipping (Sustainable Export)</span>
                <span>{shipping === 0 ? "FREE" : formatCurrency(shipping, currency)}</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-serif italic text-natural-ink">
                <span>Total</span>
                <span className="text-natural-ink">{formatCurrency(total, currency)}</span>
              </div>
            </div>
          </div>

          {/* Secure Form */}
          <div className="bg-natural-ink text-white p-8 md:p-12 rounded-[2rem] shadow-2xl self-start overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/10 rounded-full text-gold-accent">
                  <Lock size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-serif italic">Secure Checkout</h3>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">International Processing</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 px-1">First Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-accent transition-colors" placeholder="Vikas" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 px-1">Last Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-accent transition-colors" placeholder="Khanna" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 px-1">Email for Documentation</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-accent transition-colors" placeholder="vikas@heritage.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 px-1">Global Shipping Address</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold-accent transition-colors h-24" placeholder="Full street address, city, and country..." />
                </div>

                <button className="w-full py-4 mt-8 bg-gold-accent text-natural-ink font-bold uppercase text-xs tracking-[0.2em] rounded-full hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-lg">
                  Place Order
                  <Send size={16} />
                </button>

                <p className="text-center text-[10px] text-white/30 italic mt-6">
                  By placing order, you agree to our Sustainable Trade Terms. 
                  Shipments are fully insured and tracked.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
