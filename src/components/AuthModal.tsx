import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, ArrowRight } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = React.useState<'login' | 'signup'>('login');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-natural-ink/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-natural-ink p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-gold-accent flex items-center justify-center">
                  <span className="text-gold-accent text-sm font-bold">M</span>
                </div>
                <h2 className="text-xl font-serif italic">Mitti & Mudra</h2>
              </div>
              
              <h3 className="text-3xl font-serif italic mb-2">
                {mode === 'login' ? 'Welcome Back' : 'Join the Collective'}
              </h3>
              <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">
                {mode === 'login' 
                  ? 'Access your curated collection and saved treasures.' 
                  : 'Experience the soul of the soil and support artisanal heritage.'}
              </p>
            </div>

            {/* Form */}
            <div className="p-8 space-y-6">
              <div className="space-y-4">
                {mode === 'signup' && (
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-natural-text/40 px-1">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-natural-text/40" />
                      <input className="w-full bg-natural-bg border border-natural-border rounded-xl px-12 py-3 outline-none focus:border-gold-accent transition-colors text-sm" placeholder="Your Name" />
                    </div>
                  </div>
                )}
                
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-natural-text/40 px-1">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-natural-text/40" />
                    <input className="w-full bg-natural-bg border border-natural-border rounded-xl px-12 py-3 outline-none focus:border-gold-accent transition-colors text-sm" placeholder="email@heritage.com" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-natural-text/40 px-1">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-natural-text/40" />
                    <input type="password" className="w-full bg-natural-bg border border-natural-border rounded-xl px-12 py-3 outline-none focus:border-gold-accent transition-colors text-sm" placeholder="••••••••" />
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-natural-ink text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-gold-accent hover:text-natural-ink transition-all flex items-center justify-center gap-2 shadow-lg">
                {mode === 'login' ? 'Enter Collective' : 'Create Account'}
                <ArrowRight size={16} />
              </button>

              <div className="text-center pt-4">
                <button 
                  onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                  className="text-[10px] uppercase tracking-widest font-bold text-natural-text/40 hover:text-gold-accent transition-colors underline underline-offset-4"
                >
                  {mode === 'login' ? 'New here? Create account' : 'Already a member? Login'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
