import { Link } from "react-router";
import { ArrowUpRight, Briefcase, Globe, MessageSquare } from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageSquare, href: "#", label: "Twitter" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a2b2f] text-white">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-[#1A33E8] via-[#1AE0F0] to-[#1A33E8]" />

      <div className="max-w-[1200px] mx-auto px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A33E8] to-[#1AE0F0] flex items-center justify-center">
                <span className="text-white text-xs font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>H</span>
              </div>
              <span
                className="text-white text-xl font-medium"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Holistic
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "-0.02em",
                maxWidth: "280px",
              }}
            >
              Working with people dealing with stress, burnout, and the feeling that something needs to change.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-[#1AE0F0] hover:bg-[rgba(26,224,240,0.08)] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-4">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              Navigation
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm no-underline transition-colors duration-200 w-fit"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "-0.02em",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1AE0F0")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-5">
            <p
              className="text-xs font-medium uppercase tracking-widest mb-2"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}
            >
              Ready to start?
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "-0.02em",
              }}
            >
              Book a free discovery call and find out if working together is the right fit.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium no-underline text-white bg-gradient-to-r from-[#1A33E8] to-[#1A27cc] hover:opacity-90 transition-opacity w-fit mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a free call
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Holistic. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
          >
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
