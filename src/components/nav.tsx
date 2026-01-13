"use client";

import Link from "next/link";
import React, { useCallback } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
}: {
  items: NavItem[];
  activeId?: string;
  className?: string;
}) {
  return (
    <nav
      data-active-id={activeId}
      className={cn("flex items-center gap-4", className)}
    >
      {items.map(({ title, href }) => {
        const active =
          activeId === href ||
          (href === "/" // Home page
            ? ["/", "/index"].includes(activeId || "")
            : activeId?.startsWith(href));

        return (
          <NavItem key={href} href={href} active={active} isHome={href === "/"}>
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}

export function NavItem({
  active,
  isHome,
  href,
  onClick,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
  isHome?: boolean;
}) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If we're on the home page and clicking the home/portfolio link
      if (active && isHome) {
        e.preventDefault();
        // Only scroll if not already at the top
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        // Otherwise do nothing (already at top)
        return;
      }
      // Call original onClick if provided
      onClick?.(e);
    },
    [active, isHome, onClick]
  );

  return (
    <Link
      href={href}
      onClick={handleClick}
      data-disable-nprogress={active && isHome ? true : undefined}
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] duration-300",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}
