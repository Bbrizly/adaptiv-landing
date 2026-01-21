"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Check,
  Dumbbell,
  Utensils,
  Target,
  Home,
  Play,
  Pencil,
  Sparkles,
  Camera,
  Mic,
  MessageSquare,
  TrendingUp,
  Flame,
  Calendar,
} from "lucide-react"

// Onboarding Demo
const onboardingSteps = [
  { id: 1, title: "What's your goal?", content: "goal" },
  { id: 2, title: "Your schedule", content: "schedule" },
  { id: 3, title: "About you", content: "about" },
  { id: 4, title: "Any limitations?", content: "injuries" },
]

export function OnboardingPhoneDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)
  const [selectedDays, setSelectedDays] = useState<string[]>(["Mon", "Wed", "Fri"])
  const [weight, setWeight] = useState("165")
  const [selectedInjuries, setSelectedInjuries] = useState<string[]>([])

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(0)
      setSelectedGoal(null)
      setSelectedDays(["Mon", "Wed", "Fri"])
      setSelectedInjuries([])
    }
  }

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const toggleInjury = (injury: string) => {
    setSelectedInjuries((prev) =>
      prev.includes(injury) ? prev.filter((i) => i !== injury) : [...prev, injury]
    )
  }

  const renderContent = () => {
    switch (onboardingSteps[currentStep].content) {
      case "goal":
        return (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">Select your primary fitness goal</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Lose weight", icon: TrendingUp },
                { label: "Build muscle", icon: Dumbbell },
                { label: "Get fit", icon: Flame },
                { label: "Maintain", icon: Target },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setSelectedGoal(label)}
                  className={`rounded-lg border p-3 text-xs transition-all ${
                    selectedGoal === label
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-muted-foreground"
                  }`}
                >
                  <Icon
                    className={`mx-auto mb-1.5 h-5 w-5 ${selectedGoal === label ? "text-primary" : "text-muted-foreground"}`}
                  />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )

      case "schedule":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Which days can you work out?</p>
              <div className="flex flex-wrap gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-all ${
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
              <p className="text-xs text-muted-foreground">Preferred workout time</p>
              <div className="grid grid-cols-3 gap-2">
                {["Morning", "Afternoon", "Evening"].map((time) => (
                  <button
                    key={time}
                    className="rounded-lg border border-border bg-card px-2 py-2 text-xs text-foreground hover:border-muted-foreground"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )

      case "about":
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Current weight (lbs)</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWeight(String(Math.max(100, Number(weight) - 5)))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-secondary"
                >
                  -
                </button>
                <div className="flex-1 rounded-lg border border-border bg-card px-4 py-2 text-center text-lg font-semibold text-foreground">
                  {weight}
                </div>
                <button
                  onClick={() => setWeight(String(Number(weight) + 5))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:bg-secondary"
                >
                  +
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Target weight (lbs)</p>
              <div className="rounded-lg border border-border bg-card px-4 py-2 text-center text-lg font-semibold text-foreground">
                155
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Experience level</p>
              <div className="grid grid-cols-3 gap-2">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <button
                    key={level}
                    className="rounded-lg border border-border bg-card px-2 py-2 text-xs text-foreground hover:border-muted-foreground"
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )

      case "injuries":
        return (
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground">
              Select any injuries or limitations (tap to select)
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["None", "Lower back", "Knee", "Shoulder", "Wrist", "Neck"].map((injury) => (
                <button
                  key={injury}
                  onClick={() => toggleInjury(injury)}
                  className={`rounded-lg border p-2.5 text-xs transition-all ${
                    selectedInjuries.includes(injury)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-muted-foreground"
                  }`}
                >
                  {injury}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">Dietary preferences</p>
              <div className="flex flex-wrap gap-1.5">
                {["None", "Vegetarian", "Vegan", "Keto", "Gluten-free"].map((diet) => (
                  <button
                    key={diet}
                    className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-foreground hover:border-muted-foreground"
                  >
                    {diet}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <PhoneFrame>
      {/* Step indicator */}
      <div className="mb-4 flex justify-center gap-1.5">
        {onboardingSteps.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full transition-all ${
              index === currentStep ? "bg-primary" : index < currentStep ? "bg-primary/50" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-center text-sm font-semibold text-foreground">
        {onboardingSteps[currentStep].title}
      </h3>

      {/* Content */}
      <div className="mb-4 min-h-[260px]">{renderContent()}</div>

      {/* Next button */}
      <Button onClick={handleNext} className="w-full gap-2" size="sm">
        {currentStep === onboardingSteps.length - 1 ? "Complete Setup" : "Continue"}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </PhoneFrame>
  )
}

// Main App Demo with tabs
type Tab = "fitness" | "home" | "nutrition"

export function AppPhoneDemo() {
  const [activeTab, setActiveTab] = useState<Tab>("home")

  const renderTabContent = () => {
    switch (activeTab) {
      case "fitness":
        return <FitnessTab />
      case "home":
        return <HomeTab />
      case "nutrition":
        return <NutritionTab />
      default:
        return null
    }
  }

  return (
    <PhoneFrame>
      {/* Tab content */}
      <div className="min-h-[320px]">{renderTabContent()}</div>

      {/* Bottom tab bar */}
      <div className="mt-4 flex items-center justify-around rounded-xl border border-border bg-card p-2">
        <TabButton
          icon={Dumbbell}
          label="Fitness"
          active={activeTab === "fitness"}
          onClick={() => setActiveTab("fitness")}
        />
        <TabButton
          icon={Home}
          label="Home"
          active={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <TabButton
          icon={Utensils}
          label="Nutrition"
          active={activeTab === "nutrition"}
          onClick={() => setActiveTab("nutrition")}
        />
      </div>
    </PhoneFrame>
  )
}

function TabButton({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 rounded-lg px-4 py-2 transition-all ${
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}

function FitnessTab() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Today's Workout</h3>
        <span className="text-xs text-muted-foreground">Upper Body</span>
      </div>

      <div className="rounded-lg border border-border bg-card p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-foreground">Strength Training</span>
          <span className="text-xs text-muted-foreground">45 min</span>
        </div>
        <div className="space-y-2">
          {[
            { name: "Bench Press", sets: "4x8" },
            { name: "Dumbbell Rows", sets: "3x12" },
            { name: "Shoulder Press", sets: "3x10" },
            { name: "Bicep Curls", sets: "3x12" },
          ].map((exercise) => (
            <div
              key={exercise.name}
              className="flex items-center justify-between rounded-md bg-secondary/50 px-2 py-1.5"
            >
              <span className="text-xs text-foreground">{exercise.name}</span>
              <span className="text-xs text-muted-foreground">{exercise.sets}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button size="sm" className="gap-1.5">
          <Play className="h-3 w-3" />
          Start
        </Button>
        <Button size="sm" variant="outline" className="gap-1.5 bg-transparent">
          <Pencil className="h-3 w-3" />
          Edit
        </Button>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 p-2.5 text-xs text-primary transition-colors hover:bg-primary/10">
        <Sparkles className="h-4 w-4" />
        Ask AI about my workout
      </button>
    </div>
  )
}

function HomeTab() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Weekly Progress</h3>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Progress summary */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">This week</span>
          <span className="text-xs font-medium text-primary">On track</span>
        </div>
        <div className="flex gap-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className={`h-8 w-full rounded ${
                  i < 3
                    ? "bg-primary"
                    : i === 3
                      ? "border border-dashed border-primary/50 bg-primary/20"
                      : "bg-secondary"
                }`}
              />
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="mb-1 flex items-center gap-1.5">
            <Dumbbell className="h-3 w-3 text-primary" />
            <span className="text-xs text-muted-foreground">Fitness</span>
          </div>
          <p className="text-lg font-bold text-foreground">3/4</p>
          <p className="text-xs text-muted-foreground">workouts done</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-3">
          <div className="mb-1 flex items-center gap-1.5">
            <Utensils className="h-3 w-3 text-primary" />
            <span className="text-xs text-muted-foreground">Nutrition</span>
          </div>
          <p className="text-lg font-bold text-foreground">92%</p>
          <p className="text-xs text-muted-foreground">on plan</p>
        </div>
      </div>

      {/* AI insight */}
      <div className="rounded-lg bg-secondary p-3">
        <div className="mb-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-foreground">AI Insight</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Great consistency! You're 15% more active than last week. Keep it up for best results.
        </p>
      </div>
    </div>
  )
}

function NutritionTab() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Today's Nutrition</h3>
        <span className="text-xs text-muted-foreground">1,650 / 2,100 cal</span>
      </div>

      {/* Calorie progress */}
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="mb-2 h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[78%] rounded-full bg-primary" />
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-sm font-bold text-foreground">120g</p>
            <p className="text-xs text-muted-foreground">Protein</p>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">180g</p>
            <p className="text-xs text-muted-foreground">Carbs</p>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">55g</p>
            <p className="text-xs text-muted-foreground">Fat</p>
          </div>
        </div>
      </div>

      {/* Meal plan */}
      <div className="space-y-2">
        <span className="text-xs text-muted-foreground">Upcoming meals</span>
        <div className="space-y-1.5">
          {[
            { meal: "Lunch", food: "Grilled chicken salad", cal: "450" },
            { meal: "Snack", food: "Greek yogurt + berries", cal: "180" },
            { meal: "Dinner", food: "Salmon with quinoa", cal: "520" },
          ].map((item) => (
            <div
              key={item.meal}
              className="flex items-center justify-between rounded-md bg-secondary/50 px-2 py-1.5"
            >
              <div>
                <span className="text-xs font-medium text-foreground">{item.meal}</span>
                <span className="ml-2 text-xs text-muted-foreground">{item.food}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.cal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add food */}
      <div className="space-y-2">
        <span className="text-xs text-muted-foreground">Log food</span>
        <div className="grid grid-cols-3 gap-2">
          <button className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <Camera className="h-4 w-4" />
            <span className="text-xs">Photo</span>
          </button>
          <button className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">Text</span>
          </button>
          <button className="flex flex-col items-center gap-1 rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <Mic className="h-4 w-4" />
            <span className="text-xs">Voice</span>
          </button>
        </div>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 p-2.5 text-xs text-primary transition-colors hover:bg-primary/10">
        <Sparkles className="h-4 w-4" />
        Ask AI about nutrition
      </button>
    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
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
            <div className="flex items-center gap-1">
              <div className="h-2 w-4 rounded-sm bg-foreground" />
              <div className="h-2 w-2 rounded-sm bg-foreground" />
            </div>
          </div>

          {/* App content */}
          <div className="min-h-[420px] bg-background p-4">{children}</div>

          {/* Home indicator */}
          <div className="flex justify-center bg-background pb-2">
            <div className="h-1 w-24 rounded-full bg-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Keep original PhoneDemo for backward compatibility
export function PhoneDemo() {
  return <AppPhoneDemo />
}
