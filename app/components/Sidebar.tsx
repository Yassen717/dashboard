"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../../lib/authContext";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Metrics", href: "/metrics" },
  { label: "Logs", href: "/logs" },
  { label: "Alerts", href: "/alerts" },
  { label: "Settings", href: "/settings" },
];

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = React.memo(function Sidebar({ onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { signOut } = useAuth();
  
  const handleLogout = React.useCallback(async () => {
    await signOut();
    router.push("/login");
  }, [signOut, router]);
  
  const handleNavClick = () => {
    // Close sidebar on mobile when navigation item is clicked
    if (onClose) {
      onClose();
    }
  };
  
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };
  
  return (
    <aside className="w-[240px] bg-slate-100 min-h-screen py-8 px-4 flex flex-col justify-between transition-transform duration-300">
      <div className="flex-1">
        <div className="font-bold text-[clamp(16px,4vw,20px)] mb-8">Admin Panel</div>
        <nav>
          <ul className="list-none p-0 m-0">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label} className="mb-4">
                  <Link 
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-[clamp(14px,3vw,16px)] transition-all ${active ? 'bg-blue-600 text-white font-semibold hover:bg-blue-700' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-800'}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <button
        onClick={handleLogout}
        className="w-full py-2 rounded-md bg-red-600 text-white font-semibold border-none cursor-pointer mt-8 transition-colors duration-200 hover:bg-red-700"
      >
        Logout
      </button>
    </aside>
  );
});

export default Sidebar; 