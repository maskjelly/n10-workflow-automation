'use client'
import React from "react";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 transition-colors duration-300">
      <div className="text-center space-y-6 max-w-lg">
        {/* Icon with subtle animation */}
        <div className="relative flex justify-center">
          <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 animate-pulse-slow">
            <SquareDashedMousePointer
              size={64}
              className="stroke-white"
            />
          </div>
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Oops! It looks like this page wandered off into the digital wilderness.
          Let&apos;s get you back on track.
        </p>

        {/* Call to Action */}
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium",
            "hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          )}
        >
          <SquareDashedMousePointer size={20} />
          Back to Home
        </Link>
      </div>

      {/* Tailwind Animation Utility */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}