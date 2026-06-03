import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';

/**
 * Editorial Pinterest-style masonry gallery feed.
 */
export default function Gallery() {
  
  const galleryItems = [
    { 
      src: "/images/gallery/gallery_1.png", 
      tag: "#AureliaRings", 
      location: "Place Vendôme Atelier", 
      aspect: "aspect-[3/4]" 
    },
    { 
      src: "/images/gallery/gallery_2.png", 
      tag: "#LumiereDrops", 
      location: "Studio Showcase, Paris", 
      aspect: "aspect-[1/1]" 
    },
    { 
      src: "/images/gallery/gallery_3.png", 
      tag: "#LEtoilePendant", 
      location: "Private Salon Exhibition", 
      aspect: "aspect-[4/5]" 
    },
    { 
      src: "/images/gallery/gallery_4.png", 
      tag: "#AureliaCraft", 
      location: "Artisan Bench close-up", 
      aspect: "aspect-[3/4]" 
    },
  ];

  return (
    <section className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Curated Aesthetic"
          title="The Maison Gallery"
          align="center"
        />

        {/* Pinterest Editorial Masonry Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start mt-12 md:mt-16">
          {galleryItems.map((item, index) => {
            
            // Apply slight vertical offset triggers to columns to create premium asymmetrical waves
            const offsetClass = index % 2 === 1 ? "lg:translate-y-8" : "";

            return (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative group overflow-hidden border border-brand-gold/10 bg-brand-gray/10 cursor-pointer ${item.aspect} ${offsetClass}`}
                data-cursor="pointer"
              >
                {/* Image background with slow reveal scale */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.tag}
                    className="w-full h-full object-cover object-center transform transition-transform duration-[2s] group-hover:scale-105"
                  />
                  {/* Frosted black-overlay vignette */}
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                </div>

                {/* Overlaping details showing on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-y-3 group-hover:translate-y-0">
                  
                  {/* Top: Instagram logo and handle */}
                  <div className="flex items-center justify-between text-brand-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <Heart size={14} strokeWidth={1.5} className="hover:fill-brand-gold" />
                  </div>

                  {/* Bottom: tag context */}
                  <div className="space-y-1">
                    <span className="block font-sans text-[10px] tracking-[0.25em] text-brand-gold uppercase font-bold">
                      {item.tag}
                    </span>
                    <span className="block font-sans text-[9px] text-brand-ivory/60 tracking-wider font-light">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Fine gold bounding ring on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/25 transition-all duration-700 pointer-events-none z-30" />
              </motion.div>
            );
          })}
        </div>

        {/* Instagarm Link anchor */}
        <div className="mt-20 text-center relative z-20 lg:pt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-brand-gold hover:text-brand-ivory transition-colors duration-300 relative py-2 group"
            data-cursor="pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> Follow Maison On Instagram
            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full group-hover:left-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
