import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { courses, specialSubjects } from '../data/siteData'

const CoursesSection = () => (
  <section id="courses" className="bg-white py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Programs"
        title="Comprehensive coaching across all levels"
        description="From foundational classes to competitive and engineering subjects, SSV delivers focused support at every stage."
      />
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="premium-card relative overflow-hidden rounded-2xl p-5 sm:p-6"
          >
            <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-emerald-50" />
            <course.icon className="relative text-slate-900" size={24} />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:text-xl">{course.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.description}</p>
          </motion.article>
        ))}
      </div>
      <div className="premium-card mt-8 rounded-2xl border-emerald-100 bg-emerald-50 p-4 sm:mt-10 sm:p-6">
        <h4 className="text-base font-semibold text-slate-900 sm:text-lg">Special Attention Subjects</h4>
        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
          {specialSubjects.map((subject) => (
            <span key={subject.name} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:px-4 sm:text-sm">
              <subject.icon size={15} className="text-emerald-600" /> {subject.name}
            </span>
          ))}
        </div>
      </div>
    </Container>
  </section>
)

export default CoursesSection
