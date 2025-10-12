import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeDropdown } from "@/components/theme-dropdown";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-secondary text-lg">
            Choose your preferred theme below
          </p>
        </header>

        {/* Theme Switchers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Theme Selector</h2>
          <ThemeSwitcher />
          
          {/* Or use dropdown */}
          <div className="mt-4">
            <ThemeDropdown />
          </div>
        </section>

        {/* Demo Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-default rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Primary Card</h3>
            <p className="text-secondary mb-4">
              This card uses the surface and border colors from your theme.
            </p>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Primary Button
            </button>
          </div>

          <div className="bg-card border border-default rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Secondary Card</h3>
            <p className="text-muted mb-4">
              Notice how all colors adapt to your selected theme.
            </p>
            <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Secondary Button
            </button>
          </div>

          <div className="bg-card border border-default rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Accent Card</h3>
            <p className="text-secondary mb-4">
              The accent color creates visual interest and highlights.
            </p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Accent Button
            </button>
          </div>

          <div className="bg-card border border-default rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Status Messages</h3>
            <div className="space-y-2">
              <div className="bg-success text-white px-3 py-2 rounded">
                ✓ Success message
              </div>
              <div className="bg-warning text-white px-3 py-2 rounded">
                ⚠ Warning message
              </div>
              <div className="bg-error text-white px-3 py-2 rounded">
                ✗ Error message
              </div>
              <div className="bg-info text-white px-3 py-2 rounded">
                ℹ Info message
              </div>
            </div>
          </div>
        </section>

        {/* Text Examples */}
        <section className="mt-8 bg-card border border-default rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Text Styles</h2>
          <p className="text-foreground mb-2">This is primary text using foreground color.</p>
          <p className="text-secondary mb-2">This is secondary text for less emphasis.</p>
          <p className="text-muted">This is muted text for subtle information.</p>
        </section>
      </div>
    </main>
  );
}