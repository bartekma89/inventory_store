"use client";

import { useUIStore } from "@/stores/ui.store";
import { Menu } from "lucide-react";

interface IMenuButtonProps {
  className?: string;
}

export const MenuButton = ({ className = "" }: IMenuButtonProps) => {
  const { toggleSidebar } = useUIStore((state) => state);

  return (
    <button
      className={`px-2 py-2 bg-muted rounded-full hover:bg-accent cursor-pointer ${className}`}
      onClick={toggleSidebar}>
      <Menu size={24} />
    </button>
  );
};
