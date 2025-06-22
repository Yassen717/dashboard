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
    <section className="login-section">
      <form onSubmit={handleSignup} className="login-form">
        <h1 className="login-title">Sign Up</h1>
        <div className="login-subtitle">Create your admin account</div>
        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">{success}</div>}
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="login-footer">
          Already have an account? <a href="/login" className="login-link">Log in</a>
        </div>
      </form>
    </section>
  );
} 