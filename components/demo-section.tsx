import { PhoneDemo } from "@/components/phone-demo"

export function DemoSection() {
  return (
    <section id="features" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Interactive Demo
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              See how Adaptiv works
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Quick Onboarding</h3>
                  <p className="text-sm">Tell us your goals, schedule, and any limitations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Get Your Plan</h3>
                  <p className="text-sm">Personalized daily macros and workouts tailored to you.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Log in One Tap</h3>
                  <p className="text-sm">Quick logging for meals, workouts, and life events.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="font-medium text-foreground">AI Rebalances</h3>
                  <p className="text-sm">Your week adjusts automatically. Review and approve.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
