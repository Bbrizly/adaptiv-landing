import { Activity, Brain, RefreshCw } from "lucide-react"

export function DifferenceSection() {
  return (
    <section className="border-t border-border bg-card px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why it's different
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            "Most apps track. Some plan.{" "}
            <span className="text-primary font-medium">This one replans automatically.</span>"
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Activity className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Traditional Apps</h3>
            <p className="text-sm text-muted-foreground">
              Track what you did. Show you graphs. Leave the planning and adjustments to you.
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Brain className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Smart Planners</h3>
            <p className="text-sm text-muted-foreground">
              Create a plan based on your goals. But when life happens? You're on your own.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border-2 border-primary bg-background p-6">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
              Adptiv
            </div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Adptive AI</h3>
            <p className="text-sm text-muted-foreground">
              Monitors, learns, and automatically adjusts your entire week whenever something changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
