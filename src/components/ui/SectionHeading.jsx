import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial-style section heading with built-in scroll reveal animations and delicate dividers.
 */
export default function SectionHeading({
  subtitle,
  title,
  align = 'center', // 'left', 'center', 'right'
  className = '',
}) {
  const isLeft = align === 'left';
  const isRight = align === 'right';

  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${
      isLeft ? 'items-start text-left' : isRight ? 'items-end text-right' : 'items-center text-center'
    } ${className}`}>
      {/* Delicate spaced gold subtitle */}
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[10px] md:text-[11px] font-sans tracking-[0.35em] text-brand-gold uppercase mb-4 font-semibold"
        >
          {subtitle}
        </motion.span>
      )}

      {/* Large editorial title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="editorial-title text-3xl md:text-5xl lg:text-6xl text-brand-ivory font-light leading-[1.15] tracking-wide max-w-4xl"
      >
        {title}
      </motion.h2>

      {/* Delicate horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`h-[1px] w-24 bg-gradient-to-r mt-6 md:mt-8 origin-center ${
          isLeft 
            ? 'bg-gradient-to-r from-brand-gold/60 to-transparent origin-left' 
            : isRight 
              ? 'bg-gradient-to-l from-brand-gold/60 to-transparent origin-right' 
              : 'from-transparent via-brand-gold/50 to-transparent'
        }`}
      />
    </div>
  );
}
