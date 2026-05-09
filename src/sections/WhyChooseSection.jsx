import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { whyChooseUs } from '../data/siteData'

const WhyChooseSection = () => (
  <section className="py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Why Choose SSV"
        title="A learning environment built for outcomes"
        description="We combine experienced mentoring, personal attention, and disciplined academic systems to help students excel with confidence."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="premium-card rounded-2xl p-4 sm:p-5"
          >
            <item.icon className="text-emerald-600" size={22} />
            <h3 className="mt-3 text-base font-semibold text-slate-900 sm:mt-4 sm:text-lg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)

export default WhyChooseSection
