"use client";

import { ThemeSwitcher } from "./theme-switcher";
import { ThemeDropdown } from "./theme-dropdown";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Optional: Add a persistent header with theme switcher */}
      <header className="border-b border-default bg-surface">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Poa trip</h1>
          <ThemeDropdown />
        </div>
      </header>
      
      {children}
    </div>
  );
}