"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Session } from "@supabase/supabase-js";

export default function TestPage() {
  const [status, setStatus] = useState("Loading...");
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        setStatus("Supabase is working!");
      } catch (error) {
        console.error('Auth check error:', error);
        setStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    checkAuth();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Supabase Test Page</h1>
      <p>Status: {status}</p>
      <p>Session: {session ? 'Active' : 'None'}</p>
      <p>Environment Variables:</p>
      <ul>
        <li>SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing'}</li>
        <li>SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing'}</li>
      </ul>
    </div>
  );
} 