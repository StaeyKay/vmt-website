// React hooks keep the fixed navigation in sync with the section in view.
import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import vmtLogo from "../assets/images/VMT.png"

// Keep navigation labels and their scroll destinations in one editable place.
const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
]

// Render the original open navigation layout with a sticky cyan active state.
const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    // Add the liquid-glass surface only after content begins moving behind the header.
    const updateScrollState = () => setHasScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollState)
  }, [])

  return <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 sm:px-10 lg:px-16"><nav className={`relative mx-auto flex max-w-[1440px] items-center justify-between text-sm font-medium text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${hasScrolled ? "rounded-full border border-cyan-100/10 bg-slate-950/70 px-5 py-3 shadow-[0_18px_50px_rgba(2,12,27,0.38)] backdrop-blur-2xl sm:px-7" : "border border-transparent px-5 py-3 sm:px-7"}`}>
    {/* The original centered mark remains optically independent from both navigation sides. */}
    {/* NavLink connects each tab to its existing page file and supplies the active styling. */}
    <div className="hidden items-center gap-2 md:flex">{links.map(({ label, to }) => <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `rounded-full px-4 py-2 text-sm transition duration-300 ${isActive ? "bg-[#1AE0F0] text-slate-950 shadow-[0_0_22px_rgba(26,224,240,0.4)]" : "text-white/85 hover:bg-white/10 hover:text-white"}`}>{label}</NavLink>)}</div>
    {/* This is intentionally a logo, not a link; the page is the homepage itself. */}
    <div className="absolute left-1/2 -translate-x-1/2"><img alt="VM Technologies" className="h-10 w-10 object-contain" src={vmtLogo} /></div>
    {/* The CTA uses the same GitHub Pages-safe route as the navigation tabs. */}
    <NavLink to="/contact" className="ml-auto rounded-full bg-[#1AE0F0] px-5 py-3 text-xs font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_28px_rgba(26,224,240,0.38)] sm:px-6 sm:text-sm">Contact Us</NavLink>
  </nav></header>
}

export default Navbar
