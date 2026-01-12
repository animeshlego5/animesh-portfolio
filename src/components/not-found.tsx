import { ArrowRightIcon, HomeIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { USER } from "@/features/portfolio/data/user";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center px-4 text-center",
        className
      )}
    >
      <h1 className="text-8xl font-bold tracking-tighter tabular-nums text-muted-foreground/50">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button variant="default" asChild>
          <Link href="/">
            <HomeIcon className="mr-2 size-4" />
            Back to {USER.firstName}'s Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
