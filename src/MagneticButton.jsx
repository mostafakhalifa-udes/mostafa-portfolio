import React, { useRef, useState } from 'react';

const MagneticButton = ({ children, className, href, target, rel }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const boundingRect = buttonRef.current.getBoundingClientRect();
    const { width, height, left, top } = boundingRect;
    
    // Calculate distance from center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Control the magnetic pull strength (higher = weaker pull)
    const strength = 8;
    
    setPosition({ x: x / strength, y: y / strength });
  };

  const handleMouseLeave = () => {
    // Snap back to original position
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        // Use a snappy spring-like transition when returning to center, 
        // but no transition while following the mouse to prevent lag.
        transition: position.x === 0 && position.y === 0 
          ? 'transform 0.6s cubic-bezier(0.25, 1, 0.2, 1)' 
          : 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
        willChange: 'transform'
      }}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
