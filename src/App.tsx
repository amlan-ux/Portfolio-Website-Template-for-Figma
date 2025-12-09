import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WorkAndExperience } from './components/WorkAndExperience';
import { CommunityImpact } from './components/CommunityImpact';
import { Recommendations } from './components/Recommendations';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { PannableCanvas, PannableCanvasRef } from './components/PannableCanvas';
import { SpotifyPlayer } from './components/SpotifyPlayer';
import { LogoMarquee } from './components/LogoMarquee';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const canvasRef = useRef<PannableCanvasRef>(null);
  const [showInstructions, setShowInstructions] = useState(true);

  // Memoize positions to prevent recreation on every render
  const sectionPositions = useMemo(() => ({
    home: { x: 0, y: 0 },
    work: { x: 0, y: -1400 },
    contact: { x: 0, y: -3400 }
  }), []);

  // Hide instructions after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Hide instructions when user scrolls away from home section
  useEffect(() => {
    if (activeSection !== 'home') {
      setShowInstructions(false);
    }
  }, [activeSection]);

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    const position = sectionPositions[section as keyof typeof sectionPositions];
    if (position && canvasRef.current) {
      canvasRef.current.panTo(position.x, position.y);
    }
  }, [sectionPositions]);

  return (
    <>
      {/* Custom Figma-style cursor with trail */}
      <CustomCursor />
      
      <Navigation activeTab={activeSection} onTabChange={handleNavigate} />
      
      {/* Instruction hint */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div 
            className="hidden md:fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-primary text-primary-foreground shadow-sm z-50 font-body md:block"
            style={{ 
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--text-sm)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Drag objects around • Click cards to expand
          </motion.div>
        )}
      </AnimatePresence>

      <PannableCanvas ref={canvasRef}>
        <div 
          className="relative"
          style={{
            width: '100%',
            backgroundColor: 'transparent'
          }}
        >
          {/* All sections rendered on one canvas at different positions */}
          <div id="home-section">
            <Hero />
            <div style={{ marginTop: '50px' }}>
              <LogoMarquee />
            </div>
          </div>
          
          <div id="work-section" style={{ marginTop: '200px' }}>
            <WorkAndExperience />
          </div>

          <div style={{ marginTop: '150px' }}>
            <Recommendations />
          </div>

          <div id="contact-section" style={{ marginTop: '150px' }}>
            <Contact />
          </div>
        </div>
      </PannableCanvas>
    </>
  );
}