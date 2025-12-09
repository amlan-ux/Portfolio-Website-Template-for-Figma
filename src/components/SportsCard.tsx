import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface SportsCardProps {
  onClose: () => void;
}

export function SportsCard({ onClose }: SportsCardProps) {
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
             My fitness spot in Luru❤️
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full overflow-hidden border-2 border-border" style={{ borderRadius: 'var(--radius-md)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.649892!2d77.6387251!3d12.9275801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146301288cf1%3A0x67e9aaaa2ba85054!2sSocial%20Grid%20Turfpark%20Koramangala%20(Earlier%20Coolulu%20Turfpark)!5e0!3m2!1sen!2sin!4v1733402000000!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e&style=feature:all|element:labels.text.stroke|color:0x242f3e&style=feature:all|element:labels.text.fill|color:0x746855&style=feature:administrative.locality|element:labels.text.fill|color:0xd59563&style=feature:poi|element:labels.text.fill|color:0xd59563&style=feature:poi.park|element:geometry|color:0x263c3f&style=feature:poi.park|element:labels.text.fill|color:0x6b9a76&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:geometry.stroke|color:0x212a37&style=feature:road|element:labels.text.fill|color:0x9ca5b3&style=feature:road.highway|element:geometry|color:0x746855&style=feature:road.highway|element:geometry.stroke|color:0x1f2835&style=feature:road.highway|element:labels.text.fill|color:0xf3d19c&style=feature:transit|element:geometry|color:0x2f3948&style=feature:transit.station|element:labels.text.fill|color:0xd59563&style=feature:water|element:geometry|color:0x17263c&style=feature:water|element:labels.text.fill|color:0x515c6d&style=feature:water|element:labels.text.stroke|color:0x17263c"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sports Location"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}