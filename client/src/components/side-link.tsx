"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISideLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

export const SideLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: ISideLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        }
        hover:text-primary hover:bg-muted gap-3 transition-colors ${
          isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
        }
      }`}
      >
        <Icon className="w-6 h-6" />

        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};
