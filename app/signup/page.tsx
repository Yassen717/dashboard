"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Signup successful! Please check your email to confirm your account.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8fafc' }}>
      <form onSubmit={handleSignup} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px #0001', padding: 32, minWidth: 340 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Sign Up</h1>
        <div style={{ color: '#64748b', marginBottom: 24 }}>Create your admin account</div>
        {error && <div style={{ color: '#dc2626', marginBottom: 16 }}>{error}</div>}
        {success && <div style={{ color: '#16a34a', marginBottom: 16 }}>{success}</div>}
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          Already have an account? <a href="/login" style={{ color: '#2563eb' }}>Log in</a>
        </div>
      </form>
    </section>
  );
} 