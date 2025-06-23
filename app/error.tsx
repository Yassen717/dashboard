"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    // Optionally log error
    // console.error(error);
  }, [error]);

  return (
    <section className="login-section">
      <div className="login-form flex flex-col items-center text-center">
        <h1 className="login-title text-error mb-2">Something went wrong</h1>
        <div className="login-subtitle mb-6">An unexpected error occurred. Please try again or return to the dashboard.</div>
        <button
          className="login-button w-full mt-2"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </div>
    </section>
  );
} 