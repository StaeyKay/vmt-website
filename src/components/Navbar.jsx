import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Artboard 4@3x.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? "980px" : "1200px",
            paddingLeft: scrolled ? "20px" : "32px",
            paddingRight: scrolled ? "20px" : "32px",
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-[1200px] flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/35 backdrop-blur-2xl backdrop-saturate-150 shadow-lg shadow-[#1A33E8]/10 border border-white/20"
              : "bg-[#f0f4ff]/70 backdrop-blur-md border border-[#f0f4ff]/70"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 no-underline"
          >
            <img src={logo} alt="VM Technologies" className="h-8 w-auto scale-200" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-tight no-underline transition-colors duration-200 ${
                    isActive
                      ? "text-[#1A33E8]"
                      : "text-[#2a2b2f] hover:text-[#1A33E8]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium no-underline transition-all duration-200 text-white bg-[#1A33E8] hover:bg-[#1527c7] shadow-md shadow-[#1A33E8]/25 hover:shadow-lg hover:shadow-[#1A33E8]/35"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
            >
              Book a session
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#2a2b2f] hover:bg-[rgba(26,51,232,0.08)] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 pt-28 px-6 pb-10 bg-[#f0f4ff]/95 backdrop-blur-xl flex flex-col gap-4"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-4 text-2xl font-medium no-underline border-b border-[rgba(26,51,232,0.1)] transition-colors ${
                    location.pathname === link.to
                      ? "text-[#1A33E8]"
                      : "text-[#2a2b2f]"
                  }`}
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6"
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center py-4 rounded-full text-base font-medium no-underline text-white bg-[#1A33E8]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Book a session
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
