import ThreeDElement from '../ThreeDElement'
import { ThemeProvider } from '../ThemeProvider'

export default function ThreeDElementExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-background to-muted/20">
        <div className="w-96 h-96">
          <ThreeDElement />
        </div>
      </div>
    </ThemeProvider>
  )
}