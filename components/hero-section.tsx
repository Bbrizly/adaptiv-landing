"use client"

import React from "react"

import { WaitlistForm } from "@/components/waitlist-form"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 md:pb-24 md:pt-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Currently in development
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Fitness plans that adapt when{" "}
          <span className="text-primary">real life happens.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Miss a workout? Ate out? Your AI coach automatically rebalances your week so you stay on track without the guilt or math.
        </p>

        {/* Waitlist form */}
        <WaitlistForm />

        {/* Social proof mini */}
        <p className="mt-6 text-sm text-muted-foreground">
          Join our early supporters on the waitlist
        </p>
      </div>
    </section>
  )
}
