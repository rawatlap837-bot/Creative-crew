import { Star } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteData'

export default function TestimonialsSection() {
  return (
    <section className="bg-white pt-12 sm:pt-24 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title="Loved by" accent="founders & CMOs" align="left" />
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="rounded-2xl border border-[#0a0a12]/10 bg-[#faf9fc] p-7 h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={13} className="fill-violet-500 text-violet-500" />
                  ))}
                </div>
                <p className="text-[15px] text-[#0a0a12]/80 leading-relaxed mb-6">"{t.quote}"</p>
                <p className="text-sm font-semibold text-[#0a0a12]">{t.name}</p>
                <p className="text-xs text-[#0a0a12]/50">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
