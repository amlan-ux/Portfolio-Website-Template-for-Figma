import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';

interface Position {
  x: number;
  y: number;
}

interface SpotifyPlayerProps {
  initialPosition?: Position;
  activeSection?: string;
}

export function SpotifyPlayer({ initialPosition, activeSection = 'home' }: SpotifyPlayerProps) {
  // Calculate default position (top right area)
  const getDefaultPosition = useCallback(() => {
    // Position within the Hero section container (max-width 1400px)
    const containerWidth = 1400;
    const playerWidth = 320;
    const margin = 40;
    return { 
      x: containerWidth - playerWidth - margin, // Right side of hero container
      y: 80 // Top position with margin
    };
  }, []);

  const [position, setPosition] = useState(getDefaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    const saved = localStorage.getItem('draggable-spotify-player');
    if (!saved) {
      setPosition(getDefaultPosition());
    }
  }, [getDefaultPosition]);

  // Update position on window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Load saved position from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('draggable-spotify-player');
    if (saved) {
      try {
        const savedPosition = JSON.parse(saved);
        setPosition(savedPosition);
      } catch (e) {
        // If parsing fails, use default position
        setPosition(getDefaultPosition());
      }
    } else {
      // No saved position, use default top-right
      setPosition(getDefaultPosition());
    }
  }, [getDefaultPosition]);

  // Save position to localStorage
  useEffect(() => {
    if (!isDragging) {
      localStorage.setItem('draggable-spotify-player', JSON.stringify(position));
    }
  }, [position, isDragging]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'r' || e.key === 'R') {
      const defaultPos = getDefaultPosition();
      setPosition(defaultPos);
      localStorage.removeItem('draggable-spotify-player');
    }
  }, [getDefaultPosition]);

  // Listen for 'R' key to reset position
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Don't start dragging if clicking inside the iframe area
    if (target.tagName === 'IFRAME' || target.closest('iframe')) {
      return;
    }

    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && elementRef.current) {
      const container = elementRef.current.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        setPosition({
          x: e.clientX - containerRect.left - dragOffset.x,
          y: e.clientY - containerRect.top - dragOffset.y
        });
      }
    }
  }, [isDragging, dragOffset.x, dragOffset.y]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Hide completely when not on home section
  if (activeSection !== 'home') {
    return null;
  }

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0
      }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: isDragging ? 9999 : 100,
        userSelect: 'none',
        width: '380px',
        pointerEvents: 'auto'
      }}
      onMouseDown={handleMouseDown}
    >
      <div 
        className="relative"
        style={{ 
          pointerEvents: isDragging ? 'none' : 'auto',
          background: 'transparent'
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/artist/0LkW2euXRMAYdAib0H1VI3?utm_source=generator&theme=0"
          width="280"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{
            borderRadius: 'var(--radius-xl)',
            transform: 'rotate(2deg)',
            background: 'transparent',
            mixBlendMode: 'multiply'
          }}
          title="Spotify Player"
        />
      </div>
    </motion.div>
  );
}