import HeroSection from "./components/HeroSection"
import IntroduceSection from "./components/IntroduceSection"
import HistorySection from "./components/HistorySection"
import SkillsSection from "./components/SkillsSection"
import ProductsSection from "./components/ProductSection"

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <HeroSection />
      <IntroduceSection />
      <SkillsSection />
      <ProductsSection />
      <HistorySection />
    </main>
  )
}