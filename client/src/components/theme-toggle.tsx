"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden dark:block text-muted-foreground" size={24} />
      <Moon className="block dark:hidden text-muted-foreground" size={24} />
    </button>
  );
};
