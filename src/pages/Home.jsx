// React hooks power the viewport-based reveal treatment.
import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import cassavaLogo from "../assets/partners/Cassava.png"
import eclofLogo from "../assets/partners/ECLOF.png"
import googleLogo from "../assets/partners/Google.png"
import halliburtonLogo from "../assets/partners/Halliburton.png"
import liquidLogo from "../assets/partners/Liquid.png"
import microsoftLogo from "../assets/partners/Microsoft.png"
import nitaLogo from "../assets/partners/nita.png"
import nvidiaLogo from "../assets/partners/Nvidia.png"
import valvoLogo from "../assets/partners/Valvo.png"
import vmLogo from "../assets/partners/VM.png"

// Reveal content after it enters the viewport, while honoring reduced-motion settings.
const Reveal = ({ children, className = "" }) => {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.18 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return <div ref={elementRef} className={`transition-all duration-700 motion-reduce:transform-none motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}>{children}</div>
}

// The supplied company overview becomes a side-to-side, card-based company story.
const companyPanels = [
  ["01", "Company overview", "Technology that helps organisations thrive in a digital world.", "VM Technologies Investment is an AM DevPro subsidiary delivering innovative, secure and scalable ICT solutions for governments, institutions and businesses."],
  ["02", "What we connect", "One integrated digital ecosystem.", "Infrastructure, software engineering, cloud computing, data and AI, cybersecurity and digital solutions work together around long-term organisational objectives."],
  ["03", "Our approach", "Practical progress, from strategy to support.", "We work closely with clients to understand, design, implement, secure, optimise and support technology investments that deliver measurable value."],
  ["04", "Strategic strength", "An agile team within a broader technology ecosystem.", "Through AM DevPro, VM Technologies combines responsive delivery with experience in large-scale transformation, government and enterprise environments."],
]

// Equal angles form the three-point VM Technologies Investment rotation.
const investmentPoints = [
  ["01", "Mission", "Reliable technology that improves efficiency, strengthens security and unlocks the value of data."],
  ["02", "Vision", "A leading African technology partner for innovative, secure and future-ready transformation."],
  ["03", "Commitment", "Technology that enables organisations to move faster, operate smarter and compete effectively."],
]

// Keep partner artwork together so the looping band stays simple to maintain.
const partners = [[cassavaLogo, "Cassava Technologies"], [eclofLogo, "ECLOF"], [googleLogo, "Google"], [halliburtonLogo, "Halliburton"], [liquidLogo, "Liquid Intelligent Technologies"], [microsoftLogo, "Microsoft"], [nitaLogo, "NITA"], [nvidiaLogo, "NVIDIA"], [valvoLogo, "Volvo"], [vmLogo, "VM Technologies"]]

// Compose the one-page VM Technologies experience with the shared footer at its end.
const Home = () => <main className="overflow-hidden bg-[#f7f8f8] text-slate-950">
  <Navbar />
  {/* Video hero: `object-cover` fills the frame while preserving the source video's proportions. */}
  <section id="home" className="relative isolate flex min-h-screen items-end overflow-hidden bg-slate-950 px-5 pb-14 pt-36 text-white sm:px-10 lg:px-16 lg:pb-20">
    {/* Decorative videos should be muted and play inline; the native controls stay out of the visual design. */}
    <video autoPlay loop muted playsInline aria-hidden="true" className="absolute inset-0 -z-30 h-full w-full object-cover" poster="/favicon.svg">
      <source src="/hero-background.mp4" type="video/mp4" />
    </video>
    {/* The layered tint keeps the headline as legible as the reference site's overlaid hero content. */}
    <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,10,20,0.88)_0%,rgba(2,10,20,0.64)_46%,rgba(2,10,20,0.28)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,rgba(26,224,240,0.22),transparent_30%)]" />
    <div className="mx-auto w-full max-w-[1440px]">
      <Reveal className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1AE0F0] sm:text-sm">Secure · scalable · future-ready</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.91] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">Technology that moves organisations forward.</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">VM Technologies Investment brings cloud, software, data, AI and cybersecurity into practical digital ecosystems built for lasting growth.</p>
        <div className="mt-9"><a className="rounded-full bg-[#1AE0F0] px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,224,240,0.36)]" href="#about">Explore VM Technologies</a></div>
      </Reveal>
    </div>
  </section>
  {/* Horizontal scroll offers the requested side-to-side company overview. */}
  <section id="about" className="bg-[#eafcff] px-5 py-24 sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto max-w-[1440px]"><Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">01 / Company overview</p><h2 className="mt-5 text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">A company story that moves sideways.</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">Scroll horizontally through VM Technologies' purpose, connected capability, partnership approach and strategic strength.</p></Reveal><div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-color:#1AE0F0_transparent] [scrollbar-width:thin]">{companyPanels.map(([number, eyebrow, title, body]) => <article key={number} className="group relative min-h-[28rem] w-[min(82vw,31rem)] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-slate-950/10 bg-white p-7 shadow-[0_18px_50px_-35px_rgba(3,24,39,0.55)] transition duration-500 hover:-translate-y-2 hover:border-[#1AE0F0] hover:shadow-[0_28px_60px_-30px_rgba(26,224,240,0.55)] sm:p-9"><span className="absolute -right-4 -top-14 text-[12rem] font-semibold leading-none tracking-[-0.12em] text-[#1AE0F0]/10 transition duration-500 group-hover:scale-110">{number}</span><div className="relative flex h-full flex-col justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p><h3 className="mt-10 max-w-md text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-4xl">{title}</h3></div><p className="max-w-md text-base leading-7 text-slate-600">{body}</p></div></article>)}</div></div></section>
  {/* Equal 120-degree placement creates the requested three-point rotating star. */}
  <section className="overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"><div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"><Reveal><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1AE0F0]">VM Technologies Investment</p><h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">Three points. One direction.</h2><p className="mt-7 max-w-xl leading-7 text-white/65">Our mission, vision and commitment revolve around a single goal: creating technology foundations that keep organisations confidently moving forward.</p></Reveal><div className="relative mx-auto hidden h-[38rem] w-full max-w-[42rem] lg:block"><div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1AE0F0]/25" /><div className="star-wheel absolute left-1/2 top-1/2 h-[34rem] w-[34rem]">{investmentPoints.map(([number, title, text], index) => <div key={number} style={{ "--angle": `${index * 120}deg` }} className="orbit-point absolute left-1/2 top-1/2 h-60 w-56"><article className="star-card-counter h-full rounded-[1.6rem] border border-white/15 bg-white/10 p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.7)] backdrop-blur-sm"><span className="text-xs font-bold tracking-[0.2em] text-[#1AE0F0]">{number}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{text}</p></article></div>)}</div><div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#1AE0F0] p-5 text-center text-sm font-bold leading-tight text-slate-950 shadow-[0_0_50px_rgba(26,224,240,0.38)]">VM Technologies<br />Investment</div></div><div className="grid gap-4 lg:hidden">{investmentPoints.map(([number, title, text]) => <article key={number} className="rounded-3xl border border-white/15 bg-white/5 p-6"><span className="text-xs font-bold tracking-[0.2em] text-[#1AE0F0]">{number}</span><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{text}</p></article>)}</div></div></section>
  {/* Partner logos move in a quiet band and gain cyan depth on hover. */}
  <section id="partners" className="overflow-hidden border-y border-slate-950/10 bg-[#eafcff] py-24 lg:py-28"><Reveal className="mx-auto max-w-[1440px] px-5 text-center sm:px-10 lg:px-16"><p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">Partners and ecosystem</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">Strong technology starts with strong connections.</h2></Reveal><div className="group relative mt-14 overflow-hidden"><div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#eafcff] to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#eafcff] to-transparent" /><div className="flex w-max items-center motion-safe:animate-partner-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">{[...partners, ...partners].map(([source, name], index) => <div aria-hidden={index >= partners.length} className="flex h-24 w-52 shrink-0 items-center justify-center px-6" key={`${name}-${index}`}><img alt={index < partners.length ? name : ""} className="max-h-12 max-w-full grayscale opacity-60 transition duration-300 hover:scale-110 hover:grayscale-0 hover:opacity-100 hover:drop-shadow-[0_8px_12px_rgba(26,224,240,0.35)]" src={source} /></div>)}</div></div></section>
  {/* Shared site footer contains the secondary navigation and contact details. */}
  <Footer />
</main>

export default Home
