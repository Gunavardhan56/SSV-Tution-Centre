import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { institute, navLinks } from '../data/siteData'
import Container from '../components/Container'
import ssvLogo from '../assets/ssv-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const [isOverHero, setIsOverHero] = useState(true)
  const navInnerRef = useRef(null)

  const resolveActiveHref = useCallback(() => {
    const navEl = navInnerRef.current
    if (!navEl) return

    const marker = window.scrollY + navEl.getBoundingClientRect().bottom + 6
    let next = '#home'

    for (const link of navLinks) {
      const id = link.href.startsWith('#') ? link.href.slice(1) : ''
      const el = id ? document.getElementById(id) : null
      if (!el) continue

      const top = el.getBoundingClientRect().top + window.scrollY
      if (top <= marker) next = link.href
    }

    setActiveHref((prev) => (prev === next ? prev : next))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsOverHero(window.scrollY < 620)
      resolveActiveHref()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resolveActiveHref, { passive: true })
    window.addEventListener('hashchange', resolveActiveHref)
    onScroll()

    const frame = requestAnimationFrame(() => resolveActiveHref())
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resolveActiveHref)
      window.removeEventListener('hashchange', resolveActiveHref)
    }
  }, [resolveActiveHref])

  useEffect(() => {
    resolveActiveHref()
  }, [menuOpen, resolveActiveHref])

  return (
    <header className="fixed top-0 right-0 left-0 z-40">
      <Container>
        <nav
          ref={navInnerRef}
          className={`mt-2 rounded-2xl px-3 py-2.5 transition-all duration-300 sm:mt-3 sm:px-6 sm:py-3 ${
            isOverHero ? 'nav-glass' : 'nav-glass-light'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <a href="#home" className="flex items-center gap-2 sm:gap-3">
              <img
                src={ssvLogo}
                alt="SSV Tuition Center Logo"
                className="h-10 w-10 rounded-xl object-contain sm:h-12 sm:w-12"
              />
              <div>
                <p className={`text-xs font-semibold sm:text-sm ${isOverHero ? 'text-white/95' : 'text-slate-900'}`}>
                  {institute.shortName} Tuition Center
                </p>
                <p className={`text-[11px] sm:text-xs ${isOverHero ? 'text-white/70' : 'text-slate-500'}`}>Premium Academic Mentoring</p>
              </div>
            </a>

            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-200 ease-out ${
                      activeHref === link.href
                        ? 'font-semibold'
                        : 'font-medium'
                    } ${activeHref === link.href ? 'text-[#17C964]' : isOverHero ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-[#17C964]'}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={institute.callHref}
              className="btn-premium btn-premium-primary hidden items-center gap-2 px-4 py-2.5 text-sm md:flex"
            >
              <Phone size={16} /> Contact Now
            </a>

            <button type="button" className="rounded-lg p-2.5 lg:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} className={isOverHero ? 'text-white' : 'text-slate-900'} /> : <Menu size={20} className={isOverHero ? 'text-white' : 'text-slate-900'} />}
            </button>
          </div>

          {menuOpen && (
            <ul className={`mt-4 space-y-1.5 pt-4 lg:hidden ${isOverHero ? 'border-t border-white/12' : 'border-t border-slate-200'}`}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 ease-out ${
                      activeHref === link.href
                        ? 'font-semibold text-[#17C964]'
                        : `font-medium ${isOverHero ? 'text-white/90 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href={institute.callHref}
                  onClick={() => setMenuOpen(false)}
                  className="btn-premium btn-premium-primary inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-sm"
                >
                  <Phone size={16} /> Contact Now
                </a>
              </li>
            </ul>
          )}
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
