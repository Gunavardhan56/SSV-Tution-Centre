import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

const testimonials = [
  {
    name: 'R. Sanjay Reddy',
    className: '10th Class ICSE',
    school: 'APS Public School, MVP',
    review:
      'The teaching methods are very easy to understand and the regular guidance helped me improve my confidence in Mathematics and Science. The faculty are very supportive and motivating.',
  },
  {
    name: 'S. Kuldeep',
    className: '10th Class',
    school: 'Visakha Valley School',
    review:
      'I improved a lot through regular practice tests and personal attention. The classes are friendly, comfortable, and very helpful for board exam preparation.',
  },
  {
    name: 'Darimireddy Mohan Sai',
    className: '10th Class',
    school: 'Sri Chaitanya School',
    review:
      'The continuous support and disciplined teaching helped me stay focused during my exam preparation. The concepts were explained clearly and practice sessions helped me score better.',
  },
]

const TestimonialsSection = () => (
  <section className="bg-white py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Testimonials"
        title="What Our Students Say"
        description="Real experiences from students guided at SSV Tuition Center."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -5 }}
            className="premium-card group rounded-3xl bg-white p-5 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-[#178a63]">
                  <span className="text-sm font-bold">{t.name.split(' ')[0][0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.className} • {t.school}
                  </p>
                </div>
              </div>
              <Quote className="mt-1 text-slate-300 transition group-hover:text-emerald-300" size={22} />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">{t.review}</p>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#178a63] uppercase">Student Review</p>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)

export default TestimonialsSection
