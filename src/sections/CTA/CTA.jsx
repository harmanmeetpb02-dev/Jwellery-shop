import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, User, Mail, Award, Shield } from 'lucide-react';
import PremiumButton from '../../components/ui/PremiumButton';

/**
 * Editorial Private Salon Booking & Concierge appointment section.
 */
export default function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('Private Showroom Visit');
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !email || !date) return;
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
    }, 2000);
  };

  const services = [
    'Private Showroom Visit',
    'Bespoke Creation Consultation',
    'Private Ring Sizing & Tuning',
  ];

  return (
    <section id="cta" className="bg-brand-black py-24 md:py-32 border-t border-brand-gold/10 relative overflow-hidden select-none">
      
      {/* Background glowing halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Callout Information */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-brand-gold text-[9px] font-sans tracking-[0.3em] uppercase font-bold border border-brand-gold/30 px-3 py-1 bg-brand-gold/5">
              <Sparkles size={11} className="animate-spin-slow" /> Haute Joaillerie Concierge
            </span>
            
            <h2 className="editorial-title text-3xl md:text-5xl font-light text-brand-ivory leading-tight">
              Begin Your Custom Legacy
            </h2>
            
            <p className="text-xs md:text-sm text-brand-ivory/70 leading-relaxed font-light">
              Maison Aurelia fine creations are designed to be worn across generations. Secure a private boutique showroom booking or consult directly with our creative director in Paris to bring your unique vision to life.
            </p>

            {/* Quality Seals list */}
            <div className="space-y-4 pt-4 text-[11px] font-sans text-brand-ivory/75 border-t border-brand-gold/10">
              <div className="flex items-center gap-3">
                <Award size={14} className="text-brand-gold" />
                <span>Dedicated private host allocation for every attendee</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={14} className="text-brand-gold" />
                <span>Zero-obligation GIA gemstone appraisal reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Card */}
          <div className="lg:col-span-7">
            <div className="bg-brand-gray/5 border border-brand-gold/15 p-8 md:p-10 relative">
              
              {/* Elegant card corner markers */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-brand-gold" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-brand-gold" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-brand-gold" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-brand-gold" />

              {!isBooked ? (
                <form onSubmit={handleBooking} className="space-y-8">
                  <div className="space-y-1">
                    <span className="block text-[8px] uppercase tracking-widest text-brand-gold/60 font-sans">Step 01 &bull; Service selection</span>
                    <span className="block text-sm text-brand-ivory font-light font-serif italic mt-0.5">Select your private salon pathway</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-3">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setService(srv)}
                          className={`px-3 py-2.5 border font-sans text-[9px] uppercase tracking-widest transition-luxury cursor-pointer outline-none ${
                            service === srv
                              ? 'border-brand-gold text-brand-gold bg-brand-gold/5 font-semibold'
                              : 'border-brand-gold/10 text-brand-ivory/50 hover:text-brand-ivory hover:border-brand-gold/30'
                          }`}
                        >
                          {srv.replace(' Consultation', '').replace(' Private', '')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text inputs grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-ivory text-xs py-3 pl-8 tracking-wider outline-none transition-luxury font-sans placeholder-brand-ivory/30"
                        required
                      />
                      <User className="absolute left-1.5 top-1/2 -translate-y-1/2 text-brand-gold/40" size={14} />
                    </div>

                    {/* Email input */}
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-ivory text-xs py-3 pl-8 tracking-wider outline-none transition-luxury font-sans placeholder-brand-ivory/30"
                        required
                      />
                      <Mail className="absolute left-1.5 top-1/2 -translate-y-1/2 text-brand-gold/40" size={14} />
                    </div>
                  </div>

                  {/* Calendar Date select */}
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent border-b border-brand-gold/20 focus:border-brand-gold text-brand-ivory text-xs py-3 pl-8 tracking-wider outline-none transition-luxury font-sans uppercase"
                      required
                    />
                    <Calendar className="absolute left-1.5 top-1/2 -translate-y-1/2 text-brand-gold/40" size={14} />
                  </div>

                  {/* Submit Booking */}
                  <div className="pt-2 flex justify-end">
                    <PremiumButton
                      type="submit"
                      variant="solid"
                      className="px-8 min-w-[200px]"
                      disabled={isBooking}
                    >
                      {isBooking ? 'Securing calendar...' : 'Request Private Booking'}
                    </PremiumButton>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-10 flex flex-col items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full border border-brand-gold bg-brand-gold/5 flex items-center justify-center text-brand-gold animate-bounce">
                    <Sparkles size={18} />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="editorial-title text-2xl text-brand-gold font-light">
                      Reservation Secured
                    </h4>
                    <p className="font-sans text-xs text-brand-ivory/70 leading-relaxed max-w-md font-light">
                      A private salon concierge director will contact you via your secure email <span className="text-brand-gold font-medium">{email}</span> within two hours to finalize your itinerary and coordinate security details.
                    </p>
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
