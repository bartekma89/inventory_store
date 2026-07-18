"use client";

import { Bell, Settings, Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import Link from "next/link";
import { useUIStore } from "@/stores/ui.store";
import { MenuButton } from "./menu-button";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  const { isSidebarCollapsed } = useUIStore((state) => state);

  return (
    <div className="flex justify-between items-center w-full mb-7">
      {/* left side */}
      <div className="flex justify-between items-center gap-5">
        <MenuButton
          className={`${isSidebarCollapsed ? "md:block" : "md:hidden"}`}
        />
        <div className="relative">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search className="text-muted-foreground" size={20} />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      {/* right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <ThemeToggle />
          <div className="relative">
            <Bell className="cursor-pointer text-muted-foreground" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l border-border mx-3" />
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 bg-muted rounded-full flex items-center justify-center">
              image
            </div>
            <span className="font-semibold">Bartol</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-muted-foreground" size={24} />
        </Link>
      </div>
    </div>
  );
};
