import { Calendar, MapPin, Briefcase, Award, Star, Coffee, Building2, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  color: string;
  rotation: number;
  icon?: React.ReactNode;
}

function ExperienceCard({ company, role, period, location, highlights, color, rotation, icon }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.5 }}
      className="relative"
      style={{ zIndex: Math.abs(rotation) }}
    >
      {/* Washi tape decoration */}
      <div 
        className="absolute -top-3 left-1/4 w-24 h-6 bg-accent/40 backdrop-blur-sm"
        style={{ 
          transform: `rotate(${-3 + Math.random() * 6}deg)`,
          zIndex: 10,
          clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)'
        }}
      />

      <div
        className="bg-card border-2 border-border p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        style={{ 
          borderRadius: 'var(--radius-card)',
          backgroundColor: color,
          clipPath: 'polygon(1% 0%, 99% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 99%, 0% 1%)'
        }}
      >
        {/* Decorative corner fold */}
        <div 
          className="absolute top-0 right-0 w-12 h-12 bg-background/20"
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />

        {/* Icon sticker */}
        {icon && (
          <div 
            className="absolute -right-3 -top-3 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center"
            style={{ transform: 'rotate(12deg)' }}
          >
            {icon}
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-card-foreground mb-1 font-display" style={{ fontSize: 'var(--text-xl)' }}>
              {company}
            </h3>
            <p className="text-accent mb-2 font-body" style={{ fontSize: 'var(--text-base)' }}>
              {role}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/50 text-foreground font-body"
            style={{ borderRadius: '999px', fontSize: 'var(--text-xs)' }}
          >
            <Calendar className="w-3.5 h-3.5" />
            {period}
          </span>
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/50 text-foreground font-body"
            style={{ borderRadius: '999px', fontSize: 'var(--text-xs)' }}
          >
            <MapPin className="w-3.5 h-3.5" />
            {location}
          </span>
        </div>

        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li 
              key={i} 
              className="flex items-start gap-2 text-card-foreground/80 font-body"
              style={{ fontSize: 'var(--text-sm)' }}
            >
              <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Doodle decoration */}
        <div 
          className="absolute bottom-3 right-3 w-6 h-6 border-2 border-accent/20 transform rotate-45"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </div>

      {/* Post-it note style shadow */}
      <div 
        className="absolute inset-0 bg-black/5 -z-10"
        style={{ 
          transform: `translate(4px, 4px) rotate(${rotation}deg)`,
          borderRadius: 'var(--radius-card)'
        }}
      />
    </motion.div>
  );
}

export function Experience() {
  const experiences = [
    {
      role: 'Founder & Developer Advocate',
      company: 'ClarityUX™',
      period: '2022 – Present',
      location: 'Bengaluru / Remote',
      highlights: [
        'Scaled plugin to 2,662+ users, 300+ MAUs, 20+ paying accounts with 20% MoM growth',
        'Hosted 6+ developer workshops (MCP · Code Connect · Figma APIs) → 600-1200 attendees',
        'Built AI-powered tooling with React, TypeScript, Node.js, and Figma Plugin APIs',
        'Reduced design→dev cycles by 50-60% through workflow automation',
        'Created developer docs and onboarding guides enabling adoption at scale'
      ],
      featured: true
    },
    {
      role: 'Design Manager',
      company: 'Travelopia',
      period: 'Oct 2022 – Present',
      location: 'Remote',
      highlights: [
        'Led 8 designers across global travel brands',
        '$30M projected revenue uplift from funnel optimization',
        '82% faster delivery resolution via process automation'
      ],
      featured: false
    },
    {
      role: 'Design Manager / Senior Product Designer',
      company: 'Aspire',
      period: 'Jan 2022 – Jul 2023',
      location: 'Remote',
      highlights: [
        'Launched billing → 100+ signups in 90 days, $1.3M-$1.8M monthly NTV',
        '30% faster workflows, 40% error reduction on dev alignment',
        '95%+ OKR completion on core fintech experiences'
      ],
      featured: false
    },
    {
      role: 'Senior Product Designer',
      company: 'SignEasy',
      period: 'Jun 2019 – Dec 2019',
      location: 'Remote',
      highlights: [
        '"App of the Day" in 151 countries → 700% install growth',
        '119% onboarding completion lift, 171% activation improvement',
        '44% increase in paid conversions'
      ],
      featured: false
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 bg-background" style={{
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 relative">
          <div className="absolute -left-4 top-0 w-24 h-24 bg-accent opacity-20" style={{ borderRadius: '50%' }} />
          <div className="relative z-10">
            <div 
              className="inline-block px-4 py-1.5 bg-accent text-accent-foreground mb-6"
              style={{ borderRadius: '999px', fontSize: 'var(--text-sm)' }}
            >
              Experience & Projects
            </div>
            <h2 className="text-foreground font-display mb-4" style={{ fontSize: 'var(--text-3xl)' }}>
              Building products that scale
            </h2>
          </div>
        </div>

        {/* FEATURED EXPERIENCE - ClarityUX */}
        <div 
          className="border-4 border-accent bg-card p-10 mb-12"
          style={{ borderRadius: 'var(--radius-card)' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="mb-4 lg:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-accent" />
                <h3 className="text-foreground">{experiences[0].role}</h3>
              </div>
              <div className="text-foreground" style={{ fontSize: 'var(--text-xl)' }}>{experiences[0].company}</div>
            </div>
            <div className="text-foreground">
              <div>{experiences[0].period}</div>
              <div>{experiences[0].location}</div>
            </div>
          </div>

          <ul className="space-y-3">
            {experiences[0].highlights.map((highlight, idx) => (
              <li key={idx} className="flex gap-4 text-foreground">
                <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BENTO GRID - Projects & Experience Mixed */}
        <div className="grid grid-cols-12 gap-6 auto-rows-[200px] mb-12">
          {/* Large featured project - ClarityUX Plugin visual */}
          <motion.div
            className="col-span-12 md:col-span-8 md:row-span-3 bg-accent overflow-hidden relative group"
            style={{ borderRadius: 'var(--radius-card)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ2MjUxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ClarityUX Plugin"
                className="w-full h-full object-cover opacity-30"
              />
            </motion.div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div className="text-accent-foreground" style={{ fontSize: 'clamp(24px, 4vw, 48px)', lineHeight: '1.2', fontWeight: 'var(--font-weight-bold)' }}>
                ClarityUX™
              </div>
              <p className="text-accent-foreground/90 mt-4 mb-6 max-w-lg">
                AI-powered design validation plugin with 2,662+ users
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-accent-foreground/20 text-accent-foreground rounded-full">
                  Plugin API
                </span>
                <span className="px-3 py-1 bg-accent-foreground/20 text-accent-foreground rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-accent-foreground/20 text-accent-foreground rounded-full">
                  AI
                </span>
              </div>
              <a
                href="https://figma.com/community/plugin/clarityux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-foreground hover:underline"
              >
                View Plugin
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats block - MAU */}
          <div
            className="col-span-12 md:col-span-4 md:row-span-2 bg-primary text-primary-foreground p-8 flex flex-col justify-center"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div className="text-primary-foreground/70 mb-2">Monthly Active Users</div>
            <div className="text-primary-foreground" style={{ fontSize: 'clamp(48px, 8vw, 72px)', lineHeight: '1', fontWeight: 'var(--font-weight-bold)' }}>
              300+
            </div>
            <div className="text-primary-foreground/70 mt-4">Growing 20% MoM</div>
          </div>

          {/* Enterprise accounts */}
          <div
            className="col-span-12 md:col-span-4 md:row-span-1 bg-yellow text-primary p-6 flex items-center justify-center text-center"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                20+ Enterprise Accounts
              </div>
            </div>
          </div>

          {/* Workshop image */}
          <motion.div
            className="col-span-12 md:col-span-5 md:row-span-2 bg-card overflow-hidden relative group"
            style={{ borderRadius: 'var(--radius-card)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1733222765056-b0790217baa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc2hvcCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjQ2MjUxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer Workshops"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
              <div className="text-primary-foreground" style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-weight-bold)' }}>
                Developer Workshops
              </div>
              <p className="text-primary-foreground/90 mt-2">
                6+ workshops reaching 1200+ developers
              </p>
            </div>
          </motion.div>

          {/* MCP & Code Connect */}
          <div
            className="col-span-12 md:col-span-7 md:row-span-2 bg-card border-2 border-border p-8"
            style={{ borderRadius: 'var(--radius-card)' }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="text-foreground mb-4" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-bold)' }}>
                  MCP & Code Connect
                </div>
                <p className="text-foreground/90 mb-6">
                  Built integrations leveraging Figma's latest platform capabilities for seamless design-to-code workflows. 
                  Teaching developers how to implement these in production.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full">MCP Integration</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full">Code Connect</span>
                  <span className="px-3 py-1 bg-accent/10 text-foreground rounded-full">React</span>
                </div>
              </div>
              <motion.div 
                className="relative aspect-video rounded-lg overflow-hidden mt-6"
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY0NjAzMTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Code"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* OTHER EXPERIENCE - Compact cards */}
        <div className="space-y-6">
          {experiences.slice(1).map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              location={exp.location}
              highlights={exp.highlights}
              color={exp.featured ? 'var(--color-accent)' : 'var(--color-card)'}
              rotation={exp.featured ? 5 : 0}
              icon={exp.featured ? <Award className="w-5 h-5" /> : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}