"use client";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="flex-1 flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="bg-white rounded-xl shadow-sm p-[clamp(20px,5vw,32px)] w-full max-w-md flex flex-col items-center text-center">
        <h1 className="text-[clamp(24px,6vw,28px)] font-bold text-red-600 mb-2">Page Not Found</h1>
        <div className="text-slate-500 mb-6">Sorry, the page you are looking for does not exist.</div>
        <button
          className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold mt-2 transition-colors duration-200 hover:bg-blue-700"
          onClick={() => router.push("/")}
        >
          Go Home
        </button>
      </div>
    </section>
  );
} 