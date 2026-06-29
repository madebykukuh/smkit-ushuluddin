"use client";

import { usePathname } from "next/navigation";

export default function HideOnPrivacy({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === "/privacy") return null;
  return <>{children}</>;
}
