import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Geometric decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent opacity-5 rounded-full" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow opacity-10" style={{ borderRadius: 'var(--radius-card)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* BENTO GRID Layout */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
          {/* Large text block - 5 columns, 2 rows */}
          <div className="col-span-12 md:col-span-5 md:row-span-2 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 bg-primary text-primary-foreground rounded-full mb-6 w-fit">
              About
            </div>
            <h2 className="text-foreground" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: '1.1', fontWeight: 'var(--font-weight-bold)' }}>
              Building at the
              <span className="text-accent"> intersection</span>
            </h2>
            <p className="text-foreground/90">
              For three years, I've been deep in the Figma ecosystem—building ClarityUX, hosting 
              developer workshops, and enabling teams to ship 50-60% faster.
            </p>
          </div>

          {/* Image - 7 columns, 3 rows */}
          <motion.div
            className="col-span-12 md:col-span-7 md:row-span-3 overflow-hidden relative"
            style={{ borderRadius: 'var(--radius-card)' }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NDU5NjI1NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Developer collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Accent block - 5 columns, 1 row */}
          <div
            className="col-span-12 md:col-span-5 md:row-span-1 bg-accent text-accent-foreground p-6 flex items-center"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                Technical Depth
              </div>
              <div className="text-accent-foreground/80 mt-2">
                React, TypeScript, Plugin APIs, MCP, Code Connect
              </div>
            </div>
          </div>

          {/* Text content - 7 columns, 2 rows */}
          <div className="col-span-12 md:col-span-7 md:row-span-2 bg-card border-2 border-border p-8 flex flex-col justify-center" style={{ borderRadius: 'var(--radius-card)' }}>
            <p className="text-foreground/90 mb-6">
              As a Developer Advocate, I don't just talk about APIs—I build with them. I've scaled 
              a plugin to 2,662+ users, trained 1,200+ developers, and worked with enterprise teams 
              driving $30M in revenue impact.
            </p>
            <p className="text-foreground/90">
              This hands-on experience shapes how I educate, support, and advocate for the community. 
              I believe the future of design is collaborative, and developers are key to making that vision real.
            </p>
          </div>

          {/* Stats block - 5 columns, 2 rows */}
          <div
            className="col-span-12 md:col-span-5 md:row-span-2 bg-yellow text-primary p-8 flex flex-col justify-center"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div className="text-primary/60 mb-2">Based in</div>
            <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)' }}>
              Bengaluru
            </div>
            <div className="text-primary/80 mt-4">
              25%+ travel ready across APAC region
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}