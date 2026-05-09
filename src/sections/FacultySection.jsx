import { motion } from 'framer-motion'
import { Award, BookCheck } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { faculty } from '../data/siteData'
import bhimaRajuPhoto from '../assets/faculty-bhima-raju.png'
import hemalathaPhoto from '../assets/faculty-hemalatha.png'

const facultyPhotos = {
  'Dr. T Bhima Raju': bhimaRajuPhoto,
  'Mrs. M Hemalatha': hemalathaPhoto,
}

const FacultySection = () => (
  <section id="faculty" className="bg-white py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Faculty"
        title="Learn from accomplished educators"
        description="Our mentors combine academic depth, classroom experience, and student-first guidance."
      />
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {faculty.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="premium-card rounded-3xl p-4 sm:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="mx-auto w-full max-w-[210px] shrink-0 sm:mx-0 sm:w-44">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  <img
                    src={facultyPhotos[member.name]}
                    alt={`${member.name} - ${member.specialization}`}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-center text-lg font-bold text-slate-900 sm:text-left sm:text-xl">{member.name}</h3>
                <p className="mt-1 text-center text-sm font-medium text-emerald-700 sm:text-left">{member.qualification}</p>
                <p className="mt-2 text-center text-sm text-slate-600 sm:text-left">{member.experience}</p>
                <p className="text-center text-sm text-slate-600 sm:text-left">{member.specialization}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {member.highlights.map((line) => (
                <div key={line} className="premium-card inline-flex min-h-10 items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-700">
                  {line.toLowerCase().includes('award') ? <Award size={14} className="text-emerald-600" /> : <BookCheck size={14} className="text-emerald-600" />}
                  {line}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)

export default FacultySection
