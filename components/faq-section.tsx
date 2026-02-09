"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI know when to adjust my plan?",
    answer:
      "Every time you log something—whether it's a completed workout, a missed session, or an off-plan meal—our AI analyzes the impact on your weekly goals. It then recalculates the optimal distribution of calories, macros, and workouts across your remaining days to keep you on track.",
  },
  {
    question: "Will I still have control over my plan?",
    answer:
      "Absolutely. Every AI suggestion comes with an explanation and requires your approval before changes are made. You can accept, modify, or decline any proposed adjustment. Think of the AI as a smart assistant, not an overlord.",
  },
  {
    question: "What if I have dietary restrictions or injuries?",
    answer:
      "During onboarding, you'll tell us about any dietary preferences (vegan, keto, allergies, etc.) and physical limitations. The AI factors these into every plan and adjustment, ensuring recommendations are always safe and suitable for you.",
  },
]

export function FAQSection() {
  return (
    <section className="border-t border-border bg-card px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about Adptiv
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
