import HeroSection from "./components/HeroSection"
import IntroduceSection from "./components/IntroduceSection"
import HistorySection from "./components/HistorySection"

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <HeroSection />
      <IntroduceSection />
      <HistorySection />
    </main>
  )
}