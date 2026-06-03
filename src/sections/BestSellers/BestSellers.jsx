import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Eye } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { PRODUCTS } from '../../data/luxuryData';

/**
 * Premium editorial Best Sellers product card showcase.
 */
export default function BestSellers({ wishlist = [], onToggleWishlist, onOpenQuickView }) {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="bestsellers" className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Atelier Favorites"
          title="The House Best Sellers"
          align="center"
        />

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-12"
        >
          {PRODUCTS.map((product) => {
            const isLiked = wishlist.includes(product.id);

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group relative flex flex-col justify-between border border-brand-gold/10 bg-brand-gray/5 hover:border-brand-gold/30 hover:shadow-luxury transition-luxury p-5 cursor-pointer"
                onClick={() => onOpenQuickView(product)}
              >
                {/* Product Card Top bar */}
                <div className="flex justify-between items-center z-10 mb-4">
                  <span className="text-[8px] font-sans tracking-widest text-brand-gold bg-brand-gold/5 px-2 py-0.5 border border-brand-gold/15 uppercase font-medium">
                    {product.carat !== "N/A" ? "High Carat" : "Fine Alloy"}
                  </span>
                  
                  {/* Whislist Heart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Avoid opening quick view drawer
                      onToggleWishlist(product.id);
                    }}
                    className="p-1.5 rounded-full hover:bg-brand-gold/10 transition-colors text-brand-ivory/60 hover:text-brand-gold cursor-pointer outline-none"
                    data-cursor="pointer"
                  >
                    <Heart
                      size={14}
                      className="transition-transform duration-300"
                      fill={isLiked ? "#D4AF37" : "transparent"}
                      stroke={isLiked ? "#D4AF37" : "currentColor"}
                      strokeWidth={1.5}
                    />
                  </button>
                </div>

                {/* Product Image Frame */}
                <div className="relative aspect-[9/10] w-full overflow-hidden bg-brand-gray/10 mb-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  {/* Frosted quick view trigger panel */}
                  <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500 z-10">
                    <span className="bg-brand-black/85 backdrop-blur-sm border border-brand-gold/30 px-5 py-2.5 font-sans text-[9px] uppercase tracking-widest text-brand-gold flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Eye size={12} /> View Masterpiece
                    </span>
                  </div>
                </div>

                {/* Card details meta */}
                <div className="space-y-2 mt-auto">
                  <span className="block text-[9px] font-sans tracking-widest text-brand-gold/60 uppercase">
                    {product.collection}
                  </span>
                  
                  <h3 className="editorial-title text-lg md:text-xl font-light text-brand-ivory truncate group-hover:text-brand-gold transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-brand-gold/5 mt-3">
                    <span className="text-[10px] text-brand-ivory/50 font-sans tracking-wider">
                      {product.metal.replace('18k ', '').replace('950 ', '')}
                    </span>
                    <span className="text-sm font-light text-brand-gold tracking-wide">
                      {product.price}
                    </span>
                  </div>
                </div>

                {/* Fine luxury outline glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/20 pointer-events-none z-20 transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
