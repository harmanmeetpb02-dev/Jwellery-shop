import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Shield, Truck, RotateCcw } from 'lucide-react';
import PremiumButton from './PremiumButton';

/**
 * Slide-over private showroom catalog item view.
 */
export default function QuickViewDrawer({ isOpen, onClose, product }) {
  const [selectedMetal, setSelectedMetal] = useState('18k Yellow Gold');
  const [isReserving, setIsReserving] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  if (!product) return null;

  const handleReserve = () => {
    setIsReserving(true);
    setTimeout(() => {
      setIsReserving(false);
      setIsReserved(true);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glass blur overlay with fade-out */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-black/90 backdrop-blur-md z-[1000] cursor-pointer"
          />

          {/* Drawer container panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full md:w-[560px] lg:w-[640px] bg-brand-black border-l border-brand-gold/15 z-[1001] shadow-2xl overflow-y-auto flex flex-col"
          >
            {/* Header branding */}
            <div className="flex items-center justify-between p-6 border-b border-brand-gold/10">
              <span className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold flex items-center gap-2">
                <Sparkles size={12} className="animate-pulse" /> Atelier Private Showroom
              </span>
              <button
                onClick={onClose}
                className="text-brand-ivory/60 hover:text-brand-gold hover:rotate-90 transition-luxury p-2 -mr-2 cursor-pointer outline-none"
                data-cursor="pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Primary Details container */}
            <div className="flex-1 p-6 md:p-8 space-y-8">
              {/* Floating Jewelry Close-up */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-brand-gold/10 bg-brand-gray/10 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Title, collections and cost */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-brand-gold/80 font-medium">
                  {product.collection}
                </span>
                <h3 className="editorial-title text-3xl md:text-4xl font-light text-brand-ivory leading-tight">
                  {product.name}
                </h3>
                <p className="text-2xl text-brand-gold font-light tracking-wide mt-1">{product.price}</p>
              </div>

              {/* Creative background writeup */}
              <div className="space-y-4">
                <p className="text-[13px] text-brand-ivory/80 leading-relaxed font-light">
                  {product.description}
                </p>
                <p className="text-[12px] text-brand-ivory/60 leading-relaxed font-light italic">
                  {product.details}
                </p>
              </div>

              {/* Detailed specification table */}
              <div className="grid grid-cols-2 gap-y-5 gap-x-4 py-6 border-y border-brand-gold/10">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-gold/60 font-sans">Carat Specs</span>
                  <span className="text-xs font-sans font-light text-brand-ivory mt-1 block">{product.carat}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-gold/60 font-sans">Stone Sourcing</span>
                  <span className="text-xs font-sans font-light text-brand-ivory mt-1 block">{product.stone}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-gold/60 font-sans">Prong Setting</span>
                  <span className="text-xs font-sans font-light text-brand-ivory mt-1 block">{product.metal}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-brand-gold/60 font-sans">Origin Provenance</span>
                  <span className="text-xs font-sans font-light text-brand-ivory mt-1 block">{product.origin}</span>
                </div>
              </div>

              {/* Select precious metals options */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.18em] text-brand-gold font-sans font-semibold">Precious Metal Alloy</span>
                <div className="flex flex-wrap gap-2.5">
                  {['18k Yellow Gold', '18k Rose Gold', '950 Platinum'].map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setSelectedMetal(metal)}
                      className={`px-4 py-2.5 border font-sans text-[10px] uppercase tracking-widest transition-luxury cursor-pointer outline-none ${
                        selectedMetal === metal
                          ? 'border-brand-gold text-brand-gold bg-brand-gold/5 font-medium'
                          : 'border-brand-gold/10 text-brand-ivory/50 hover:text-brand-ivory hover:border-brand-gold/30'
                      }`}
                    >
                      {metal.replace('18k ', '').replace('950 ', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service trust list */}
              <div className="space-y-3.5 text-[11px] font-sans text-brand-ivory/70 border-t border-brand-gold/10 pt-6">
                <div className="flex items-center gap-3">
                  <Shield size={14} className="text-brand-gold shrink-0" />
                  <span>Secure Lifetime Warranty & GIA Authenticity Passports</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={14} className="text-brand-gold shrink-0" />
                  <span>Armored Car Delivery or Fully Insured Luxury Handover</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw size={14} className="text-brand-gold shrink-0" />
                  <span>Complimentary Bespoke Size Rescaling & Annual Restorations</span>
                </div>
              </div>
            </div>

            {/* Bottom sticky action bar */}
            <div className="p-6 border-t border-brand-gold/15 bg-brand-black sticky bottom-0 z-20 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-brand-gold/60">Estimated Value</span>
                <span className="text-xl md:text-2xl font-light text-brand-gold">{product.price}</span>
              </div>

              {!isReserved ? (
                <PremiumButton
                  onClick={handleReserve}
                  variant="solid"
                  className="px-8 min-w-[210px]"
                  disabled={isReserving}
                >
                  {isReserving ? 'Reserving allocation...' : 'Reserve Creation'}
                </PremiumButton>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="px-6 py-4 bg-brand-gold/10 border border-brand-gold text-brand-gold font-sans text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2"
                >
                  <Sparkles size={11} className="animate-spin-slow" /> Allocation Secured
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
