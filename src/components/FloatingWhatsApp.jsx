import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const FloatingWhatsApp = ({ link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="wa-pulse fixed right-4 bottom-4 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#17C964,#12B981)] text-white shadow-2xl sm:right-5 sm:bottom-5 sm:h-14 sm:w-14"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp size={24} />
  </motion.a>
)

export default FloatingWhatsApp
