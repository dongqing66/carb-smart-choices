
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // 处理主题切换
  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2 bg-muted/30 px-3 py-1.5 rounded-full transition-all duration-300">
      <Sun className={`h-4 w-4 transition-all duration-300 ${theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground'}`} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-700"
      />
      <Moon className={`h-4 w-4 transition-all duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-muted-foreground'}`} />
    </div>
  );
}
