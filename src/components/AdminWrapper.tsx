"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Nav />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}
