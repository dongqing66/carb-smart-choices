"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils"; // 假设您有cn工具函数

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "relative flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300 touch-manipulation",
        isDark ? "bg-gray-700" : "bg-yellow-400" // 示例：根据主题改变轨道背景色
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* 滑块指示器 */}
      <div
        className={cn(
          "absolute inset-y-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transform transition-transform duration-300",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      />
      {/* 太阳图标 - 固定在左侧，根据主题显隐 */}
      <Sun
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white transition-opacity duration-300",
          isDark ? "opacity-0" : "opacity-100"
        )}
      />
      {/* 月亮图标 - 固定在右侧，根据主题显隐 */}
      <Moon
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white transition-opacity duration-300",
          isDark ? "opacity-100" : "opacity-0"
        )}
      />
    </button>
  );
}
