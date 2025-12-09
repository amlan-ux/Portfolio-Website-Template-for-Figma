import { Mail, Linkedin, ExternalLink, MapPin, ArrowRight, Heart, Zap, Star, Github, Twitter, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section className="py-4 px-6 relative overflow-hidden" style={{
      backgroundColor: 'transparent',
      paddingTop: '3rem'
    }}>
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Scattered decorative stickers */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -12 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-8 right-12 w-20 h-20 bg-secondary rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-secondary-foreground" fill="currentColor" />
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 8 }}
          transition={{ delay: 0.3 }}
          className="absolute top-1/4 -left-6 bg-primary text-primary-foreground px-6 py-3 shadow-lg font-handwritten"
          style={{ borderRadius: 'var(--radius-lg)', fontSize: 'var(--text-base)' }}
          whileHover={{ scale: 1.1, rotate: 0, y: -3 }}
        >
          Let's chat! ✨
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-20 right-24 w-16 h-16 bg-secondary rounded-full shadow-lg flex items-center justify-center"
          style={{ transform: 'rotate(20deg)' }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <motion.div
            whileHover={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="w-8 h-8 text-secondary-foreground" fill="currentColor" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Tape decoration */}
            <div 
              className="absolute -top-6 left-1/4 w-32 h-10 bg-secondary/30 backdrop-blur-sm"
              style={{ 
                transform: 'rotate(-8deg)',
                zIndex: 10,
                clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'
              }}
            />

            <div 
              className="relative p-12 shadow-2xl border-4"
              style={{ 
                backgroundColor: '#FDE047',
                color: 'var(--color-foreground)',
                borderColor: '#000000',
                borderRadius: 'var(--radius-card)',
                clipPath: 'polygon(0% 3%, 3% 0%, 97% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 97%)'
              }}
            >
              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-foreground-alpha-20)' }} />
              <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-foreground-alpha-20)' }} />

              <h2 className="mb-6 font-display" style={{ fontSize: 'var(--text-3xl)', lineHeight: '120%', color: 'var(--color-foreground)' }}>
                Let's build together
              </h2>
              <p className="mb-8 font-body" style={{ fontSize: 'var(--text-base)', color: 'var(--color-foreground)', opacity: 0.8 }}>
                With hands-on experience building on the Figma platform, running developer workshops, and creating tools like ClarityUX for better collaboration, I'm confident I can help empower developers across APAC. I'd love to explore how we can grow this ecosystem together.
              </p>
              
              <motion.div 
                className="relative aspect-video overflow-hidden border-4" 
                style={{ borderRadius: 'var(--radius-lg)', borderColor: 'var(--color-foreground-alpha-20)' }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY0NjAzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
                {/* Polaroid label */}
              </motion.div>
            </div>

            {/* Paper clip decoration */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-card border-2 border-border shadow-lg flex items-center justify-center" style={{ borderRadius: 'var(--radius-lg)', transform: 'rotate(-15deg)' }}>
              <Star className="w-8 h-8 text-secondary" fill="currentColor" />
            </div>
          </motion.div>

          {/* Right - Contact Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div 
                className="inline-block px-4 py-1.5 mb-4 shadow-md"
                style={{ 
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  borderRadius: '999px', 
                  fontSize: 'var(--text-sm)',
                  transform: 'rotate(1deg)'
                }}
              >
                Get in Touch
              </div>
            </motion.div>

            {/* Contact Cards */}
            {[
              { 
                icon: Mail, 
                label: 'Email', 
                value: 'amlan.mukerjee@example.com', 
                href: 'mailto:amlan.mukerjee@example.com',
                color: 'var(--color-chart-1)',
                rotation: -1,
                delay: 0.4
              },
              { 
                icon: Linkedin, 
                label: 'LinkedIn', 
                value: 'amlan-mukerjee', 
                href: 'https://linkedin.com/in/amlan-mukerjee',
                color: 'var(--color-chart-2)',
                rotation: -2,
                delay: 0.5
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: contact.rotation }}
                transition={{ delay: contact.delay }}
                whileHover={{ scale: 1.03, rotate: 0, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-card border-2 border-border hover:border-secondary p-6 transition-all group shadow-lg hover:shadow-xl relative"
                style={{ 
                  borderRadius: 'var(--radius-card)',
                  clipPath: 'polygon(1% 0%, 99% 0%, 100% 1%, 100% 99%, 98% 100%, 2% 100%, 0% 99%, 0% 2%)'
                }}
              >
                {/* Torn edge effect */}
                <div className="absolute top-0 left-12 w-16 h-2 bg-background/50" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
                
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md"
                    style={{ 
                      backgroundColor: contact.color,
                      borderRadius: 'var(--radius-lg)'
                    }}
                  >
                    <contact.icon className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-foreground/80 mb-1 font-body" style={{ fontSize: 'var(--text-sm)' }}>{contact.label}</div>
                    <div className="text-foreground font-body" style={{ fontSize: 'var(--text-base)' }}>{contact.value}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/60 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>

                {/* Decorative dot */}
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-secondary/30 rounded-full" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-background border-2 border-border p-6 shadow-lg"
              style={{ 
                borderRadius: 'var(--radius-card)',
                clipPath: 'polygon(0% 2%, 2% 0%, 98% 0%, 100% 2%, 100% 98%, 99% 100%, 1% 100%, 0% 98%)'
              }}
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 bg-muted flex items-center justify-center"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <MapPin className="w-7 h-7 text-foreground" />
                </div>
                <div>
                  <div className="text-foreground/80 mb-1 font-body" style={{ fontSize: 'var(--text-sm)' }}>Location</div>
                  <div className="text-foreground font-body" style={{ fontSize: 'var(--text-base)' }}>Bengaluru, India · APAC, EMEA & USA Travel-Ready</div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <div className="pt-4 space-y-4">
              {[
                { emoji: '🔌', label: 'View ClarityUX Plugin', href: 'https://figma.com/community/plugin/clarityux', color: '#000000', rotation: -2 }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: link.rotation }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.03, rotate: 0, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-6 hover:opacity-90 transition-opacity group shadow-lg relative"
                  style={{ 
                    backgroundColor: link.color,
                    borderRadius: 'var(--radius-card)',
                    clipPath: 'polygon(2% 0%, 98% 0%, 100% 3%, 100% 97%, 99% 100%, 1% 100%, 0% 98%, 0% 2%)'
                  }}
                >
                  <span className="flex items-center gap-3" style={{ color: '#ffffff' }}>
                    <span style={{ fontSize: '32px' }}>{link.emoji}</span>
                    <span className="font-body" style={{ fontSize: 'var(--text-base)' }}>{link.label}</span>
                  </span>
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ color: '#ffffff' }} />
                  
                  {/* Sticker highlight */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full shadow-md" style={{ transform: 'rotate(25deg)' }} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER - Social Links */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 pt-6 border-t-2 border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social Links */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-foreground/70 font-body" style={{ fontSize: 'var(--text-sm)' }}>
                Connect with me:
              </span>
              {[
                { icon: Linkedin, href: 'https://linkedin.com/in/amlan-mukerjee', label: 'LinkedIn', color: 'var(--color-linkedin)', iconColor: 'var(--color-primary)' },
                { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub', color: 'var(--color-secondary)', iconColor: 'var(--color-secondary-foreground)' },
                { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter', color: 'var(--color-chart-2)', iconColor: 'var(--color-secondary-foreground)' },
                { icon: Globe, href: 'https://clarityux.ai', label: 'Website', color: 'var(--color-chart-4)', iconColor: 'var(--color-secondary-foreground)' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: Math.random() * 10 - 5 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 0, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all relative group"
                  style={{ 
                    backgroundColor: social.color,
                    borderRadius: 'var(--radius-md)',
                    clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)'
                  }}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.iconColor }} />
                  
                  {/* Tooltip on hover */}
                  <span 
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-body"
                    style={{ 
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-xs)'
                    }}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Copyright / Credits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center md:text-right"
            >
              <p className="text-foreground/60 font-body" style={{ fontSize: 'var(--text-sm)' }}>
                © 2024 Amlan Mukerjee · Built with ❤️ and Figma APIs
              </p>
              <p className="text-foreground/40 font-handwritten mt-1" style={{ fontSize: 'var(--text-xs)' }}>
                Made for Developer Advocate @ Figma APAC
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}