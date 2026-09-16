import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Quote, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import servicesBackground from "../assets/images/pexels-sash2s-16592498.jpg";
import microsoftLicensingBackground from "../assets/images/microsft licesing.jpg";
import itInfrastructureBackground from "../assets/images/it-infrastructure-3.jpg";
import digitalTransformationBackground from "../assets/images/digital-transformation.jpg";
import aiTechnologyBackground from "../assets/images/ai-technology.jpg";
import cybersecurityBackground from "../assets/images/cybersecurity.jpg";
import mobileAppBackground from "../assets/images/mobile-app.jpg";
import workplaceBackground from "../assets/images/workplace.jpg";
import ctaBackground from "../assets/images/cta-background.jpg";
import firstHeroVideo from "../assets/images/14482688_3840_2160_25fps.mp4";
import secondHeroVideo from "../assets/images/7140928-uhd_3840_2160_24fps.mp4";
import thirdHeroVideo from "../assets/images/6963744-hd_1920_1080_25fps.mp4";

const heroVideos = [firstHeroVideo, secondHeroVideo, thirdHeroVideo];

/* ─── Animation Variants ─────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── InViewSection wrapper ──────────────────────────────────── */
function InViewSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ────────────────────────────────────────────────────── */
const serviceTemplates = [
  {
    id: "01",
    title: "1:1 Coaching Sessions",
    tagline: "Personal · Deep · Transformative",
    description:
      "Private one-on-one sessions tailored entirely to you. We'll identify the patterns keeping you stuck, work through them together, and build practical tools you can use between sessions. This is where real, lasting change begins.",
    includes: [
      "50-minute video or in-person sessions",
      "Personalised session summary & action plan",
      "WhatsApp support between sessions",
      "Monthly progress review",
      "Access to my resource library",
    ],
    price: "from $180 / session",
    cta: "Book a discovery call",
    accent: "#1A33E8",
    badge: "Most popular",
  },
  {
    id: "02",
    title: "Group Coaching Programme",
    tagline: "Community · Structure · Momentum",
    description:
      "A 6-week live group programme for people who want the coaching experience within a supportive community. You'll get coaching calls, accountability partners, and a proven framework to create change faster together.",
    includes: [
      "6 weekly 90-minute live group calls",
      "Private community & peer accountability",
      "Weekly worksheets & reflection prompts",
      "Two 30-min 1:1 check-in calls",
      "Lifetime access to recordings",
    ],
    price: "from $480 / programme",
    cta: "Join the next cohort",
    accent: "#1AE0F0",
    badge: null,
  },
  {
    id: "03",
    title: "Immersive Day Workshops",
    tagline: "In-person · Focused · Energising",
    description:
      "Full-day in-person workshops for individuals or small teams. We spend a focused day together diving deep, clearing mental clutter, and leaving with a clear roadmap. Perfect for a reset or a breakthrough moment.",
    includes: [
      "Full day (10am – 5pm) facilitated session",
      "Curated materials & workbook",
      "Catered lunch & refreshments",
      "30-day follow-up email support",
      "Certificate of completion",
    ],
    price: "from $850 / day",
    cta: "Enquire now",
    accent: "#1A33E8",
    badge: null,
  },
];

const services = Array.from({ length: 10 }, (_, index) => ({
  ...serviceTemplates[index % serviceTemplates.length],
  ...(index === 0
    ? {
        title: "Software Development",
        tagline: "Scalable · Reliable · Tailored",
        description:
          "Custom software solutions designed around your business, from robust web platforms to focused tools that simplify work and create room for growth.",
        includes: [
          "Custom web and application development",
          "Responsive user interface implementation",
          "API and third-party integrations",
          "Quality assurance and performance testing",
          "Ongoing maintenance and support",
        ],
        price: "Enquire for a tailored quote",
        cta: "Discuss your project",
      }
    : {}),
  id: String(index + 1).padStart(2, "0"),
  badge: index === 0 ? "Most popular" : null,
}));

const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We begin with a deep-dive into your current technology landscape, business goals, and pain points — mapping every opportunity and risk before a single line of work begins.",
  },
  {
    number: "02",
    title: "Strategy & Solution Design",
    description:
      "Our experts design a tailored ICT roadmap aligned to your objectives. Architecture, licensing, security posture and scalability are all planned before deployment.",
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description:
      "We deploy your solution with precision — integrating seamlessly into your existing environment, minimising downtime and ensuring every component is secure from day one.",
  },
  {
    number: "04",
    title: "Optimise & Scale",
    description:
      "Post-launch, we continuously monitor, refine, and scale your systems. As your business evolves, your technology evolves with it — supported by our expert team.",
  },
];

const testimonials = [
  {
    quote:
      "I came in completely burnt out, not knowing where to start. After three months of 1:1 sessions, I had my energy back, a new job offer, and finally felt like myself again.",
    name: "Sarah M.",
    role: "Marketing Director",
    rating: 5,
  },
  {
    quote:
      "The group programme was unlike anything I'd done before. The accountability and community aspect kept me going even in the hard weeks. I made real friendships too.",
    name: "James T.",
    role: "Freelance Designer",
    rating: 5,
  },
  {
    quote:
      "The immersive day was the reset I didn't know I needed. Seven hours that changed the direction of my entire year. Worth every penny and more.",
    name: "Priya K.",
    role: "Entrepreneur",
    rating: 5,
  },
];

const faqs = [
  {
    q: "What types of businesses does VM Technologies work with?",
    a: "We work with businesses of all sizes — from growing SMEs to large enterprises — across a wide range of industries. Whether you're modernising legacy systems or building new digital capabilities from scratch, we have the expertise to help.",
  },
  {
    q: "How do I know which ICT service is right for my organisation?",
    a: "We start every engagement with a free discovery session to assess your current technology landscape, business goals, and pain points. From there, we recommend a tailored solution — no pressure, no one-size-fits-all packages.",
  },
  {
    q: "How long does a typical implementation take?",
    a: "Timelines vary by solution complexity. A Microsoft Licensing audit can be completed in days, while a full digital transformation roadmap may span several months. We provide clear project timelines and milestones from day one.",
  },
  {
    q: "Is VM Technologies a Microsoft partner?",
    a: "Yes. We are a certified Microsoft solutions partner, which means we can provide genuine Microsoft licensing, volume agreements, and expert guidance on Microsoft 365, Azure, and enterprise software at competitive rates.",
  },
  {
    q: "How do you ensure the security of our systems during deployment?",
    a: "Security is baked into every phase of our process — not bolted on afterwards. We conduct risk assessments, apply zero-trust principles, and follow industry best practices to ensure your environment is secure from day one.",
  },
  {
    q: "Do you offer ongoing support after implementation?",
    a: "Absolutely. We offer flexible post-implementation support and managed services to monitor, maintain, and continuously optimise your technology environment as your business evolves.",
  },
];

/* ─── ServiceCard ─────────────────────────────────────────────── */
function ServiceCard({ service, index, backgroundImage }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isSoftwareCard = service.id === "01";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "rgba(255,255,255,0.22)",
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(240,244,255,0.18), rgba(240,244,255,0.18)), url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: isSoftwareCard
          ? "1px solid rgba(255,255,255,0.7)"
          : "1px solid rgba(26,51,232,0.1)",
        boxShadow: isSoftwareCard
          ? "0 18px 50px rgba(26,51,232,0.14), inset 0 1px 0 rgba(255,255,255,0.9)"
          : "0 2px 40px rgba(26,51,232,0.06), inset 0 1px 0 rgba(255,255,255,0.55)",
        borderRadius: "24px",
        overflow: "hidden",
        marginLeft: "-28px",
        marginRight: "-28px",
        width: "calc(100% + 56px)",
        minHeight: "620px",
        backdropFilter: "blur(24px) saturate(145%)",
        WebkitBackdropFilter: "blur(24px) saturate(145%)",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "4px",
          width: "100%",
          background:
            service.accent === "#1AE0F0"
              ? "linear-gradient(90deg,#1AE0F0,#1A33E8)"
              : "linear-gradient(90deg,#1A33E8,#1AE0F0)",
        }}
      />

      <div style={{ padding: "40px", paddingTop: "36px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "56px",
                color: "#1026b8",
                lineHeight: 1,
                fontWeight: 400,
                textShadow: "0 1px 2px rgba(255,255,255,0.8)",
              }}
            >
              {service.id}
            </span>
            <div>
              {service.badge && (
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 12px",
                    borderRadius: "999px",
                    background: "rgba(26,51,232,0.08)",
                    color: "#1A33E8",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    marginBottom: "6px",
                  }}
                >
                  {service.badge}
                </span>
              )}
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(20px, 2vw, 26px)",
                  color: "#2a2b2f",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginTop: "4px",
                  textShadow: "0 1px 2px rgba(255,255,255,0.85)",
                }}
              >
                {service.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            lineHeight: 1.75,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            marginBottom: "32px",
            textShadow: "0 1px 2px rgba(255,255,255,0.8)",
          }}
        >
          {service.description}
        </p>

        {/* Two-column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Includes list */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#252832",
                marginBottom: "16px",
                textShadow: "0 1px 2px rgba(255,255,255,0.85)",
              }}
            >
              What's included
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {service.includes.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "rgba(26,51,232,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <Check size={11} color="#1A33E8" strokeWidth={2.5} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.6,
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                      textShadow: "0 1px 2px rgba(255,255,255,0.85)",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price + CTA */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
            <div
              style={{
                borderRadius: "16px",
                padding: "24px",
                background: "rgba(26,51,232,0.04)",
                border: "1px solid rgba(26,51,232,0.08)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  textShadow: "0 1px 2px rgba(255,255,255,0.85)",
                }}
              >
                Investment
              </p>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "26px",
                  color: "#1A33E8",
                  fontWeight: 400,
                  marginBottom: "8px",
                  textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                }}
              >
                {service.price}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  textShadow: "0 1px 2px rgba(255,255,255,0.85)",
                }}
              >
                Flexible payment plans available on request.
              </p>
            </div>

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 24px",
                borderRadius: "999px",
                background: "linear-gradient(135deg,#1A33E8,#1527c7)",
                color: "white",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(26,51,232,0.28)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {service.cta}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

void ServiceCard;

/* ─── RoadmapStep ─────────────────────────────────────────────── */
function RoadmapStep({ step, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
        position: "relative",
      }}
    >
      {/* Node */}
      <div style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "white",
        border: "3px solid rgba(26,224,240,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        position: "relative",
        zIndex: 1,
        boxShadow: "0 0 0 6px rgba(26,224,240,0.12)",
        marginBottom: "24px",
      }}>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          color: "#1A33E8",
        }}>
          {step.number}
        </span>
      </div>

      {!isLast && (
        <div style={{
          position: "absolute",
          top: "27px",
          right: "-4px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "rgba(26,224,240,0.6)",
          zIndex: 2,
        }} />
      )}

      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "10px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#1AE0F0",
        marginBottom: "10px",
      }}>
        Phase {step.number}
      </span>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        color: "#ffffff",
        margin: "0 0 12px",
        lineHeight: 1.3,
      }}>
        {step.title}
      </p>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "12.5px",
        lineHeight: 1.75,
        color: "rgba(255,255,255,0.6)",
        margin: 0,
      }}>
        {step.description}
      </p>
    </motion.div>
  );
}

function ServiceCarousel({ activeIndex, setActiveIndex }) {
  const slides = [
    {
      title: "Software Development",
      subtitle: "SOFTWARE DEVELOPMENT",
      description: "We build scalable, high-performance software tailored to your business. From web platforms to custom tools, we turn complex challenges into clean, reliable solutions.",
      image: servicesBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "SOFTWARE\nDEVELOPMENT",
      detail: "Custom solutions",
    },
    {
      title: "Microsoft Licensing",
      subtitle: "MICROSOFT LICENSING",
      description: "Simplify your Microsoft licensing with expert guidance. We help you find the right plans, reduce costs, and stay fully compliant across your organisation.",
      image: microsoftLicensingBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "MICROSOFT\nLICENSING",
      detail: "License management",
    },
    {
      title: "IT Services",
      subtitle: "IT SERVICES & INFRASTRUCTURE",
      description: "Robust and reliable IT infrastructure to support your business operations. We provide end-to-end IT services, network management, and support to ensure smooth daily operations.",
      image: itInfrastructureBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "IT SERVICES &\nINFRASTRUCTURE",
      detail: "Infrastructure support",
    },
    {
      title: "Digital Transformation",
      subtitle: "DIGITAL TRANSFORMATION CONSULTING",
      description: "Empower your business with strategic digital transformation. We help you modernize processes, adopt new technologies, and drive innovation for sustainable growth.",
      image: digitalTransformationBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "DIGITAL\nTRANSFORMATION",
      detail: "Strategic consulting",
    },
    {
      title: "AI & Intelligent Tech",
      subtitle: "AI AND INTELLIGENT TECHNOLOGY",
      description: "Unlock the power of artificial intelligence. We build and integrate intelligent solutions that automate tasks, analyze data, and create smarter experiences for your business.",
      image: aiTechnologyBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "AI & INTELLIGENT\nTECHNOLOGY",
      detail: "AI Capabilities",
    },
    {
      title: "Cybersecurity",
      subtitle: "CYBERSECURITY SERVICES",
      description: "Protect your business from evolving threats. We provide comprehensive cybersecurity services, risk assessments, and proactive defense strategies to keep your data secure.",
      image: cybersecurityBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "CYBERSECURITY\nSERVICES",
      detail: "Security defense",
    },
    {
      title: "Mobile App Development",
      subtitle: "MOBILE APPLICATION DEVELOPMENT",
      description: "Build engaging and intuitive mobile experiences. We design and develop custom iOS and Android applications that delight users and drive your business forward on the go.",
      image: mobileAppBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "MOBILE APP\nDEVELOPMENT",
      detail: "Mobile solutions",
    },
    {
      title: "Workplace Solutions",
      subtitle: "WORKPLACE AND COLLABORATION SOLUTIONS",
      description: "Empower your team with modern workplace solutions. We provide collaboration tools and platforms that connect your people, streamline workflows, and boost productivity anywhere.",
      image: workplaceBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "WORKPLACE &\nCOLLABORATION",
      detail: "Team productivity",
    },
  ];

  const selectedSlide = slides[activeIndex] ?? slides[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      role="region"
      aria-label="Destination carousel"
      style={{
        position: "relative",
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        minHeight: "calc(100vh - 80px)",
        height: "calc(100vh - 80px)",
        maxHeight: "760px",
        overflow: "hidden",
        background: "#0a0d12",
      }}
    >
      {/* ── Smooth crossfade background ── */}
      {slides.map((slide, idx) => (
        <motion.div
          key={slide.subtitle}
          animate={{ opacity: idx === activeIndex ? 1 : 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "opacity",
          }}
        />
      ))}

      {/* Dark overlay – heavier on left, feathers out right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(6,10,16,0.82) 32%, rgba(6,10,16,0.18) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Content layer ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "grid",
          /* Left hero narrower, right cards wider */
          gridTemplateColumns: "38fr 62fr",
          color: "#ffffff",
        }}
      >
        {/* ── LEFT: Hero text ──────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 28px 52px 52px",
          }}
        >
          {/* Accent line + location */}
          <motion.div
            key={`loc-${activeIndex}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}
          >
            <div style={{ width: "28px", height: "2px", background: "#ffffff", flexShrink: 0 }} />
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.78)",
                fontFamily: "'Inter', sans-serif",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              {selectedSlide.location}
            </span>
          </motion.div>

          {/* Big stacked title */}
          <motion.h2
            key={`title-${activeIndex}`}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(32px, 3.5vw, 56px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              textTransform: "uppercase",
            }}
          >
            {selectedSlide.subtitle.split(" ").map((word, i) => (
              <span key={i} style={{ display: "block" }}>{word}</span>
            ))}
          </motion.h2>

          {/* Description */}
          <motion.p
            key={`desc-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              margin: "0 0 26px",
              fontSize: "12px",
              lineHeight: 1.82,
              maxWidth: "280px",
              color: "rgba(255,255,255,0.62)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {selectedSlide.description}
          </motion.p>

          {/* Discover Location button */}
          <motion.div
            key={`btn-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <button
              type="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "none",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                color: "#fff",
                padding: "9px 22px 9px 9px",
                fontSize: "10.5px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                ▶
              </span>
              Discover Location
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT: Equal portrait card strip ────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
          }}
        >
          {/* 4 equal-width, equal-height portrait cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              alignItems: "flex-end",
              gap: "12px",
              padding: "0 24px 0 0",
            }}
          >
            {Array.from({ length: 4 }, (_, i) => {
              const slide = slides[(activeIndex + i) % slides.length];
              return (
                <motion.button
                  key={`card-${(activeIndex + i) % slides.length}`}
                  layoutId={`card-layout-${(activeIndex + i) % slides.length}`}
                  type="button"
                  onClick={() => setActiveIndex((activeIndex + i) % slides.length)}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    opacity: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
                  }}
                  style={{
                    /* Uniform height for all cards */
                    height: "260px",
                    border: "none",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    padding: 0,
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 16px 36px rgba(0,0,0,0.32)",
                    outline: i === 0 ? "1px solid rgba(255,255,255,0.3)" : "none",
                    flexShrink: 0,
                  }}
                >
                  {/* Bottom gradient */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.68) 100%)",
                    }}
                  />
                  {/* Labels */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "10px 14px 14px",
                      zIndex: 2,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "8px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.65)",
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: "4px",
                      }}
                    >
                      {slide.cardLabel}
                    </span>
                    {slide.cardTitle.split("\n").map((line, li) => (
                      <span
                        key={li}
                        style={{
                          display: "block",
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.03em",
                          textTransform: "uppercase",
                          color: "#ffffff",
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: 1.2,
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Nav arrows + slide counter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 24px 18px 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((activeIndex + slides.length - 1) % slides.length)
                }
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              >
                ›
              </button>
            </div>

            <span
              style={{
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "-0.08em",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1,
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

//-- ste

/* ─── StepCard ────────────────────────────────────────────────── */
function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: index % 2 === 0 ? 34 : -34 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: "easeInOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: 0,
        padding: index % 2 === 0 ? "0 40px 28px 24px" : "92px 40px 0 24px",
        borderRight: index < steps.length - 1 ? "2px solid rgba(255,255,255,0.5)" : "none",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#1A33E8",
          background: "white",
          border: "1px solid rgba(255,255,255,0.55)",
          boxShadow: "0 8px 24px rgba(8,22,110,0.2)",
        }}
      >
        <span
          style={{
            color: "#1A33E8",
            fontSize: "11px",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {step.number}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(24px, 2.5vw, 34px)",
          color: "white",
          fontWeight: 400,
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {step.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.72)",
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {step.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
        <span
          style={{
            padding: "7px 14px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.16)",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "white",
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.03em",
          }}
        >
          Phase {step.number}
        </span>
      </div>
    </motion.div>
  );
}

/* ─── TestimonialCard ─────────────────────────────────────────── */
function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "32px",
        borderRadius: "24px",
        background: "white",
        border: "1px solid rgba(26,51,232,0.08)",
        boxShadow: "0 2px 30px rgba(26,51,232,0.05)",
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: testimonial.rating }).map((_, si) => (
          <Star key={si} size={14} fill="#1A33E8" color="#1A33E8" />
        ))}
      </div>

      <Quote size={24} color="rgba(26,51,232,0.18)" />

      <p
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#2a2b2f",
          fontStyle: "italic",
          flex: 1,
          margin: 0,
        }}
      >
        "{testimonial.quote}"
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingTop: "12px",
          borderTop: "1px solid rgba(26,51,232,0.08)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "14px",
            fontWeight: 500,
            flexShrink: 0,
            background:
              index % 2 === 0
                ? "linear-gradient(135deg,#1A33E8,#1AE0F0)"
                : "linear-gradient(135deg,#1AE0F0,#1A33E8)",
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          {testimonial.name[0]}
        </div>
        
        //- --- adding the 360 admin sector to the OSIRIS software 7
        <div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#2a2b2f",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11.5px",
              color: "rgba(42,43,47,0.48)",
              margin: 0,
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── FAQItem ─────────────────────────────────────────────────── */
function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(26,51,232,0.1)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "20px 0",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "17px",
            color: "#2a2b2f",
            lineHeight: 1.4,
            fontWeight: 400,
          }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: open ? "#1A33E8" : "rgba(26,51,232,0.08)",
            transition: "background 0.2s",
          }}
        >
          <ChevronDown size={14} color={open ? "white" : "#1A33E8"} strokeWidth={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: 1.75,
                color: "rgba(42,43,47,0.68)",
                letterSpacing: "-0.02em",
                paddingBottom: "20px",
                margin: 0,
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────── */
export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4ff" }}>
      <Navbar />

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "120px",
          paddingBottom: "0",
          paddingLeft: "0",
          paddingRight: "0",
          overflow: "hidden",
          background: "#f0f4ff",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.video
              key={heroVideos[heroVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={() => setHeroVideoIndex((currentIndex) => (currentIndex + 1) % heroVideos.length)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.9) contrast(1.05)",
              }}
            >
              <source src={heroVideos[heroVideoIndex]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(9,14,30,0.68) 0%, rgba(9,14,30,0.4) 38%, rgba(9,14,30,0.2) 100%)",
            }}
          />
        </div>

        {/* Blobs */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: 0,
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(26,224,240,0.13) 0%,transparent 70%)",
            transform: "translate(30%,-30%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(26,51,232,0.08) 0%,transparent 70%)",
            transform: "translate(-30%,30%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            padding: "28px 28px 20px",
            borderRadius: "0",
            background: "transparent",
            border: "none",
            borderBottom: "none",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            minHeight: "calc(100vh - 200px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(52px, 7vw, 90px)",
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              color: "#f5fbff",
              maxWidth: "680px",
              marginBottom: "22px",
              fontWeight: 400,
            }}
          >
            Our{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#8fe9ff",
              }}
            >
              services
            </em>
          </motion.h1>

          {/* Subtitle + stats */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              gap: "32px",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.86)",
                letterSpacing: "-0.03em",
                maxWidth: "520px",
                margin: 0,
              }}
            >
              I work with people dealing with stress, burnout, and the feeling that something needs to change — but they're not sure where to start. Whatever you're carrying, we'll figure it out together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                flexShrink: 0,
                padding: "12px 16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {[
                { value: "200+", label: "Clients helped" },
                { value: "96%", label: "Satisfaction rate" },
                { value: "5 yrs", label: "Experience" },
              ].map(({ value, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "26px",
                      color: "#ffffff",
                      margin: 0,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.72)",
                      margin: "3px 0 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.7)" }} />
      </div>

      {/* ══ SERVICES ════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "0 0 0",
          background: "#f0f4ff",
          marginTop: "-18px",
        }}
      >
        <ServiceCarousel
          activeIndex={activeServiceIndex}
          setActiveIndex={setActiveServiceIndex}
        />
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════ */}
      <section style={{ padding: "96px 24px", background: "#1A33E8", color: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <InViewSection>
            <motion.div variants={fadeUp} style={{ marginBottom: "72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "end" }}>
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1AE0F0" }}>
                  Our Commitment
                </span>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 76px)", color: "white", fontWeight: 400, lineHeight: 1.02, margin: "18px 0 0" }}>
                  Technology that doesn&apos;t just support — it <em style={{ fontStyle: "italic", color: "#1AE0F0" }}>enables</em>.
                </h2>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", margin: 0 }}>
                At VM Technologies, we believe technology should enable your organisation to move faster, operate smarter and compete more effectively. We are committed to delivering innovative, secure and scalable ICT solutions for the digital future — helping our clients navigate change with confidence.
              </p>
            </motion.div>
          </InViewSection>

          {/* ── Roadmap Timeline ── */}
          <div style={{ position: "relative", marginTop: "8px" }}>
            {/* Horizontal connector line */}
            <div style={{
              position: "absolute",
              top: "28px",
              left: "calc(12.5% + 20px)",
              right: "calc(12.5% + 20px)",
              height: "2px",
              background: "rgba(255,255,255,0.2)",
              zIndex: 0,
            }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0",
              }}
            >
              {steps.map((step, i) => (
                <RoadmapStep key={step.number} step={step} index={i} total={steps.length} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section style={{ padding: "96px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "64px",
            }}
          >
            {/* Left */}
            <InViewSection>
              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  position: "sticky",
                  top: "120px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#1AE0F0",
                  }}
                >
                  Got questions?
                </span>
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(32px, 4vw, 50px)",
                    color: "#2a2b2f",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  Frequently asked{" "}
                  <em style={{ fontStyle: "italic" }}>questions</em>
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(42,43,47,0.6)",
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  Can’t find what you’re looking for? Reach out to our team and we’ll get back to you within 24 hours.
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "999px",
                    background: "rgba(26,51,232,0.08)",
                    color: "#1A33E8",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    textDecoration: "none",
                    border: "1px solid rgba(26,51,232,0.14)",
                    width: "fit-content",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1A33E8";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(26,51,232,0.08)";
                    e.currentTarget.style.color = "#1A33E8";
                  }}
                >
                  Ask a question
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </InViewSection>

            {/* Accordion */}
            <div>
              {faqs.map((item, i) => (
                <FAQItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════════════════ */}
      <section style={{ padding: "32px 24px 80px", position: "relative" }}>
        {/* Full-bleed background image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }} />
        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(6,9,15,0.72)",
          zIndex: 1,
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "28px",
              padding: "clamp(48px,6vw,80px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
              background: "rgba(10,14,30,0.55)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(26,224,240,0.22) 0%,transparent 68%)",
                transform: "translate(40%,-40%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: "40%",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(26,224,240,0.1) 0%,transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Text */}
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "480px" }}>
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  color: "white",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Ready to{" "}
                <em style={{ fontStyle: "italic", color: "#1AE0F0" }}>transform</em>{" "}
                your business?
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.72)",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Let’s start with a conversation. Our team is ready to help you navigate the digital future with confidence — no pressure, just clarity.
              </p>
            </div>

            {/* Buttons */}
            <div style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "12px", flexShrink: 0 }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 28px",
                  borderRadius: "999px",
                  background: "white",
                  color: "#1A33E8",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                Contact Us
                <ArrowRight size={14} />
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "16px 28px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              >
                View pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
