import { motion } from 'framer-motion'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { institute } from '../data/siteData'
import ContactSection from '../sections/ContactSection'
import CoursesSection from '../sections/CoursesSection'
import FacultySection from '../sections/FacultySection'
import Footer from '../sections/Footer'
import GallerySection from '../sections/GallerySection'
import HeroSection from '../sections/HeroSection'
import Navbar from '../sections/Navbar'
import ResultsSection from '../sections/ResultsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import WhyChooseSection from '../sections/WhyChooseSection'

const HomePage = () => (
  <main className="bg-[radial-gradient(circle_at_top,_rgba(31,169,122,0.07),_transparent_36%),linear-gradient(to_bottom,_#f5f7fb,_#f7f9fc)] text-slate-900">
    <Navbar />
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.1 }}
      className="fixed top-0 left-0 z-50 h-1 w-full origin-left bg-[linear-gradient(90deg,#1b3f6b,#1fa97a)]"
    />
    <HeroSection />
    <div className="section-divider mx-auto h-px w-[92%] max-w-6xl" />
    <WhyChooseSection />
    <CoursesSection />
    <ResultsSection />
    <FacultySection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <FloatingWhatsApp link={institute.whatsappLink} />
  </main>
)

export default HomePage
