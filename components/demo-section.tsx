import { OnboardingPhoneDemo, AppPhoneDemo } from "@/components/phone-demo"

export function DemoSection() {
  return (
    <section id="features" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Interactive Demo
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            See how Adaptiv works
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From quick onboarding to daily use, experience how the app adapts to your life.
          </p>
        </div>

        {/* Two phone demos */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Onboarding Demo */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <span className="text-sm font-medium text-foreground">Onboarding</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Quick setup, personalized results
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Tell us your goals, available days, current weight, and any injuries. We'll build
                your custom plan in under 2 minutes.
              </p>
            </div>
            <OnboardingPhoneDemo />
          </div>

          {/* Main App Demo */}
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <span className="text-sm font-medium text-foreground">Daily Use</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Everything in one place
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Fitness workouts, nutrition tracking, and AI insights. Log meals by photo, text, or
                voice. Ask AI anything.
              </p>
            </div>
            <AppPhoneDemo />
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl">🏋️</span>
            </div>
            <h4 className="mb-2 font-semibold text-foreground">Fitness Tab</h4>
            <p className="text-sm text-muted-foreground">
              Today's workout, start or edit sessions, ask AI for form tips or alternatives
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl">🏠</span>
            </div>
            <h4 className="mb-2 font-semibold text-foreground">Home Tab</h4>
            <p className="text-sm text-muted-foreground">
              Weekly progress overview, fitness and nutrition summaries, AI-powered insights
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-xl">🥗</span>
            </div>
            <h4 className="mb-2 font-semibold text-foreground">Nutrition Tab</h4>
            <p className="text-sm text-muted-foreground">
              Daily calories and macros, meal plans, log food by image, text, or voice
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
