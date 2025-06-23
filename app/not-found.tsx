"use client";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="login-section">
      <div className="login-form flex flex-col items-center text-center">
        <h1 className="login-title text-error mb-2">Page Not Found</h1>
        <div className="login-subtitle mb-6">Sorry, the page you are looking for does not exist.</div>
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