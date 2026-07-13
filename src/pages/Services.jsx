import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  Rocket, Share2, Globe, Code2, GraduationCap, ShoppingBag, ArrowUpRight, ChevronDown,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import { services, faqs } from '../data/siteData'

const iconMap = { Rocket, Share2, Globe, Code2, GraduationCap, ShoppingBag }

export default function Services() {
  return (
    <PageTransition>
      <Hero />
      <ServiceList />
      <Faq />
      <CtaBanner />
    </PageTransition>
  )
}

function Hero() {
  return (
    <section className="relative pt-24 sm:pt-40 pb-20 px-6 bg-[#0a0a12] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.3),transparent_55%)]" />
      <Reveal className="relative max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Services"
          title="Everything a modern brand needs,"
          accent="crafted in-house"
          dark
        />
        <p className="mt-5 text-white/60 text-[15px] max-w-lg mx-auto leading-relaxed">
          One studio. Six deep capabilities. Zero handoffs to agencies of agencies.
        </p>
      </Reveal>
    </section>
  )
}

function ServiceList() {
  return (
    <section>
      {services.map((s, i) => {
        const Icon = iconMap[s.icon]
        const dark = i % 2 === 1
        return (
          <div
            key={s.n}
            className={` pt-10 sm:pt-24 py-20 px-6 ${dark ? 'bg-[#0a0a12]' : 'bg-white'}`}
          >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <p className={`text-xs font-semibold mb-3 flex items-center gap-2 ${dark ? 'text-violet-400' : 'text-violet-500'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" /> Service · {s.n}
                </p>
                <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-3 ${dark ? 'text-white' : 'text-[#0a0a12]'}`}>
                  {s.title}
                </h2>
                <p className={`text-[15px] font-medium mb-2 ${dark ? 'text-violet-300' : 'text-violet-600'}`}>
                  {s.tagline}
                </p>
                <p className={`text-[14px] leading-relaxed mb-6 max-w-md ${dark ? 'text-white/55' : 'text-[#0a0a12]/60'}`}>
                  {s.desc}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 max-w-sm">
                  {s.features.map((f) => (
                    <p key={f} className={`text-[13px] flex items-center gap-1.5 ${dark ? 'text-white/70' : 'text-[#0a0a12]/70'}`}>
                      <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" /> {f}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {s.stack.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] px-2.5 py-1 rounded-full border ${dark ? 'border-white/15 text-white/50' : 'border-[#0a0a12]/15 text-[#0a0a12]/50'
                        }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-[13px] font-semibold px-5 py-2.5 hover:opacity- transition-opacity"
                  >
                    Start project <ArrowUpRight size={13} />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.1} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div
                  className="aspect-square rounded-3xl border border-white/10 flex flex-col justify-between p-8 relative overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-black/10" />

                  <span className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm">
                    <Icon size={18} className="text-white" />
                  </span>
                  <div className="relative z-10">
                    <p className="text-6xl font-bold mb-1 text-white">{s.n}</p>
                    <p className="text-[11px] uppercase tracking-wide text-white/70">
                      {s.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        )
      })}
    </section>
  )
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="bg-white pt-10 sm:pt-24 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions," accent="answered" />
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className="rounded-xl border border-[#0a0a12]/10 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-[14px] font-medium text-[#0a0a12]">{f.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#0a0a12]/40 transition-transform duration-300 shrink-0 ml-4 ${openIndex === i ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-100'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[13.5px] text-[#0a0a12]/55 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
