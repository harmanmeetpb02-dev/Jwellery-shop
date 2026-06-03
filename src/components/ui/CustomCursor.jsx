import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  // High performance positioning using non-reactive motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Soft spring physical calculations for outer premium ring lag
  const springConfig = { damping: 40, stiffness: 450, mass: 0.3 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch screens
    if (window.matchMedia('(hover: none)').matches) {
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Global listener to detect custom cursor types based on DOM hover elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive = target.closest('a, button, [role="button"], [data-cursor]');
      
      if (interactive) {
        const type = interactive.getAttribute('data-cursor') || 'pointer';
        setCursorType(type);
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Perfect center micro gold needle */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Floating elegant spring bezel */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-brand-gold/40 flex items-center justify-center text-[9px] uppercase tracking-widest text-brand-gold font-sans font-medium mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'view' ? 76 : cursorType === 'pointer' ? 44 : 20,
          height: cursorType === 'view' ? 76 : cursorType === 'pointer' ? 44 : 20,
          backgroundColor: cursorType === 'view' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0)',
          borderColor: cursorType === 'view' ? 'rgba(212, 175, 55, 0.8)' : cursorType === 'pointer' ? 'rgba(212, 175, 55, 0.7)' : 'rgba(212, 175, 55, 0.3)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
      >
        {cursorType === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-sans font-medium text-brand-ivory text-[9px] tracking-widest"
          >
            Open
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
