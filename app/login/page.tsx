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
    console.log('Login attempt started');
    setError("");
    setLoading(true);

    try {
      console.log('Calling Supabase auth...');
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      console.log('Supabase response:', { data, error });
      
      if (error) {
        console.error('Login error:', error);
        setError(error.message);
      } else if (data.user) {
        console.log('Login successful:', data.user.email);
        // Add a small delay to ensure cookies are set
        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
        console.error('No user data returned');
        setError("Login failed - no user data returned");
      }
    } catch (err) {
      console.error('Login exception:', err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <form onSubmit={handleLogin} className="login-form">
        <h1 className="login-title">Log In</h1>
        <div className="login-subtitle">Access your admin dashboard</div>
        {error && <div className="login-error">{error}</div>}
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            minLength={6}
            className="form-input"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={loading} className="login-button">
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        <div className="login-footer">
          Don&apos;t have an account? <a href="/signup" className="login-link">Sign up</a>
        </div>
      </form>
    </section>
  );
}
