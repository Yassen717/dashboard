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
      setSuccess("Signup successful! You can now log in.");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  };

  return (
    <section className="flex-1 flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <form onSubmit={handleSignup} className="bg-white rounded-xl shadow-sm p-[clamp(20px,5vw,32px)] w-full max-w-md">
        <h1 className="text-[clamp(24px,6vw,28px)] font-bold mb-4">Sign Up</h1>
        <div className="text-slate-500 mb-6">Create your admin account</div>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {success && <div className="text-green-600 mb-4">{success}</div>}
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="text-center text-sm text-slate-500">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </div>
      </form>
    </section>
  );
} 