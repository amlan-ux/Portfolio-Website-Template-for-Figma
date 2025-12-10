import {
  Mail,
  Linkedin,
  ExternalLink,
  MapPin,
  ArrowRight,
  Heart,
  Zap,
  Star,
  Github,
  X,
  Instagram,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import buildTogetherImg from "figma:asset/8151441f4e92664c1d2aacb47abda9d76fd9316d.png";
import { toast } from "sonner@2.0.3";

// Helper function to copy text with fallback
const copyToClipboard = async (text: string) => {
  try {
    // Try modern clipboard API first
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for browsers that block clipboard API
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (fallbackErr) {
      return false;
    }
  }
};

export function Contact() {
  return (
    <section
      className="py-4 px-6 relative overflow-hidden pt-[4rem] md:pt-[0.5rem]"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Title */}
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
            <h2 className="font-display" style={{ fontSize: "var(--text-4xl)" }}>
              Get in touch
            </h2>
          </div>
        </motion.div>

        {/* Scattered decorative stickers */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 8 }}
          transition={{ delay: 0.3 }}
          className="absolute top-1/4 -left-6 bg-primary text-primary-foreground px-6 py-3 shadow-lg font-handwritten"
          style={{
            borderRadius: "var(--radius-lg)",
            fontSize: "var(--text-base)",
          }}
          whileHover={{ scale: 1.1, rotate: 0, y: -3 }}
        >
          Let's chat! ✨
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Tape decoration */}
            <div
              className="absolute -top-6 left-1/4 w-32 h-10 backdrop-blur-sm"
              style={{
                backgroundColor: "#FFC0CB",
                transform: "rotate(-8deg)",
                zIndex: 10,
                clipPath:
                  "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
              }}
            />

            <div
              className="relative p-6 shadow-2xl border-4"
              style={{
                backgroundColor: "#FDE047",
                color: "var(--color-foreground)",
                borderColor: "#000000",
                borderRadius: "var(--radius-card)",
                clipPath:
                  "polygon(0% 3%, 3% 0%, 97% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 97%)",
              }}
            >
              {/* Corner decoration */}
              <div
                className="absolute top-3 right-3 w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    "var(--color-foreground-alpha-20)",
                }}
              />
              <div
                className="absolute bottom-3 left-3 w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    "var(--color-foreground-alpha-20)",
                }}
              />

              {/* Decorative illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-6 w-64 mx-auto relative z-10"
              >
                <img
                  src={buildTogetherImg}
                  alt="Let's build together illustration"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>

              <p
                className="font-body relative z-10"
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-foreground)",
                  opacity: 0.8,
                }}
              >
From building products to running Vibe Coding workshops, I’ve seen how the right support can empower developers and creators. Let's explore how we can continue growing this ecosystem together.
              </p>
            </div>

            {/* Paper clip decoration */}
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-card border-2 border-border shadow-lg flex items-center justify-center"
              style={{
                borderRadius: "var(--radius-lg)",
                transform: "rotate(-15deg)",
              }}
            >
              <Star
                className="w-8 h-8 text-secondary"
                fill="currentColor"
              />
            </div>
          </motion.div>

          {/* Right - Contact Cards */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: "amlan@clarityux.in",
                href: "mailto:amlan@clarityux.in",
                rotation: -1,
                delay: 0.4,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "amlanmukerjee",
                href: "https://www.linkedin.com/in/amlanmukerjee/",
                rotation: -2,
                delay: 0.5,
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                onClick={async (e) => {
                  if (contact.href.startsWith("mailto:")) {
                    // prevent parent handlers but allow default navigation fallback later
                    e.stopPropagation();

                    const mail = "mailto:amlan@clarityux.in";

                    // copy to clipboard (best-effort)
                    const success = await copyToClipboard("amlan@clarityux.in");

                    if (success) {
                      toast.success("Email copied to clipboard!", {
                        description: "Opening your mail client...",
                        duration: 3000,
                      });
                    } else {
                      toast.error("Could not copy email. Opening mail client...", {
                        duration: 3500,
                      });
                    }

                    // Give the toast a beat, then try multiple navigation fallbacks:
                    // 1) try window.open (may be blocked), 2) fallback to location.href
                    setTimeout(() => {
                      try {
                        const w = window.open(mail, "_blank", "noopener,noreferrer");
                        if (!w) {
                          // popup blocked — navigate current tab as last resort
                          window.location.href = mail;
                        }
                      } catch {
                        window.location.href = mail;
                      }
                    }, 80);
                  }
                }}
                target={
                  contact.href.startsWith("http") ||
                  contact.href.startsWith("mailto:")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: contact.rotation,
                }}
                transition={{ delay: contact.delay }}
                whileHover={{ scale: 1.03, rotate: 0, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-card border-2 border-border hover:border-secondary p-6 transition-all group shadow-lg hover:shadow-xl relative"
                style={{
                  borderRadius: "var(--radius-card)",
                  clipPath:
                    "polygon(1% 0%, 99% 0%, 100% 1%, 100% 99%, 98% 100%, 2% 100%, 0% 99%, 0% 2%)",
                }}
              >
                {/* Torn edge effect */}
                <div
                  className="absolute top-0 left-12 w-16 h-2 bg-background/50"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                  }}
                />

                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md"
                    style={{
                      backgroundColor: "#000000",
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-foreground/80 mb-1 font-body"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      {contact.label}
                    </div>
                    <div
                      className="text-foreground font-body"
                      style={{ fontSize: "var(--text-base)" }}
                    >
                      {contact.value}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/60 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>

                {/* Decorative dot */}
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-secondary/30 rounded-full" />
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.03, rotate: 0, y: -5 }}
              className="bg-card border-2 border-border hover:border-secondary p-6 shadow-lg hover:shadow-xl transition-all relative group"
              style={{
                borderRadius: "var(--radius-card)",
                clipPath:
                  "polygon(1% 0%, 99% 0%, 100% 1%, 100% 99%, 98% 100%, 2% 100%, 0% 99%, 0% 2%)",
              }}
            >
              {/* Torn edge effect */}
              <div
                className="absolute top-0 left-12 w-16 h-2 bg-background/50"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                }}
              />

              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md"
                  style={{
                    backgroundColor: "#000000",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div
                    className="text-foreground/80 mb-1 font-body"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Location
                  </div>
                  <div
                    className="text-foreground font-body"
                    style={{ fontSize: "var(--text-base)" }}
                  >
                    Bengaluru, India · APAC, EMEA & USA
                    Travel-Ready
                  </div>
                </div>
              </div>

              {/* Decorative dot */}
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-secondary/30 rounded-full" />
            </motion.div>

            {/* Quick Links */}
          </div>
        </div>

        {/* FOOTER - Social Links */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 pt-6 border-t-2 border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-20">
            {/* Social Links */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span
                className="text-foreground/70 font-body hidden"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Connect with me:
              </span>
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/amlanmukerjee/",
                  label: "LinkedIn",
                  color: "var(--color-linkedin)",
                  iconColor: "#ffffff",
                },
                {
                  icon: Github,
                  href: "https://github.com/amlan-ux",
                  label: "GitHub",
                  color: "#000000",
                  iconColor: "#ffffff",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/amlan.music/?hl=en",
                  label: "Instagram",
                  color: "#E1306C",
                  iconColor: "#ffffff",
                },
                {
                  icon: X,
                  href: "https://x.com/AmlanMukerjee",
                  label: "X",
                  color: "#000000",
                  iconColor: "#ffffff",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: Math.random() * 10 - 5,
                  }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 0, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all relative group"
                  style={{
                    backgroundColor: social.color,
                    borderRadius: "var(--radius-md)",
                    clipPath:
                      "polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)",
                  }}
                >
                  <social.icon
                    className="w-5 h-5"
                    style={{ color: social.iconColor }}
                  />

                  {/* Tooltip on hover */}
                  <span
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-body"
                    style={{
                      borderRadius: "var(--radius-sm)",
                      fontSize: "var(--text-xs)",
                    }}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Copyright / Credits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center md:text-right"
            >
              <p
                className="text-foreground/60 font-body"
                style={{ fontSize: "var(--text-sm)" }}
              >
                © 2025 Amlan Mukerjee · Built with ❤️ and Figma
                Make
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}