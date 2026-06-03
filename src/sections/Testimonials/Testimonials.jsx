import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { TESTIMONIALS } from '../../data/luxuryData';

/**
 * High-fashion slider testimonial showcase.
 */
export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none overflow-hidden relative">
      
      {/* Subtle ambient light spots */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-brand-gold/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Atelier Chronicles"
          title="Voices of Maison Patrons"
          align="center"
        />

        {/* Testimonials Slider Frame */}
        <div className="relative min-h-[300px] md:min-h-[260px] flex flex-col justify-between mt-12">
          
          {/* Decorative Giant Quote Emblem */}
          <div className="absolute -top-10 -left-6 text-brand-gold/[0.06] pointer-events-none">
            <Quote size={80} strokeWidth={1} />
          </div>

          {/* Testimonial Active Slide */}
          <div className="relative flex-1">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIdx}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-8 flex flex-col items-center text-center"
              >
                {/* Immersive Italicized Quote */}
                <p className="editorial-title text-xl md:text-3xl lg:text-4xl text-brand-ivory font-light italic leading-relaxed max-w-4xl tracking-wide luxury-text-glow">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Patron Signature metadata */}
                <div className="flex items-center gap-4 pt-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-gold/30 p-0.5 bg-brand-black">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* Name and titles */}
                  <div className="text-left space-y-0.5">
                    <span className="block font-sans text-xs uppercase tracking-widest text-brand-gold font-semibold">
                      {current.author}
                    </span>
                    <span className="block font-sans text-[10px] text-brand-ivory/50 tracking-wider">
                      {current.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers */}
          <div className="flex items-center justify-center gap-6 mt-16 z-20">
            {/* Prev arrow */}
            <button
              onClick={handlePrev}
              className="p-3.5 border border-brand-gold/20 hover:border-brand-gold text-brand-ivory hover:text-brand-gold transition-luxury cursor-pointer outline-none group"
              data-cursor="pointer"
            >
              <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Pagination Bullet Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIdx ? 1 : -1);
                    setActiveIdx(idx);
                  }}
                  className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer outline-none ${
                    activeIdx === idx ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-gold/20 hover:bg-brand-gold/50'
                  }`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={handleNext}
              className="p-3.5 border border-brand-gold/20 hover:border-brand-gold text-brand-ivory hover:text-brand-gold transition-luxury cursor-pointer outline-none group"
              data-cursor="pointer"
            >
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
