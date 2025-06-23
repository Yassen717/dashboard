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

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      if (error) {
        setError(error.message);
      } else if (data.user) {
        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
        setError("Login failed - no user data returned");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex-1 flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-sm p-[clamp(20px,5vw,32px)] w-full max-w-md">
        <h1 className="text-[clamp(24px,6vw,28px)] font-bold mb-4">Log In</h1>
        <div className="text-slate-500 mb-6">Access your admin dashboard</div>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={loading} className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold mb-4 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-blue-700">
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        <div className="text-center text-sm text-slate-500">
          Don&apos;t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </div>
      </form>
    </section>
  );
}
