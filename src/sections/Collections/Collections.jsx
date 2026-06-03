import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { COLLECTIONS } from '../../data/luxuryData';

/**
 * Editorial asymmetrical collections quadrant grid.
 */
export default function Collections() {
  
  // Custom grid layouts mapping for the editorial asymmetrical look
  const gridClasses = [
    "lg:col-span-7 h-[420px] md:h-[550px]", // Rings: Large main landscape
    "lg:col-span-5 h-[320px] md:h-[400px] lg:mt-32", // Necklaces: High offset block
    "lg:col-span-5 h-[380px] md:h-[480px] lg:-mt-16", // Earrings: Low offset block
    "lg:col-span-7 h-[380px] md:h-[480px] lg:-mt-0", // Bracelets: Base structural landscape
  ];

  return (
    <section id="collections" className="bg-brand-black py-24 md:py-32 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <SectionHeading
          subtitle="Les Catégories"
          title="The Curated Collections"
          align="left"
        />

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-12 md:mt-16">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden border border-brand-gold/10 bg-brand-gray/10 cursor-pointer ${gridClasses[index]}`}
              data-cursor="view"
            >
              {/* Image backdrop with slow zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                />
                {/* Dark luxury vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-brand-black/20 group-hover:via-brand-black/45 transition-luxury duration-700" />
              </div>

              {/* Top-Right French Tag */}
              <div className="absolute top-6 right-6 z-10">
                <span className="font-sans text-[8px] md:text-[9px] font-bold tracking-[0.25em] text-brand-gold border border-brand-gold/30 px-3 py-1 bg-brand-black/60 backdrop-blur-sm uppercase">
                  {collection.tag}
                </span>
              </div>

              {/* Bottom Details Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 flex flex-col justify-end h-1/2">
                <span className="text-[10px] font-sans tracking-widest text-brand-gold/80 mb-2 uppercase">
                  {collection.subtitle}
                </span>
                
                <h3 className="editorial-title text-2xl md:text-3xl text-brand-ivory font-light mb-3">
                  {collection.title}
                </h3>
                
                {/* Description - reveals on hover */}
                <p className="text-[11px] md:text-xs text-brand-ivory/60 leading-relaxed font-light max-w-md opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                  {collection.description}
                </p>

                {/* Elegant view link */}
                <div className="flex items-center gap-1 text-brand-gold text-[10px] font-sans font-medium uppercase tracking-[0.2em] mt-4">
                  <span>Explore Atelier</span>
                  <ArrowUpRight size={12} className="transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Inner ambient glow on card hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/30 transition-all duration-700 pointer-events-none z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
