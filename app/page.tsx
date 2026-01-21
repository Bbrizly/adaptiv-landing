import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DemoSection } from "@/components/demo-section"
import { DifferenceSection } from "@/components/difference-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DemoSection />
        <DifferenceSection />
        <section id="testimonials">
          <SocialProofSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
