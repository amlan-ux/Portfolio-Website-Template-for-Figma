import { useState, useMemo } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Contact } from "./Contact";
import clarityUxLogo from "figma:asset/f9b2ce6c302f2e7a43379cb888e019c508fa7b5c.png";
import travelopiaLogo from "figma:asset/b8f9c4e7a5d6f2c1e8b3a7f4d9e2c6b1a5f8d3e7.png";
import tcsLogo from "figma:asset/2490a4166cc0a0cbe72d6eeb76d4e3ad61ef5ed1.png";

// Helper function to make numbers and metrics bold in text
const formatTextWithBoldNumbers = (text: string) => {
  // Split text by numbers/metrics patterns and wrap them in bold tags
  const parts = text.split(/(\d+[\d,\.%+\-$MK]*)/g);
  return parts.map((part, index) => {
    // Check if the part matches a number pattern
    if (/\d/.test(part)) {
      return (
        <strong
          key={index}
          style={{ fontWeight: "var(--font-weight-bold)" }}
        >
          {part}
        </strong>
      );
    }
    return part;
  });
};

// Companies with dark backgrounds that require white text for WCAG 2.2 AA compliance
const DARK_BACKGROUND_COMPANIES = [
  "Four Seasons",
  "Aspire",
  "Outskill",
  "SignEasy",
  "TCS World Travel",
  "Furlenco UNLMTD",
  "Practo",
  "invygo",
  "Catch 'Em All",
];

export function WorkAndExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experiences = useMemo(
    () => [
      {
        role: "Founder & Developer Advocate",
        company: "ClarityUX™",
        period: "2022 – Present",
        date: "Dec 2022",
        location: "Bengaluru / Remote",
        description:
          "Built AI-powered Figma plugin used by 2,600+ designers",
        highlights: [
          "Scaled plugin to 2,662+ users, 300+ MAUs, 20+ paying accounts with 20% MoM growth",
          "Hosted 6+ developer workshops (MCP · Code Connect · Figma APIs) → 600-1200 attendees",
          "Built AI-powered tooling with React, TypeScript, Node.js, and Figma Plugin APIs",
          "Reduced design→dev cycles by 50-60% through workflow automation",
        ],
        image:
          "https://images.unsplash.com/photo-1607339531726-e416aa37f134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdtYSUyMHBsdWdpbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ5Mjg2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "#FDE047",
        mood: "🚀✨",
        note: "My biggest achievement so far!",
        stats: [
          { label: "Users", value: "2,662+" },
          { label: "MAU", value: "300+" },
          { label: "Workshops", value: "6+" },
        ],
      },
      {
        role: "Design Manager",
        company: "Four Seasons",
        period: "Oct 2022 – Present",
        date: "Oct 2022",
        location: "Remote",
        description:
          "Led luxury hospitality design initiatives",
        highlights: [
          "Led design for premium hospitality experiences",
          "Improved guest satisfaction ratings",
          "Collaborated with global teams",
        ],
        image:
          "https://images.unsplash.com/photo-1729717949780-46e511489c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3NjUxOTg3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-four-seasons)",
        mood: "🏨✨",
        note: "Luxury hospitality!",
        stats: [
          { label: "Satisfaction", value: "High" },
          { label: "Teams", value: "Global" },
        ],
      },
      {
        role: "Design Manager / Senior Product Designer",
        company: "Aspire",
        period: "Jan 2022 – Jul 2023",
        date: "Jan 2022",
        location: "Remote",
        description:
          "Launched billing system generating $1.8M monthly revenue",
        highlights: [
          "Launched billing → 100+ signups in 90 days, $1.3M-$1.8M monthly NTV",
          "30% faster workflows, 40% error reduction on dev alignment",
          "95%+ OKR completion on core fintech experiences",
        ],
        image:
          "https://images.unsplash.com/photo-1660673868711-981d95202f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2NDkyODY1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-aspire)",
        mood: "💰📈",
        note: "Fintech challenges conquered!",
        stats: [
          { label: "NTV", value: "$1.8M" },
          { label: "OKR Rate", value: "95%+" },
        ],
      },
      {
        role: "Senior Product Designer",
        company: "Outskill",
        period: "2020 – 2021",
        date: "2020",
        location: "Remote",
        description:
          "Created engaging e-learning experiences",
        highlights: [
          "Designed interactive learning platform",
          "Improved student engagement",
          "Built scalable design system",
        ],
        image:
          "https://images.unsplash.com/photo-1565688695721-2b6f5a880a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjUyMTY4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-outskill)",
        mood: "📚💡",
        note: "E-learning revolution!",
        stats: [
          { label: "Engagement", value: "High" },
          { label: "Platform", value: "1" },
        ],
      },
      {
        role: "Senior Product Designer",
        company: "SignEasy",
        period: "Jun 2019 – Dec 2019",
        date: "Jun 2019",
        location: "Remote",
        description:
          "Drove 700% install growth with App of the Day feature",
        highlights: [
          '"App of the Day" in 151 countries → 700% install growth',
          "119% onboarding completion lift, 171% activation improvement",
          "44% increase in paid conversions",
        ],
        image:
          "https://images.unsplash.com/photo-1645536107287-59088714a788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHNpZ25pbmclMjBhcHB8ZW58MXx8fHwxNzY0OTI4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-signeasy)",
        mood: "🎉🏆",
        note: "App of the Day!!",
        stats: [
          { label: "Countries", value: "151" },
          { label: "Growth", value: "700%" },
        ],
      },
      {
        role: "Product Designer",
        company: "TCS World Travel",
        period: "Jan 2015 – Dec 2015",
        date: "Jan 2015",
        location: "Bengaluru",
        description:
          "Designed luxury travel booking experiences",
        highlights: [
          "Designed intuitive booking interface",
          "Collaborated with developers for seamless integration",
          "Received positive feedback from luxury travelers",
        ],
        image:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW50YWx8ZW58MXx8fHwxNzMzNzYwMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        color: "var(--color-company-tcs)",
        mood: "✈️🌏",
        note: "Luxury travel design!",
        stats: [
          { label: "Feedback", value: "Positive" },
          { label: "Collaboration", value: "Seamless" },
        ],
      },
      {
        role: "Product Designer",
        company: "Furlenco UNLMTD",
        period: "Jan 2016 – Jun 2017",
        date: "Jan 2016",
        location: "Bengaluru",
        description:
          "Created end-to-end furniture rental platform",
        highlights: [
          "Designed end-to-end furniture rental experience",
          "Created design system used across web and mobile",
          "25% improvement in conversion rates",
        ],
        image:
          "https://images.unsplash.com/photo-1743008019164-2d810a54915e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjByZW50YWwlMjBtb2Rlcm58ZW58MXx8fHwxNzY1MjgxODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-furlenco)",
        mood: "🛋️✨",
        note: "Furniture revolution!",
        stats: [
          { label: "Conversion", value: "+25%" },
          { label: "Platforms", value: "2" },
        ],
      },
      {
        role: "Senior Product Designer",
        company: "Practo",
        period: "Jul 2017 – May 2019",
        date: "Jul 2017",
        location: "Bengaluru",
        description:
          "Redesigned patient booking experience (+35% conversions)",
        highlights: [
          "Redesigned patient experience → 35% increase in bookings",
          "Led design for 3 major product launches",
          "Improved doctor onboarding flow efficiency by 40%",
        ],
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwfGVufDF8fHx8MTczMzc2MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
        color: "var(--color-company-practo)",
        mood: "🏥💙",
        note: "Healthcare innovation!",
        stats: [
          { label: "Bookings Up", value: "35%" },
          { label: "Products", value: "3" },
        ],
      },
      {
        role: "Product Designer",
        company: "invygo",
        period: "2018 – 2019",
        date: "2018",
        location: "Dubai",
        description:
          "Designed flexible car subscription platform",
        highlights: [
          "Designed car subscription experience",
          "Improved user onboarding flow",
          "Enhanced mobile app experience",
        ],
        image:
          "https://images.unsplash.com/photo-1675122130691-0f837deefb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBzaGFyaW5nfGVufDF8fHx8MTc2NTI4MTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-invygo)",
        mood: "🚗💨",
        note: "Car subscription innovation!",
        stats: [
          { label: "Onboarding", value: "Improved" },
          { label: "Platform", value: "Mobile" },
        ],
      },
      {
        role: "More on LinkedIn",
        company: "Catch 'Em All",
        period: "",
        date: "",
        location: "",
        description:
          "Connect with me on LinkedIn for more details about my journey!",
        highlights: [],
        image:
          "https://images.unsplash.com/photo-1664997296099-5a0b63ab0196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwY2FyZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2NTE5OTgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "var(--color-company-linkedin-card)",
        mood: "💼🔗",
        note: "Let's connect!",
        stats: [],
        isLinkedInCard: true,
      },
    ],
    [],
  );

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(
      "comic-strip-container",
    );
    if (container) {
      const scrollAmount = 600;
      const newScroll =
        direction === "right" ? scrollAmount : -scrollAmount;
      container.scrollBy({
        left: newScroll,
        behavior: "smooth",
      });

      // Update current slide indicator
      const maxIndex = experiences.length - 1;
      if (direction === "right" && currentSlide < maxIndex) {
        setCurrentSlide(currentSlide + 1);
      } else if (direction === "left" && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };

  return (
    <section
      className="py-16 px-6 relative overflow-hidden"
      style={{
        backgroundColor: "transparent",
        marginTop: "-150px",
      }}
    >
      <div className="max-w-full mx-auto relative" style={{ overflowX: "visible" }}>
        {/* Main Section Title */}
        <div className="mb-12 text-center relative">
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
              Work Experience
            </h1>
          </div>
        </div>

        {/* Horizontal Comic Strip Container */}
        <div className="relative">
          {/* Scrollable Comic Panels Container */}
          <div
            id="comic-strip-container"
            className="flex gap-8 scroll-smooth"
            style={{
              overflowX: "auto",
              overflowY: "visible",
              scrollbarWidth: "thin",
              scrollbarColor:
                "var(--color-primary) var(--color-background)",
              paddingTop: "60px",
              paddingBottom: "60px",
              paddingLeft: "var(--spacing-16)",
              paddingRight: "var(--spacing-16)",
              width: "100%",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative"
                style={{ width: "420px" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                {/* Simplified Company Card - Reference Image Style */}
                <button
                  className="relative flex flex-col items-center justify-between w-full text-left cursor-pointer"
                  style={{
                    height: "520px",
                    borderRadius: "var(--radius-lg)",
                    border: "2px solid var(--color-foreground)",
                    filter: "var(--drop-shadow-2xl)",
                    backgroundColor: exp.color,
                    boxShadow:
                      "inset 0 0 0 20px white, 0 4px 20px rgba(0, 0, 0, 0.15)",
                    padding: "var(--spacing-12)",
                    paddingBottom: "var(--spacing-16)",
                  }}
                  onClick={() =>
                    console.log(`Clicked ${exp.company}`)
                  }
                >
                  {/* Company Logo - Centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                      <ImageWithFallback
                        src={
                          exp.company === "ClarityUX™"
                            ? clarityUxLogo
                            : exp.company === "Travelopia"
                              ? travelopiaLogo
                              : exp.company === "TCS World Travel"
                                ? tcsLogo
                                : exp.image
                        }
                        alt={`${exp.company} logo`}
                        className="object-cover"
                        style={{
                          width: "180px",
                          height: "180px",
                          objectPosition: "left center",
                          clipPath: "inset(0 15% 0 0)",
                          backgroundColor: exp.company === "TCS World Travel" ? "#000000" : "transparent",
                          padding: exp.company === "TCS World Travel" ? "var(--spacing-4)" : "0",
                        }}
                      />

                      {/* Description */}
                      <p
                        className="font-body text-center"
                        style={{
                          fontSize: "var(--text-base)",
                          fontWeight: "var(--font-weight-medium)",
                          maxWidth: "300px",
                          lineHeight: "1.4",
                          color: DARK_BACKGROUND_COMPANIES.includes(exp.company)
                            ? "white"
                            : "var(--color-foreground)",
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle shine effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      borderRadius: "var(--radius-md)",
                      background:
                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: [
                        "0% 0%",
                        "100% 100%",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </button>

                {/* Connector Arrow - Between Cards */}
                {index < experiences.length - 1 && (
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      top: "50%",
                      right: "-32px",
                      transform: "translateY(-50%)",
                      width: "32px",
                      height: "16px",
                      zIndex: 10,
                    }}
                  >
                    <svg
                      width="32"
                      height="16"
                      viewBox="0 0 32 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: "block",
                      }}
                    >
                      {/* Left square - at card edge */}
                      <rect
                        x="0"
                        y="5"
                        width="6"
                        height="6"
                        fill="var(--color-foreground)"
                      />
                      {/* Line */}
                      <line
                        x1="6"
                        y1="8"
                        x2="26"
                        y2="8"
                        stroke="var(--color-foreground)"
                        strokeWidth="2.5"
                      />
                      {/* Right square - at next card edge */}
                      <rect
                        x="26"
                        y="5"
                        width="6"
                        height="6"
                        fill="var(--color-foreground)"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls - Dots on left, Arrows on right */}
          <div
            className="flex items-center justify-between px-4"
            style={{
              marginTop: "var(--spacing-2)",
              paddingTop: "0.5rem",
              paddingBottom: "48px",
            }}
          >
            {/* Pagination Dots - Left Side */}
            <div className="flex items-center gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    const container = document.getElementById(
                      "comic-strip-container",
                    );
                    if (container) {
                      container.scrollTo({
                        left: index * 600,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="transition-all duration-300 border-2 border-foreground"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "0",
                    backgroundColor:
                      currentSlide === index
                        ? "var(--color-foreground)"
                        : "transparent",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation - Right Side */}
            <div className="flex items-center gap-3">
              {/* Left Arrow Button */}
              <motion.button
                onClick={() => scroll("left")}
                className="flex items-center justify-center bg-background text-foreground border-2 border-foreground font-body"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Right Arrow Button */}
              <motion.button
                onClick={() => scroll("right")}
                className="flex items-center justify-center bg-background text-foreground border-2 border-foreground font-body"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "var(--radius-md)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION - Integrated at the end */}
        <div
          id="contact-section"
          style={{ marginTop: "var(--spacing-32)" }}
        >
          <Contact />
        </div>
      </div>
    </section>
  );
}