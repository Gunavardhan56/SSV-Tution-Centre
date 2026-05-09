import { motion } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, HeartHandshake, Sparkles, Trophy } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import useCounter from '../hooks/useCounter'
import { result } from '../data/siteData'
import topperImage from '../assets/topper-mohan-sai.png'
import marksMemoImage from '../assets/results-marks-memo.png'

const ResultsSection = () => {
  const topperScore = useCounter(result.score, 1200)
  const cbsePct = useCounter(100, 1400)

  return (
    <section id="results" className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute top-10 left-16 h-28 w-28 rounded-full bg-emerald-200/35 blur-2xl" />
      <div className="absolute right-16 bottom-14 h-32 w-32 rounded-full bg-slate-300/35 blur-3xl" />
      <Container className="relative">
        <SectionHeader
          badge="Top Results"
          title="Academic excellence with proven outcomes"
          description="Consistent performance and high scores reflect our structured teaching and individual mentorship approach."
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -6 }}
            className="premium-card group overflow-hidden rounded-3xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={topperImage}
                alt="Outstanding Academic Achievement"
                className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04] sm:h-60 lg:h-64"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(11,31,58,0.72)] via-[rgba(11,31,58,0.12)] to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
              <div className="absolute right-4 bottom-4 left-4 text-white">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-emerald-200 uppercase">Topper Achievement</p>
                <p className="mt-1 text-lg font-bold leading-tight">Outstanding Academic Achievement</p>
                <p className="mt-1 text-sm text-slate-100">{result.student}</p>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">SSC Public Exams</p>
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
                    {topperScore}
                    <span className="text-lg text-slate-500">/{result.total}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#178a63]">
                  <Trophy size={14} /> Achievement
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  <BadgeCheck size={14} className="text-[#178a63]" /> 100/100 Mathematics
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  <BadgeCheck size={14} className="text-[#178a63]" /> 97/100 Science
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Exceptional academic performance achieved through disciplined preparation, conceptual learning, and continuous mentoring.
              </p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            whileHover={{ y: -6 }}
            className="premium-card group overflow-hidden rounded-3xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={marksMemoImage}
                alt="Consistent Effort and Academic Improvement"
                className="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.04] sm:h-60 lg:h-64"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(11,31,58,0.68)] via-[rgba(11,31,58,0.10)] to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
              <div className="absolute right-4 bottom-4 left-4 text-white">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-emerald-200 uppercase">Growth & Consistency</p>
                <p className="mt-1 text-lg font-bold leading-tight">Consistent Effort & Academic Improvement</p>
                <p className="mt-1 text-sm text-slate-100">First Division Achievement</p>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#178a63]">
                <Sparkles size={14} /> Encouraging Progress
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                With continuous guidance, regular practice, and dedicated effort, students are encouraged to steadily improve their academic confidence and overall performance.
              </p>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Motivational Note</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Every student's journey is unique, and consistent hard work always leads to progress.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            whileHover={{ y: -6 }}
            className="premium-card overflow-hidden rounded-3xl"
          >
            <div className="relative p-6 sm:p-7">
              <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-emerald-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-slate-200/50 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-[#178a63]">
                  <BadgeCheck size={14} /> Board Success
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">Strong CBSE Academic Results</h3>

                <div className="mt-5 rounded-2xl bg-[linear-gradient(135deg,var(--brand-navy-900),var(--brand-navy-800))] p-5 text-white">
                  <p className="text-xs tracking-[0.16em] text-emerald-200 uppercase">CBSE Success Rate</p>
                  <p className="mt-2 text-5xl font-extrabold">
                    {cbsePct}
                    <span className="text-2xl text-slate-200">%</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-200">of CBSE students scored above 75% in final examinations.</p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  Focused mentoring, disciplined study plans, and personalized academic support helped students achieve strong board examination results.
                </p>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-sm font-semibold text-slate-900">Consistency</p>
                  <p className="inline-flex items-center gap-1 text-sm font-semibold text-[#178a63]">
                    View Approach <ArrowUpRight size={16} />
                  </p>
                </div>

                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#178a63]">
                    <HeartHandshake size={16} />
                    Parent-friendly, confidence-building support
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  )
}

export default ResultsSection
