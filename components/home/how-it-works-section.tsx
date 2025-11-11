"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"

const planSteps = [
  {
    label: "01 / Consult",
    title: "Share how you want to feel",
    copy: "Short, host-led consult (15–20 min). You tell us the feelings you’re chasing and the pace you love.",
    micro: "It’s not where you want to go; it’s how you want to feel.",
  },
  {
    label: "02 / Your Plan",
    title: "Receive your bespoke plan (two clear options)",
    copy: "A polished proposal within 48 hours: two distinct routes, side-by-side—so choosing is effortless.",
    micro: "Our process is proven and personal.",
  },
  {
    label: "03 / Travel",
    title: "Travel at your pace",
    copy: "Host-led care, private vehicles, and space to linger when moments matter.",
    micro: "Clarity and ease drive conversions—clear steps, clear CTAs.",
  },
]

type PlanStepData = (typeof planSteps)[number]
type StepAlignment = "left" | "right" | "mobile"
const CONNECTOR_LENGTH = "clamp(160px, 24vw, 420px)"

const PlanTimelineCard = ({
  step,
  alignment,
  delay,
  prefersReducedMotion,
}: {
  step: PlanStepData
  alignment: StepAlignment
  delay: number
  prefersReducedMotion: boolean
}) => {
  const horizontalClass =
    alignment === "left" ? "md:ml-auto" : alignment === "right" ? "md:mr-auto" : "md:mx-auto"

  const initialX =
    prefersReducedMotion || alignment === "mobile" ? 0 : alignment === "left" ? -40 : 40
  const initialY = prefersReducedMotion || alignment !== "mobile" ? 0 : 24

  return (
    <motion.article
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay }}
      className={`rounded-[28px] border border-lux-sand/70 bg-white/95 p-8 shadow-[0_20px_60px_rgba(30,30,28,0.08)] backdrop-blur-sm flex flex-col gap-3 ${horizontalClass}`}
    >
      <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-lux-accent">{step.label}</p>
      <p className="font-serif text-2xl text-lux-forest">{step.title}</p>
      <p className="text-sm text-lux-ink opacity-80 leading-relaxed">{step.copy}</p>
      <p className="text-xs text-lux-forest/70 mt-2">{step.micro}</p>
    </motion.article>
  )
}

const PlanTimelineConnector = ({
  side,
  delay,
  prefersReducedMotion,
}: {
  side: Exclude<StepAlignment, "mobile">
  delay: number
  prefersReducedMotion: boolean
}) => {
  const gradient =
    side === "left"
      ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, var(--gold) 30%, var(--lux-accent) 65%, var(--lux-forest) 100%)"
      : "linear-gradient(270deg, rgba(255,255,255,0) 0%, var(--gold) 30%, var(--lux-accent) 65%, var(--lux-forest) 100%)"

  const baseStyle = {
    width: CONNECTOR_LENGTH,
    top: "50%",
    marginTop: "-0.5px",
    backgroundImage: gradient,
    transformOrigin: side === "left" ? "left center" : "right center",
    ...(side === "left" ? { left: "100%" } : { right: "100%" }),
  } as const

  const initialScale = prefersReducedMotion ? 1 : 0

  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute h-px rounded-full opacity-90"
      style={baseStyle}
      initial={{ opacity: 0, scaleX: initialScale }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay }}
    />
  )
}

const PlanTimelineNode = ({
  index,
  total,
  delay,
  prefersReducedMotion,
}: {
  index: number
  total: number
  delay: number
  prefersReducedMotion: boolean
}) => {
  const baseDelay = prefersReducedMotion ? 0 : delay

  return (
    <div className="order-1 md:order-none md:col-start-2 relative flex flex-col items-center gap-4 md:min-h-[220px]">
      <motion.div
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-lux-forest/40 bg-lux-bone font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-lux-forest shadow-[0_15px_40px_rgba(20,20,20,0.08)]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: baseDelay + 0.05 }}
      >
        {String(index + 1).padStart(2, "0")}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-lux-forest/20"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: baseDelay + 0.15 }}
        />
        {!prefersReducedMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute -inset-1 rounded-full border border-lux-forest/10"
            animate={{ opacity: [0, 0.6, 0], scale: [1, 1.15, 1.35] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          />
        )}
      </motion.div>
      {index < total - 1 ? (
        <>
          <motion.span
            aria-hidden="true"
            className="hidden md:block w-px flex-1 rounded-full bg-gradient-to-b from-lux-sand/90 via-lux-stone/60 to-transparent"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: baseDelay + 0.1 }}
          />
          <motion.span
            aria-hidden="true"
            className="md:hidden block h-10 w-px rounded-full bg-gradient-to-b from-lux-sand/90 via-lux-stone/60 to-transparent"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: baseDelay + 0.1 }}
          />
        </>
      ) : null}
    </div>
  )
}

const PlanTimeline = ({ steps }: { steps: PlanStepData[] }) => {
  const prefersReducedMotion = useReducedMotion() ?? false
  const baseDelay = prefersReducedMotion ? 0 : 0.1

  return (
    <div className="relative mt-12">
      <motion.span
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px rounded-full"
        style={{
          transformOrigin: "top",
          backgroundImage: "linear-gradient(180deg, var(--gold), var(--lux-accent), var(--lux-forest))",
          backgroundSize: "200% 200%",
        }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        animate={
          prefersReducedMotion
            ? undefined
            : { backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }
        }
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          ...(prefersReducedMotion
            ? {}
            : { backgroundPosition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }),
        }}
      />
      <div className="space-y-12">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0
          const delay = index * baseDelay

          return (
            <div
              key={step.label}
              className="relative grid items-center gap-6 md:grid-cols-[1fr_minmax(140px,180px)_1fr]"
            >
              <div className="hidden md:flex justify-end relative">
                {isLeft ? (
                  <>
                    <PlanTimelineCard
                      step={step}
                      alignment="left"
                      delay={delay}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                    <PlanTimelineConnector
                      side="left"
                      delay={delay + 0.05}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  </>
                ) : (
                  <div aria-hidden="true" className="h-full w-full" />
                )}
              </div>

              <PlanTimelineNode index={index} total={steps.length} delay={delay} prefersReducedMotion={prefersReducedMotion} />

              <div className="hidden md:flex justify-start relative">
                {!isLeft ? (
                  <>
                    <PlanTimelineCard
                      step={step}
                      alignment="right"
                      delay={delay}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                    <PlanTimelineConnector
                      side="right"
                      delay={delay + 0.05}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  </>
                ) : (
                  <div aria-hidden="true" className="h-full w-full" />
                )}
              </div>

              <div className="md:hidden">
                <PlanTimelineCard
                  step={step}
                  alignment="mobile"
                  delay={delay}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section className="px-6 py-24 bg-white" id="plan">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-lux-accent font-semibold">The Plan</p>
          <h2 className="font-serif text-5xl text-lux-forest">How it works</h2>
        </div>
        <PlanTimeline steps={planSteps} />
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-lux-forest text-white text-sm tracking-[0.3em]"
          >
            Get My Plan
          </Link>
          <Link href="/sample-itinerary.pdf" className="text-sm text-lux-forest border-b border-lux-accent w-fit">
            Download Sample Itinerary (PDF)
          </Link>
        </div>
      </div>
    </section>
  )
}
