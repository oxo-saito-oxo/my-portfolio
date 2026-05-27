import HeroSection from "./components/HeroSection"
import IntroduceSection from "./components/IntroduceSection"
import HistorySection from "./components/HistorySection"
import SkillsSection from "./components/SkillsSection"
import ProductsSection from "./components/ProductSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <HeroSection />
      <IntroduceSection />
      <SkillsSection />
      <ProductsSection />
      <HistorySection />
      <ContactSection />
    </main>
  )
}