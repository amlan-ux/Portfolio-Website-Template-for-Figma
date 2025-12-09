import { useRef, useState, useCallback, useEffect, ReactNode, useImperativeHandle, forwardRef } from 'react';

interface PannableCanvasProps {
  children: ReactNode;
  initialScale?: number;
}

export interface PannableCanvasRef {
  panTo: (x: number, y: number) => void;
}

export const PannableCanvas = forwardRef<PannableCanvasRef, PannableCanvasProps>(
  ({ children, initialScale = 1 }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale] = useState(initialScale);

  // Expose panTo method to parent components
  useImperativeHandle(ref, () => ({
    panTo: (x: number, y: number) => {
      // Convert transform position to scroll position
      if (containerRef.current) {
        // Scroll to the opposite of the y transform (since transform moves content, we scroll in opposite direction)
        containerRef.current.scrollTo({
          top: Math.abs(y),
          behavior: 'smooth'
        });
      }
    }
  }));

  // Reset position on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'r' || e.key === 'R') {
        if (containerRef.current) {
          containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setPosition({ x: 0, y: 0 });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        backgroundColor: 'transparent',
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <div
        ref={contentRef}
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}
      >
        {children}
      </div>

      {/* Hint overlay - Removed to prevent overlap with Hero hints */}
    </div>
  );
}
);