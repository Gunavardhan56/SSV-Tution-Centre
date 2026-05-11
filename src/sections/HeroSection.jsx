import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, GraduationCap, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Container from '../components/Container'
import StatCounter from '../components/StatCounter'
import { heroStats, institute, result } from '../data/siteData'
import ssvLogo from '../assets/ssv-logo.png'
import topperImage from '../assets/topper-mohan-sai.png'

const HeroSection = () => {
  const mathBadge = result.highlights.find((h) => h.label === 'Mathematics')
  const scienceBadge = result.highlights.find((h) => h.label === 'Science')

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
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="glass-card mb-4 inline-flex items-center gap-3 rounded-2xl px-3 py-2 sm:mb-5">
              <img
                src={ssvLogo}
                alt="Sri Sai Vaagdevi Tuition Centre Logo"
                className="h-10 w-10 rounded-lg object-contain sm:h-12 sm:w-12"
              />
              <div className="text-left">
                <p className="text-xs font-semibold text-white/95 sm:text-sm">{institute.shortName} Tuition Centre</p>
                <p className="text-[11px] text-white/70 sm:text-xs">Premium Academic Mentoring</p>
              </div>
            </div>

            <span className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[var(--brand-green-600)] uppercase sm:px-4 sm:text-xs sm:tracking-[0.15em]">
              <Sparkles size={14} /> Trusted by parents & students
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-[var(--hero-text)] sm:mt-5 sm:text-5xl lg:text-6xl">{institute.name}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--hero-muted)] sm:mt-5 sm:text-lg">{institute.tagline}</p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--hero-label)] sm:text-base">
              Learn with qualified mentors, regular assessments, and personal attention—from school fundamentals to undergraduate support.
              Parents trust SSV because progress is measurable and encouragement is genuine.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              <span className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm">
                <BadgeCheck size={16} className="shrink-0 text-[var(--brand-green-600)]" /> Personal attention / small-batch focus
              </span>
              <span className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs sm:text-sm">
                <BadgeCheck size={16} className="shrink-0 text-[var(--brand-green-600)]" /> Concept-first teaching • LKG to PG
              </span>
              <span className="glass-card hidden items-center gap-2 rounded-full px-3 py-2 text-xs text-white/85 sm:inline-flex sm:text-sm lg:hidden xl:inline-flex">
                <BadgeCheck size={16} className="shrink-0 text-[var(--brand-green-600)]" /> Safe, supportive classroom environment
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <div className="relative">
                <span className="pointer-events-none absolute -inset-6 glow-emerald opacity-22" />
                <a
                  href={institute.callHref}
                  className="btn-premium btn-premium-primary btn-premium-glow relative inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
                >
                  Call Now <ArrowRight size={16} />
                </a>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute -inset-6 glow-emerald opacity-18" />
                <a
                  href={institute.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium btn-premium-secondary btn-premium-glow relative inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-6 py-3 text-sm sm:w-auto"
                >
                  <FaWhatsapp size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none lg:mx-0"
          >
            <span className="pointer-events-none absolute -inset-8 glow-emerald opacity-25 lg:-inset-10" />

            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-[0_28px_60px_rgba(7,27,59,0.45)] ring-1 ring-[rgba(255,255,255,0.14)]">
                <img src={topperImage} alt={result.student} className="h-[min(22rem,55vh)] w-full object-cover object-top sm:h-[min(26rem,58vh)] lg:h-[min(28rem,62vh)]" loading="eager" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(7,27,59,0.78)_100%)]" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute right-3 bottom-3 left-3 sm:right-5 sm:bottom-5 sm:left-5"
              >
                <div className="glass-card rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-[11px] font-bold tracking-[0.14em] text-[#17C964] uppercase">Real Student • Real Score</p>
                  <p className="mt-1 line-clamp-2 text-base font-bold leading-snug text-[#FFFFFF] sm:text-lg">{result.student}</p>
                  <p className="mt-2 text-[11px] font-medium text-[#D6E1F0] sm:text-xs">SSC Public Exams</p>
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-[#FFFFFF] sm:text-4xl">
                    {result.score}
                    <span className="text-lg font-bold text-[#D6E1F0] sm:text-xl">/{result.total}</span>
                  </p>
                </div>
              </motion.div>

              {mathBadge && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-card-soft absolute left-3 top-3 max-w-[10.5rem] rounded-xl px-3 py-2 sm:left-4 sm:top-4"
                >
                  <p className="text-[10px] font-bold tracking-wide text-[#17C964] uppercase">Mathematics</p>
                  <p className="text-sm font-extrabold text-[#FFFFFF]">{mathBadge.score}</p>
                </motion.div>
              )}

              {scienceBadge && (
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="glass-card-soft absolute right-3 top-[4.25rem] max-w-[10.5rem] rounded-xl px-3 py-2 sm:right-4 sm:top-[4.75rem]"
                >
                  <p className="text-[10px] font-bold tracking-wide text-[#17C964] uppercase">Science</p>
                  <p className="text-sm font-extrabold text-[#FFFFFF]">{scienceBadge.score}</p>
                </motion.div>
              )}

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity }}
                className="glass-card pointer-events-none absolute -bottom-3 right-4 hidden rounded-full px-3 py-1.5 text-[11px] font-semibold text-white/90 md:inline-flex xl:right-6"
              >
                <GraduationCap size={13} className="mr-1.5 shrink-0 text-[var(--brand-green-600)]" />
                SSC Top Performance
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCounter key={stat.label} {...stat} tone="dark" className="glass-card-soft text-white" />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
