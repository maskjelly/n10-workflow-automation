"use client"

import { signIn } from "next-auth/react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import React from "react";

export default function SignIn() {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-950 dark:to-emerald-950 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-emerald-100 dark:border-emerald-900">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sign in to access your AI Automation Lab account
          </p>
        </div>

        {/* Sign-in Button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className={cn(
              "w-full flex items-center justify-center gap-3 px-6 py-3 text-base font-medium",
              "bg-emerald-600 text-white rounded-lg",
              "hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800",
              "transition-all duration-300 ease-in-out transform hover:scale-105",
              "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            )}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12.48 10.92v2.94h4.74c-.19 1.26-.74 2.34-1.62 3.06v2.52h2.94c1.74-1.62 2.76-4.02 2.76-6.9 0-.66-.06-1.32-.18-1.98h-8.64z"
                fill="#4285F4"
              />
              <path
                d="M12 21.6c3.06 0 5.64-1.02 7.5-2.76l-3.66-2.82c-1.02.72-2.34 1.14-3.84 1.14-2.94 0-5.46-2.04-6.36-4.86H2.58v3.06C4.44 19.02 7.98 21.6 12 21.6z"
                fill="#34A853"
              />
              <path
                d="M5.64 14.34c-.24-.72-.36-1.5-.36-2.34s.12-1.62.36-2.34V6.6H2.58C1.62 8.34 1 10.14 1 12s.62 3.66 1.58 5.4l3.06-2.46z"
                fill="#FBBC05"
              />
              <path
                d="M12 2.4c1.68 0 3.18.6 4.38 1.74l3.24-3.24C17.46.84 14.94 0 12 0 7.98 0 4.44 2.58 2.58 6.24l3.06 2.46c.9-2.82 3.42-4.86 6.36-4.86z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
              or
            </span>
          </div>
        </div>

        {/* Email Sign-in (Placeholder for future expansion) */}
        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-200"
              disabled
            />
          </div>
          <button
            type="button"
            className="w-full px-6 py-3 text-base font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-not-allowed"
            disabled
          >
            Continue with Email (Coming Soon)
          </button>
        </div>

        {/* Footer Links */}
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          By continuing, you agree to our{" "}
          <a
            href="/terms"
            className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-500 font-medium"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-500 font-medium"
          >
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}