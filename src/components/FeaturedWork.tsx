import { ArrowRight, ExternalLink, TrendingUp, Users, Zap, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Paperclip, Triangle } from 'lucide-react';

export function FeaturedWork() {
  const projects = [
    {
      id: 'clarityux',
      title: 'ClarityUX Plugin',
      role: 'Founder & Developer',
      description: 'Figma plugin with 2.6K+ users for design system documentation',
      tags: ['Figma API', 'TypeScript', 'React'],
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      color: 'var(--color-accent)',
      rotation: -3
    },
    {
      id: 'workshops',
      title: 'Developer Workshops',
      role: 'Technical Educator',
      description: 'Led 15+ workshops teaching Figma plugin development across APAC',
      tags: ['Education', 'Community', 'Public Speaking'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      color: 'var(--color-primary)',
      rotation: 2
    },
    {
      id: 'enterprise',
      title: 'Enterprise Design Systems',
      role: 'Design Tech Lead',
      description: 'Scaled design operations for Fortune 500 companies',
      tags: ['Enterprise', 'Design Systems', 'Leadership'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      color: 'var(--color-card)',
      rotation: -2
    },
    {
      id: 'advocacy',
      title: 'Developer Advocacy',
      role: 'Community Builder',
      description: 'Created technical content reaching 50K+ developers',
      tags: ['Content', 'DevRel', 'Community'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      color: 'var(--color-secondary)',
      rotation: 3
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-background relative overflow-hidden" style={{
      backgroundColor: 'var(--color-secondary)',
      backgroundImage: `
        radial-gradient(circle at center, 
          transparent 0%, 
          transparent 3px, 
          rgba(0, 0, 0, 0.15) 3px, 
          rgba(0, 0, 0, 0.25) 4px, 
          rgba(0, 0, 0, 0.08) 5px,
          transparent 6px
        ),
        radial-gradient(circle at center, 
          rgba(255, 255, 255, 0.1) 0%, 
          rgba(255, 255, 255, 0.05) 3px,
          transparent 4px
        ),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.03), transparent 2px)
      `,
      backgroundSize: '40px 40px, 40px 40px, 100% 100%',
      backgroundPosition: '0 0, 1px 1px, 0 0',
      boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="max-w-7xl mx-auto relative">
        {/* Title Sticker */}
        <div 
          className="inline-block bg-accent text-accent-foreground px-8 py-4 mb-16 shadow-lg relative"
          style={{ 
            transform: 'rotate(-2deg)',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--text-3xl)'
          }}
        >
          <div className="absolute -top-3 left-8 w-12 h-6 bg-white/20" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }} />
          <span className="font-display">Featured Work</span>
          <div className="absolute top-2 right-2 w-2 h-2 bg-accent-foreground/30 rounded-full" />
        </div>

        {/* Scattered Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: project.rotation }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative"
              style={{ zIndex: projects.length - index }}
            >
              {/* Tape accent */}
              <div 
                className="absolute -top-4 left-12 w-20 h-8 bg-accent/30 backdrop-blur-sm"
                style={{ 
                  transform: `rotate(${-5 + Math.random() * 10}deg)`,
                  zIndex: 10,
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'
                }}
              />
              
              {/* Card */}
              <div
                className="bg-card border-2 border-border shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
                style={{ 
                  borderRadius: 'var(--radius-card)',
                  backgroundColor: project.color,
                  clipPath: 'polygon(0% 2%, 2% 0%, 98% 0%, 100% 3%, 100% 97%, 99% 100%, 2% 100%, 0% 98%)'
                }}
              >
                {/* Image */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Polaroid-style label */}
                  <div 
                    className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 shadow-md font-handwritten"
                    style={{ 
                      transform: 'rotate(-2deg)',
                      fontSize: 'var(--text-sm)',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    {project.role}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <h3 className="text-card-foreground mb-2 font-display" style={{ fontSize: 'var(--text-xl)' }}>
                    {project.title}
                  </h3>
                  <p className="text-card-foreground/70 mb-4 font-body" style={{ fontSize: 'var(--text-sm)' }}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground font-body"
                        style={{ 
                          borderRadius: '999px',
                          fontSize: 'var(--text-xs)',
                          transform: `rotate(${-2 + Math.random() * 4}deg)`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Doodle accent */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-accent/30 rounded-full" style={{ transform: 'rotate(15deg)' }} />
                </div>
              </div>

              {/* Paper clip decoration */}
              {index % 2 === 0 && (
                <Paperclip 
                  className="absolute -top-2 -right-2 text-foreground/30 transform rotate-45" 
                  style={{ width: '32px', height: '32px' }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Scattered Decorative Elements */}
        <div 
          className="absolute top-20 right-12 bg-primary text-primary-foreground px-4 py-2 shadow-lg font-handwritten"
          style={{ 
            transform: 'rotate(8deg)',
            borderRadius: 'var(--radius-md)',
            fontSize: 'var(--text-sm)',
            zIndex: 1
          }}
        >
          2.6K+ users! 🎉
        </div>

        <div 
          className="absolute bottom-32 left-12 w-16 h-16 bg-accent rounded-full shadow-lg flex items-center justify-center"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <Triangle className="w-8 h-8 text-accent-foreground" />
        </div>

        <div 
          className="absolute top-1/2 -right-8 bg-card border-2 border-border px-6 py-3 shadow-lg font-display"
          style={{ 
            transform: 'rotate(90deg)',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--text-base)'
          }}
        >
          → Scroll for more
        </div>
      </div>
    </section>
  );
}