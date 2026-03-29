import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return <div className="mx-auto w-full max-w-[1366px]">{children}</div>;
}
