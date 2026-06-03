import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';

/**
 * Premium luxury button with physical magnet attraction and liquid reveal hover state.
 */
export default function PremiumButton({
  children,
  onClick,
  variant = 'outline', // 'solid', 'outline', 'text'
  magnetic = false,
  className = '',
  icon = null,
  ...props
}) {
  const btnRef = useRef(null);
  
  // Apply our custom magnetic pull physics
  const magneticPos = useMagnetic(btnRef, 0.28);
  const { x, y } = magnetic ? magneticPos : { x: 0, y: 0 };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.2em] transition-luxury overflow-hidden select-none outline-none";
  
  const variants = {
    solid: "bg-brand-gold text-brand-black border border-brand-gold hover:bg-brand-gold-dark hover:border-brand-gold-dark shadow-luxury",
    outline: "bg-transparent text-brand-ivory border border-brand-gold/40 hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black",
    text: "bg-transparent text-brand-ivory px-0 py-2 border-b border-brand-gold/20 hover:border-brand-gold hover:text-brand-gold tracking-[0.25em]",
  };

  return (
    <motion.button
      ref={btnRef}
      onClick={onClick}
      style={magnetic ? { x, y } : {}}
      animate={magnetic ? { x, y } : {}}
      transition={magnetic ? { type: 'spring', damping: 22, stiffness: 180, mass: 0.8 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      data-cursor="pointer"
      whileHover="hover"
      {...props}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2 pointer-events-none">
        <motion.span
          className="flex items-center justify-center gap-2"
          variants={{
            hover: {
              letterSpacing: variant === 'text' ? '0.28em' : undefined
            }
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
          {icon && (
            <motion.span
              className="inline-flex"
              variants={{
                hover: { x: 3 }
              }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.span>
          )}
        </motion.span>
      </span>
    </motion.button>
  );
}
