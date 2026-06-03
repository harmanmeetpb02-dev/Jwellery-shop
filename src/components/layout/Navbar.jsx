import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Heart, ShoppingBag, Sparkles } from 'lucide-react';

/**
 * Premium editorial navigation bar with scroll detection and staggered mobile menu.
 */
export default function Navbar({ onOpenWishlist, wishlistCount = 0 }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scrolling to dynamically adjust navigation transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Best Sellers', href: '#bestsellers' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'The Promises', href: '#whychooseus' },
    { label: 'Private Salon', href: '#cta' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[900] transition-luxury select-none ${
          isScrolled 
            ? 'py-4 bg-brand-black/85 backdrop-blur-md border-b border-brand-gold/15 shadow-luxury' 
            : 'py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Navigation links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-ivory/75 hover:text-brand-gold transition-colors duration-300 relative py-1 group"
                data-cursor="pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* Center: Brand Monogram & Name */}
          <a 
            href="#" 
            className="flex flex-col items-center justify-center text-center cursor-pointer group"
            data-cursor="pointer"
          >
            <span className="text-[12px] font-serif tracking-[0.4em] text-brand-gold uppercase font-light leading-none group-hover:scale-105 transition-transform duration-500">
              M A I S O N
            </span>
            <span className="text-xl md:text-2xl font-serif tracking-[0.3em] text-brand-ivory uppercase font-extralight mt-1">
              AURELIA
            </span>
          </a>

          {/* Right: Navigation Links & Actions */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Nav links right half (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-ivory/75 hover:text-brand-gold transition-colors duration-300 relative py-1 group"
                  data-cursor="pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-4.5 text-brand-ivory/80">
              <button 
                className="hover:text-brand-gold transition-colors p-1 outline-none cursor-pointer hidden md:block"
                data-cursor="pointer"
              >
                <Search size={16} strokeWidth={1.5} />
              </button>

              <button 
                onClick={onOpenWishlist}
                className="hover:text-brand-gold transition-colors p-1 relative outline-none cursor-pointer"
                data-cursor="pointer"
              >
                <Heart size={16} strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-gold text-brand-black text-[8px] font-sans font-bold rounded-full flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button 
                className="hover:text-brand-gold transition-colors p-1 relative outline-none cursor-pointer"
                data-cursor="pointer"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
              </button>

              {/* Mobile Burger Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden hover:text-brand-gold transition-colors p-1 outline-none cursor-pointer"
                data-cursor="pointer"
              >
                <Menu size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-full bg-brand-black/98 z-[950] flex flex-col justify-between p-8 md:p-16 overflow-y-auto"
          >
            {/* Header close button */}
            <div className="flex items-center justify-between pb-8 border-b border-brand-gold/10">
              <span className="text-[9px] font-sans tracking-[0.3em] text-brand-gold uppercase">
                Maison Aurelia Paris
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-ivory/80 hover:text-brand-gold p-2 cursor-pointer outline-none"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Staggered Navigation Items */}
            <div className="flex flex-col gap-6 py-12 md:py-16">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl md:text-5xl font-light text-brand-ivory hover:text-brand-gold transition-colors tracking-wider"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom concierge contact */}
            <div className="border-t border-brand-gold/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <span className="text-[10px] font-sans tracking-[0.2em] text-brand-gold/60 uppercase">
                Bespoke Atelier Booking &bull; Paris 8e
              </span>
              <a 
                href="mailto:atelier@maisonaurelia.com" 
                className="text-[11px] font-sans tracking-widest text-brand-ivory hover:text-brand-gold underline underline-offset-4"
              >
                atelier@maisonaurelia.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
