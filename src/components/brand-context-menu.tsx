"use client";

import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import { AgMark, getAgMarkSVG } from "./ag-mark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem
          onClick={() => {
            const svg = getAgMarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            copyText(svg);
            toast.success("Copied SVG");
          }}
        >
          <AgMark className="size-4" />
          Copy SVG
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
