import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_INDICATORS } from '../../data/luxuryData';

/**
 * Trust indicators section showing brand pedigree and ethical assurances.
 */
export default function Trust() {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-brand-black py-16 md:py-24 border-b border-brand-gold/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Subtle top rule */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent mb-16" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {TRUST_INDICATORS.map((indicator, index) => (
            <motion.div
              key={indicator.label}
              variants={itemVariants}
              className="text-center relative flex flex-col items-center justify-between group"
            >
              {/* Asymmetric separating vertical line for larger viewports */}
              {index < 3 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-brand-gold/20 via-brand-gold/10 to-transparent" />
              )}

              {/* Large Gold Serif Value */}
              <h3 className="editorial-title text-4xl sm:text-5xl font-light text-brand-gold mb-2 tracking-wide group-hover:scale-105 transition-transform duration-500">
                {indicator.value}
              </h3>
              
              {/* Bold label */}
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-ivory font-semibold mb-1">
                {indicator.label}
              </span>

              {/* Light Description */}
              <p className="font-sans text-[11px] text-brand-ivory/60 font-light leading-relaxed max-w-[200px]">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom rule */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent mt-16" />

      </div>
    </section>
  );
}
