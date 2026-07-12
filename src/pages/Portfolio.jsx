import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import { portfolioItems, filterCategories } from '../data/siteData'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? portfolioItems : portfolioItems.filter((p) => p.category === active)

  return (
    <PageTransition>
      <section className="relative pt-24 sm:pt-40 pb-12 px-6 bg-[#0a0a12] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.3),transparent_55%)]" />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow="Portfolio" title="Selected" accent="work" dark />
          <p className="mt-5 text-white/60 text-[15px] max-w-lg mx-auto leading-relaxed">
            A snapshot of what happens when craft meets ambition.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative flex flex-wrap items-center justify-center gap-2 mt-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[13px] font-medium px-4 py-2 rounded-full border transition-colors ${active === cat
                  ? 'bg-white text-[#0a0a12] border-white'
                  : 'border-white/15 text-white/60 hover:text-white hover:border-white/30'
                }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="bg-[#0a0a12] pt-14 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <a href="#" className="group block relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[11px] uppercase tracking-wide text-violet-300 mb-1">
                      {p.category}
                    </p>
                    <p className="text-white font-semibold">{p.title}</p>
                  </div>
                  <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} className="text-white" />
                  </span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 mt-10">No projects in this category yet.</p>
        )}
      </section>

      <CtaBanner />
    </PageTransition>
  )
}
