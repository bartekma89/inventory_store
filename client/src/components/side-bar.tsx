import { useUIStore } from "@/stores/ui.store";
import { MenuButton } from "@/components/menu-button";
import { SideLink } from "@/components/side-link";
import {
  Archive,
  CircleDollarSign,
  Layout,
  SlidersHorizontal,
  User,
  Clipboard,
} from "lucide-react";

export const Sidebar = () => {
  const { isSidebarCollapsed } = useUIStore((state) => state);

  const sidebarClassName = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-card transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassName}>
      {/* top log */}
      <div
        className={`flex gap-3 justify-between items-center pt-7 ${isSidebarCollapsed ? "px-5" : "px-8"}`}
      >
        <div>logo</div>
        <h1
          className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}
        >
          STOCK
        </h1>
        <MenuButton />
      </div>

      {/* links */}
      <div className="grow mt-8">
        <SideLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SideLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SideLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SideLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SideLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SideLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* Footer */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-muted-foreground">&copy; 2026 STOCK.</p>
      </div>
    </div>
  );
};
