import invygoLatestLogo from "figma:asset/12ba1028942f047be2337c8b997ef0b76f9c7e6a.png";
import tcsNewLogo from "figma:asset/353f49bf1db7f8ea76ec6fc224e37507398ff266.png";
import toptalLogo from "figma:asset/c42dc3305f347e6fdc4d07a644eafb411a792d36.png";
import { useState, useRef, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clarityUxLogo from "figma:asset/f9b2ce6c302f2e7a43379cb888e019c508fa7b5c.png";
import travelopiaLogo from "figma:asset/b8f9c4e7a5d6f2c1e8b3a7f4d9e2c6b1a5f8d3e7.png";
import tcsLogo from "figma:asset/2490a4166cc0a0cbe72d6eeb76d4e3ad61ef5ed1.png";
import aspireLogo from "figma:asset/87bce737b7999eced935e5ee4dcc232ce1069b89.png";
import fourSeasonsLogo from "figma:asset/67fa21b25981dc6bb9cbdab17b9608a05e1dca9c.png";
import practoLogo from "figma:asset/8537a25112b285bff76d8ba93f3dbb7514074199.png";
import quarkExpeditionsLogo from "figma:asset/f3bb44f85e2fc275ccdbd07cc1f70171156912a3.png";
import furlencoLogo from "figma:asset/c1eb0c4eb50f227ec5ceb3dd437d1465c7b08de2.png";
import invygoLogo from "figma:asset/14ef8e4ac5dc92fb572e4a70e80f08ad27f08a40.png";
import unlmtdLogo from "figma:asset/9ddcee49524c6aeaaf08c7afecbecc3ae27354c2.png";
import invygoNewLogo from "figma:asset/5b926ba889438108911d21aaf38fc32f4b84d294.png";
import signEasyLogo from "figma:asset/6e911c0a74916a1b938d8b7b88c410c24520ab7c.png";

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

export function WorkAndExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPausedByChevron, setIsPausedByChevron] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const experiences = useMemo(
    () => [
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
        url: "https://aspireapp.com/",
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
        url: "https://apps.apple.com/sa/app/invygo-car-rental-subscribe/id1445676307",
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
        url: "https://www.fourseasons.com/",
      },
      {
        role: "Product Designer",
        company: "Quark Expeditions",
        period: "2014 – 2015",
        date: "2014",
        location: "Remote",
        description:
          "Designed immersive expedition travel experiences",
        highlights: [
          "Created booking flows for polar expeditions",
          "Designed responsive web experience",
          "Enhanced customer journey mapping",
        ],
        image:
          "https://images.unsplash.com/photo-1675122130691-0f837deefb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZW50YWwlMjBzaGFyaW5nfGVufDF8fHx8MTc2NTI4MTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        color: "#FDB913",
        mood: "🧭",
        note: "Adventure awaits!",
        stats: [
          { label: "Experience", value: "Premium" },
          { label: "Regions", value: "Polar" },
        ],
        url: "https://www.quarkexpeditions.com/",
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
        url: "https://apps.apple.com/us/app/signeasy-sign-documents-app/id381786507",
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
          "Redesigned patient experience  35% increase in bookings",
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
        url: "https://www.practo.com/providers/clinics/ray",
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
        url: "https://www.tcsworldtravel.com/",
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
        url: "https://www.toptal.com/designers/resume/amlan-mukerjee",
      },
    ],
    [],
  );

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(
      "comic-strip-container",
    );
    if (container) {
      // Card width (420px) + gap (32px) = 452px per card
      const scrollAmount = 452;
      const newScroll =
        direction === "right" ? scrollAmount : -scrollAmount;
      container.scrollBy({
        left: newScroll,
        behavior: "smooth",
      });

      // Pause auto-scroll temporarily when using chevrons
      setIsPausedByChevron(true);
      setTimeout(() => {
        setIsPausedByChevron(false);
      }, 2000);
    }
  };

  // Auto-scroll effect - continuous and cyclical
  useEffect(() => {
    const container = document.getElementById(
      "comic-strip-container",
    );
    if (!container) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isPausedByChevron && container) {
        // Increased scroll speed by 3x (was 0.5, now 1.5 pixels per frame)
        container.scrollLeft += 1.5;

        // Get total scrollable width
        const maxScroll =
          container.scrollWidth - container.clientWidth;

        // When we reach the end, smoothly loop back to start
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }

        // Update current slide based on scroll position
        const slideIndex = Math.round(
          container.scrollLeft / 452,
        );
        setCurrentSlide(
          Math.min(slideIndex, experiences.length - 1),
        );
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      setIsPausedByChevron(true);
    };

    const handleMouseLeave = () => {
      setIsPausedByChevron(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      container.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [experiences.length, isPausedByChevron]);

  return (
    <section
      className="py-16 px-6 relative overflow-hidden"
      style={{
        backgroundColor: "transparent",
        marginTop: "-150px",
      }}
    >
      <div
        className="max-w-full mx-auto relative"
        style={{ overflowX: "visible" }}
      >
        {/* Main Section Title */}
        <div
          className="text-center relative"
          style={{ marginBottom: "var(--spacing-6)" }}
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
              Brands I have worked with
            </h1>
          </div>
        </div>

        {/* Horizontal Comic Strip Container */}
        <div className="relative">
          {/* Left Chevron Button */}
          <motion.button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 z-10 bg-primary text-primary-foreground cursor-pointer"
            style={{
              transform: "translateY(-50%) rotate(-2deg)",
              padding: "var(--spacing-4)",
              borderRadius: "var(--radius-md)",
              border: "2px solid var(--color-foreground)",
              filter: "var(--drop-shadow-lg)",
            }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={32} />
          </motion.button>

          {/* Right Chevron Button */}
          <motion.button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 z-10 bg-primary text-primary-foreground cursor-pointer"
            style={{
              transform: "translateY(-50%) rotate(2deg)",
              padding: "var(--spacing-4)",
              borderRadius: "var(--radius-md)",
              border: "2px solid var(--color-foreground)",
              filter: "var(--drop-shadow-lg)",
            }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={32} />
          </motion.button>

          {/* Scrollable Comic Panels Container */}
          <div
            id="comic-strip-container"
            className="flex gap-8 scroll-smooth md:gap-8 gap-4"
            style={{
              overflowX: "auto",
              overflowY: "visible",
              scrollbarWidth: "none",
              scrollbarColor:
                "var(--color-primary) var(--color-background)",
              paddingTop: "60px",
              paddingBottom: "1.5rem",
              paddingLeft: "var(--spacing-16)",
              paddingRight: "var(--spacing-16)",
              width: "100%",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 relative"
                style={{ width: window.innerWidth < 768 ? "280px" : "420px" }}
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
                    height: window.innerWidth < 768 ? "360px" : "520px",
                    borderRadius: "var(--radius-lg)",
                    border: "2px solid var(--color-foreground)",
                    filter: "var(--drop-shadow-lg)",
                    backgroundColor:
                      exp.company === "Practo"
                        ? "#f5f5f5"
                        : exp.company === "Quark Expeditions"
                          ? "#f5f5f5"
                          : exp.company === "invygo"
                            ? "#f5f5f5"
                            : exp.company === "Catch 'Em All"
                              ? "#f5f5f5"
                              : exp.color,
                    boxShadow:
                      window.innerWidth < 768
                        ? "inset 0 0 0 12px white, 0 4px 20px rgba(0, 0, 0, 0.15)"
                        : "inset 0 0 0 20px white, 0 4px 20px rgba(0, 0, 0, 0.15)",
                    padding: window.innerWidth < 768 ? "var(--spacing-6)" : "var(--spacing-12)",
                    paddingBottom: window.innerWidth < 768 ? "var(--spacing-8)" : "var(--spacing-16)",
                  }}
                  onClick={() =>
                    exp.url && window.open(exp.url, "_blank")
                  }
                >
                  {/* Company Logo - Centered */}
                  <div className="flex-1 flex items-center justify-center">
                    <ImageWithFallback
                      src={
                        exp.company === "ClarityUX™"
                          ? clarityUxLogo
                          : exp.company === "Travelopia"
                            ? travelopiaLogo
                            : exp.company === "TCS World Travel"
                              ? tcsNewLogo
                              : exp.company === "Aspire"
                                ? aspireLogo
                                : exp.company === "Four Seasons"
                                  ? fourSeasonsLogo
                                  : exp.company === "Practo"
                                    ? practoLogo
                                    : exp.company === "SignEasy"
                                      ? signEasyLogo
                                      : exp.company ===
                                            "Quark Expeditions"
                                          ? quarkExpeditionsLogo
                                          : exp.company ===
                                              "Furlenco UNLMTD"
                                            ? unlmtdLogo
                                            : exp.company === "invygo"
                                              ? invygoLatestLogo
                                              : exp.company === "Catch 'Em All"
                                                ? toptalLogo
                                                : exp.image
                      }
                      alt={`${exp.company} logo`}
                      style={{
                        maxWidth:
                          exp.company === "Furlenco UNLMTD"
                            ? "63%"
                            : exp.company === "invygo"
                              ? "81%"
                              : exp.company === "TCS World Travel"
                                ? "123%"
                                : exp.company === "SignEasy"
                                  ? "52.5%"
                                  : exp.company === "Catch 'Em All"
                                    ? "1000%"
                                    : "90%",
                        maxHeight: window.innerWidth < 768 ? "100px" : "160px",
                        width: "100%",
                        height: "auto",
                        objectFit: "fill",
                        objectPosition: "center",
                        clipPath: "none",
                        overflow: "visible",
                        backgroundColor:
                          exp.company === "TCS World Travel" ||
                          exp.company === "Four Seasons"
                            ? "#000000"
                            : exp.company ===
                                "Quark Expeditions"
                              ? "#f5f5f5"
                              : "transparent",
                        padding:
                          exp.company === "TCS World Travel" ||
                          exp.company === "Four Seasons" ||
                          exp.company === "Quark Expeditions"
                            ? window.innerWidth < 768 ? "var(--spacing-4)" : "var(--spacing-8)"
                            : "0",
                      }}
                    />
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
                      right: window.innerWidth < 768 ? "-20px" : "-32px",
                      transform: "translateY(-50%)",
                      width: window.innerWidth < 768 ? "20px" : "32px",
                      height: "16px",
                      zIndex: 0,
                    }}
                  >
                    <svg
                      width={window.innerWidth < 768 ? "20" : "32"}
                      height="16"
                      viewBox={window.innerWidth < 768 ? "0 0 20 16" : "0 0 32 16"}
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
                        width={window.innerWidth < 768 ? "4" : "6"}
                        height={window.innerWidth < 768 ? "4" : "6"}
                        fill="var(--color-foreground)"
                      />
                      {/* Line */}
                      <line
                        x1={window.innerWidth < 768 ? "4" : "6"}
                        y1="8"
                        x2={window.innerWidth < 768 ? "16" : "26"}
                        y2="8"
                        stroke="var(--color-foreground)"
                        strokeWidth={window.innerWidth < 768 ? "2" : "2.5"}
                      />
                      {/* Right square - at next card edge */}
                      <rect
                        x={window.innerWidth < 768 ? "16" : "26"}
                        y="5"
                        width={window.innerWidth < 768 ? "4" : "6"}
                        height={window.innerWidth < 768 ? "4" : "6"}
                        fill="var(--color-foreground)"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls - Dots on left, Arrows on right */}
        </div>
      </div>
    </section>
  );
}