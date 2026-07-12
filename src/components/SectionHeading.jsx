import { useState } from 'react'
import BlurText from '../animations/BlurText'

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = 'center',
  dark = false,
}) {
  const isCenter = align === 'center'
  const alignment = isCenter ? 'text-center items-center' : 'text-left items-start'
  const titleColor = dark ? 'text-white' : 'text-[#0a0a12]'
  const subColor = dark ? 'text-white/55' : 'text-[#0a0a12]/55'
  const [accentVisible, setAccentVisible] = useState(false)

  return (
    <div className={`flex flex-col mb-3 ${alignment}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2.5 mb-6! ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-6 h-px bg-gradient-to-r from-violet-500 to-fuchsia-400" />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-violet-400">
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`text-4xl sm:text-5xl font-bold tracking-[-0.02em] !leading-[1.2] ${titleColor} flex flex-wrap gap-x-2 gap-y-0 sm:gap-y-4 ${isCenter ? 'justify-center' : ''
          }`}
      >
        <BlurText
          text={title}
          delay={120}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => setAccentVisible(true)}
          className={titleColor}
        />
        {accent && (
          <span
            className={`bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent transition-opacity duration-500 ${accentVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {accent}
            <span className={titleColor}>.</span>
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </div>
  )
}