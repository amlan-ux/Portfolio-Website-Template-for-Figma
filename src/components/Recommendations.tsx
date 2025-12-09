import { Quote, Star, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const recommendations = [
    {
      name: "Venkat ChandraGowri",
      title: "Products & Delivery Management",
      date: "November 3, 2025",
      relationship: "was senior to Amlan but didn't manage directly",
      quote: "I've had the privilege of working with Amlan for the past four years, and he consistently sets an exceptionally high bar. Amlan successfully built and led a team of 8 designers, establishing clear standards of excellence. His leadership was instrumental in major website transformation projects, including the complete redesign of Quark Expeditions. What truly distinguishes Amlan is his forward-thinking embrace of AI. Rather than viewing it as a threat, he championed an AI-first mindset and pioneered new workflows for the design team. This innovation has dramatically accelerated our delivery.",
      color: 'var(--color-background)',
      rotation: -2
    },
    {
      name: "Damien Passavent",
      title: "CPO @Aspire",
      date: "April 6, 2023",
      relationship: "was senior to Amlan but didn't manage directly",
      quote: "As the Head of Product at Aspire, I had the opportunity to mentor Amlan, who was leading the design team of one of our Product groups. Even in a fiercely competitive industry like Fintech, Amlan managed to create a work environment where everyone felt appreciated and their voices heard. Working under his guidance and leadership would be an incredibly valuable experience for any team.",
      color: 'var(--color-background)',
      rotation: 2
    },
    {
      name: "Hammad Jilani",
      title: "Product Design Leadership | Tech | Startups",
      date: "March 26, 2023",
      relationship: "managed Amlan directly",
      quote: "I have had the pleasure of working closely with Amlan as one of the lead designers in my team. Amlan consistently delivers high-quality work that exceeds expectations, and he has an incredible ability to turn complex ideas into intuitive designs. But his most appealing quality is his speed of execution. With Amlan, you can expect abstract ideas to transform into testable designs within few days instead of weeks.",
      color: 'var(--color-background)',
      rotation: -1.5
    },
    {
      name: "Katrine Kvanvik Eriksen",
      title: "Senior Product Manager at Decisions | AI Meeting Management",
      date: "August 16, 2022",
      relationship: "worked with Amlan on the same team",
      quote: "Amlan worked with Decisions on various design tasks over a couple of months. He helped us produce production-ready designs and got us on an interesting path for one of our main dashboards. Amlan has good design skills and communicated his ideas well with the team.",
      color: 'var(--color-background)',
      rotation: 1.5
    },
    {
      name: "Skanda Bhat",
      title: "Distributed Systems Engineer",
      date: "",
      relationship: "",
      quote: "Amlan is the master of design and product management. I worked with Amlan on ZapSign and Express Invoice, which we launched on the iOS app store to great success. His experience and knowledge in this field still amazes me. He blends it with a deep understanding of business and market, and communicates with other teams clearly. He takes the time to understand technical challenges, and manoeuvres his vision for the product accordingly.",
      color: 'var(--color-background)',
      rotation: -1
    },
    {
      name: "Ajit Paul",
      title: "Business Transformation Advisor, Co-Founder of WEF Tech Pioneer - Giftolexia Solutions",
      date: "September 1, 2014",
      relationship: "was Amlan's client",
      quote: "Amlan has delivered excellent UX design and prototype work - professional, involved, creative and timely!! Keep it up!",
      color: 'var(--color-background)',
      rotation: 2.5
    }
  ];

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [recommendations.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible slides based on current index
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(recommendations[(currentIndex + i) % recommendations.length]);
    }
    return slides;
  };

  return (
    <section className="px-6 relative overflow-visible" style={{ backgroundColor: 'transparent', paddingBottom: 'var(--spacing-16)', paddingTop: '36px', marginTop: 'calc(-150px + 1rem)' }}>
      <div className="max-w-7xl mx-auto relative overflow-visible">
        {/* Decorative floating stickers */}
        <motion.div 
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -15 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-6 right-12 w-20 h-20 bg-secondary shadow-lg flex items-center justify-center z-10"
          style={{ borderRadius: '50%' }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <Star className="w-10 h-10 text-secondary-foreground" fill="currentColor" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-1/3 -left-8 w-16 h-16 bg-primary shadow-lg flex items-center justify-center z-10"
          style={{ borderRadius: '50%', transform: 'rotate(25deg)' }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <Heart className="w-8 h-8 text-primary-foreground" fill="currentColor" />
        </motion.div>

        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-foreground font-display" style={{ fontSize: 'var(--text-4xl)', lineHeight: '1.2', textAlign: 'center' }}>
            Kind words from colleagues
          </h1>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-10 h-10 items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
            style={{ borderRadius: '50%' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-10 h-10 items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
            style={{ borderRadius: '50%' }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Slides */}
          <div className="overflow-visible">
            <div 
              className="grid gap-6"
              style={{ 
                gridTemplateColumns: `repeat(${slidesToShow}, 1fr)`
              }}
            >
              <AnimatePresence mode="popLayout">
                {getVisibleSlides().map((rec, index) => (
                  <motion.a
                    key={`${currentIndex}-${index}`}
                    href="https://www.linkedin.com/in/amlanmukerjee/details/recommendations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, rotate: rec.rotation }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03, rotate: 0, y: -8, zIndex: 10 }}
                    className="relative p-6 shadow-xl border-2 h-[500px] flex flex-col cursor-pointer"
                    style={{ 
                      backgroundColor: rec.color,
                      borderColor: rec.color === 'var(--color-background)' ? 'var(--color-border)' : 'transparent',
                      borderRadius: 'var(--radius-card)',
                      clipPath: 'polygon(1% 0%, 99% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 99%, 0% 1%)',
                      textDecoration: 'none'
                    }}
                  >
                    {/* Tape decoration */}
                    <div 
                      className="absolute -top-3 left-1/4 w-20 h-6 bg-secondary/20 backdrop-blur-sm"
                      style={{ 
                        transform: `rotate(${-rec.rotation * 2}deg)`,
                        clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'
                      }}
                    />

                    {/* Quote icon */}
                    <Quote 
                      className="w-8 h-8 mb-4 opacity-30" 
                      style={{ color: rec.color === 'var(--color-background)' ? 'var(--color-foreground)' : 'var(--color-secondary-foreground)' }}
                    />

                    {/* Quote text */}
                    <p 
                      className="mb-6 font-body leading-relaxed flex-1 overflow-y-auto" 
                      style={{ 
                        fontSize: 'var(--text-sm)',
                        color: rec.color === 'var(--color-background)' ? 'var(--color-foreground)' : 'var(--color-secondary-foreground)',
                        lineHeight: '1.6'
                      }}
                    >
                      "{rec.quote}"
                    </p>

                    {/* Author info */}
                    <div 
                      className="pt-4 border-t-2 mt-auto"
                      style={{ 
                        borderColor: rec.color === 'var(--color-background)' ? 'var(--color-border)' : 'rgba(0,0,0,0.1)'
                      }}
                    >
                      <div 
                        className="font-display mb-1" 
                        style={{ 
                          fontSize: 'var(--text-base)',
                          color: rec.color === 'var(--color-background)' ? 'var(--color-foreground)' : 'var(--color-secondary-foreground)'
                        }}
                      >
                        {rec.name}
                      </div>
                      <div 
                        className="font-body opacity-80 mb-1" 
                        style={{ 
                          fontSize: 'var(--text-sm)',
                          color: rec.color === 'var(--color-background)' ? 'var(--color-foreground)' : 'var(--color-secondary-foreground)'
                        }}
                      >
                        {rec.title}
                      </div>
                      {rec.relationship && (
                        <div 
                          className="font-handwritten mt-2" 
                          style={{ 
                            fontSize: 'var(--text-xs)',
                            color: rec.color === 'var(--color-background)' ? 'var(--color-foreground)' : 'var(--color-secondary-foreground)',
                            opacity: 0.7
                          }}
                        >
                          {rec.relationship}
                        </div>
                      )}
                    </div>

                    {/* Corner decoration */}
                    <div 
                      className="absolute bottom-2 right-2 w-2 h-2 rounded-full" 
                      style={{ 
                        backgroundColor: rec.color === 'var(--color-background)' ? 'var(--color-foreground-alpha-20)' : 'rgba(0,0,0,0.15)'
                      }} 
                    />
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 transition-all"
                style={{ 
                  backgroundColor: currentIndex === index ? 'var(--color-primary)' : 'transparent',
                  border: '2px solid var(--color-border)',
                  transform: currentIndex === index ? 'scale(1.2)' : 'scale(1)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}