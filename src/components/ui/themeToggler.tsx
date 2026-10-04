"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // The real theme is already applied by a script in layout.tsx; just read it.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("globalTheme", next ? "dark" : "light");
    } catch {
      // Private browsing can block storage; the toggle still works for this visit.
    }
    setIsDark(next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-secondary hover:text-primary dark:text-gray-400 dark:hover:text-gray-50"
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
