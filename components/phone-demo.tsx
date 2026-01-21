"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, Dumbbell, Utensils, Calendar, Target, Clock, AlertCircle, Sparkles } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Let's personalize your plan",
    content: "onboarding",
  },
  {
    id: 2,
    title: "Your Week at a Glance",
    content: "weekly-plan",
  },
  {
    id: 3,
    title: "Quick Log",
    content: "log-fast",
  },
  {
    id: 4,
    title: "AI Rebalancing",
    content: "rebalance",
  },
]

export function PhoneDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [logAction, setLogAction] = useState<string | null>(null)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(0)
      setSelectedGoal(null)
      setSelectedDays([])
      setLogAction(null)
    }
  }

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case "onboarding":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">What's your main goal?</p>
              <div className="grid grid-cols-2 gap-2">
                {["Lose weight", "Build muscle", "Get fit", "Maintain"].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setSelectedGoal(goal)}
                    className={`rounded-lg border p-2 text-xs transition-all ${
                      selectedGoal === goal
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <Target className={`mx-auto mb-1 h-4 w-4 ${selectedGoal === goal ? "text-primary" : "text-muted-foreground"}`} />
                    {goal}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Available days</p>
              <div className="flex flex-wrap gap-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`rounded-md px-2 py-1 text-xs transition-all ${
                      selectedDays.includes(day)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Any injuries?</p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-lg border border-border bg-card p-2 text-xs text-foreground hover:border-muted-foreground">
                  None
                </button>
                <button className="flex-1 rounded-lg border border-border bg-card p-2 text-xs text-foreground hover:border-muted-foreground">
                  Back
                </button>
                <button className="flex-1 rounded-lg border border-border bg-card p-2 text-xs text-foreground hover:border-muted-foreground">
                  Knee
                </button>
              </div>
            </div>
          </div>
        )

      case "weekly-plan":
        return (
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Today's Macros</span>
                <Utensils className="h-3 w-3 text-primary" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-bold text-foreground">2,100</p>
                  <p className="text-xs text-muted-foreground">Calories</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">150g</p>
                  <p className="text-xs text-muted-foreground">Protein</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">220g</p>
                  <p className="text-xs text-muted-foreground">Carbs</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">Today's Workout</span>
                <Dumbbell className="h-3 w-3 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-foreground">Upper Body Strength</span>
                  <span className="text-muted-foreground">45 min</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Bench Press", "Rows", "Shoulder Press", "Curls"].map((exercise) => (
                    <span key={exercise} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                      {exercise}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Rest day tomorrow</span>
            </div>
          </div>
        )

      case "log-fast":
        return (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">How did today go?</p>
            <div className="space-y-2">
              <button
                onClick={() => setLogAction("ate-out")}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 transition-all ${
                  logAction === "ate-out"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-muted-foreground"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                  <Utensils className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Ate out</p>
                  <p className="text-xs text-muted-foreground">Had a meal outside plan</p>
                </div>
              </button>
              <button
                onClick={() => setLogAction("missed")}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 transition-all ${
                  logAction === "missed"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-muted-foreground"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                  <Clock className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Missed workout</p>
                  <p className="text-xs text-muted-foreground">Couldn't make it today</p>
                </div>
              </button>
              <button
                onClick={() => setLogAction("done")}
                className={`flex w-full items-center gap-3 rounded-lg border p-3 transition-all ${
                  logAction === "done"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-muted-foreground"
                }`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">All done!</p>
                  <p className="text-xs text-muted-foreground">Completed as planned</p>
                </div>
              </button>
            </div>
          </div>
        )

      case "rebalance":
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 p-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs text-foreground">AI detected changes needed</span>
            </div>
            <div className="rounded-lg border border-border bg-card p-3">
              <p className="mb-2 text-xs font-medium text-foreground">Proposed Adjustments</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-3 w-3 text-primary" />
                  <span className="text-muted-foreground">
                    Moving Thursday's leg day to Saturday
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-3 w-3 text-primary" />
                  <span className="text-muted-foreground">
                    Reducing Friday calories by 200 to balance
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="mt-0.5 h-3 w-3 text-primary" />
                  <span className="text-muted-foreground">
                    Adding extra protein to weekend meals
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <p className="text-xs text-muted-foreground">
                "Since you missed today, I've shifted your workouts to keep your weekly volume the same.
                Your weekend calories are adjusted to stay on track."
              </p>
            </div>
            <Button size="sm" className="w-full text-xs">
              Approve Changes
            </Button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="relative mx-auto w-[280px]">
      {/* Phone frame */}
      <div className="relative rounded-[40px] border-4 border-foreground/20 bg-background p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-foreground/20" />
        
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[32px] bg-card">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-background px-4 py-2 text-xs text-foreground">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="h-2 w-4 rounded-sm bg-foreground" />
              <div className="h-2 w-2 rounded-sm bg-foreground" />
            </div>
          </div>

          {/* App content */}
          <div className="min-h-[420px] bg-background p-4">
            {/* Step indicator */}
            <div className="mb-4 flex justify-center gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-6 rounded-full transition-all ${
                    index === currentStep ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Title */}
            <h3 className="mb-4 text-center text-sm font-semibold text-foreground">
              {steps[currentStep].title}
            </h3>

            {/* Content */}
            <div className="mb-4">{renderContent()}</div>

            {/* Next button */}
            <Button
              onClick={handleNext}
              className="w-full gap-2"
              size="sm"
            >
              {currentStep === steps.length - 1 ? "Start Over" : "Next"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center bg-background pb-2">
            <div className="h-1 w-24 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  )
}
