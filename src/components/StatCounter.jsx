import { motion } from 'framer-motion'
import useCounter from '../hooks/useCounter'

const StatCounter = ({ value, suffix, label, className = '', tone = 'light' }) => {
  const count = useCounter(value)
  const isDark = tone === 'dark'

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`premium-card rounded-2xl p-4 transition-shadow duration-300 sm:p-5 ${className}`}
    >
      <p className={`text-2xl font-bold sm:text-3xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {count}
        {suffix}
      </p>
      <p className={`mt-2 text-sm font-medium ${isDark ? 'text-[var(--hero-label)]' : 'text-slate-600'}`}>{label}</p>
    </motion.div>
  )
}

export default StatCounter
