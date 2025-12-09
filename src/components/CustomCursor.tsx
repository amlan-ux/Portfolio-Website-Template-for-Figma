import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CustomCursor() {
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [currentColor, setCurrentColor] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Much snappier spring animation for instant cursor response
  const springConfig = { damping: 15, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const movingTimeoutRef = useRef<NodeJS.Timeout>();
  const trailIdRef = useRef(0);

  // Colors from design system
  const colors = [
    'var(--color-accent)',      // yellow
    'var(--color-secondary)',   // green
    'var(--color-chart-3)',     // pink
    'var(--color-chart-4)',     // orange
    'var(--color-chart-5)',     // blue
  ];

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add trail point when moving
      setIsMoving(true);
      
      // Add new trail point - reduced to 8 points for better performance
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: trailIdRef.current++ }
        ];
        // Keep only last 8 points for better performance
        return newTrail.slice(-8);
      });

      // Cycle through colors as mouse moves
      if (Math.random() < 0.1) {
        setCurrentColor((prev) => (prev + 1) % colors.length);
      }

      // Reset moving state after inactivity
      clearTimeout(movingTimeoutRef.current);
      movingTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        setTrail([]);
      }, 100);
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      clearTimeout(movingTimeoutRef.current);
    };
  }, [cursorX, cursorY, colors.length]);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Trail effect */}
      {isMoving && trail.map((point, index) => {
        const opacity = (index + 1) / trail.length;
        const scale = 0.3 + (index / trail.length) * 0.7;
        
        return (
          <motion.div
            key={point.id}
            style={{
              position: 'fixed',
              left: point.x,
              top: point.y,
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: colors[currentColor],
              pointerEvents: 'none',
              zIndex: 9998,
              transform: 'translate(-50%, -50%)',
              opacity: opacity * 0.6,
              scale: scale,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: opacity * 0.6, scale: scale }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.15 }}
          />
        );
      })}

      {/* Main Figma-style cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        {/* Cursor container */}
        <div style={{ transform: 'translate(-3px, -3px)' }}>
          {/* Figma-style cursor arrow */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'relative',
              filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))',
            }}
          >
            {/* Cursor arrow shape */}
            <path
              d="M3 3L3 17L8.5 12.5L11.5 18L13.5 17L10.5 11.5L17 11.5L3 3Z"
              fill="white"
              stroke="black"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            {/* Colored accent on cursor */}
            <motion.path
              d="M3 3L3 13L7 9L3 3Z"
              fill={colors[currentColor]}
              animate={{
                opacity: isMoving ? 0.9 : 0.6,
              }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </div>
      </motion.div>
    </>
  );
}