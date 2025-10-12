"use client";

import { useTheme } from "./theme-provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", label: "Light", icon: "☀️" },
    { value: "dark", label: "Dark", icon: "🌙" },
    { value: "purple", label: "Purple", icon: "💜" },
    { value: "ocean", label: "Ocean", icon: "🌊" },
  ] as const;

  return (
    <div className="flex gap-2 p-4">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            theme === t.value
              ? "bg-primary text-white shadow-lg scale-105"
              : "bg-surface border border-default hover:bg-card"
          }`}
        >
          <span className="mr-2">{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}