"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

const ClientLayout = React.memo(function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/login" && pathname !== "/signup";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  return (
    <div className="layout-container">
      {showSidebar && (
        <>
          <button 
            className="mobile-nav-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <div 
            className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
            onClick={closeSidebar}
          />
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <Sidebar onClose={closeSidebar} />
          </div>
        </>
      )}
      <div className="main-content">
        <main className="main-area">{children}</main>
      </div>
    </div>
  );
});

export default ClientLayout; 