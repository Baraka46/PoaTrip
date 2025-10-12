"use client";

import { useTheme } from "./theme-provider";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as any)}
      className="px-4 py-2 rounded-lg bg-surface border border-default text-foreground font-medium cursor-pointer hover:bg-card transition-colors"
    >
      <option value="light">☀️ Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="purple">💜 Purple</option>
      <option value="ocean">🌊 Ocean</option>
    </select>
  );
}