import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Container from '../components/Container'
import { institute, navLinks } from '../data/siteData'
import ssvLogo from '../assets/ssv-logo.png'

const Footer = () => (
  <footer className="bg-slate-950 py-12 text-slate-300 sm:py-14">
    <Container>
      <div className="grid gap-8 sm:gap-9 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={ssvLogo}
              alt="SSV Tuition Center Logo"
              className="h-11 w-11 rounded-lg bg-white object-contain p-1 sm:h-12 sm:w-12"
            />
            <p className="text-sm font-semibold text-white sm:text-base">{institute.name}</p>
          </div>
          <p className="mt-4 text-sm text-slate-400">{institute.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-emerald-400">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-4 text-sm">
            <a href={institute.callHref} className="transition hover:text-emerald-400">{institute.phone}</a>
          </p>
          <p className="mt-2 text-sm">
            <a href={institute.emailHref} className="transition hover:text-emerald-400">{institute.email}</a>
          </p>
          <p className="mt-2 text-sm">{institute.website}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Follow Us</p>
          <div className="mt-4 flex gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="rounded-lg bg-slate-800 p-2 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:text-sm">
        Copyright {new Date().getFullYear()} {institute.shortName} Tuition Center. All rights reserved.
      </div>
    </Container>
  </footer>
)

export default Footer
