import image_c2713c601c14d20a456155af5dacf99e5000c2b6 from "figma:asset/c2713c601c14d20a456155af5dacf99e5000c2b6.png";
import newSportsPhoto from "figma:asset/58dab2a2ad11d00e0c0f2e03bbbef3b464d8e764.png";
import workshopPhoto from "figma:asset/2cd30ed1ead3a1ec2819d5bbd37a19f3bf67ccd9.png";
import presentationPhoto from "figma:asset/47e7935ba419d03ab9ba79bb00335cf080ecd7a5.png";
import image_5f0b87f44b5cd7080a272fec884a22e80d3b34a4 from "figma:asset/5f0b87f44b5cd7080a272fec884a22e80d3b34a4.png";
import image_5f0b87f44b5cd7080a272fec884a22e80d3b34a4 from "figma:asset/5f0b87f44b5cd7080a272fec884a22e80d3b34a4.png";
import image_381d3736b2a5019a83d72a3b5c13c5d25c427f9c from "figma:asset/381d3736b2a5019a83d72a3b5c13c5d25c427f9c.png";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Coffee,
  Triangle,
  Paperclip,
  Gamepad2,
  Trophy,
  CircleDot,
  PersonStanding,
  Plane,
  RotateCcw,
} from "lucide-react";
import referenceImage from "figma:asset/80abed34830054647e28c28f71201d7dce01dd3a.png";
import profilePhoto from "figma:asset/ec5eefaa51d5052e81d485cfc583a5651108d703.png";
import newProfilePhoto from "figma:asset/4ca3d2ae4a8430b479f50d3b92e23e4e9ff0f3c5.png";
import personalPhoto from "figma:asset/4849c01b0b268b137bd61337d71b76f2308cfbd8.png";
import rosiePhoto from "figma:asset/9bacb206847b0246f4207a5c1ab5db851f12271a.png";
import dianaPhoto from "figma:asset/9cb58a1c3618da7bc63721e2e25f5c41a36e4384.png";
import newDogPhoto from "figma:asset/e3d119ce2967ce2a6778706576aac6f04dc7dd77.png";
import attachedDogPhoto from "figma:asset/91a49d464a54515f59ae0093adbefd48642b53a9.png";
import newAttachedPhoto from "figma:asset/80c78beb97ea1b3c68d9eac2cd6e65e96ed6a32e.png";
import latestAttachedPhoto from "figma:asset/e37d8ac2cdff6faa5d5b9dfe83ce0e13e4e8f32d.png";
import newestAttachedPhoto from "figma:asset/c79f5a29ae3734c98c7f15b8d57b621d0d14e5e4.png";
import finalDogPhoto from "figma:asset/165870890f5551751b6790098199e044fca498fa.png";
import runningDogPhoto from "figma:asset/0c9a9964bd08bdc521be973821d7dca9e010fa4e.png";
import currentAttachedPhoto from "figma:asset/0532abdb89870a33e5dbd6d90baca2e2f1771740.png";
import streetDogPhoto from "figma:asset/b829bcb8369fa4cd479bf3d3cc0c2603ac276b78.png";
import conferencePhoto from "figma:asset/ea96e20cfd7aa664758e313dd6709d89272b22d5.png";
import speakerPhoto from "figma:asset/c8256a6072d4cad875ab70cfc34f53abe9bebe14.png";
import frenchTechPhoto from "figma:asset/086ebd1440d62878af5df26b89142fec88cb10db.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CoffeeCard } from "./CoffeeCard";
import { SportsCard } from "./SportsCard";
import { SpotifyPlayer } from "./SpotifyPlayer";

interface Position {
  x: number;
  y: number;
}

interface DraggableElementProps {
  id: string;
  initialPosition: Position;
  children: React.ReactNode;
  baseZIndex?: number;
  currentZIndex?: number;
  onPositionChange?: (id: string, position: Position) => void;
  animationDelay?: number;
  scatterOrigin?: Position;
  onInteract?: (id: string) => void;
}

function DraggableElement({
  id,
  initialPosition,
  children,
  baseZIndex = 10,
  currentZIndex,
  onPositionChange,
  animationDelay = 0,
  scatterOrigin,
  onInteract,
}: DraggableElementProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  // Always animate on load - never skip animation
  const hasAnimated = false;

  // Update position when initialPosition changes (e.g., on window resize)
  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition.x, initialPosition.y]);

  // Save position to localStorage when it changes (after dragging)
  useEffect(() => {
    if (!isDragging) {
      localStorage.setItem(
        `draggable-${id}`,
        JSON.stringify(position),
      );
    }
  }, [position, isDragging, id]);

  // Listen for 'R' key to reset to initial position
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "r" || e.key === "R") {
        setPosition(initialPosition);
        localStorage.removeItem(`draggable-${id}`);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () =>
      window.removeEventListener("keydown", handleKeyPress);
  }, [id, initialPosition]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't start dragging if clicking on interactive elements
    const target = e.target as HTMLElement;
    if (
      target.tagName === "BUTTON" ||
      target.closest("button") ||
      target.tagName === "A" ||
      target.closest("a")
    ) {
      return;
    }

    // Notify parent that this element was interacted with
    if (onInteract) {
      onInteract(id);
    }

    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && elementRef.current) {
        const container = elementRef.current.parentElement;
        if (container) {
          const containerRect =
            container.getBoundingClientRect();
          setPosition({
            x: e.clientX - containerRect.left - dragOffset.x,
            y: e.clientY - containerRect.top - dragOffset.y,
          });
        }
      }
    },
    [isDragging, dragOffset.x, dragOffset.y],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove,
        );
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(id, position);
    }
  }, [position, onPositionChange, id]);

  // Use provided scatter origin or default to viewport center
  const centerX =
    scatterOrigin?.x ??
    (typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const centerY =
    scatterOrigin?.y ??
    (typeof window !== "undefined"
      ? window.innerHeight / 2
      : 0);

  // Play sound effect on animation start
  useEffect(() => {
    if (!hasAnimated && typeof window !== "undefined") {
      // Create a simple "pop" sound using Web Audio API
      const playPopSound = () => {
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Create a "pop" sound with quick frequency sweep
        oscillator.frequency.setValueAtTime(
          800,
          audioContext.currentTime,
        );
        oscillator.frequency.exponentialRampToValueAtTime(
          200,
          audioContext.currentTime + 0.1,
        );

        // Quick volume fade for "pop" effect
        gainNode.gain.setValueAtTime(
          0.15,
          audioContext.currentTime,
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.1,
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      };

      // Play sound with the animation delay
      const timer = setTimeout(() => {
        try {
          playPopSound();
        } catch (error) {
          // Silently fail if audio context is not available
          console.log("Audio not available");
        }
      }, animationDelay * 1000);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated, animationDelay]);

  // Determine if this element should animate from scatter origin
  const shouldScatter = scatterOrigin && !hasAnimated;

  // Use currentZIndex if provided, otherwise use baseZIndex
  const effectiveZIndex =
    currentZIndex !== undefined ? currentZIndex : baseZIndex;

  return (
    <motion.div
      ref={elementRef}
      data-draggable
      initial={
        hasAnimated
          ? false
          : {
              x: shouldScatter ? centerX - position.x : 0,
              y: shouldScatter ? centerY - position.y : 0,
              scale: shouldScatter ? 0.1 : 1,
              opacity: shouldScatter ? 0 : 1,
              rotate: shouldScatter
                ? Math.random() * 120 - 60
                : 0,
            }
      }
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
      }}
      transition={{
        delay: hasAnimated ? 0 : animationDelay,
        duration: hasAnimated ? 0 : 0.9,
        ease: [0.34, 1.56, 0.64, 1],
        opacity: { duration: hasAnimated ? 0 : 0.6 },
        scale: {
          duration: hasAnimated ? 0 : 0.9,
          ease: [0.175, 0.885, 0.32, 1.275],
        },
      }}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        zIndex: isDragging ? 9999 : effectiveZIndex,
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </motion.div>
  );
}

const dogInfo = {
  dog1: {
    name: "Rosie",
    personality:
      "A naughty little warrior! She beat parvo, chewed wires, and found her forever home with the Perrieras.",
  },
  dog2: {
    name: "Diana",
    personality:
      "Meet Diana, once rescued and now reigning. At 5 years old she found home with us and discovered she’s actually a princess.",
  },
  dog3: {
    name: "Kariya",
    personality:
      "The coolest guy on the street. Social, sleepy by 7pm, and a gentle gunda at heart.",
  },
  dog4: {
    name: "Rani",
    personality:
      "The bold guardian who doesn’t let hoodlums mess with her neighborhood.",
  },
  dog5: {
    name: "Spotty",
    personality:
      "Wall-climber, panther-runner, and master of stealth.",
  },
  dog6: {
    name: "Floppy",
    personality:
      "In memory of Floppy, a brave soul who never gave up. Always in our hearts.",
  },
};

export function Hero() {
  const [expandedCard, setExpandedCard] = useState<
    string | null
  >(null);
  const [selectedDog, setSelectedDog] = useState<string | null>(
    null,
  );
  const [interactionOrder, setInteractionOrder] = useState<
    string[]
  >([]);
  const [showCoffeeCard, setShowCoffeeCard] = useState(false);
  const [showSportsCard, setShowSportsCard] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle reset functionality
  const handleReset = useCallback(() => {
    // Clear all draggable element positions from localStorage
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith("draggable-")) {
        localStorage.removeItem(key);
      }
    });

    // Reload page immediately to reset all draggable positions
    window.location.reload();
  }, []);

  // Detect mobile screen size
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  // Calculate centered position for profile card (480px wide) on pegboard
  const [profilePosition, setProfilePosition] = useState(() => {
    // Pegboard container is max 1400px with 48px total padding (24px each side)
    const containerWidth = Math.min(
      window.innerWidth - 48,
      1400,
    );
    const x = (containerWidth - 480) / 2;
    return { x, y: 40 };
  });

  // Calculate scatter origin - center of the profile card
  const [scatterOrigin, setScatterOrigin] = useState(() => {
    const containerWidth = Math.min(
      window.innerWidth - 48,
      1400,
    );
    const x = (containerWidth - 480) / 2;
    return {
      x: x + 750, // way off to the right for dramatic explosion
      y: 240, // center point behind the profile card
    };
  });

  // Update positions when container mounts and on resize
  const updatePositions = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;

      // Update profile position (centered)
      const x = (containerWidth - 480) / 2;
      setProfilePosition({ x, y: 40 });

      // Update scatter origin (center point behind profile card)
      setScatterOrigin({
        x: x + 750, // way off to the right for dramatic explosion
        y: 240, // center point behind the profile card
      });
    }
  }, []);

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () =>
      window.removeEventListener("resize", updatePositions);
  }, [updatePositions]);

  // Clear saved position for dog3 to reset to new default position
  useEffect(() => {
    localStorage.removeItem("draggable-dog3");
  }, []);

  const toggleCard = useCallback((cardId: string) => {
    setExpandedCard((prev) =>
      prev === cardId ? null : cardId,
    );
  }, []);

  const handleDogClick = useCallback(
    (dogId: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedDog((prev) => (prev === dogId ? null : dogId));
    },
    [],
  );

  const handleElementInteract = useCallback((id: string) => {
    setInteractionOrder((prev) => {
      // Remove if already in array, then add to end
      const filtered = prev.filter((item) => item !== id);
      return [...filtered, id];
    });
  }, []);

  // Calculate z-index for an element based on interaction order
  const getZIndex = useCallback(
    (id: string, baseZ: number) => {
      const interactionIndex = interactionOrder.indexOf(id);
      if (interactionIndex === -1) {
        return baseZ;
      }
      // Elements that were interacted with get a higher z-index
      // Start at 100 and add the interaction index
      return 100 + interactionIndex;
    },
    [interactionOrder],
  );

  // Mobile layout - simple single column
  if (isMobile) {
    return (
      <section
        id="hero"
        className="pl-3 pr-6 pt-20 pb-12 overflow-auto"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="max-w-full mx-auto space-y-4">
          {/* Profile Card */}
          <div className="w-full">
            <div
              className="bg-primary text-primary-foreground p-6 shadow-sm relative"
              style={{
                borderRadius: "var(--radius-card)",
                filter: "var(--drop-shadow-lg)",
              }}
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <motion.div
                  className="w-20 h-20 rounded-full bg-accent flex items-center justify-center overflow-hidden border-4 border-primary-foreground"
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1653732212701-b729f0b08330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDYyOTc5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Amlan Mukerjee - Developer Advocate"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="text-center">
                  <h1
                    className="text-primary-foreground mb-2"
                    style={{
                      fontSize: "var(--text-xl)",
                      lineHeight: "1.25",
                    }}
                  >
                    Hi, I am Amlan
                  </h1>
                  <p
                    className="text-primary-foreground/90 font-body"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Product Designer & Developer
                  </p>
                </div>
              </div>

              <p
                className="text-primary-foreground/90 mb-4 font-body"
                style={{
                  fontSize: "var(--text-sm)",
                  lineHeight: "1.6",
                }}
              >
                Welcome to my corner of the Internet. I'm a
                Developer Advocate building tools, teaching
                developers, and shaping the future of design-dev
                collaboration at Figma.
              </p>

              <p
                className="text-primary-foreground/80 mb-4 font-handwritten"
                style={{ fontSize: "var(--text-sm)" }}
              >
                From founding ClarityUX (2.6K+ users) to leading
                enterprise design systems, I bridge the gap
                between designers and developers.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2 justify-center">
                <motion.button
                  className="px-3 py-2 bg-primary-foreground text-primary flex items-center gap-2"
                  style={{ borderRadius: "var(--radius-lg)" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.div>
                  <span style={{ fontSize: "var(--text-xs)" }}>
                    GitHub
                  </span>
                </motion.button>
                <motion.button
                  className="px-3 py-2 flex items-center gap-2"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "var(--color-linkedin)",
                    color: "var(--color-primary)",
                  }}
                  whileHover={{ scale: 1.05, rotate: 2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.div>
                  <span style={{ fontSize: "var(--text-xs)" }}>
                    LinkedIn
                  </span>
                </motion.button>
                <motion.button
                  className="px-3 py-2 bg-primary-foreground text-primary flex items-center gap-2"
                  style={{ borderRadius: "var(--radius-lg)" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span style={{ fontSize: "var(--text-xs)" }}>
                    Mail
                  </span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* ClarityUX Card */}
          <div className="w-full">
            <motion.div
              className="bg-card p-5 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("stone")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-secondary)",
                filter: "var(--drop-shadow-md)",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  ClarityUX™
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  JUL 2025 - PRESENT
                </span>
              </div>
              <p
                className="text-foreground/80 font-body"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Founder & Developer
              </p>
              {expandedCard === "stone" && (
                <p
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "bold",
                    lineHeight: "1.6",
                  }}
                >
                  Built a Figma plugin with 2.6K+ users that
                  helps designers conduct UX research directly
                  in Figma.
                </p>
              )}
            </motion.div>
          </div>

          {/* Toptal Card */}
          <div className="w-full">
            <motion.div
              className="bg-card p-5 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("prata")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-accent)",
                filter: "var(--drop-shadow-md)",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  Toptal
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  FEB 2022 - JUL 2023
                </span>
              </div>
              <p
                className="text-foreground/80 font-body"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Product Designer
              </p>
              {expandedCard === "prata" && (
                <div
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    • Global design consultancy EMEA and APAC
                  </p>
                  <p>
                    • Led development of a scalable design
                    system framework for Invygo, Dubai
                  </p>
                  <p>
                    • Short term projects to enhance onboarding,
                    usability and conversions for Decisions,
                    Sweden
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Location Badge */}
          <div className="flex justify-center pt-4">
            <motion.div
              className="px-4 py-2 bg-chart-5 text-primary-foreground border-2 border-primary-foreground inline-flex items-center gap-2"
              style={{
                borderRadius: "var(--radius-lg)",
                filter: "var(--drop-shadow-sm)",
              }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <MapPin className="w-4 h-4" />
              <p
                className="font-display"
                style={{
                  fontSize: "var(--text-sm)",
                  letterSpacing: "0.5px",
                }}
              >
                NYC
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="relative px-6 pt-24 pb-24 overflow-visible"
      style={{
        backgroundColor: "transparent",
        minHeight: "100vh",
      }}
    >
      <div
        className="relative w-full h-full max-w-[1400px] mx-auto"
        ref={containerRef}
      >
        {/* PROFILE CARD - Center */}
        <DraggableElement
          id="profile"
          initialPosition={profilePosition}
          baseZIndex={30}
          currentZIndex={getZIndex("profile", 30)}
          animationDelay={0}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(-2deg)",
              width: "480px",
            }}
          >
            <div
              className="bg-primary text-primary-foreground p-8 shadow-sm relative"
              style={{
                borderRadius: "var(--radius-card)",
                clipPath:
                  "polygon(2% 0%, 98% 1%, 100% 4%, 98% 96%, 96% 100%, 4% 99%, 0% 95%, 1% 4%)",
                filter: "var(--drop-shadow-xl)",
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div>
                  <h1
                    className="text-primary-foreground mb-2"
                    style={{
                      fontSize: "var(--text-2xl)",
                      lineHeight: "1.25",
                      fontWeight: "800",
                    }}
                  >
                    Amlan Mukerjee
                  </h1>
                  <p
                    className="text-primary-foreground/90 font-body"
                    style={{ fontSize: "20px" }}
                  >
                    Product Designer & Developer
                  </p>
                </div>
                <motion.div
                  className="bg-accent flex items-center justify-center overflow-hidden border-4 border-primary-foreground"
                  style={{
                    flexShrink: 0,
                    width: "150px",
                    height: "150px",
                    borderRadius: "var(--radius-md)",
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <ImageWithFallback
                    src={personalPhoto}
                    alt="Amlan Mukerjee - Developer Advocate"
                    className="w-full h-full object-cover"
                    style={{ transform: "scale(1.177)" }}
                  />
                </motion.div>
              </div>
              <p
                className="font-cursive"
                style={{
                  fontSize: "24px",
                  paddingTop: "12px",
                  fontWeight: "normal",
                }}
              >
                I'm a product designer & developer with a
                passion for building products and growing
                communities. Hoping to shape the future of
                design-dev collab. <br />
                <br />
              </p>{" "}
              <br />
              {/* Social Links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/amlan-ux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary-foreground text-primary flex items-center gap-2"
                  style={{ borderRadius: "var(--radius-lg)" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -3,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.div>
                  <span style={{ fontSize: "var(--text-sm)" }}>
                    GitHub
                  </span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/amlanmukerjee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 flex items-center gap-2"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    backgroundColor: "var(--color-card)",
                    color: "var(--color-card-foreground)",
                  }}
                  whileHover={{ scale: 1.05, rotate: 3, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.div>
                  <span style={{ fontSize: "var(--text-sm)" }}>
                    LinkedIn
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:amlan@clarityux.in"
                  className="px-4 py-2 bg-primary-foreground text-primary flex items-center gap-2"
                  style={{ borderRadius: "var(--radius-lg)" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: -3,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span style={{ fontSize: "var(--text-sm)" }}>
                    Mail
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </DraggableElement>

        {/* EXPERIENCE CARDS - Repositioned for better spacing */}

        {/* Prata Health - far right bottom */}
        <DraggableElement
          id="exp-prata"
          initialPosition={{ x: 1050, y: 600 }}
          baseZIndex={25}
          currentZIndex={getZIndex("exp-prata", 25)}
          animationDelay={0.15}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(-3deg)",
              width: "320px",
            }}
          >
            <motion.div
              className="bg-card p-6 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("prata")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-accent)",
                clipPath:
                  "polygon(1% 2%, 99% 0%, 100% 98%, 96% 100%, 2% 99%, 0% 4%)",
                filter: "var(--drop-shadow-lg)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  Toptal
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  FEB 2022 - JUL 2023
                </span>
              </div>
              <p
                className="text-foreground/80 font-body mb-3"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Product Designer
              </p>
              {expandedCard === "prata" && (
                <div
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    • Global design consultancy EMEA and APAC
                  </p>
                  <p>
                    • Led development of a scalable design
                    system framework for Invygo,Dubai
                  </p>
                  <p>
                    • Short term projects to enhance onboarding,
                    usability and conversions for
                    Decisions,Sweden
                  </p>
                </div>
              )}
              <div
                className="absolute top-3 right-3 rounded-full bg-accent"
                style={{ width: "9px", height: "9px" }}
              />
            </motion.div>
          </div>
        </DraggableElement>

        {/* Stone - top middle left */}
        <DraggableElement
          id="exp-stone"
          initialPosition={{ x: 150, y: 80 }}
          baseZIndex={24}
          currentZIndex={getZIndex("exp-stone", 24)}
          animationDelay={0.2}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(2deg)",
              width: "320px",
            }}
          >
            <motion.div
              className="bg-card p-6 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("stone")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-secondary)",
                clipPath:
                  "polygon(2% 1%, 98% 0%, 100% 96%, 97% 100%, 3% 98%, 0% 5%)",
                filter: "var(--drop-shadow-lg)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  ClarityUX™
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  JUL 2025 - PRESENT
                </span>
              </div>
              <p
                className="text-foreground/80 font-body mb-3"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Founder & Developer
              </p>
              {expandedCard === "stone" && (
                <div
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "bold",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    • Scaled my Figma plugin to 2,662+ users,
                    300+ MAUs, 20+ paying accounts, 20% MoM
                    growth
                  </p>
                  <p>
                    • Grew LinkedIn community to 1.1k members
                  </p>
                  <p>
                    • Developing walkthrough videos, marketplace
                    assets, SEO and product
                  </p>
                </div>
              )}
              <div
                className="absolute top-3 right-3 rounded-full bg-secondary"
                style={{ width: "9px", height: "9px" }}
              />
            </motion.div>
          </div>
        </DraggableElement>

        {/* EMEA & APAC Region sticker - below ClarityUX */}
        <DraggableElement
          id="region-emea-apac"
          initialPosition={{ x: 180, y: 200 }}
          baseZIndex={25}
          currentZIndex={getZIndex("region-emea-apac", 25)}
          animationDelay={0.22}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            className="px-5 py-3 bg-accent text-accent-foreground"
            style={{
              transform: "rotate(-10deg) translateY(20px)",
              borderRadius: "var(--radius-lg)",
              clipPath:
                "polygon(3% 1%, 97% 0%, 100% 94%, 96% 100%, 2% 98%, 0% 8%)",
              filter:
                "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
            }}
          >
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4" />
              <p
                className="font-display"
                style={{
                  fontSize: "var(--text-sm)",
                  letterSpacing: "0.5px",
                }}
              >
                EMEA & APAC
              </p>
            </div>
          </div>
        </DraggableElement>

        {/* Pagar.me - bottom left */}
        <DraggableElement
          id="exp-pagarme"
          initialPosition={{ x: 30, y: 550 }}
          baseZIndex={23}
          currentZIndex={getZIndex("exp-pagarme", 23)}
          animationDelay={0.25}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(-4deg)",
              width: "320px",
            }}
          >
            <motion.div
              className="bg-card p-6 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("pagarme")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-chart-2)",
                clipPath:
                  "polygon(1% 3%, 97% 0%, 100% 95%, 98% 100%, 4% 97%, 0% 8%)",
                filter: "var(--drop-shadow-lg)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  Travelopia
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  OCT 2022 - OCT 2025
                </span>
              </div>
              <p
                className="text-foreground/80 font-body mb-3"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Design Manager
              </p>
              {expandedCard === "pagarme" && (
                <div
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    • Led 8 designers across 12 luxury travel
                    brands
                  </p>
                  <p>
                    • Scaled developer collaboration and
                    delivery using Figma MCP
                  </p>
                  <p>
                    • $30M projected revenue uplift from funnel
                    optimization
                  </p>
                  <p>
                    • 82% faster delivery resolution via process
                    optimisation
                  </p>
                </div>
              )}
              <div
                className="absolute top-3 right-3 rounded-full bg-chart-2"
                style={{ width: "9px", height: "9px" }}
              />
            </motion.div>
          </div>
        </DraggableElement>

        {/* Try - top right */}
        <DraggableElement
          id="exp-try"
          initialPosition={{ x: 1050, y: 180 }}
          baseZIndex={22}
          currentZIndex={getZIndex("exp-try", 22)}
          animationDelay={0.6}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(3deg)",
              width: "300px",
            }}
          >
            <motion.div
              className="bg-card p-5 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("try")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-chart-4)",
                clipPath:
                  "polygon(2% 0%, 98% 2%, 100% 97%, 95% 100%, 3% 99%, 0% 6%)",
                filter: "var(--drop-shadow-lg)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  OutSkill
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  JUL 2025 - PRESENT
                </span>
              </div>
              <p
                className="text-foreground/80 font-body"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Mentor, Vibe Coding & MCP
              </p>
              {expandedCard === "try" && (
                <div
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    • Hosted 6+ hands-on workshops covering MCP,
                    Code Connect, Prompt Engineering, JSON
                    automation, and AI integration, reaching
                    1200+ learners globally including designers
                    transitioning into technical workflows
                  </p>
                  <p>
                    • Advocated best practices for AI prompt
                    optimization, multimodal prompting and
                    reusable JSON schema design
                  </p>
                  <p>
                    • Judged 50+ AI-built product concepts at
                    Outskill's Capstone Demo Day
                  </p>
                </div>
              )}
              <div
                className="absolute top-4 right-2 rounded-full bg-chart-4"
                style={{ width: "9px", height: "9px" }}
              />
            </motion.div>
          </div>
        </DraggableElement>

        {/* Dog3 - positioned near paperclip closer to Outskill */}
        <DraggableElement
          id="dog3"
          initialPosition={{ x: 1085, y: 260 }}
          baseZIndex={16}
          currentZIndex={getZIndex("dog3", 16)}
          animationDelay={1.4}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden shadow-sm cursor-pointer"
              style={{
                transform: "rotate(8deg)",
                filter: "var(--drop-shadow-sm)",
                border: "3px solid var(--color-background)",
              }}
              onClick={(e) => handleDogClick("dog3", e)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={
                  image_381d3736b2a5019a83d72a3b5c13c5d25c427f9c
                }
                alt="Dog"
                className="w-full h-full object-cover scale-[1.5] object-[40%_30%]"
              />
            </motion.div>
            {selectedDog === "dog3" && (
              <div
                className="absolute top-full left-1/2 mt-2 bg-accent text-foreground p-3 shadow-sm"
                style={{
                  transform: "translateX(-50%) rotate(-4deg)",
                  borderRadius: "var(--radius-md)",
                  clipPath:
                    "polygon(3% 1%, 97% 0%, 100% 95%, 94% 100%, 2% 98%, 0% 8%)",
                  filter:
                    "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
                  width: "200px",
                  zIndex: 100,
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {dogInfo.dog3.name}
                </p>
                <p
                  className="font-cursive"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {dogInfo.dog3.personality}
                </p>
              </div>
            )}
          </div>
        </DraggableElement>

        {/* National Council of Science - bottom middle */}
        <DraggableElement
          id="exp-ncs"
          initialPosition={{ x: 400, y: 600 }}
          baseZIndex={21}
          currentZIndex={getZIndex("exp-ncs", 21)}
          animationDelay={0.65}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(-2deg)",
              width: "280px",
            }}
          >
            <motion.div
              className="bg-card p-6 shadow-sm relative border-l-8 cursor-pointer"
              onClick={() => toggleCard("ncs")}
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-chart-5)",
                clipPath:
                  "polygon(3% 1%, 97% 0%, 100% 94%, 96% 100%, 2% 97%, 0% 9%)",
                filter: "var(--drop-shadow-lg)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  Indian Institute of Science
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  2015
                </span>
              </div>
              <p
                className="text-foreground/80 font-body"
                style={{ fontSize: "var(--text-sm)" }}
              >
                M.Des, Product Design & Manufacturing
              </p>
              {expandedCard === "ncs" && (
                <p
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "1.6",
                  }}
                >
                  A holistic approach that embraces design
                  engineering, aesthetics, usability,
                  manufactuiting and sustainability.
                </p>
              )}
              <div
                className="absolute top-3 right-3 rounded-full bg-chart-5"
                style={{ width: "9px", height: "9px" }}
              />
            </motion.div>
          </div>
        </DraggableElement>

        {/* EDUCATION CARD - right side middle */}
        <DraggableElement
          id="education"
          initialPosition={{ x: 1000, y: 350 }}
          baseZIndex={35}
          currentZIndex={getZIndex("education", 35)}
          animationDelay={0.1}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(1deg)",
              width: "400px",
            }}
          >
            <motion.div
              onClick={() => toggleCard("education")}
              className="bg-card p-6 shadow-sm relative border-l-8 cursor-pointer"
              style={{
                borderRadius: "var(--radius-lg)",
                borderLeftColor: "var(--color-accent)",
                clipPath:
                  "polygon(1% 2%, 99% 0%, 100% 96%, 97% 100%, 3% 98%, 0% 7%)",
                filter: "var(--drop-shadow-lg)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="text-foreground font-display"
                  style={{ fontSize: "var(--text-lg)" }}
                >
                  Aspire
                </h3>
                <span
                  className="text-foreground/60 font-mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  JAN 2022 - JUL 2023
                </span>
              </div>
              <p
                className="text-foreground/80 font-body mb-3"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Design Manager / Senior Product Designer
              </p>
              {expandedCard === "education" && (
                <div
                  className="text-foreground/70 font-body mt-3 pt-3 border-t border-border"
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: "1.6",
                  }}
                >
                  <p>
                    • Launched billing → 100+ signups in 90
                    days, 70% engagement, 60% retention,
                    $1.3M–$1.8M monthly NTV
                  </p>
                  <p>
                    • 95%+ OKR completion on core fintech
                    experiences
                  </p>
                  <p>
                    • 30% faster workflows, 40% error reduction
                    on dev alignment
                  </p>
                  <p>
                    • OCR Invoice feature adoption 54%,
                    satisfaction ↑ 28%
                  </p>
                </div>
              )}
              <div
                className="absolute top-3 right-3 rounded-full bg-accent"
                style={{ width: "9px", height: "9px" }}
              />
            </motion.div>
          </div>
        </DraggableElement>

        {/* POLAROID PHOTOS - repositioned to minimize overlap */}

        {/* Polaroid 1 - Left side middle */}
        <DraggableElement
          id="polaroid1"
          initialPosition={{ x: 20, y: 320 }}
          baseZIndex={15}
          currentZIndex={getZIndex("polaroid1", 15)}
          animationDelay={1.0}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(2deg)",
              width: "180px",
            }}
          >
            <motion.div
              className="bg-card border-2 border-border p-3 shadow-sm"
              style={{
                clipPath:
                  "polygon(1% 2%, 99% 0%, 100% 98%, 94% 100%, 2% 99%, 0% 6%)",
                filter: "var(--drop-shadow-md)",
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="bg-muted mb-3"
                style={{
                  width: "100%",
                  height: "160px",
                  overflow: "hidden",
                }}
              >
                <ImageWithFallback
                  src={presentationPhoto}
                  alt="Sports action"
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="text-black font-handwritten text-center"
                style={{ fontSize: "var(--text-sm)" }}
              >
                AI Workshops!
              </p>
            </motion.div>
          </div>
        </DraggableElement>

        {/* Polaroid 2 - Bottom left */}
        <DraggableElement
          id="polaroid2"
          initialPosition={{ x: 40, y: 680 }}
          baseZIndex={16}
          currentZIndex={getZIndex("polaroid2", 16)}
          animationDelay={1.05}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(6deg)",
              width: "280px",
            }}
          >
            <motion.div
              className="bg-card border-2 border-border p-3 shadow-sm"
              style={{
                clipPath:
                  "polygon(1% 2%, 99% 0%, 100% 98%, 94% 100%, 2% 99%, 0% 6%)",
                filter: "var(--drop-shadow-md)",
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Video container - covers black bars */}
              <div
                className="bg-muted overflow-hidden relative w-full mb-2"
                style={{
                  height: "200px",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/pyDD53jxDok?si=T2XkPqdFfVRIve-T"
                  title="YouTube video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{
                    border: "none",
                    width: "355px",
                    height: "200px",
                  }}
                />
              </div>

              {/* Polaroid caption */}
              <p
                className="text-foreground font-handwritten text-center"
                style={{
                  fontSize: "var(--text-sm)",
                }}
              >
                Watch this!
              </p>
            </motion.div>
          </div>
        </DraggableElement>

        {/* Polaroid 3 - Bottom middle right */}
        <DraggableElement
          id="polaroid3"
          initialPosition={{ x: 750, y: 620 }}
          baseZIndex={17}
          currentZIndex={getZIndex("polaroid3", 17)}
          animationDelay={1.1}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(-4deg)",
              width: "200px",
            }}
          >
            <motion.div
              className="bg-card border-2 border-border p-3 shadow-sm"
              style={{
                clipPath:
                  "polygon(1% 3%, 97% 0%, 100% 96%, 95% 100%, 4% 98%, 0% 9%)",
                filter: "var(--drop-shadow-md)",
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-square bg-muted mb-2 overflow-hidden">
                <img
                  src={frenchTechPhoto}
                  alt="French Tech India AI Summit 2025"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                />
              </div>
              <p
                className="text-foreground font-handwritten text-center"
                style={{ fontSize: "var(--text-sm)" }}
              >
                AI Summit, La French Tech
              </p>
            </motion.div>
          </div>
        </DraggableElement>

        {/* EVERYDAY TABLE OBJECTS */}

        {/* Coffee cup sticker */}
        <DraggableElement
          id="coffee"
          initialPosition={{ x: 200, y: 450 }}
          baseZIndex={12}
          currentZIndex={getZIndex("coffee", 12)}
          animationDelay={1.15}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <motion.div
            className="w-20 h-20 bg-chart-3 rounded-full flex items-center justify-center shadow-sm cursor-pointer"
            style={{
              transform: "rotate(-15deg)",
              filter: "var(--drop-shadow-sm)",
            }}
            whileHover={{ scale: 1.15, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCoffeeCard(true)}
          >
            <motion.div
              whileHover={{ y: [0, -3, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              <Coffee className="w-10 h-10 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </DraggableElement>

        {/* Triangle ruler */}
        <DraggableElement
          id="ruler"
          initialPosition={{ x: 880, y: 50 }}
          baseZIndex={11}
          currentZIndex={getZIndex("ruler", 11)}
          animationDelay={1.2}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <motion.div
            className="w-32 h-32 border-4 border-primary bg-card/80 flex items-center justify-center shadow-sm"
            style={{
              transform: "rotate(25deg)",
              clipPath: "polygon(50% 10%, 10% 90%, 90% 90%)",
              filter:
                "drop-shadow(3px 4px 8px rgba(0,0,0,0.15))",
            }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Triangle className="w-12 h-12 text-primary" />
            </motion.div>
          </motion.div>
        </DraggableElement>

        {/* Street Fighter sticker */}
        <DraggableElement
          id="game-sticker"
          initialPosition={{ x: 600, y: 380 }}
          baseZIndex={13}
          currentZIndex={getZIndex("game-sticker", 13)}
          animationDelay={1.25}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <motion.div
            className="px-4 py-3 bg-destructive text-destructive-foreground flex items-center justify-center"
            style={{
              transform: "rotate(-12deg)",
              borderRadius: "var(--radius-lg)",
              clipPath:
                "polygon(5% 2%, 95% 0%, 100% 90%, 92% 100%, 3% 98%, 0% 12%)",
              filter: "var(--drop-shadow-md-alt)",
            }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 0.4 }}
            >
              <Gamepad2 className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </DraggableElement>

        {/* Dog photo stickers - repositioned to avoid overlap */}
        <DraggableElement
          id="dog1"
          initialPosition={{ x: 30, y: 40 }}
          baseZIndex={14}
          currentZIndex={getZIndex("dog1", 14)}
          animationDelay={1.3}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden shadow-sm cursor-pointer"
              style={{
                transform: "rotate(12deg)",
                filter: "var(--drop-shadow-sm)",
                border: "3px solid var(--color-background)",
              }}
              onClick={(e) => handleDogClick("dog1", e)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={rosiePhoto}
                alt="Dog"
                className="w-full h-full object-cover"
                style={{
                  transform: "scale(1.4)",
                  objectPosition: "center 35%",
                }}
              />
            </motion.div>
            {selectedDog === "dog1" && (
              <div
                className="absolute top-full left-1/2 mt-2 bg-accent text-foreground p-3 shadow-sm"
                style={{
                  transform: "translateX(-50%) rotate(-3deg)",
                  borderRadius: "var(--radius-md)",
                  clipPath:
                    "polygon(3% 1%, 97% 0%, 100% 95%, 94% 100%, 2% 98%, 0% 8%)",
                  filter:
                    "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
                  width: "200px",
                  zIndex: 100,
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {dogInfo.dog1.name}
                </p>
                <p
                  className="font-cursive"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {dogInfo.dog1.personality}
                </p>
              </div>
            )}
          </div>
        </DraggableElement>

        <DraggableElement
          id="dog2"
          initialPosition={{ x: 30, y: 150 }}
          baseZIndex={15}
          currentZIndex={getZIndex("dog2", 15)}
          animationDelay={1.35}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden shadow-sm cursor-pointer"
              style={{
                transform: "rotate(-18deg)",
                filter: "var(--drop-shadow-sm)",
                border: "3px solid var(--color-background)",
              }}
              onClick={(e) => handleDogClick("dog2", e)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={finalDogPhoto}
                alt="Dog"
                className="w-full h-full object-cover"
                style={{
                  transform: "scale(1.15)",
                  objectPosition: "center 35%",
                }}
              />
            </motion.div>
            {selectedDog === "dog2" && (
              <div
                className="absolute top-full left-1/2 mt-2 bg-accent text-foreground p-3 shadow-sm"
                style={{
                  transform: "translateX(-50%) rotate(2deg)",
                  borderRadius: "var(--radius-md)",
                  clipPath:
                    "polygon(3% 1%, 97% 0%, 100% 95%, 94% 100%, 2% 98%, 0% 8%)",
                  filter:
                    "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
                  width: "200px",
                  zIndex: 100,
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {dogInfo.dog2.name}
                </p>
                <p
                  className="font-cursive"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {dogInfo.dog2.personality}
                </p>
              </div>
            )}
          </div>
        </DraggableElement>

        <DraggableElement
          id="dog4"
          initialPosition={{ x: 295, y: 320 }}
          baseZIndex={17}
          currentZIndex={getZIndex("dog4", 17)}
          animationDelay={1.45}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden shadow-sm cursor-pointer"
              style={{
                transform: "rotate(-25deg)",
                filter:
                  "drop-shadow(2px 3px 6px rgba(0,0,0,0.2))",
                border: "3px solid var(--color-background)",
              }}
              onClick={(e) => handleDogClick("dog4", e)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={attachedDogPhoto}
                alt="Dog"
                className="w-full h-full object-cover scale-150"
                style={{ objectPosition: "60% 35%" }}
              />
            </motion.div>
            {selectedDog === "dog4" && (
              <div
                className="absolute top-full left-1/2 mt-2 bg-accent text-foreground p-3 shadow-sm"
                style={{
                  transform: "translateX(-50%) rotate(3deg)",
                  borderRadius: "var(--radius-md)",
                  clipPath:
                    "polygon(3% 1%, 97% 0%, 100% 95%, 94% 100%, 2% 98%, 0% 8%)",
                  filter:
                    "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
                  width: "200px",
                  zIndex: 100,
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {dogInfo.dog4.name}
                </p>
                <p
                  className="font-cursive"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {dogInfo.dog4.personality}
                </p>
              </div>
            )}
          </div>
        </DraggableElement>

        <DraggableElement
          id="dog5"
          initialPosition={{ x: 1125, y: 780 }}
          baseZIndex={18}
          currentZIndex={getZIndex("dog5", 18)}
          animationDelay={1.5}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden shadow-sm cursor-pointer"
              style={{
                transform: "rotate(15deg)",
                filter: "var(--drop-shadow-sm)",
                border: "3px solid var(--color-background)",
              }}
              onClick={(e) => handleDogClick("dog5", e)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={runningDogPhoto}
                alt="Dog"
                className="w-full h-full object-cover"
                style={{ transform: "scale(1.75)" }}
              />
            </motion.div>
            {selectedDog === "dog5" && (
              <div
                className="absolute top-full left-1/2 mt-2 bg-accent text-foreground p-3 shadow-sm"
                style={{
                  transform: "translateX(-50%) rotate(-2deg)",
                  borderRadius: "var(--radius-md)",
                  clipPath:
                    "polygon(3% 1%, 97% 0%, 100% 95%, 94% 100%, 2% 98%, 0% 8%)",
                  filter:
                    "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
                  width: "200px",
                  zIndex: 100,
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {dogInfo.dog5.name}
                </p>
                <p
                  className="font-cursive"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {dogInfo.dog5.personality}
                </p>
              </div>
            )}
          </div>
        </DraggableElement>

        <DraggableElement
          id="dog-photo-6"
          initialPosition={{ x: 965, y: 520 }}
          baseZIndex={19}
          currentZIndex={getZIndex("dog-photo-6", 19)}
          animationDelay={1.55}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full overflow-hidden shadow-sm cursor-pointer"
              style={{
                transform: "rotate(-8deg)",
                filter: "var(--drop-shadow-sm)",
                border: "3px solid var(--color-background)",
              }}
              onClick={(e) => handleDogClick("dog6", e)}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ImageWithFallback
                src={
                  image_5f0b87f44b5cd7080a272fec884a22e80d3b34a4
                }
                alt="Dog"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {selectedDog === "dog6" && (
              <div
                className="absolute top-full left-1/2 mt-2 bg-accent text-foreground p-3 shadow-sm"
                style={{
                  transform: "translateX(-50%) rotate(1deg)",
                  borderRadius: "var(--radius-md)",
                  clipPath:
                    "polygon(3% 1%, 97% 0%, 100% 95%, 94% 100%, 2% 98%, 0% 8%)",
                  filter:
                    "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
                  width: "200px",
                  zIndex: 100,
                }}
              >
                <p
                  className="font-display mb-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {dogInfo.dog6.name}
                </p>
                <p
                  className="font-cursive"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {dogInfo.dog6.personality}
                </p>
              </div>
            )}
          </div>
        </DraggableElement>

        {/* Sports Polaroid Photo - right side near cards */}
        <DraggableElement
          id="sports-polaroid"
          initialPosition={{ x: 1190, y: 480 }}
          baseZIndex={26}
          currentZIndex={getZIndex("sports-polaroid", 26)}
          animationDelay={1.6}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            style={{
              transform: "rotate(10deg)",
              width: "200px",
            }}
          >
            <motion.div
              className="bg-card border-2 border-border p-3 shadow-sm"
              style={{
                clipPath:
                  "polygon(1% 2%, 99% 0%, 100% 98%, 94% 100%, 2% 99%, 0% 6%)",
                filter: "var(--drop-shadow-md)",
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-square bg-muted mb-2 overflow-hidden">
                <img
                  src={speakerPhoto}
                  alt="Conference event"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "10% 40%",
                    transform: "rotate(-10deg)",
                  }}
                />
              </div>
              <p
                className="text-foreground font-handwritten text-center"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Founders Community ❤️
              </p>
            </motion.div>
          </div>
        </DraggableElement>

        {/* Sports Trophy Icon - right side near cards */}
        <DraggableElement
          id="sports-icon"
          initialPosition={{ x: 1200, y: 100 }}
          baseZIndex={12}
          currentZIndex={getZIndex("sports-icon", 12)}
          animationDelay={1.65}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <motion.div
            className="bg-secondary p-3 shadow-sm cursor-pointer"
            style={{
              borderRadius: "var(--radius-lg)",
              transform: "rotate(-12deg)",
              filter: "var(--drop-shadow-sm)",
            }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSportsCard(true)}
          >
            <PersonStanding className="w-10 h-10 text-background" />
          </motion.div>
        </DraggableElement>

        {/* Paper clips */}
        <DraggableElement
          id="paperclip1"
          initialPosition={{ x: 550, y: 420 }}
          baseZIndex={8}
          currentZIndex={getZIndex("paperclip1", 8)}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <Paperclip
            className="w-8 h-8 text-chart-4"
            style={{ transform: "rotate(45deg)" }}
          />
        </DraggableElement>

        <DraggableElement
          id="paperclip2"
          initialPosition={{ x: 950, y: 280 }}
          baseZIndex={8}
          currentZIndex={getZIndex("paperclip2", 8)}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <Paperclip
            className="w-6 h-6 text-secondary"
            style={{ transform: "rotate(-30deg)" }}
          />
        </DraggableElement>

        {/* Washi tape strips */}
        <DraggableElement
          id="tape1"
          initialPosition={{ x: 700, y: 500 }}
          baseZIndex={7}
          currentZIndex={getZIndex("tape1", 7)}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            className="w-32 h-8 bg-accent/30"
            style={{
              transform: "rotate(-15deg)",
              backdropFilter: "blur(2px)",
            }}
          />
        </DraggableElement>

        <DraggableElement
          id="tape2"
          initialPosition={{ x: 750, y: 140 }}
          baseZIndex={7}
          currentZIndex={getZIndex("tape2", 7)}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            className="w-28 h-6 bg-secondary/20"
            style={{
              transform: "rotate(35deg)",
              backdropFilter: "blur(2px)",
            }}
          />
        </DraggableElement>

        {/* Location sticker */}
        <DraggableElement
          id="location"
          initialPosition={{ x: 1050, y: 100 }}
          baseZIndex={18}
          currentZIndex={getZIndex("location", 18)}
          scatterOrigin={scatterOrigin}
          onInteract={handleElementInteract}
        >
          <div
            className="px-5 py-3 bg-chart-5 text-primary-foreground border-2 border-primary-foreground"
            style={{
              transform: "rotate(-6deg)",
              borderRadius: "var(--radius-lg)",
              clipPath:
                "polygon(4% 2%, 96% 0%, 100% 93%, 95% 100%, 3% 97%, 0% 10%)",
              filter:
                "drop-shadow(3px 4px 7px rgba(0,0,0,0.2))",
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <p
                className="font-display"
                style={{
                  fontSize: "var(--text-sm)",
                  letterSpacing: "0.5px",
                }}
              >
                BLR, India
              </p>
            </div>
          </div>
        </DraggableElement>
      </div>

      {/* Coffee Card Modal */}
      {showCoffeeCard && (
        <CoffeeCard onClose={() => setShowCoffeeCard(false)} />
      )}

      {/* Sports Card Modal */}
      {showSportsCard && (
        <SportsCard onClose={() => setShowSportsCard(false)} />
      )}

      {/* Spotify Player - part of hero section only */}
      <SpotifyPlayer activeSection="home" />

      {/* Reset button - desktop only, positioned within Hero section */}
      <motion.button
        onClick={handleReset}
        className="hidden md:absolute bottom-6 right-6 px-4 py-3 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors md:flex items-center gap-3 font-body group"
        style={{
          borderRadius: "var(--radius-lg)",
          fontSize: "var(--text-sm)",
          zIndex: 50,
          filter: "var(--drop-shadow-lg)",
          pointerEvents: "auto",
          cursor: "pointer",
        }}
        aria-label="Reset canvas"
        title="Reset canvas (Press R)"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95, rotate: -180 }}
      >
        <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
        <span>Reset</span>
        <motion.kbd
          className="px-2 py-1 bg-primary-foreground text-primary font-mono"
          style={{
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--text-xs)",
          }}
          whileHover={{ scale: 1.1 }}
        >
          R
        </motion.kbd>
      </motion.button>
    </section>
  );
}