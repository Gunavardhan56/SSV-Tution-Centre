import { motion } from 'framer-motion'

const SectionHeader = ({ badge, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-9 max-w-3xl text-center sm:mb-12"
  >
    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-emerald-700 uppercase sm:px-4 sm:text-xs sm:tracking-[0.2em]">
      {badge}
    </span>
    <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">{title}</h2>
    <p className="mt-3 px-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:px-0 sm:text-base">{description}</p>
  </motion.div>
)

export default SectionHeader
