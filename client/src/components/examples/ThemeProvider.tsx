import { ThemeProvider } from '../ThemeProvider'
import { Button } from "@/components/ui/button"

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-bold">Theme Provider Test</h2>
        <p className="text-muted-foreground">This component provides theme context</p>
        <Button>Sample Button</Button>
      </div>
    </ThemeProvider>
  )
}