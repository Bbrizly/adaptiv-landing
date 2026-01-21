import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Finally, an app that doesn't make me feel guilty when I miss a day. It just... adapts.",
    author: "Sarah K.",
    role: "Working Mom",
    avatar: "S",
  },
  {
    quote: "As someone with an unpredictable schedule, this is exactly what I've been looking for.",
    author: "Marcus T.",
    role: "ER Nurse",
    avatar: "M",
  },
  {
    quote: "The AI rebalancing is like having a personal trainer who actually understands real life.",
    author: "Jessica R.",
    role: "Startup Founder",
    avatar: "J",
  },
]

export function SocialProofSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            From our beta testers
          </h2>
          <p className="text-muted-foreground">
            Real feedback from people testing AdaptFit
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-muted-foreground"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-6 text-sm text-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
