import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { navLinks } from '../data/siteData'
import cc from '../assets/cc.png'
import StaggeredMenu from '../animations/StaggeredMenu'

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menuItems = navLinks.map((l) => ({

    label: l.label,
    ariaLabel: `Go to ${l.label}`,
    link: l.to,
  }))

  return (
    <>
      {/* Desktop navbar */}
      <header
        className={`hidden md:block fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a12]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={cc} alt="Creative Crew" className="h-12 w-auto object-contain" draggable={false} />
            <span className="text-white font-semibold tracking-tight text-base">Creative Crew</span>
          </Link>

          <ul className="flex items-center gap-9 text-[15px] text-white/70">
            {navLinks.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `transition-colors hover:text-white ${isActive ? 'text-white' : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">

            <a
              href="tel:+14155550142"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Call us"
            >
              <Phone size={13} />
            </a>

            <div className="relative group">
              {/* blurred glow behind the button, hidden until hover */}
              <div className="absolute inset-0 rounded-full bg-violet-400/60 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <Link
                to="/contact"
                className="relative inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0a0a12] text-[14px] font-semibold px-4 py-2.5 border border-white/20 shadow-sm hover:bg-white/70 transition-colors duration-300"
              >
                Book a call
              </Link>
            </div>
          </div>
          {/* Mobile — StaggeredMenu owns its own logo, toggle, and panel */}
          <div className="md:hidden">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering
              menuButtonColor="#ffffff"
              openMenuButtonColor="#ffffff"
              changeMenuColorOnOpen={false}
              colors={['#7c3aed', '#0a0a12']}
              logoUrl={cc}
              logoAlt="Creative Crew"
              logoWidth={32}
              accentColor="#c4b5fd"
              isFixed
            />
          </div>
        </nav>
      </header>
    </>
  )
}