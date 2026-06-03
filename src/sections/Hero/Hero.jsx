import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import PremiumButton from '../../components/ui/PremiumButton';
import { HERO_CONTENT } from '../../data/luxuryData';

/**
 * High-fashion magazine editorial Hero section.
 */
export default function Hero() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative h-screen min-h-[650px] w-full bg-brand-black flex items-center overflow-hidden select-none">
      
      {/* Cinematic jewelry image backdrop */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src="/images/hero/hero_bg.png"
          alt="Maison Aurelia High Jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Editorial vignetting and linear dark filters */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50 z-10" />
      </div>

      {/* Floating gold dust particles */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/3 w-2.5 h-2.5 bg-brand-gold/25 blur-sm rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [15, -15, 15],
            x: [10, -10, 10],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/3 right-1/4 w-3.5 h-3.5 bg-brand-gold/20 blur-md rounded-full"
        />
      </div>

      {/* Brand Text Content */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-20 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl md:max-w-3xl space-y-8"
        >
          {/* Subtle gold subtitle label */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 border-b border-brand-gold/25 pb-2"
          >
            <Sparkles size={11} className="text-brand-gold animate-pulse" />
            <span className="font-sans text-[10px] md:text-[11px] tracking-[0.4em] text-brand-gold uppercase font-semibold">
              {HERO_CONTENT.subtitle}
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1 
            variants={itemVariants}
            className="editorial-title text-4xl sm:text-6xl md:text-7xl font-extralight text-brand-ivory leading-[1.08] tracking-wide"
          >
            The Alchemy of <br />
            <span className="font-light italic text-stroke-gold">Timeless Elegance</span>
          </motion.h1>

          {/* Elegant short brand story paragraph */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-xs md:text-sm font-light text-brand-ivory/70 leading-relaxed tracking-wider max-w-lg"
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* Call to action buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <PremiumButton 
              onClick={() => window.location.href = '#collections'} 
              variant="solid"
              icon={<ArrowRight size={12} />}
            >
              {HERO_CONTENT.primaryCTA}
            </PremiumButton>
            
            <PremiumButton 
              onClick={() => window.location.href = '#cta'} 
              variant="outline"
            >
              {HERO_CONTENT.secondaryCTA}
            </PremiumButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Pendulum Scroll-down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold"
        >
          SCROLL
        </motion.span>
        
        {/* Animated gold thread */}
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold/50 to-transparent relative">
          <motion.div
            animate={{ 
              y: [0, 16, 0] 
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-brand-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,1)]"
          />
        </div>
      </div>

    </section>
  );
}
