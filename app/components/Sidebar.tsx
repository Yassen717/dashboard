"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Metrics", href: "/metrics" },
  { label: "Logs", href: "/logs" },
  { label: "Alerts", href: "/alerts" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };
  return (
    <aside style={{ width: 240, background: '#f1f5f9', minHeight: '100vh', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
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
      </div>
      <button
        onClick={handleLogout}
        style={{
          width: '100%',
          padding: '10px 0',
          borderRadius: 6,
          background: '#dc2626',
          color: '#fff',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          marginTop: 32,
        }}
      >
        Logout
      </button>
    </aside>
  );
} 