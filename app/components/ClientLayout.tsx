"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const ClientLayout = React.memo(function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/login" && pathname !== "/signup";
  
  return (
    <div className="layout-container">
      {showSidebar && <Sidebar />}
      <div className="main-content">
        <main className="main-area">{children}</main>
      </div>
    </div>
  );
});

export default ClientLayout; 