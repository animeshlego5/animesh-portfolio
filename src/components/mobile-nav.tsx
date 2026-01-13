"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function MobileNav({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  const pathname = usePathname();

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const isHome = href === "/";
      const isOnHomePage = ["/", "/index"].includes(pathname);

      if (isHome && isOnHomePage) {
        e.preventDefault();
        if (window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    [pathname]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "group/toggle flex flex-col gap-1 data-[state=open]:bg-accent",
            className
          )}
          size="icon"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-0.75 group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:-translate-y-0.75 group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end" sideOffset={8}>
        {items.map((link) => {
          const isHome = link.href === "/";
          const isOnHomePage = ["/", "/index"].includes(pathname);
          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                data-disable-nprogress={isHome && isOnHomePage ? true : undefined}
              >
                {link.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

