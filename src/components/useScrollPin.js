'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * useScrollPin
 *
 * Pins `pinRef`'s element while the user scrolls through `triggerRef`'s
 * element, and reports scroll progress (0 → 1) plus a derived step index —
 * the same job the old manual `getBoundingClientRect` + `position: sticky`
 * calculation was doing, but driven by ScrollTrigger so it's frame-accurate
 * and handles the pin/unpin/resize edge cases for you.
 *
 * Usage:
 *   const triggerRef = useRef(null)
 *   const pinRef = useRef(null)
 *   const { progress, activeStep } = useScrollPin({
 *     triggerRef,
 *     pinRef,
 *     stepCount: steps.length,
 *   })
 *
 * @param {Object} options
 * @param {React.RefObject} options.triggerRef - element that defines when pinning starts/ends
 * @param {React.RefObject} options.pinRef - element that gets pinned (defaults to triggerRef if omitted)
 * @param {number} options.stepCount - number of discrete steps to derive activeStep from
 * @param {number} options.pxPerStepDesktop - scroll distance (px) per step on desktop, default 600
 * @param {number} options.pxPerStepMobile - scroll distance (px) per step on mobile, default 380
 * @param {number} options.scrub - GSAP scrub value/smoothing, default 1
 * @param {boolean} options.enabled - set false to tear down the ScrollTrigger (default true)
 */
export function useScrollPin({
  triggerRef,
  pinRef,
  stepCount,
  pxPerStepDesktop = 600,
  pxPerStepMobile = 380,
  scrub = 1,
  enabled = true,
}) {
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const triggerInstanceRef = useRef(null)

  useEffect(() => {
    if (!enabled || !triggerRef.current || stepCount <= 0) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isDesktop } = context.conditions
          const pxPerStep = isDesktop ? pxPerStepDesktop : pxPerStepMobile

          const trigger = ScrollTrigger.create({
            trigger: triggerRef.current,
            start: 'top top',
            end: () => `+=${stepCount * pxPerStep}`,
            pin: pinRef?.current ?? triggerRef.current,
            pinSpacing: true,
            scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(stepCount - 1, Math.floor(self.progress * stepCount))
              setProgress(self.progress)
              setActiveStep((prev) => (prev === idx ? prev : idx))
            },
          })

          triggerInstanceRef.current = trigger
          return () => trigger.kill()
        }
      )
    }, triggerRef)

    return () => ctx.revert()
  }, [enabled, stepCount, pxPerStepDesktop, pxPerStepMobile, scrub, triggerRef, pinRef])

  return { progress, activeStep, setActiveStep }
}