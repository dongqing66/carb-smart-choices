"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch"; // 导入 Switch 组件
import { Label } from "@/components/ui/label"; // 可选，用于辅助标签

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${!isDarkMode ? 'text-yellow-500' : 'text-muted-foreground'}`} />
      <Switch
        id="theme-toggle-switch"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="data-[state=checked]:bg-gray-700 data-[state=unchecked]:bg-yellow-400" // 自定义背景色
      />
      <Moon className={`h-5 w-5 ${isDarkMode ? 'text-blue-400' : 'text-muted-foreground'}`} />
    </div>
  );
}
