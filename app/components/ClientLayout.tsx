"use client";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Close sidebar on route change
    setSidebarOpen(false);
  }, [pathname]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  
  return (
    <div className="flex w-full relative">
      {showSidebar && (
        <>
          <button 
            className="hidden fixed top-4 left-4 z-[1000] bg-blue-600 text-white border-none rounded-md p-2 cursor-pointer shadow-md md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <div 
            className={`hidden fixed top-0 left-0 w-full h-full bg-black/50 z-[998] md:hidden ${sidebarOpen ? '!block' : ''}`}
            onClick={closeSidebar}
          />
          <div className={`flex flex-shrink-0 fixed top-0 left-0 h-full z-[999] -translate-x-full transition-transform duration-300 md:static md:translate-x-0 ${sidebarOpen ? '!translate-x-0' : ''}`}>
            <Sidebar onClose={closeSidebar} />
          </div>
        </>
      )}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 flex flex-col min-w-0 p-4 md:p-8 lg:p-12">{children}</main>
      </div>
    </div>
  );
});

export default ClientLayout; 