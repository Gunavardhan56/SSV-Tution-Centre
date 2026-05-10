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
  <section id="faculty" className="bg-[var(--neutral-bg)] py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Our Faculty"
        title="Highly qualified mentors you can trust"
        description="Meet the educators guiding your child—clear qualifications, proven experience, and mentoring that prioritizes confidence and clarity."
      />
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {faculty.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="premium-card rounded-3xl p-4 sm:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="mx-auto w-full max-w-[210px] shrink-0 sm:mx-0 sm:w-44">
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
                  <img
                    src={facultyPhotos[member.name]}
                    alt={`${member.name} — ${member.specialization}`}
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#17c964]">
                  {member.specialization}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{member.qualification}</p>
                <p className="mt-2 text-sm text-slate-600">{member.experience}</p>
                <p className="mt-1 text-sm font-semibold text-[#0b254f]">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.mentoringExpertise}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {member.highlights.map((line) => (
                <div
                  key={line}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/90 px-3 py-2 text-sm text-slate-700 transition hover:border-emerald-200/70 hover:bg-emerald-50/50"
                >
                  {line.toLowerCase().includes('award') ? (
                    <Award size={14} className="shrink-0 text-[#17c964]" />
                  ) : (
                    <BookCheck size={14} className="shrink-0 text-[#17c964]" />
                  )}
                  <span>{line}</span>
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
