import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { WHY_CHOOSE_US } from '../../data/luxuryData';

/**
 * Editorial promises grid with dynamic border highlights.
 */
export default function WhyChooseUs() {
  
  const romanNumerals = ["I", "II", "III", "IV"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="whychooseus" className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="The Maison Guarantees"
          title="The Aurelia Promises"
          align="center"
        />

        {/* 2x2 Custom Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12"
        >
          {WHY_CHOOSE_US.map((promise, index) => (
            <motion.div
              key={promise.title}
              variants={itemVariants}
              className="group relative bg-brand-gray/5 border border-brand-gold/10 hover:border-brand-gold/25 p-8 md:p-10 transition-luxury overflow-hidden"
            >
              {/* Corner Glowing Ambient Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-[50px] rounded-full group-hover:bg-brand-gold/10 transition-colors duration-700 pointer-events-none" />

              {/* Background Roman Numeral */}
              <div className="absolute right-6 top-4 z-0 text-7xl md:text-8xl font-serif text-brand-gold/[0.04] group-hover:text-brand-gold/[0.07] transition-colors duration-700 font-extralight tracking-tighter">
                {romanNumerals[index]}
              </div>

              {/* Card Contents */}
              <div className="relative z-10 space-y-4">
                
                {/* Micro gold emblem */}
                <div className="inline-flex items-center gap-1.5 text-brand-gold text-[10px] uppercase tracking-[0.25em]">
                  <ShieldCheck size={14} className="group-hover:rotate-[360deg] transition-transform duration-1000" />
                  <span>Promise &bull; {romanNumerals[index]}</span>
                </div>

                {/* Promise Title */}
                <h3 className="editorial-title text-xl md:text-2xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-500">
                  {promise.title}
                </h3>

                {/* Promise Description */}
                <p className="font-sans text-xs md:text-sm text-brand-ivory/65 leading-relaxed font-light max-w-xl">
                  {promise.description}
                </p>
              </div>

              {/* Fine gold hover bounding box */}
              <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/15 transition-all duration-700 z-20 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
