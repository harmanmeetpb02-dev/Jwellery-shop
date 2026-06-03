import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';
import SectionHeading from '../../components/ui/SectionHeading';
import { FAQS } from '../../data/luxuryData';

/**
 * Editorial FAQ section with high-performance accordion mechanics.
 */
export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          subtitle="Atelier Enquiries"
          title="Frequently Asked Questions"
          align="center"
        />

        {/* FAQ Accordion List */}
        <div className="space-y-5 mt-12 md:mt-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="border-b border-brand-gold/15 bg-brand-gray/5 transition-luxury duration-500"
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-6 outline-none cursor-pointer group"
                  data-cursor="pointer"
                >
                  <span className="font-sans text-xs md:text-sm text-brand-ivory/95 font-medium tracking-wide group-hover:text-brand-gold transition-colors duration-300 flex items-center gap-3">
                    <span className="font-serif text-brand-gold font-light italic">Q{idx + 1}.</span> {faq.question}
                  </span>
                  
                  {/* Plus/Minus rotation indicator */}
                  <span className="text-brand-gold shrink-0 ml-4 p-1">
                    {isOpen ? (
                      <Minus size={14} className="transform rotate-180 transition-transform duration-500" />
                    ) : (
                      <Plus size={14} className="transform rotate-0 group-hover:rotate-90 transition-transform duration-500" />
                    )}
                  </span>
                </button>

                {/* Collapsible Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 pr-10 border-t border-brand-gold/5 mt-0">
                        <p className="font-sans text-xs md:text-sm text-brand-ivory/70 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Private Concierge callout banner */}
        <div className="mt-16 text-center border border-brand-gold/15 bg-brand-gray/5 p-6 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <Sparkles size={16} className="text-brand-gold" />
            <div className="text-[11px] font-sans text-brand-ivory/75">
              <span className="block font-semibold uppercase text-brand-gold tracking-widest">Unanswered Inquiries?</span>
              <span className="block font-light mt-0.5">Contact our specialized salon concierge division for immediate custom support.</span>
            </div>
          </div>
          <a
            href="#cta"
            className="text-[10px] font-sans font-medium uppercase tracking-widest text-brand-gold hover:text-brand-ivory transition-colors shrink-0 underline underline-offset-4"
          >
            Consult Concierge
          </a>
        </div>

      </div>
    </section>
  );
}
