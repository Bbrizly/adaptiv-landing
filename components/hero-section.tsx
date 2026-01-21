"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setErrorMessage(null)
    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        const message =
          data && typeof data.error === "string"
            ? data.error
            : "Unable to join the waitlist right now."
        throw new Error(message)
      }

      setSubmitted(true)
      setEmail("")
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      )
    } finally {
      setIsLoading(false)
    }
  }

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

        {/* Email form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          {!submitted ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 flex-1 border-border bg-card text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button
                type="submit"
                className="h-12 gap-2 px-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Joining..."
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-4 text-primary">
              <Check className="h-5 w-5" />
              <span className="font-medium">You're on the list! We'll be in touch soon.</span>
            </div>
          )}
          {!submitted && errorMessage && (
            <p className="mt-3 text-sm text-destructive" role="alert">
              {errorMessage}
            </p>
          )}
        </form>

        {/* Social proof mini */}
        <p className="mt-6 text-sm text-muted-foreground">
          Join 10 early supporters on the waitlist
        </p>
      </div>
    </section>
  )
}
