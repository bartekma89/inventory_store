"use client";

import { ReactNode } from "react";

import { Navbar } from "@/components/nav-bar";
import { Sidebar } from "@/components/side-bar";
import { useUIStore } from "@/stores/ui.store";

interface IDashboardWrapperProps {
  children: ReactNode;
}

export const DashboardWrapper = ({ children }: IDashboardWrapperProps) => {
  const isSidebarCollapsed = useUIStore((state) => state.isSidebarCollapsed);

  return (
    <div className="flex bg-background text-foreground w-full min-h-screen">
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-background ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};
