"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8fafc' }}>
      <form onSubmit={handleLogin} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px #0001', padding: 32, minWidth: 340 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Log In</h1>
        <div style={{ color: '#64748b', marginBottom: 24 }}>Access your admin dashboard</div>
        {error && <div style={{ color: '#dc2626', marginBottom: 16 }}>{error}</div>}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#f8fafc' }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 8 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #d1d5db', background: '#f8fafc' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px 0', borderRadius: 6, background: '#2563eb', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer', marginBottom: 16 }}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          Don&apos;t have an account? <a href="/signup" style={{ color: '#2563eb' }}>Sign up</a>
        </div>
      </form>
    </section>
  );
} 