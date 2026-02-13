"use client"

import { FormEvent, useState } from "react"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase-client"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || isLoading) return

    setIsLoading(true)
    setErrorMessage(null)

    try {
      const { error } = await supabase.functions.invoke("join_waitlist", {
        body: { email },
      })

      if (error) {
        throw error
      }

      setSubmitted(true)
      setEmail("")
    } catch (error) {
      console.error("Failed to join waitlist", error)
      setErrorMessage("Unable to join the waitlist right now. Please try again soon.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      {!submitted ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-12 flex-1 border-border bg-card text-foreground placeholder:text-muted-foreground"
            required
          />
          <Button type="submit" className="h-12 gap-2 px-6" disabled={isLoading}>
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
  )
}
