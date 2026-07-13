"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { KeyRound, Mail, AlertCircle, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
              <span className="text-white font-bold text-lg">IV</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">InventaAPI</span>
              <p className="text-xs text-slate-400">Mobile Computing System for Multi-Business Data-as-a-Service</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-2.5 rounded-xl border border-slate-700 hover:border-indigo-500/50 text-sm font-medium text-white transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Centered Login */}
      <main className="relative z-10 px-6 py-20 min-h-[calc(100vh-120px)] flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Floating Login Card */}
          <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/50 rounded-3xl p-10 shadow-2xl shadow-indigo-500/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-2xl">IV</span>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                Welcome Back
              </h1>
              <p className="text-slate-400 text-sm">
                Sign in to access your Data-as-a-Service platform
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600 backdrop-blur-sm"
                    placeholder="developer@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</a>
                </div>
                <div className="relative">
                  <KeyRound className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600 backdrop-blur-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-base font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Signing in...
                  </span>
                ) : (
                  <>
                    Sign In to Dashboard
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-center text-sm text-slate-500">
                Don't have an account? <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">Sign Up</Link>
              </p>
            </div>

            {/* Features badges below form */}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-400" />
                <span>DPA 2012</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Real-time</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-600"></div>
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span>Analytics</span>
              </div>
            </div>
          </div>

          {/* Tagline below login */}
          <p className="text-center text-slate-400 text-sm mt-8">
            <span className="font-semibold text-white">InventaAPI</span> – Mobile Computing System for Multi-Business Data-as-a-Service
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
