"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define routes where the footer should be hidden
  const hideFooterRoutes = ["/dashboard"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </div>
  );
}
