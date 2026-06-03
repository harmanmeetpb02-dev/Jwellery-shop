import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Phone } from 'lucide-react';
import PremiumButton from '../ui/PremiumButton';

/**
 * Editorial footer featuring newsletter sign-up and atelier specifications.
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const footerLinks = {
    collections: [
      { label: 'Sculptural Rings', href: '#collections' },
      { label: 'Celestial Necklaces', href: '#collections' },
      { label: 'Lumière Earrings', href: '#collections' },
      { label: 'Organic Gold Cuffs', href: '#collections' },
    ],
    care: [
      { label: 'GIA Authenticity Passports', href: '#whychooseus' },
      { label: 'Armored Courier Transit', href: '#whychooseus' },
      { label: 'Bespoke Size Tuning', href: '#whychooseus' },
      { label: 'Atelier Ring Polishing', href: '#whychooseus' },
    ],
    ateliers: [
      { city: 'Paris', address: '22 Place Vendôme, 75001' },
      { city: 'London', address: '172 New Bond St, W1S' },
      { city: 'Geneva', address: '40 Rue du Rhône, 1204' },
      { city: 'Tokyo', address: '5-1-15 Ginza, Chuo-ku' },
    ]
  };

  return (
    <footer className="bg-brand-black border-t border-brand-gold/15 pt-20 pb-12 relative overflow-hidden select-none">
      {/* Background radial soft light highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section: Newsletter Gazette subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-gold/10">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold flex items-center gap-2">
              <Sparkles size={11} /> The Maison Gazette
            </span>
            <h3 className="editorial-title text-2xl md:text-3xl text-brand-ivory font-light leading-snug">
              Subscribe to receive private invitations to exclusive collection debuts and private boutique exhibitions.
            </h3>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 w-full">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-brand-gray/20 border border-brand-gold/20 focus:border-brand-gold text-brand-ivory text-xs px-5 py-4 tracking-wider outline-none transition-luxury font-sans placeholder-brand-ivory/30"
                    required
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold/40" size={14} />
                </div>
                <PremiumButton type="submit" variant="solid" className="py-4 px-8 shrink-0">
                  Join Gazette
                </PremiumButton>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-gold/10 border border-brand-gold/40 p-4 text-center text-brand-gold font-sans text-xs uppercase tracking-widest font-medium"
              >
                Gazette Joined. Your private invitation is pending.
              </motion.div>
            )}
          </div>
        </div>

        {/* Middle Section: Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-serif tracking-[0.4em] text-brand-gold uppercase">MAISON</span>
              <span className="text-xl font-serif tracking-[0.25em] text-brand-ivory uppercase font-light mt-1">AURELIA</span>
            </a>
            <p className="text-[12px] text-brand-ivory/60 leading-relaxed font-light max-w-sm">
              Sculpting timeless contemporary treasures through ancestral lost-wax cast structures and ethically mined diamonds, framed in Place Vendôme, Paris.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 text-brand-ivory/60">
              <a href="#" className="hover:text-brand-gold transition-colors" data-cursor="pointer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" data-cursor="pointer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors" data-cursor="pointer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Links 1: Collections */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-brand-ivory/65 hover:text-brand-gold transition-colors font-light" data-cursor="pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2: Private Services */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold">Private Care</h4>
            <ul className="space-y-3">
              {footerLinks.care.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-brand-ivory/65 hover:text-brand-gold transition-colors font-light" data-cursor="pointer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3: Ateliers */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-sans tracking-[0.25em] text-brand-gold uppercase font-semibold">Maison Ateliers</h4>
            <div className="grid grid-cols-1 gap-4.5">
              {footerLinks.ateliers.map((item) => (
                <div key={item.city} className="text-xs leading-relaxed font-light">
                  <span className="block text-brand-ivory font-medium tracking-wide">{item.city} Atelier</span>
                  <span className="block text-brand-ivory/55 text-[11px] mt-0.5">{item.address}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Legalities */}
        <div className="border-t border-brand-gold/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-sans tracking-widest text-brand-ivory/40 uppercase">
            <span>&copy; {new Date().getFullYear()} Maison Aurelia fine jewelry. All Rights Reserved.</span>
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Atelier</a>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-sans tracking-[0.2em] text-brand-gold uppercase">
            <Phone size={12} strokeWidth={1.5} /> Atelier Concierge: <span>+33 1 42 61 56 00</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
