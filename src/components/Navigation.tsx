import { useState, useEffect, useCallback } from 'react';
import { Home, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeHovered, setHomeHovered] = useState(false);
  const [workHovered, setWorkHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [homeConfetti, setHomeConfetti] = useState<ConfettiParticle[]>([]);
  const [workConfetti, setWorkConfetti] = useState<ConfettiParticle[]>([]);
  const [contactConfetti, setContactConfetti] = useState<ConfettiParticle[]>([]);

  // Confetti colors from design system
  const confettiColors = [
    'var(--color-accent)',
    'var(--color-secondary)',
    'var(--color-chart-3)',
    'var(--color-chart-4)',
    'var(--color-chart-5)',
  ];

  const generateConfetti = useCallback(() => {
    const particles: ConfettiParticle[] = [];
    for (let i = 0; i < 8; i++) {
      particles.push({
        id: Math.random(),
        x: (Math.random() - 0.5) * 60,
        y: (Math.random() - 0.5) * 60,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    if (homeHovered) {
      setHomeConfetti(generateConfetti());
    } else {
      setHomeConfetti([]);
    }
  }, [homeHovered, generateConfetti]);

  useEffect(() => {
    if (workHovered) {
      setWorkConfetti(generateConfetti());
    } else {
      setWorkConfetti([]);
    }
  }, [workHovered, generateConfetti]);

  useEffect(() => {
    if (contactHovered) {
      setContactConfetti(generateConfetti());
    } else {
      setContactConfetti([]);
    }
  }, [contactHovered, generateConfetti]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleHomeClick = useCallback(() => {
    onTabChange('home');
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [onTabChange]);

  const handleWorkClick = useCallback(() => {
    onTabChange('work');
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [onTabChange]);

  const handleContactClick = useCallback(() => {
    onTabChange('contact');
    const readyToTalkHeader = document.getElementById('ready-to-talk');
    if (readyToTalkHeader) {
      readyToTalkHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [onTabChange]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div 
        className="fixed bottom-6 left-1/2 md:top-6 md:bottom-auto flex items-center gap-2 bg-card/90 backdrop-blur-lg px-4 py-3 border border-border/50"
        style={{ 
          borderRadius: '999px', 
          zIndex: 10000,
          position: 'fixed',
          transform: 'translateX(-50%)',
          willChange: 'transform',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Home Button */}
        <div style={{ position: 'relative' }}>
          <motion.button 
            onClick={handleHomeClick}
            className={`flex items-center gap-2 px-4 py-2 transition-all ${
              activeTab === 'home' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-foreground hover:bg-muted/50'
            }`}
            style={{ 
              borderRadius: '999px',
              fontSize: 'var(--text-sm)',
              position: 'relative',
              zIndex: 2,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div whileHover={{ y: [0, -3, 0] }} transition={{ duration: 0.3, repeat: Infinity }}>
              <Home className="w-5 h-5" />
            </motion.div>
            <AnimatePresence>
              {activeTab === 'home' && (
                <motion.span 
                  className="font-body"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Work Button */}
        <div style={{ position: 'relative' }}>
          <motion.button 
            onClick={handleWorkClick}
            className={`flex items-center gap-2 px-4 py-2 transition-all ${
              activeTab === 'work' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-transparent text-foreground hover:bg-muted/50'
            }`}
            style={{ 
              borderRadius: '999px',
              fontSize: 'var(--text-sm)',
              position: 'relative',
              zIndex: 2,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div whileHover={{ y: [0, -3, 0] }} transition={{ duration: 0.3, repeat: Infinity }}>
              <Briefcase className="w-5 h-5" />
            </motion.div>
            <AnimatePresence>
              {activeTab === 'work' && (
                <motion.span 
                  className="font-body"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Work
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Contact Button */}
        <div style={{ position: 'relative' }}>
          <motion.button 
            onClick={handleContactClick}
            className={`flex items-center gap-2 px-4 py-2 transition-all ${
              activeTab === 'contact' 
                ? 'bg-foreground text-background' 
                : 'bg-transparent hover:bg-muted/50'
            }`}
            style={{ 
              borderRadius: '999px',
              fontSize: 'var(--text-sm)',
              position: 'relative',
              zIndex: 2,
            }}
            title="Contact"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div whileHover={{ y: [0, -3, 0] }} transition={{ duration: 0.3, repeat: Infinity }}>
              <Mail className={`w-5 h-5 ${activeTab === 'contact' ? 'text-background' : 'text-foreground'}`} />
            </motion.div>
            <AnimatePresence>
              {activeTab === 'contact' && (
                <motion.span 
                  className="font-body"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}