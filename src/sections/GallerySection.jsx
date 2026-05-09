import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import classroomTeaching from '../assets/gallery-classroom-teaching.png'
import personalMentoring from '../assets/gallery-personal-mentoring.png'
import celebration from '../assets/gallery-celebration.png'

const galleryItems = [
  {
    image: classroomTeaching,
    title: 'Concept-Focused Classroom Teaching',
    description:
      'Interactive whiteboard teaching sessions designed to strengthen conceptual understanding and problem-solving skills.',
  },
  {
    image: personalMentoring,
    title: 'Personalized Student Guidance',
    description:
      'Individual attention and daily mentoring support to help every student improve with confidence and consistency.',
  },
  {
    image: celebration,
    title: 'Student Activities & Celebrations',
    description:
      'A positive learning environment that encourages student interaction, celebrations, and overall personality development.',
  },
]

const GallerySection = () => (
  <section id="gallery" className="py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Gallery"
        title="Our learning space and activities"
        description="A glimpse of classrooms, mentoring sessions, and student activities."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="premium-card group overflow-hidden rounded-3xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.05] sm:h-60 lg:h-64"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(11,31,58,0.65)] via-[rgba(11,31,58,0.10)] to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
              <div className="pointer-events-none absolute right-4 bottom-4 left-4 translate-y-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-[#178a63] uppercase backdrop-blur">
                  Real Classroom Moment
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)

export default GallerySection
