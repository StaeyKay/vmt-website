const fs = require('fs');

let content = fs.readFileSync('src/pages/Services.jsx', 'utf8');

// 1. Fix Imports
content = content.replace(
  /import \{ useState, useRef \} from "react";.*?import firstHeroVideo/s,
  `import { useState, useRef, useEffect } from "react";
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
import firstHeroVideo`
);

// 2. Fix Carousel and RoadmapStep
const carouselScript = fs.readFileSync('C:/Users/madin/.gemini/antigravity-ide/brain/3c476bc7-cd92-47ac-96b0-635cf33bfe30/scratch/replace_carousel.js', 'utf8');
const carouselStr = carouselScript.split('const newCarousel = `')[1].split('`;')[0];

const roadmapStep = `/* ─── RoadmapStep ─────────────────────────────────────────────── */
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
}`;

content = content.replace(/void ServiceCard;[\s\S]*?function ServiceCarousel\(\{ activeIndex, setActiveIndex \}\) \{[\s\S]*?<\/div>\s*<\/div>\s*\)\;\s*\}/, "void ServiceCard;\n\n" + roadmapStep + "\n\n" + carouselStr);

// 3. Fix CTA Button
content = content.replace(
  /Book a free call\s*<ArrowRight/g,
  `Contact Us
                <ArrowRight`
);

fs.writeFileSync('src/pages/Services.jsx', content);
