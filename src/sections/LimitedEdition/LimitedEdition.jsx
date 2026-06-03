import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Shield, Clock } from 'lucide-react';
import PremiumButton from '../../components/ui/PremiumButton';
import SectionHeading from '../../components/ui/SectionHeading';

/**
 * Limited Edition Masterpiece showcase with countdown timer.
 */
export default function LimitedEdition({ onOpenQuickView }) {
  // Setup simulated countdown (e.g. 14 hours, 45 minutes, 12 seconds remaining)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 58,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  // Spotlight product specifications
  const spotlightItem = {
    id: "etoile-choker",
    name: "L'Étoile Celestial Pendant",
    collection: "Necklaces",
    price: "$38,000",
    image: "/images/hero/hero_bg.png",
    description: "A breathtaking display of celestial elegance. This micro-pave platinum collar cradles a central floating D-color flawless pear-shape diamond, suspended to react to the wearer's breath.",
    carat: "3.2 ct Pear Cut",
    metal: "950 Platinum",
    stone: "D-Color Diamond",
    origin: "Sourced from Botswana",
    details: "Over 450 brilliant-cut accent diamonds are micro-pave set by hand into the floating suspension. Inspired by the starry night sky over the Mediterranean.",
  };

  return (
    <section className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none overflow-hidden relative">
      {/* Background soft glowing highlights */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[300px] bg-brand-gold/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Exclusive Spotlight"
          title="The Annual Masterpiece Release"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-12 md:mt-16">
          
          {/* Left: Product Showcase Description & Exclusivity Details */}
          <div className="lg:col-span-6 space-y-8 orden-2 lg:order-1">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-brand-gold text-[9px] font-sans tracking-[0.25em] uppercase font-bold border border-brand-gold/30 px-3 py-1 bg-brand-gold/5">
                <Sparkles size={11} /> Piece No. 01 of 03
              </span>
              <h3 className="editorial-title text-3xl md:text-5xl font-light text-brand-ivory leading-tight mt-3">
                L'Étoile Celestial Diamond Choker
              </h3>
              <p className="text-xl text-brand-gold font-light tracking-widest mt-1">
                Value: $38,000 USD
              </p>
            </div>

            <p className="text-xs md:text-sm text-brand-ivory/70 leading-relaxed font-light">
              An extraordinary technical achievement in high-jewelry suspension. The central 3.2-carat pear-shaped diamond is suspended on microscopic platinum threads, allowing it to float and react to the kinetic pulses of your breath, reflecting light in infinite, vibrating spectrums.
            </p>

            {/* Rare specifications lists */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-brand-gold/10">
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-brand-gold/60 font-sans">Carat Specs</span>
                <span className="text-[11px] font-sans text-brand-ivory mt-1.5 block font-medium">3.2ct D-Color Flawless</span>
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-brand-gold/60 font-sans">Diamond Cut</span>
                <span className="text-[11px] font-sans text-brand-ivory mt-1.5 block font-medium">Brilliant Pear Shape</span>
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-brand-gold/60 font-sans">Certified Sourcing</span>
                <span className="text-[11px] font-sans text-brand-ivory mt-1.5 block font-medium">GIA certified #94012</span>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-sans font-semibold flex items-center gap-1.5">
                <Clock size={12} className="text-brand-gold" /> Allocation Closes In:
              </span>
              
              <div className="flex gap-4">
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="bg-brand-gray/10 border border-brand-gold/15 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-serif text-2xl md:text-3xl font-light text-brand-gold shadow-luxury-inner">
                    {formatTime(timeLeft.hours)}
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-brand-ivory/40 font-sans mt-2">Hours</span>
                </div>
                {/* colon */}
                <span className="text-2xl md:text-3xl text-brand-gold/30 font-light self-center -mt-6">:</span>
                
                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="bg-brand-gray/10 border border-brand-gold/15 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-serif text-2xl md:text-3xl font-light text-brand-gold shadow-luxury-inner">
                    {formatTime(timeLeft.minutes)}
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-brand-ivory/40 font-sans mt-2">Minutes</span>
                </div>
                {/* colon */}
                <span className="text-2xl md:text-3xl text-brand-gold/30 font-light self-center -mt-6">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="bg-brand-gray/10 border border-brand-gold/15 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-serif text-2xl md:text-3xl font-light text-brand-gold shadow-luxury-inner">
                    {formatTime(timeLeft.seconds)}
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-brand-ivory/40 font-sans mt-2">Seconds</span>
                </div>
              </div>
            </div>

            {/* Booking action */}
            <div className="pt-4 flex items-center gap-6">
              <PremiumButton
                onClick={() => onOpenQuickView(spotlightItem)}
                variant="solid"
                className="px-8"
              >
                Inquire For Allocation
              </PremiumButton>
              <div className="text-[11px] font-sans text-brand-ivory/50 flex items-center gap-1.5">
                <Shield size={12} className="text-brand-gold" /> GIA Authenticity Sealed
              </div>
            </div>
          </div>

          {/* Right: Immersive Product Close-up Image */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="absolute -inset-4 border border-brand-gold/10 pointer-events-none z-10 scale-95" />
            <div className="absolute -top-6 -right-6 text-[8px] font-sans tracking-[0.25em] text-brand-gold uppercase opacity-60">
              [ 1 of 3 Pieces Created ]
            </div>

            <div className="relative aspect-[4/5] md:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden border border-brand-gold/25 bg-brand-gray/10 group">
              <img
                src="/images/hero/hero_bg.png"
                alt="Limited Edition Celestial Diamond Pendant"
                className="w-full h-full object-cover object-center transform transition-transform duration-[2.5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-80" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
