import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Heart } from 'lucide-react';

// Layout & UI Shell Elements
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import QuickViewDrawer from './components/ui/QuickViewDrawer';

// Section Masterpieces
import Hero from './sections/Hero/Hero';
import Trust from './sections/Trust/Trust';
import Collections from './sections/Collections/Collections';
import BestSellers from './sections/BestSellers/BestSellers';
import Craftsmanship from './sections/Craftsmanship/Craftsmanship';
import LimitedEdition from './sections/LimitedEdition/LimitedEdition';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import Testimonials from './sections/Testimonials/Testimonials';
import Gallery from './sections/Gallery/Gallery';
import FAQ from './sections/FAQ/FAQ';
import CTA from './sections/CTA/CTA';

// Data
import { PRODUCTS } from './data/luxuryData';

export default function App() {
  const [wishlist, setWishlist] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null); // { message: string, type: 'success' | 'remove' }

  // Toggle wishlist collection
  const handleToggleWishlist = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId) || { name: 'Masterpiece' };
    
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`"${product.name}" removed from private catalog.`, 'remove');
        return prev.filter((id) => id !== productId);
      } else {
        showToast(`"${product.name}" saved to private catalog.`, 'success');
        return [...prev, productId];
      }
    });
  };

  // Launch the slide-over private catalog drawer
  const handleOpenDrawer = (product) => {
    setActiveProduct(product);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Luxury notification system
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  return (
    <div className="relative bg-brand-black text-brand-ivory min-h-screen selection:bg-brand-gold selection:text-brand-black antialiased font-sans">
      
      {/* High-fidelity Custom Cursor (Disabled automatically on touch) */}
      <CustomCursor />

      {/* Navigation menu */}
      <Navbar 
        wishlistCount={wishlist.length} 
        onOpenWishlist={() => {
          if (wishlist.length > 0) {
            const firstId = wishlist[0];
            const prod = PRODUCTS.find((p) => p.id === firstId);
            if (prod) handleOpenDrawer(prod);
          } else {
            showToast("Your Private Catalog is currently empty.", "remove");
          }
        }}
      />

      {/* Main Showcase Layout */}
      <main className="relative">
        {/* 01. Cinematic Entrance */}
        <Hero />

        {/* 02. Pedigree & Heritage Metrics */}
        <Trust />

        {/* 03. Maison Quadrant (Asymmetrical Masonry Grid) */}
        <Collections />

        {/* 04. Curated Best Sellers with Quick View Triggers */}
        <BestSellers 
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onOpenQuickView={handleOpenDrawer}
        />

        {/* 05. The Stepper Craft Timeline narrative */}
        <Craftsmanship />

        {/* 06. Masterpiece spotlight with ticking clocks */}
        <LimitedEdition 
          onOpenQuickView={handleOpenDrawer}
        />

        {/* 07. Roman Numeral Core Promises */}
        <WhyChooseUs />

        {/* 08. Immersion Reviews Carousels */}
        <Testimonials />

        {/* 09. Instagram Pins Gallery feed */}
        <Gallery />

        {/* 10. Smooth sliding Accordions FAQ */}
        <FAQ />

        {/* 11. Atelier Private Reservation Form */}
        <CTA />
      </main>

      {/* Bottom Footer shell */}
      <Footer />

      {/* Private Showroom Drawer modal */}
      <QuickViewDrawer 
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        product={activeProduct}
      />

      {/* Floating Private Catalog Toasts */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '50%' }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-6 right-6 z-[2000] flex items-center gap-3.5 bg-brand-black/95 backdrop-blur-md border border-brand-gold/30 shadow-luxury p-5 max-w-sm rounded-none"
          >
            {/* Corner geometric notches */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-brand-gold" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-brand-gold" />

            <div className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold">
              {toast.type === 'success' ? <Sparkles size={14} className="animate-pulse" /> : <Heart size={14} />}
            </div>
            
            <div className="flex-1 text-[11px] font-sans text-brand-ivory/80 leading-relaxed font-light tracking-wide">
              {toast.message}
            </div>

            <button 
              onClick={() => setToast(null)}
              className="p-1 text-brand-ivory/40 hover:text-brand-gold transition-colors outline-none cursor-pointer"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
