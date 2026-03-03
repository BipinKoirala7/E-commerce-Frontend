"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "../../store/zustand";
import { useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isAuthenticated = useUserStore((state) => state.isAuthenticated());

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User is not authenticated. Redirecting to login page.");
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;
  return <div className="w-full h-full px-8 py-8">{children}</div>;
}

export default Layout;
