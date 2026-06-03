import { useState, useEffect } from 'react';

/**
 * Custom hook to apply magnetic attraction physical effects to elements
 * @param {React.RefObject} ref - Reference to the target DOM element
 * @param {number} strength - Damping multiplier, default 0.35
 */
export function useMagnetic(ref, strength = 0.35) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref || !ref.current) return;
    const element = ref.current;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      // Find coordinates of the geometric center of the element
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate delta distance
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      
      // Calculate linear distance
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Trigger radius: half element size + 80px hover field
      const threshold = Math.max(width, height) / 2 + 80;
      
      if (distance < threshold) {
        // Damped magnetic attraction pull
        setPosition({
          x: deltaX * strength,
          y: deltaY * strength,
        });
      } else {
        // Reset to original resting position
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, strength]);

  return position;
}
