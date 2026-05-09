import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { institute } from '../data/siteData'

const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(institute.mapsQuery)}`
const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(institute.mapsQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`

const ContactSection = () => (
  <section id="contact" className="py-14 sm:py-20">
    <Container>
      <SectionHeader
        badge="Contact"
        title="Get in touch with SSV Tuition Center"
        description="Talk to us for admissions, personalized guidance, and course details."
      />
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <a
            href={institute.callHref}
            className="premium-card flex items-start gap-3 rounded-2xl p-4 transition sm:gap-4 sm:p-5"
          >
            <Phone className="text-emerald-600" />
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <p className="text-sm text-slate-600">{institute.phone}</p>
              <p className="mt-1 text-xs font-medium text-[#178a63]">Tap to call</p>
            </div>
          </a>

          <a
            href={institute.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="premium-card flex items-start gap-3 rounded-2xl p-4 transition sm:gap-4 sm:p-5"
          >
            <MessageCircle className="text-emerald-600" />
            <div>
              <p className="font-semibold text-slate-900">WhatsApp</p>
              <p className="text-sm text-slate-600">{institute.whatsappNumber}</p>
              <p className="mt-1 text-xs font-medium text-[#178a63]">Tap to chat</p>
            </div>
          </a>

          <a
            href={institute.emailHref}
            className="premium-card flex items-start gap-3 rounded-2xl p-4 transition sm:gap-4 sm:p-5"
          >
            <Mail className="text-emerald-600" />
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="text-sm text-slate-600">{institute.email}</p>
              <p className="mt-1 text-xs font-medium text-[#178a63]">Tap to email</p>
            </div>
          </a>

          <a
            href={mapsOpenUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-card flex items-start gap-3 rounded-2xl p-4 transition sm:gap-4 sm:p-5"
          >
            <MapPin className="text-emerald-600" />
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p className="text-sm text-slate-600">{institute.address}</p>
              <p className="mt-1 text-xs font-medium text-[#178a63]">Tap to open in Google Maps</p>
            </div>
          </a>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={institute.callHref}
              className="btn-premium btn-premium-primary inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm sm:w-auto"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={institute.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-premium inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1fa97a] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95 sm:w-auto"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="premium-card rounded-3xl p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-2xl">
            <iframe
              title="SSV Tuition Center Location"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none aspect-[16/10] w-full border-0 sm:aspect-[16/9]"
            />
            <a
              href={mapsOpenUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open SSV Tuition Center location in Google Maps"
              className="absolute inset-0 z-10"
            />
            <span className="pointer-events-none absolute right-3 bottom-3 z-20 rounded-full bg-slate-900/85 px-3 py-1 text-xs font-semibold text-white">
              Open in Google Maps
            </span>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default ContactSection
