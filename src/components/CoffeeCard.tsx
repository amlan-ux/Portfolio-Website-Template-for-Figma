import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface CoffeeCardProps {
  onClose: () => void;
}

export function CoffeeCard({ onClose }: CoffeeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 2 }}
      exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ pointerEvents: 'auto' }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      {/* Card */}
      <motion.div
        className="relative bg-card border-2 border-border shadow-lg overflow-hidden max-w-lg w-full"
        style={{
          borderRadius: 'var(--radius-card)',
          filter: 'var(--drop-shadow-xl)',
        }}
        onClick={(e) => e.stopPropagation()}
        whileHover={{ rotate: 0 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title with Edu font */}
          <div className="text-center">
            <p 
              className="font-cursive text-foreground"
              style={{ fontSize: 'var(--text-xl)' }}
            >
             My coffee joint in Luru❤️
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full overflow-hidden border-2 border-border" style={{ borderRadius: 'var(--radius-md)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.782334886661!2d77.6394099!3d12.9719919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1773c2fc74ad%3A0x562e2b8ebeb04c9a!2sAinmane%20Cafe%20and%20Speciality%20Store!5e0!3m2!1sen!2sin!4v1733315200000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Shop Location"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}