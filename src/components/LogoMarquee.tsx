import { motion } from 'motion/react';
import { useMemo, useCallback } from 'react';
import lovableLogoImg from 'figma:asset/c9df84357c4f340da7bc20fb71c80a4c8a415a3a.png';
import figmaLogoImg from 'figma:asset/c9af3e6ae8f399353c7f569f3cbeea8b190291d1.png';
import githubLogoImg from 'figma:asset/bd31bd313124c57773d327805ffd7b1695c72f64.png';
import claudeLogoImg from 'figma:asset/8406f4288f48daac0ab8f085e6689d1e8ca1335c.png';
import vercelLogoImg from 'figma:asset/5b4b31d8dbc63a53570d9919574709ba0bb6dde3.png';
import typescriptLogoImg from 'figma:asset/0eaf721770dc21e69a309873063c2812ef6ad786.png';
import openaiLogoImg from 'figma:asset/32a8516f036014f55259339e5d47acb363760f2e.png';
import supabaseLogoImg from 'figma:asset/87f62fa4f628f54ec2b3eb1584f4d9fc2b7f445c.png';
import reactLogoImg from 'figma:asset/a737a4dc5eb81650988ba0452a69e3931fc7c46f.png';
import tailwindLogoImg from 'figma:asset/73728c223f4d2fe3993cc7bb8e0c1890d4341b06.png';
import geminiLogoImg from 'figma:asset/ab375e9b7333e7e022d4d0839a57b9bbd055eeed.png';
import antigravityLogoImg from 'figma:asset/1ffd24aa9d05f13b8571977391d5bdfdc912b8b9.png';
import nodejsLogoImg from 'figma:asset/f5b644c409319a333bded7992deb180254a0bf04.png';
import mongodbLogoImg from 'figma:asset/7aa4af4a64dd7b369357137bc73e090d6d9f1a0e.png';
import awsLogoImg from 'figma:asset/f5747417dbb013269a2014bfe7e551e8a8f21dcb.png';
import asanaLogoImg from 'figma:asset/ef4e3ffa17f7511259966e63e31daf65ee52d937.png';
import ionicLogoImg from 'figma:asset/6cc86ca29ba8ff76775864133d29901e575dea7f.png';
import boltLogoImg from 'figma:asset/11f4a435d30bd62f718411cdc00869eedccace27.png';
import figmaMakeLogoImg from 'figma:asset/f3299df80ee44cebcad1545f7fe891a8049cebb4.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LogoMarquee() {
  // Company/technology logos - using text representations for now
  // You can replace these with actual logo images later
  const logos = useMemo(() => [
    { name: 'Figma', isImage: true, image: figmaLogoImg },
    { name: 'React', isImage: true, image: reactLogoImg },
    { name: 'TypeScript', isImage: true, image: typescriptLogoImg },
    { name: 'Tailwind', isImage: true, image: tailwindLogoImg },
    { name: 'Node.js', isImage: true, image: nodejsLogoImg },
    { name: 'MongoDB', isImage: true, image: mongodbLogoImg },
    { name: 'AWS', isImage: true, image: awsLogoImg },
    { name: 'GitHub', isImage: true, image: githubLogoImg },
    { name: 'Vercel', isImage: true, image: vercelLogoImg },
    { name: 'Supabase', isImage: true, image: supabaseLogoImg },
    { name: 'Claude', isImage: true, image: claudeLogoImg },
    { name: 'OpenAI', isImage: true, image: openaiLogoImg },
    { name: 'Gemini', isImage: true, image: geminiLogoImg },
    { name: 'Antigravity', isImage: true, image: antigravityLogoImg },
    { name: 'Lovable', isImage: true, image: lovableLogoImg },
    { name: 'Asana', isImage: true, image: asanaLogoImg },
    { name: 'Ionic', isImage: true, image: ionicLogoImg },
    { name: 'Bolt', isImage: true, image: boltLogoImg },
    { name: 'Make', isImage: true, image: figmaMakeLogoImg },
  ], []);

  // Duplicate logos for seamless loop
  const duplicatedLogos = useMemo(() => [...logos, ...logos, ...logos], [logos]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.filter = 'grayscale(0%)';
    e.currentTarget.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.filter = 'grayscale(100%)';
    e.currentTarget.style.opacity = '0.6';
  }, []);

  return (
    <section 
      className="relative py-12 overflow-hidden border-y border-border/30"
      style={{ 
        backgroundColor: 'white',
        transform: 'rotate(-3deg)',
        width: '110%',
        marginLeft: '-5%'
      }}
    >
      {/* Secondary title */}
      <div className="text-center mb-8">
        <h3 
          className="text-foreground font-body"
          style={{ fontSize: 'var(--text-xl)', paddingBottom: 'var(--spacing-6)' }}
        >
          Technologies & Tools I Work With
        </h3>
      </div>

      {/* Gradient overlays for fade effect */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, white, transparent)'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, white, transparent)'
        }}
      />

      {/* Marquee container */}
      <div className="flex items-center">
        <motion.div
          className="flex items-center"
          animate={{
            x: [0, -33.33 + '%'], // Move by one-third (one set of logos)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{
            display: 'flex',
            gap: '55px',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center group cursor-pointer"
              style={{
                minWidth: '140px',
                filter: 'grayscale(100%)',
                opacity: 0.6,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -5, 5, 0],
                y: -5
              }}
              transition={{
                rotate: { duration: 0.5 },
                scale: { type: 'spring', stiffness: 400 },
                y: { type: 'spring', stiffness: 300 }
              }}
            >
              {logo.isImage ? (
                logo.image ? (
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    style={{
                      width: logo.name === 'Claude' ? '110px' : 
                             logo.name === 'Tailwind' ? '96px' : 
                             logo.name === 'GitHub' ? '114px' :
                             logo.name === 'AWS' ? '114px' :
                             logo.name === 'Vercel' ? '84px' : 
                             logo.name === 'Make' ? '84px' :
                             logo.name === 'n8n' ? '96px' : '80px',
                      height: logo.name === 'Claude' ? '110px' : 
                              logo.name === 'Tailwind' ? '96px' : 
                              logo.name === 'GitHub' ? '114px' :
                              logo.name === 'AWS' ? '114px' :
                              logo.name === 'Vercel' ? '84px' : 
                              logo.name === 'Make' ? '84px' :
                              logo.name === 'n8n' ? '96px' : '80px',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <ImageWithFallback 
                    src={logo.imageUrl} 
                    alt={logo.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'contain'
                    }}
                  />
                )
              ) : (
                <span 
                  className="font-body"
                  style={{ 
                    fontSize: 'var(--text-lg)',
                    fontWeight: '600',
                    color: logo.color,
                    whiteSpace: 'nowrap',
                    transform: 'scale(1.625)'
                  }}
                >
                  {logo.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}