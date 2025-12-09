import { Mic, BookOpen, Users, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function CommunityImpact() {
  const stats = [
    { number: '1,200+', label: 'Developers Reached' },
    { number: '6+', label: 'Workshops Hosted' },
    { number: '2,662+', label: 'Community Members' },
    { number: '20+', label: 'Enterprise Partners' }
  ];

  const activities = [
    {
      icon: Mic,
      title: 'Speaking & Workshops',
      description: 'Hosted technical workshops on MCP, Code Connect, and Figma API integration. Judged 50+ AI prototypes at Outskill.'
    },
    {
      icon: BookOpen,
      title: 'Documentation & Resources',
      description: 'Created comprehensive developer docs, onboarding guides, and example code for ClarityUX and Figma platform.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Grew plugin community to 2,662+ users through education, support, and partnerships with 20+ enterprise accounts.'
    },
    {
      icon: Globe,
      title: 'APAC Enablement',
      description: 'Trained 1,000+ designers and developers across India and APAC. Ready for 25%+ travel across the region.'
    }
  ];

  return (
    <section id="community" className="py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full mb-6">
            Community Impact
          </div>
          <h2 className="text-foreground mb-4">
            Enabling developers{' '}
            <span className="text-accent">at scale</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-accent mb-2" style={{ fontSize: 'var(--text-2xl)' }}>{stat.number}</div>
              <div className="text-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Image + Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary transform -rotate-2" style={{ borderRadius: 'var(--radius-card)' }} />
            <motion.div 
              className="relative overflow-hidden aspect-[4/3]" 
              style={{ borderRadius: 'var(--radius-card)' }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHNwZWFrZXJ8ZW58MXx8fHwxNzY0NTkxNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Speaking at conference"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div 
                  key={activity.title} 
                  className="bg-background p-6 border-2 border-border hover:border-accent transition-colors"
                  style={{ borderRadius: 'var(--radius-card)' }}
                >
                  <div 
                    className="w-12 h-12 bg-accent flex items-center justify-center mb-4"
                    style={{ borderRadius: 'var(--radius-lg)' }}
                  >
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-foreground mb-2">{activity.title}</h4>
                  <p className="text-foreground/90">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Philosophy */}
        <div 
          className="bg-accent p-12 lg:p-16 text-accent-foreground"
          style={{ borderRadius: 'var(--radius-card)' }}
        >
          <h3 className="text-accent-foreground mb-6">My Advocacy Philosophy</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <p>
              Great developer advocacy starts with empathy. I've been the developer struggling with 
              unclear documentation, the designer trying to understand technical constraints, and the 
              founder scaling a product.
            </p>
            <p>
              I believe in teaching through doing—writing the code I share, testing the APIs I document, 
              and building the tools I advocate for. That authenticity creates trust and helps developers 
              succeed faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}