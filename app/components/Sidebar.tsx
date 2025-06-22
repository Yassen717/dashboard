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
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-title">Admin Panel</div>
        <nav>
          <ul className="sidebar-nav">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label} className="sidebar-nav-item">
                  <Link 
                    href={item.href}
                    className={`sidebar-nav-link ${active ? 'active' : ''}`}
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
        className="logout-button"
      >
        Logout
      </button>
    </aside>
  );
});

export default Sidebar; 