import React from "react";

const navItems = [
  { label: "Overview", href: "#" },
  { label: "Events", href: "#" },
  { label: "Metrics", href: "#" },
  { label: "Logs", href: "#" },
  { label: "Alerts", href: "#" },
  { label: "Settings", href: "#" },
];

export default function Sidebar() {
  return (
    <aside style={{ width: 240, background: '#f1f5f9', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 32 }}>Admin Panel</div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.label} style={{ marginBottom: 16 }}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
} 