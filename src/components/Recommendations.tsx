import { motion, AnimatePresence } from "motion/react";
import {
  Linkedin,
  Star,
  Heart,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aspireLogo from "figma:asset/87bce737b7999eced935e5ee4dcc232ce1069b89.png";

export function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const recommendations = [
    {
      name: "Damien Passavent",
      title: "CPO at Aspire, SG",
      country: "🇸🇬",
      date: "April 6, 2023",
      relationship:
        "was senior to Amlan but didn't manage directly",
      quote:
        "As the Head of Product at Aspire, I had the opportunity to mentor Amlan, who was leading the design team of one of our Product groups. Even in a fiercely competitive industry like Fintech, Amlan managed to create a work environment where everyone felt appreciated and their voices heard. Working under his guidance and leadership would be an incredibly valuable experience for any team.",
      color: "white",
      rotation: 2,
      photo:
        "https://images.unsplash.com/photo-1618591552964-837a5a315fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbGV8ZW58MXx8fHwxNzY1MjQ4MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo: aspireLogo,
    },
    {
      name: "Devika Ray",
      title: "Brand Tech Partner, Enchanting Travels, DE",
      country: "🇩🇪",
      date: "December 10, 2024",
      relationship: "worked with Amlan on the same team",
      quote:
        "I had the pleasure of working with Amlan for many years, during which he consistently elevated our design practice by bringing best-in-class methodologies, structure, and rigor to our team. He led the end-to-end design of Artemis, our most widely used and highly complex trip-planning application, which spans multiple modules including trip planning, booking, reservations, payments and finance, and supplier management. Amlan not only delivered exceptional product design for this system but later oversaw and mentored the designers who continued to build and refine it. He also played a key role in our early experimentation with AI-generated videos, approaching all new challenges with creativity, innovation, and a collaborative spirit. Amlan is thoughtful, solutions-oriented, unafraid to voice concerns, and fully committed once decisions are made—an absolute asset to any team.",
      color: "white",
      rotation: -2.2,
      photo:
        "https://images.unsplash.com/photo-1616444493079-c71a6f0062b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXNpZ25lciUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTMwNDIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1688678995154-454f3be41309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBicmFuZHxlbnwxfHx8fDE3NjUzMDQyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Katrine Kvanvik Eriksen",
      title: "Senior Product Manager at Decisions, NO",
      country: "🇳🇴",
      date: "August 16, 2022",
      relationship: "worked with Amlan on the same team",
      quote:
        "Amlan worked with Decisions on various design tasks over a couple of months. He helped us produce production-ready designs and got us on an interesting path for one of our main dashboards. Amlan has good design skills and communicated his ideas well with the team.",
      color: "white",
      rotation: 1.5,
      photo:
        "https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1Mjg5NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1595409583957-5d1ec5869de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNpc2lvbnMlMjBhaSUyMGxvZ298ZW58MXx8fHwxNzY1MzAzNDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Venkat Chandra Gowri",
      title: "Products & Delivery Management",
      country: "🇮🇳",
      date: "November 3, 2025",
      relationship:
        "was senior to Amlan but didn't manage directly",
      quote:
        "I've had the privilege of working with Amlan for the past four years, and he consistently sets an exceptionally high bar. Amlan successfully built and led a team of 8 designers, establishing clear standards of excellence. His leadership was instrumental in major website transformation projects, including the complete redesign of Quark Expeditions. What truly distinguishes Amlan is his forward-thinking embrace of AI. Rather than viewing it as a threat, he championed an AI-first mindset and pioneered new workflows for the design team. This innovation has dramatically accelerated our delivery.",
      color: "white",
      rotation: -2,
      photo:
        "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTI3OTY4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1661347998423-b15d37d6f61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGJyYW5kfGVufDF8fHx8MTc2NTI2NjU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Rahul Jha",
      title: "Product Designer at Travelopia, IN",
      country: "🇮🇳",
      date: "November 4, 2025",
      relationship: "reported directly to Amlan",
      quote:
        "Working with Amlan at Travelopia has been one of the best parts of my design journey. From day one, he trusted me, guided me, and pushed me to think beyond what I thought I was capable of. Amlan is spontaneous, brutally honest in the best way, and has this rare ability to 'say it like it is' … something that makes him such a strong and dependable leader. Every feedback session with him left me with something to learn (and usually a good laugh too). He's not just a great manager but a true mentor who's helped me grow both as a designer and as a person. Super grateful for all the support, guidance, and those honest one-liners that kept me grounded.",
      color: "white",
      rotation: 1.8,
      photo:
        "https://images.unsplash.com/photo-1581977325979-80749e97b0c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRlc2lnbmVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MzA0MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1688678995154-454f3be41309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBicmFuZHxlbnwxfHx8fDE3NjUzMDQyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Skanda Bhat",
      title: "Distributed Systems Engineer, DE",
      country: "🇩🇪",
      date: "",
      relationship: "",
      quote:
        "Amlan is the master of design and product management. I worked with Amlan on ZapSign and Express Invoice, which we launched on the iOS app store to great success. His experience and knowledge in this field still amazes me. He blends it with a deep understanding of business and market, and communicates with other teams clearly. He takes the time to understand technical challenges, and manoeuvres his vision for the product accordingly.",
      color: "white",
      rotation: -1,
      photo:
        "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUyMjI4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1551263640-1c007852f616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY1MzAzNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Rajesh Kumar Thiagarajan",
      title: "Technology | Product | People - Enabling travel experiences",
      country: "🇬🇧",
      date: "November 14, 2025",
      relationship: "was Amlan's client",
      quote:
        "Amlan is one of the few design professionals who not only care about design but also customers and business outcomes. He has been instrumental in building my design team and has shown amazing skills both as a designer an design manager by identifying and nurturing talent. I have worked with him for more than 6 years in multiple projects and he has always pushed the boundaries of how & what we design in a meaningful way. He has successfully hired junior designers and mentored them to be come competent design professionals. He is also very good in collaborating with very senior designers and add value to the entire process. He has been my thought partner in terms of evolution of AI in design and how we as a team can leverage the same. He was instrumental in creating a roadmap and ways of working for the design team in the world of AI.",
      color: "white",
      rotation: -2.3,
      photo:
        "https://images.unsplash.com/photo-1671450960874-0903baf942c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMwNjU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1626382599528-69f963930822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0ZWNobm9sb2d5JTIwY29tcGFueXxlbnwxfHx8fDE3NjU0MDI3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Manasa Rao",
      title: "Product Designer at Travelopia, IN",
      country: "🇮🇳",
      date: "November 3, 2025",
      relationship: "reported directly to Amlan",
      quote:
        "I had the opportunity to work under Amlan as my Design Manager, and it was an extremely valuable experience. He is an excellent problem solver who always encouraged our team to perform at our best while genuinely recognizing and appreciating our efforts. That balance of high expectations and genuine appreciation made working with him both inspiring and motivating. I learned a great deal from him — especially about being assertive, taking initiative, and approaching problems with solution-first mindset. His leadership and mentorship has had a lasting impact on my professional growth.",
      color: "white",
      rotation: -1.8,
      photo:
        "https://images.unsplash.com/photo-1616444493079-c71a6f0062b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXNpZ25lciUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTMwNDIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1688678995154-454f3be41309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBicmFuZHxlbnwxfHx8fDE3NjUzMDQyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Hammad Jilani",
      title: "Head of Design at Aspire, SG",
      country: "🇸🇬",
      date: "March 26, 2023",
      relationship: "managed Amlan directly",
      quote:
        "I have had the pleasure of working closely with Amlan as one of the lead designers in my team. Amlan consistently delivers high-quality work that exceeds expectations, and he has an incredible ability to turn complex ideas into intuitive designs. But his most appealing quality is his speed of execution. With Amlan, you can expect abstract ideas to transform into testable designs within few days instead of weeks.",
      color: "white",
      rotation: -1.5,
      photo:
        "https://images.unsplash.com/photo-1522206038088-8698bcefa6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjUyNTE1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1551263640-1c007852f616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzY1MzAzNDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Ajit Paul",
      title:
        "Business Transformation Advisor, Co-Founder of WEF Tech Pioneer - Giftolexia Solutions",
      country: "🇮🇳",
      date: "September 1, 2014",
      relationship: "was Amlan's client",
      quote:
        "Amlan has delivered excellent UX design and prototype work - professional, involved, creative and timely!! Keep it up!",
      color: "white",
      rotation: 2.5,
      photo:
        "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFkdmlzb3IlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjUzMDM0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      companyLogo:
        "https://images.unsplash.com/photo-1730963292116-328f866a384d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0b2xleGlhJTIwbG9nb3xlbnwxfHx8fDE3NjUzMDM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
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
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % recommendations.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [recommendations.length]);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % recommendations.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + recommendations.length) %
        recommendations.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible slides based on current index
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(
        recommendations[
          (currentIndex + i) % recommendations.length
        ],
      );
    }
    return slides;
  };

  return (
    <section
      className="px-6 relative overflow-visible"
      style={{
        backgroundColor: "transparent",
        paddingBottom: "var(--spacing-16)",
        paddingTop: "36px",
        marginTop: "calc(-150px + 1rem)",
      }}
    >
      <div className="max-w-7xl mx-auto relative overflow-visible">
        {/* Decorative floating stickers */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -15 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-6 right-12 w-20 h-20 bg-secondary shadow-lg hidden md:flex items-center justify-center z-10"
          style={{ borderRadius: "50%" }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <Star
            className="w-10 h-10 text-secondary-foreground"
            fill="currentColor"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-1/3 -left-8 w-16 h-16 bg-primary shadow-lg flex items-center justify-center z-10"
          style={{
            borderRadius: "50%",
            transform: "rotate(25deg)",
          }}
          whileHover={{ scale: 1.15, rotate: 0 }}
        >
          <Heart
            className="w-8 h-8 text-primary-foreground"
            fill="currentColor"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-12 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block bg-primary text-primary-foreground px-10 py-5 shadow-lg relative"
            style={{
              transform: "rotate(-2deg)",
              borderRadius: "var(--radius-lg)",
              clipPath:
                "polygon(2% 0%, 98% 1%, 100% 96%, 97% 100%, 3% 99%, 0% 6%)",
              filter: "var(--drop-shadow-2xl)",
            }}
          >
            <div
              className="absolute -top-4 left-1/4 w-20 h-8 bg-white/20 backdrop-blur-sm"
              style={{
                clipPath:
                  "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                transform: "rotate(-5deg)",
              }}
            />
            <h1
              className="font-display"
              style={{ fontSize: "var(--text-4xl)" }}
            >
              Kind words
            </h1>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-10 h-10 items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
            style={{ borderRadius: "50%" }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-10 h-10 items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
            style={{ borderRadius: "50%" }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Slides */}
          <div className="overflow-visible">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${slidesToShow}, 1fr)`,
                overflow: "visible",
              }}
            >
              <AnimatePresence mode="popLayout">
                {getVisibleSlides().map((rec, index) => (
                  <motion.a
                    key={`${currentIndex}-${index}`}
                    href="https://www.linkedin.com/in/amlanmukerjee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      rotate: rec.rotation,
                    }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      rotate: 0,
                      y: -8,
                      zIndex: 10,
                    }}
                    className="relative p-6 shadow-xl border-2 h-[500px] flex flex-col cursor-pointer"
                    style={{
                      backgroundColor: "white",
                      borderColor: "var(--color-border)",
                      borderRadius: "var(--radius-card)",
                      textDecoration: "none",
                      overflow: "visible",
                    }}
                  >
                    {/* Tape decoration */}
                    <div
                      className="absolute -top-3 left-1/4 w-20 h-6 backdrop-blur-sm"
                      style={{
                        transform: `rotate(${-rec.rotation * 2}deg)`,
                        clipPath:
                          "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
                        backgroundColor:
                          "rgba(255, 223, 0, 0.4)",
                      }}
                    />

                    {/* Quote icon */}
                    <Quote
                      className="w-8 h-8 mb-4 opacity-30"
                      style={{
                        color: "var(--color-foreground)",
                      }}
                    />

                    {/* Quote text */}
                    <p
                      className="mb-6 font-body leading-relaxed flex-1 overflow-y-auto"
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-foreground)",
                        lineHeight: "1.6",
                      }}
                    >
                      {rec.quote}
                    </p>

                    {/* Author info with photo */}
                    <div
                      className="pt-4 border-t-2 mt-auto flex gap-3"
                      style={{
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <div className="flex-1">
                        <div
                          className="font-cursive mb-1 flex items-center gap-2"
                          style={{
                            fontSize: "var(--text-xl)",
                            color: "var(--color-foreground)",
                          }}
                        >
                          <span>{rec.name}</span>
                          <span style={{ fontSize: "var(--text-lg)" }}>{rec.country}</span>
                        </div>
                        <div
                          className="font-body opacity-80 mb-1"
                          style={{
                            fontSize: "var(--text-sm)",
                            color: "var(--color-foreground)",
                          }}
                        >
                          {rec.title}
                          {rec.name ===
                            "Venkat Chandra Gowri" &&
                            " at Travelopia, IN"}
                        </div>
                        {/* Removed relationship div */}
                      </div>
                    </div>

                    {/* Corner decoration */}
                    <div
                      className="absolute bottom-2 right-2 w-2 h-2 rounded-full"
                      style={{
                        backgroundColor:
                          "var(--color-foreground-alpha-20)",
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
                  backgroundColor:
                    currentIndex === index
                      ? "var(--color-primary)"
                      : "transparent",
                  border: "2px solid var(--color-border)",
                  transform:
                    currentIndex === index
                      ? "scale(1.2)"
                      : "scale(1)",
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