import { Button } from "@/components/ui/button";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

import { Icons } from "./icons";

export function NavItemGitHub() {
  return (
    <Button className="size-9 p-0" variant="ghost" asChild>
      <a
        href={`https://github.com/${SOURCE_CODE_GITHUB_REPO}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Icons.github className="size-4" />
      </a>
    </Button>
  );
}
