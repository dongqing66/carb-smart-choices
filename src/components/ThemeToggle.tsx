
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle theme toggle
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="relative flex h-8 w-14 items-center justify-center rounded-full bg-muted/30 p-1 transition-colors duration-300"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div
        className={`absolute inset-y-1 ${
          theme === "dark" ? "right-1" : "left-1"
        } flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300`}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-blue-400" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}
