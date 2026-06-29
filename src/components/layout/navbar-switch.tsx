"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import PrivacyNavbar from "@/components/layout/privacy-navbar";

export default function NavbarSwitch() {
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/privacy";

  if (isPrivacyPage) {
    return <PrivacyNavbar />;
  }

  return <Navbar />;
}
