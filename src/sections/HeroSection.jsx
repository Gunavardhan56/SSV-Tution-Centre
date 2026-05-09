import { motion } from 'framer-motion'
import { ArrowRight, Award, BadgeCheck, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Container from '../components/Container'
import StatCounter from '../components/StatCounter'
import { heroStats, institute, result } from '../data/siteData'
import ssvLogo from '../assets/ssv-logo.png'

const HeroSection = () => {
  return (
    <section id="home" className="hero-navy-gradient relative overflow-hidden pt-24 pb-14 text-white sm:pt-30 sm:pb-20">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full glow-emerald opacity-70" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-24 h-96 w-96 rounded-full glow-navy opacity-70"
        animate={{ y: [0, -10, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full glow-emerald opacity-40"
        animate={{ y: [0, 12, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="glass-card mb-4 inline-flex items-center gap-3 rounded-2xl px-3 py-2 sm:mb-5">
              <img
                src={ssvLogo}
                alt="Sri Sai Vaagdevi Tuition Center Logo"
                className="h-10 w-10 rounded-lg object-contain sm:h-12 sm:w-12"
              />
              <div className="text-left">
                <p className="text-xs font-semibold text-white/95 sm:text-sm">{institute.shortName} Tuition Center</p>
                <p className="text-[11px] text-white/70 sm:text-xs">Official Academic Branding</p>
              </div>
            </div>
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[var(--brand-green-600)] uppercase sm:px-4 sm:text-xs sm:tracking-[0.15em]">
              <Sparkles size={14} /> Trusted By Parents & Students
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
              {institute.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--hero-muted)] sm:mt-5 sm:text-lg">{institute.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2.5 text-xs text-white/85 sm:mt-6 sm:gap-3 sm:text-sm">
              <span className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-2">
                <BadgeCheck size={16} className="text-[var(--brand-green-600)]" /> Concept-Driven Teaching
              </span>
              <span className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-2">
                <BadgeCheck size={16} className="text-[var(--brand-green-600)]" /> From LKG to PG
              </span>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="relative">
                <span className="pointer-events-none absolute -inset-6 glow-emerald opacity-25" />
                <a
                  href={institute.callHref}
                  className="btn-premium btn-premium-primary btn-premium-glow relative inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
                >
                Call Now <ArrowRight size={16} />
                </a>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute -inset-6 glow-emerald opacity-20" />
                <a
                  href={institute.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium btn-premium-secondary btn-premium-glow relative inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
                >
                  <FaWhatsapp size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="relative px-1 sm:px-0">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <span className="pointer-events-none absolute -inset-10 glow-emerald opacity-20" />
              <div className="glass-card rounded-3xl p-4 ring-1 ring-[rgba(23,201,100,0.18)] sm:p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white/70">Top Result Highlight</p>
                <Award className="text-[var(--brand-green-600)]" />
              </div>
              <p className="mt-3 text-xl font-bold text-white sm:mt-4 sm:text-2xl">{result.student}</p>
              <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.06))] p-4 text-center text-white ring-1 ring-white/12 sm:mt-5 sm:p-6">
                <p className="text-sm text-[var(--hero-label)]">SSC Public Exams</p>
                <p className="mt-2 text-4xl font-extrabold sm:text-5xl">
                  {result.score}
                  <span className="text-xl text-[var(--hero-label)] sm:text-2xl">/{result.total}</span>
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {result.highlights.map((item) => (
                  <div key={item.label} className="rounded-xl bg-white/10 p-3 ring-1 ring-white/12">
                    <p className="text-xs font-medium text-[var(--brand-green-600)]">{item.label}</p>
                    <p className="mt-1 text-lg font-bold text-white">{item.score}</p>
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass-card absolute -top-3 left-1 rounded-xl p-2.5 text-white sm:-top-5 sm:-left-5 sm:p-3"
            >
              <p className="text-xs text-white/70">Outcome Focus</p>
              <p className="text-lg font-bold text-[var(--brand-green-600)]">581/600</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCounter
              key={stat.label}
              {...stat}
              tone="dark"
              className="glass-card-soft text-white"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
