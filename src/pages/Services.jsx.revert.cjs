const fs = require('fs');

const userDiffs = [
  // Chunk 1: Imports
  {
    find: `import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Quote, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import servicesBackground from "../assets/images/pexels-sash2s-16592498.jpg";
import microsoftLicensingBackground from "../assets/images/microsft licesing.jpg";
import firstHeroVideo from "../assets/images/14482688_3840_2160_25fps.mp4";`,
    replace: `import { useState, useRef, useEffect } from "react";
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
import firstHeroVideo from "../assets/images/14482688_3840_2160_25fps.mp4";`
  },
  // Chunk 2: Steps
  {
    find: `    title: "Book a free discovery call",
    description:
      "A relaxed 30-minute chat to understand where you are, what you're looking for, and whether we're a good fit. No pressure, no sales pitch.",
  },
  {
    number: "02",
    title: "We build your plan together",
    description:
      "Based on your goals and life situation, we'll design a coaching approach that works for your schedule, learning style, and budget.",
  },
  {
    number: "03",
    title: "You start seeing change",
    description:
      "Each session builds momentum. You'll notice shifts in how you think, respond, and show up — often within the first few weeks.",
  },
  {
    number: "04",
    title: "You carry it forward",
    description:
      "Coaching ends but growth doesn't. You'll leave with tools, frameworks, and self-awareness that serve you for years to come."`,
    replace: `    title: "Discovery & Assessment",
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
      "Post-launch, we continuously monitor, refine, and scale your systems. As your business evolves, your technology evolves with it — supported by our expert team."`
  },
  // Chunk 3: FAQs
  {
    find: `    q: "How do I know which service is right for me?",
    a: "Start with a free discovery call. In 30 minutes we'll figure out together which format — 1:1, group, or workshop — suits your goals, schedule and budget best. There's no obligation.",
  },
  {
    q: "Do you offer packages or single sessions?",
    a: "Both. Single 1:1 sessions are available, but most clients find that a package of 6 or 12 sessions produces the deepest, most lasting results. Packages come with a small discount.",
  },
  {
    q: "How long does it take to see results?",
    a: "Many clients report meaningful shifts within the first 2–3 sessions. Deeper behavioural change typically unfolds over 2–3 months of consistent work together.",
  },
  {
    q: "Are sessions online or in person?",
    a: "1:1 sessions are available online via video call or in person in London. Group programmes run online. Workshops are in-person, with locations announced per cohort.",
  },
  {
    q: "What if I need to reschedule or cancel?",
    a: "Life happens. Sessions can be rescheduled with 48 hours' notice at no charge. Cancellations inside 48 hours may incur a small fee. Full details are in the service agreement.",
  },
  {
    q: "Do you offer a sliding scale or payment plans?",
    a: "Yes. A limited number of reduced-rate spots are available for people who need it. Payment plans (split over 2–3 months) are available for packages and programmes. Just ask."`,
    replace: `    q: "What types of businesses does VM Technologies work with?",
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
    a: "Absolutely. We offer flexible post-implementation support and managed services to monitor, maintain, and continuously optimise your technology environment as your business evolves."`
  },
  // Chunk 4: RoadmapStep and ServiceCarousel Slides
  {
    find: `void ServiceCard;

function ServiceCarousel({ activeIndex, setActiveIndex }) {
  const slides = [
    {
      title: "Switzerland Alps",
      subtitle: "NAGANO PREFECTURE",
      description: "Muñecas, mountains, and scenic trails await. Discover a place where alpine heritage meets modern adventure.",
      image: servicesBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.18), rgba(6, 12, 18, 0.18)), url(\${servicesBackground})\`,
      location: "See more",
      cardWidth: 190,
      height: 210,
      accent: "#d7ebff",
      detail: "Mountain views",
    },
    {
      title: "Marrakech Merzouga",
      subtitle: "MARRAKECH MERZOUGA",
      description: "Golden dunes and layered desert light create a slow, cinematic rhythm for the adventurous spirit.",
      image: microsoftLicensingBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${microsoftLicensingBackground})\`,
      location: "See more",
      cardWidth: 185,
      height: 210,
      accent: "#f7dcbf",
      detail: "Desert horizon",
    },
    {
      title: "Yosemite Valley",
      subtitle: "YOSEMITE NATIONAL PARK",
      description: "Vast granite walls and wild trails invite a deeper connection to nature and a slower way of seeing.",
      image: servicesBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${servicesBackground})\`,
      location: "See more",
      cardWidth: 200,
      height: 230,
      accent: "#ebf6ff",
      detail: "Valley trails",
    },
    {
      title: "Los Angeles Coast",
      subtitle: "LOS ANGELES BEACH",
      description: "Sunlit coastlines and glassy waves bring an easy, airy mood to every day of the journey.",
      image: servicesBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${servicesBackground})\`,
      location: "See more",
      cardWidth: 180,
      height: 200,
      accent: "#dce9ff",
      detail: "Coastal light",
    },
    {
      title: "Patagonia Peaks",
      subtitle: "PATAGONIA PEAKS",
      description: "Ice-carved ridges and remote silence reward those who chase a larger, quieter kind of wonder.",
      image: microsoftLicensingBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${microsoftLicensingBackground})\`,
      location: "See more",
      cardWidth: 188,
      height: 210,
      accent: "#dfeafc",
      detail: "Glacial air",
    },
    {
      title: "Kyoto Trails",
      subtitle: "KYOTO TRAILS",
      description: "Lanterns, cedar paths, and thoughtful detail turn each moment into a quiet, memorable escape.",
      image: servicesBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${servicesBackground})\`,
      location: "See more",
      cardWidth: 190,
      height: 210,
      accent: "#e6f0ff",
      detail: "Temple light",
    },
    {
      title: "Banff Escape",
      subtitle: "BANFF ESCAPE",
      description: "Unfolding lakes and woodland views create a crisp, elevated sense of space and calm.",
      image: microsoftLicensingBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${microsoftLicensingBackground})\`,
      location: "See more",
      cardWidth: 182,
      height: 205,
      accent: "#d9f0ff",
      detail: "Lake air",
    },
    {
      title: "Algarve Shore",
      subtitle: "ALGARVE SHORE",
      description: "Cliffs, coves, and golden light make every stop feel effortlessly cinematic and open.",
      image: servicesBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${servicesBackground})\`,
      location: "See more",
      cardWidth: 196,
      height: 220,
      accent: "#e8f3ff",
      detail: "Sea horizon",
    },
    {
      title: "Dolomites Drift",
      subtitle: "DOLOMITES DRIFT",
      description: "Sharp peaks and rolling cloudlines create a dramatic frame for a slow mountain reset.",
      image: microsoftLicensingBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${microsoftLicensingBackground})\`,
      location: "See more",
      cardWidth: 186,
      height: 212,
      accent: "#dfeeff",
      detail: "Cloud ridge",
    },
    {
      title: "Santorini Calm",
      subtitle: "SANTORINI CALM",
      description: "Whitewashed layers, blue water, and expansive light turn every glance into a postcard memory.",
      image: servicesBackground,
      background: \`linear-gradient(180deg, rgba(6, 12, 18, 0.14), rgba(6, 12, 18, 0.14)), url(\${servicesBackground})\`,
      location: "See more",
      cardWidth: 190,
      height: 210,
      accent: "#dff5ff",
      detail: "Aegean glow",
    },
  ];

  return`,
    replace: `void ServiceCard;

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

      {/* Connector dot to right (hidden on last) */}
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

      {/* Phase label */}
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

      {/* Title */}
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

      {/* Description */}
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
      cardTitle: "SOFTWARE\\nDEVELOPMENT",
      detail: "Custom solutions",
    },
    {
      title: "Microsoft Licensing",
      subtitle: "MICROSOFT LICENSING",
      description: "Simplify your Microsoft licensing with expert guidance. We help you find the right plans, reduce costs, and stay fully compliant across your organisation.",
      image: microsoftLicensingBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "MICROSOFT\\nLICENSING",
      detail: "License management",
    },
    {
      title: "IT Services",
      subtitle: "IT SERVICES & INFRASTRUCTURE",
      description: "Robust and reliable IT infrastructure to support your business operations. We provide end-to-end IT services, network management, and support to ensure smooth daily operations.",
      image: itInfrastructureBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "IT SERVICES &\\nINFRASTRUCTURE",
      detail: "Infrastructure support",
    },
    {
      title: "Digital Transformation",
      subtitle: "DIGITAL TRANSFORMATION CONSULTING",
      description: "Empower your business with strategic digital transformation. We help you modernize processes, adopt new technologies, and drive innovation for sustainable growth.",
      image: digitalTransformationBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "DIGITAL\\nTRANSFORMATION",
      detail: "Strategic consulting",
    },
    {
      title: "AI & Intelligent Tech",
      subtitle: "AI AND INTELLIGENT TECHNOLOGY CAPABILITIES",
      description: "Unlock the power of artificial intelligence. We build and integrate intelligent solutions that automate tasks, analyze data, and create smarter experiences for your business.",
      image: aiTechnologyBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "AI & INTELLIGENT\\nTECHNOLOGY",
      detail: "AI Capabilities",
    },
    {
      title: "Cybersecurity",
      subtitle: "CYBERSECURITY SERVICES",
      description: "Protect your business from evolving threats. We provide comprehensive cybersecurity services, risk assessments, and proactive defense strategies to keep your data secure.",
      image: cybersecurityBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "CYBERSECURITY\\nSERVICES",
      detail: "Security defense",
    },
    {
      title: "Mobile App Dev",
      subtitle: "MOBILE APPLICATION DEVELOPMENT",
      description: "Build engaging and intuitive mobile experiences. We design and develop custom iOS and Android applications that delight users and drive your business forward on the go.",
      image: mobileAppBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "MOBILE APP\\nDEVELOPMENT",
      detail: "Mobile solutions",
    },
    {
      title: "Workplace Solutions",
      subtitle: "WORKPLACE AND COLLABORATION SOLUTIONS",
      description: "Empower your team with modern workplace solutions. We provide collaboration tools and platforms that connect your people, streamline workflows, and boost productivity anywhere.",
      image: workplaceBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "WORKPLACE &\\nCOLLABORATION",
      detail: "Team productivity",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Set to 5 seconds (5000ms) for smooth transitions. 
    return () => clearInterval(timer);
  }, [slides.length, setActiveIndex]);

  return`
  },
  // Chunk 5: Process text and testimonials
  {
    find: `      {/* ══ HOW IT WORKS ════════════════════════════════════════════ */}
      <section style={{ padding: "96px 24px", background: "#1A33E8", color: "white", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <InViewSection>
            <motion.div variants={fadeUp} style={{ marginBottom: "72px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "end" }}>
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1AE0F0" }}>
                  The process
                </span>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px, 6vw, 76px)", color: "white", fontWeight: 400, lineHeight: 1.02, margin: "18px 0 0" }}>
                  How it <em style={{ fontStyle: "italic", color: "#1AE0F0" }}>works</em>
                </h2>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", margin: 0 }}>
                Every phase is designed to create clarity, build momentum, and move you toward meaningful change.
              </p>
            </motion.div>
          </InViewSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              columnGap: "8px",
            }}
          >
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════════════════ */}
      <section style={{ padding: "96px 24px", background: "#f0f4ff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <InViewSection>
            <motion.div variants={fadeUp} style={{ marginBottom: "64px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
                Kind words
              </span>
              <h2
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  color: "#2a2b2f",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Client <em style={{ fontStyle: "italic" }}>stories</em>
              </h2>
            </motion.div>
          </InViewSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>`,
    replace: `      {/* ══ HOW IT WORKS ════════════════════════════════════════════ */}
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
      </section>`
  },
  // Chunk 6: FAQ Text
  {
    find: `Can't find what you're looking for? Drop me a message and I'll get back to you within 24 hours.`,
    replace: `Can’t find what you’re looking for? Reach out to our team and we’ll get back to you within 24 hours.`
  },
  // Chunk 7: CTA Layout
  {
    find: `      {/* ══ CTA BANNER ══════════════════════════════════════════════ */}
      <section style={{ padding: "32px 24px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              background: "linear-gradient(135deg,#1A33E8 0%,#0e1da8 55%,#1a2de0 100%)",
              boxShadow: "0 24px 64px rgba(26,51,232,0.38)",
            }}
          >`,
    replace: `      {/* ══ CTA BANNER ══════════════════════════════════════════════ */}
      <section style={{ padding: "32px 24px 80px", position: "relative" }}>
        {/* Full-bleed background image */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: \`url(\${ctaBackground})\`,
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
          >`
  },
  // Chunk 8: CTA Text
  {
    find: `                Ready to{" "}
                <em style={{ fontStyle: "italic", color: "#1AE0F0" }}>start</em>?
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.68)",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Book a free 30-minute discovery call. No pressure — just a chance to talk, get clear, and see if we're a good fit.
              </p>`,
    replace: `                Ready to{" "}
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
              </p>`
  },
  // Chunk 9: CTA Buttons
  {
    find: `                Book a free call
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

      <Footer />
    </div>`,
    replace: `                Contact Us
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
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "white",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>`
  }
];

let content = fs.readFileSync('src/pages/Services.jsx', 'utf8');

for (const diff of userDiffs) {
  if (content.includes(diff.find)) {
    content = content.replace(diff.find, diff.replace);
    console.log('Reversed a chunk successfully');
  } else {
    console.log('Could not find chunk:');
    console.log(diff.find.substring(0, 50) + '...');
  }
}

fs.writeFileSync('src/pages/Services.jsx', content);
