import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Hammer, Info } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { CRAFTSMANSHIP_STEPS } from '../../data/luxuryData';

/**
 * Interactive split-screen craftsmanship stepper section.
 */
export default function Craftsmanship() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('craftsmanship');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If the section is not in the viewport, do nothing
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      // Find the steps container
      const stepsContainer = section.querySelector('.timeline-steps-container');
      if (!stepsContainer) return;

      const stepElements = stepsContainer.children;
      let closestStepIdx = 0;
      let minDistance = Infinity;

      const centerOfViewport = viewportHeight / 2;

      for (let i = 0; i < stepElements.length; i++) {
        const stepEl = stepElements[i];
        const stepRect = stepEl.getBoundingClientRect();
        
        // Center of the step element relative to the viewport
        const stepCenter = stepRect.top + stepRect.height / 2;
        const distance = Math.abs(stepCenter - centerOfViewport);

        if (distance < minDistance) {
          minDistance = distance;
          closestStepIdx = i;
        }
      }

      setActiveStep(closestStepIdx);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="craftsmanship" className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Heritage & Metier"
          title="The Golden Ratio of Craft"
          align="center"
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-12 md:mt-16">
          
          {/* Left: Cinematic Master Atelier Image & Ken Burns effect */}
          <div className="lg:col-span-5 relative group">
            
            {/* Fine geometric layout borders */}
            <div className="absolute -inset-4 border border-brand-gold/10 pointer-events-none z-10 scale-95 group-hover:scale-100 transition-luxury duration-1000" />
            <div className="absolute -top-6 -left-6 text-[8px] font-sans tracking-[0.25em] text-brand-gold uppercase opacity-60">
              [ Atelier Paris 8e ]
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gold/20 bg-brand-gray/15">
              <motion.img
                key={activeStep}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src="/images/hero/craftsmanship.png"
                alt="Maison Aurelia Craftsmanship Detail"
                className="w-full h-full object-cover object-center"
              />
              {/* Gold gradient shadows */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/25 to-transparent" />
              
              {/* Bottom image caption */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
                <span className="text-[9px] font-sans tracking-widest text-brand-gold uppercase font-bold flex items-center gap-1.5">
                  <Hammer size={12} /> Master Artisan Bench
                </span>
                <p className="text-[11px] text-brand-ivory/65 leading-relaxed font-light">
                  Capturing the precise micromillimeter alignment of brilliant-cut diamonds inside an 18k solid gold ring mounting.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stepper Timeline list */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <div className="relative pl-6 md:pl-10 py-2 timeline-steps-container">

              {CRAFTSMANSHIP_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    className="relative group cursor-pointer pb-6 last:pb-0"
                    onClick={() => setActiveStep(idx)}
                  >
                    {/* Upper line segment */}
                    <div 
                      className={`timeline-line top-0 h-1.5 transition-colors duration-500 ${
                        idx <= activeStep ? 'bg-brand-gold' : 'bg-brand-gold/10'
                      }`}
                    />

                    {/* Stepper Bullet Indicator */}
                    <div 
                      className={`absolute -left-[29px] md:-left-[45px] top-1.5 w-2 h-2 rounded-full border transition-all duration-500 z-10 ${
                        isActive
                          ? 'bg-brand-gold border-brand-gold scale-125 shadow-[0_0_8px_rgba(212,175,55,1)]'
                          : 'bg-brand-black border-brand-gold/30 hover:border-brand-gold group-hover:scale-110'
                      }`}
                    />

                    {/* Lower line segment */}
                    {idx < CRAFTSMANSHIP_STEPS.length - 1 && (
                      <div 
                        className={`timeline-line top-3.5 bottom-0 transition-colors duration-500 ${
                          idx < activeStep ? 'bg-brand-gold' : 'bg-brand-gold/10'
                        }`}
                      />
                    )}

                    {/* Step Headers */}
                    <div className="space-y-1">
                      <span className="block text-[9px] font-sans tracking-widest text-brand-gold uppercase font-semibold">
                        {step.phase} &bull; {step.number}
                      </span>
                      <h4 className={`text-lg md:text-xl font-sans tracking-wide transition-colors duration-500 ${
                        isActive ? 'text-brand-ivory font-medium' : 'text-brand-ivory/50 group-hover:text-brand-ivory/80 font-light'
                      }`}>
                        {step.title}
                      </h4>
                    </div>

                    {/* Stepper Body Paragraph - collapsible */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs md:text-sm text-brand-ivory/70 leading-relaxed font-light mt-3 pr-4">
                            {step.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Private Consult Link banner */}
            <div className="mt-8 flex items-center gap-3 bg-brand-gray/5 border border-brand-gold/15 p-4 max-w-xl">
              <Info size={14} className="text-brand-gold shrink-0" />
              <p className="text-[11px] font-sans text-brand-ivory/70 tracking-wide">
                Would you like to observe the lost-wax pouring process in person? <a href="#cta" className="text-brand-gold hover:underline font-medium">Schedule a private atelier visit.</a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
