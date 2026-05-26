import HeroSection from "./components/HeroSection"
import IntroduceSection from "./components/IntroduceSection"

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <HeroSection />
      <IntroduceSection />
    </main>
  )
}
