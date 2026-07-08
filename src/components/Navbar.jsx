import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sparkles, Phone } from 'lucide-react'
import { navLinks } from '../data/siteData'
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

  // StaggeredMenu expects { label, ariaLabel, link } — map from your existing navLinks
  const menuItems = navLinks.map((l) => ({
    label: l.label,
    ariaLabel: `Go to ${l.label}`,
    link: l.to,
  }))

  return (
    <>
      {/* Desktop navbar — unchanged, just scoped to md+ */}
      <header
        className={`hidden md:block fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a12]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-[72px]">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles size={14} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="text-white font-semibold tracking-tight text-[15px]">Creative Crew</span>
          </Link>

          <ul className="flex items-center gap-9 text-[13.5px] text-white/70">
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#0a0a12] text-[13px] font-semibold px-4 py-2.5 hover:bg-violet-100 transition-colors"
            >
              Book a call
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile — StaggeredMenu owns its own logo, toggle button, and full-screen panel */}
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering
          menuButtonColor="#ffffff"
          openMenuButtonColor="#0a0a12"
          changeMenuColorOnOpen
          colors={['#B497CF', '#5227FF']}
          logoUrl="./dist/cc.png"
          accentColor="#7c3aed"
          isFixed
        />
      </div>
    </>
  )
}