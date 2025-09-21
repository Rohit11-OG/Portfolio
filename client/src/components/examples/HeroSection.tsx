import HeroSection from '../HeroSection'
import { ThemeProvider } from '../ThemeProvider'

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <div className="dark">
        <HeroSection />
      </div>
    </ThemeProvider>
  )
}