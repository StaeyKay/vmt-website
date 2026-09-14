import Footer from '../components/Footer'
import AboutHero from '../assets/images/AboutHero.jpg'
import About1 from '../assets/images/About1.jpg'
import About2 from '../assets/images/About2.jpg'
import About3 from '../assets/images/About3.jpg'

const industries = [
  'Government Ministries, Departments and Agencies (MDAs)',
  'Regulatory Authorities',
  'Financial Institutions',
  'Educational Institutions',
  'Corporate Organizations',
  'Small and Medium Enterprises (SMEs)',
]

const outcomes = [
  'Improve operational efficiency and productivity.',
  'Automate critical business processes.',
  'Strengthen cybersecurity and information protection.',
  'Make better decisions through data and AI.',
  'Modernize legacy technology environments.',
  'Scale digital services efficiently.',
  'Support cloud, hybrid and sovereign technology environments.',
]

const approach = ['Understand', 'Design', 'Implement', 'Secure', 'Optimize', 'Support']

const About = () => {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#0a1628]">
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#071b3a] sm:min-h-[680px]">
        <img
          src={AboutHero}
          alt="A team collaborating around a laptop"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,43,0.96)_0%,rgba(4,18,43,0.8)_45%,rgba(4,18,43,0.2)_100%)]" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-18 sm:min-h-[680px] sm:px-8 sm:pb-24 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#1AE0F0]">
              <span className="h-px w-10 bg-[#1AE0F0]" />
              About VM Technologies
            </p>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-7xl">
              Technology that moves organizations forward.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
              Secure, scalable ICT solutions built around the way modern organizations need to work, grow and serve.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/20 bg-[#1A33E8]/90 px-8 py-5 text-right text-white sm:block">
          <p className="text-3xl font-black">360°</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">Technology partnership</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
        <div className="relative min-h-[420px]">
          <div className="absolute left-0 top-0 h-72 w-3/4 overflow-hidden sm:h-88">
            <img src={About1} alt="Technology infrastructure" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-56 w-3/5 overflow-hidden border-8 border-[#f7faff] sm:h-72">
            <img src={About2} alt="Cloud technology" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-12 left-0 z-10 bg-[#1A33E8] px-5 py-4 text-white shadow-xl">
            <p className="text-3xl font-black">AM DevPro</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/70">Group ecosystem</p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A33E8]">Company overview</p>
          <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
            Practical innovation. Built for what comes next.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
            <p>VM Technologies Investment is a technology solutions company and subsidiary of AM Development Projects Gh Limited (AM DevPro), established to deliver innovative, secure and scalable ICT solutions that enable organizations to thrive in an increasingly digital world.</p>
            <p>Leveraging the strategic direction, industry experience and technology ecosystem of the AM DevPro Group, we provide end-to-end technology services spanning IT infrastructure, software engineering, cloud computing, data and artificial intelligence, cybersecurity and digital solutions.</p>
            <p>Our approach combines technical expertise with a strong understanding of organizational needs to deliver solutions that are practical, scalable and aligned with long-term objectives.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#071b3a] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1AE0F0]">Where we work</p>
            <h2 className="max-w-lg text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">Technology with context.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">We bring enterprise-grade thinking to the institutions and businesses shaping communities, markets and public life.</p>
            <img src={About3} alt="Connected digital network" className="mt-10 h-56 w-full object-cover opacity-70" />
          </div>
          <div className="grid gap-px self-center bg-white/15 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-[#071b3a] p-6 sm:min-h-36">
                <span className="mb-5 block text-sm font-bold text-[#1AE0F0]">0{index + 1}</span>
                <p className="max-w-xs font-semibold leading-6">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A33E8]">Our value proposition</p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">One connected ecosystem. Measurable progress.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">VM Technologies delivers more than individual technology solutions. We bring together infrastructure, applications, cloud, data, AI and cybersecurity to help organizations move with confidence.</p>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-0 border-t border-slate-200 md:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <div key={outcome} className="flex gap-5 border-b border-slate-200 py-5">
              <span className="font-mono text-sm font-bold text-[#1A33E8]">0{index + 1}</span>
              <p className="font-medium leading-6 text-slate-700">{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#e8f8ff] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A33E8]">Our approach</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">A partnership from strategy to support.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">We work closely with clients through every stage of the journey, making sure each technology investment stays aligned with organizational goals and delivers lasting value.</p>
          </div>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {approach.map((step, index) => (
              <div key={step} className="relative border border-[#1A33E8]/20 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-[#1A33E8]">0{index + 1}</span>
                <p className="mt-12 text-xl font-black">{step}</p>
                {index < approach.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center bg-[#1A33E8] text-white lg:flex">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#1A33E8]">Management team</p>
            <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">The people behind the work.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">Leadership profiles will be added here as the VM Technologies team page takes shape.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {['Executive leadership', 'Technology leadership', 'Operations leadership'].map((role, index) => (
            <div key={role} className="group border border-dashed border-[#1A33E8]/40 bg-white p-6">
              <div className="flex aspect-[4/3] items-center justify-center bg-[#edf4ff] text-[#1A33E8] transition-colors group-hover:bg-[#1A33E8] group-hover:text-white">
                <span className="text-5xl font-extralight">+</span>
              </div>
              <p className="mt-5 text-lg font-bold">{role}</p>
              <p className="mt-1 text-sm text-slate-500">Portrait and profile coming soon</p>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-[#1A33E8]">Profile slot 0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About