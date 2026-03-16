import Navigation from '../Navigation'
import { ThemeProvider } from '../ThemeProvider'

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 p-8">
          <h2 className="text-2xl font-bold">Navigation Example</h2>
          <p className="text-muted-foreground">Fixed navigation with theme toggle and mobile menu</p>
        </div>
      </div>
    </ThemeProvider>
  )
}