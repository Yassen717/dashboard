import React from "react";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Metrics", href: "/metrics" },
  { label: "Logs", href: "/logs" },
  { label: "Alerts", href: "/alerts" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside style={{ width: 240, background: '#f1f5f9', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 32 }}>Admin Panel</div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.label} style={{ marginBottom: 16 }}>
              <Link 
                href={item.href}
                className="sidebar-nav-link"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 