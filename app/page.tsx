import HeroSection from "./components/HeroSection"
import IntroduceSection from "./components/IntroduceSection"
import HistorySection from "./components/HistorySection"
import SkillsSection from "./components/SkillsSection"

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <HeroSection />
      <IntroduceSection />
      <HistorySection />
      <SkillsSection />
    </main>
  )
}