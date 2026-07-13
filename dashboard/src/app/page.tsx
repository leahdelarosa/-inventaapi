"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/config";
import { useRouter } from "next/navigation";
import { KeyRound, Mail, AlertCircle, ArrowRight, X, Zap, Shield, BarChart3, Store, Building2, ShoppingCart, Utensils, Warehouse, Package } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
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
            <button
              onClick={() => setShowLoginModal(true)}
              className="px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition-all shadow-lg shadow-indigo-500/20"
            >
              Sign In
            </button>
            <Link
              href="/signup"
              className="px-6 py-2.5 rounded-xl border border-slate-700 hover:border-indigo-500/50 text-sm font-medium text-white transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Data-as-a-Service for
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Multi-Business</span> Sales & Inventory
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Secure, scalable API platform for managing products, inventory, and recommendations across multiple business segments.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-base font-medium text-white transition-all shadow-xl shadow-indigo-500/30 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/dashboard/docs"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-indigo-500/50 text-base font-medium text-white transition-all"
              >
                View Documentation
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-slate-400 text-sm">
                High-performance API with rate limiting and caching for optimal speed and reliability.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-400 text-sm">
                DPA 2012 & GDPR compliant with JWT authentication and Firebase security.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Analytics</h3>
              <p className="text-slate-400 text-sm">
                Real-time insights and AI-powered recommendations for business growth.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-20 glass-card rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              Powered by industry-leading frameworks and tools for maximum performance
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Next.js 16", desc: "React Framework" },
                { name: "React 19", desc: "UI Library" },
                { name: "TypeScript", desc: "Type Safety" },
                { name: "Firebase", desc: "Database" },
                { name: "Express.js", desc: "API Server" },
                { name: "Tailwind CSS", desc: "Styling" },
              ].map((tech, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm">{tech.name}</h4>
                  <p className="text-slate-500 text-xs mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Market Coverage */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Serving Diverse Business Markets
            </h2>
            <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
              Not limited to hardware - supporting all Small and Medium Enterprise segments across the Philippines
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Store, name: "Retail Stores", desc: "Complete POS and inventory tracking" },
                { icon: Building2, name: "Sari-Sari Stores", desc: "Quick daily stock management" },
                { icon: Package, name: "Pharmacies", desc: "Expiration and compliance tracking" },
                { icon: ShoppingCart, name: "Grocery Stores", desc: "Multi-category inventory" },
                { icon: Warehouse, name: "Wholesalers", desc: "Bulk inventory management" },
                { icon: Utensils, name: "Restaurants", desc: "Food inventory and recipes" },
                { icon: Building2, name: "Hardware Stores", desc: "Construction materials tracking" },
                { icon: Store, name: "General Trade", desc: "Multi-product businesses" },
              ].map((market, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6 hover:border-indigo-500/30 transition-all">
                  <market.icon className="w-10 h-10 text-indigo-400 mb-3" />
                  <h4 className="text-white font-semibold mb-2">{market.name}</h4>
                  <p className="text-slate-400 text-sm">{market.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Flow */}
          <div className="mt-20 glass-card rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              How the System Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Register", desc: "Create account and get API credentials", icon: "🔐" },
                { num: "2", title: "Integrate", desc: "Connect your system via RESTful API", icon: "🔌" },
                { num: "3", title: "Manage", desc: "Add products, track inventory real-time", icon: "📦" },
                { num: "4", title: "Analyze", desc: "Get AI insights and recommendations", icon: "📊" },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {step.num}
                    </div>
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Business Plan */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Revenue Model</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <div>
                    <p className="text-white font-medium">Subscription-based pricing</p>
                    <p className="text-slate-400 text-sm">Monthly/annual plans for businesses</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <div>
                    <p className="text-white font-medium">API usage tiers</p>
                    <p className="text-slate-400 text-sm">Scalable based on request volume</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <div>
                    <p className="text-white font-medium">Enterprise solutions</p>
                    <p className="text-slate-400 text-sm">Custom pricing for large businesses</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Market Opportunity</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <div>
                    <p className="text-white font-medium">1M+ Small and Medium Enterprises in Philippines</p>
                    <p className="text-slate-400 text-sm">Growing digital transformation need</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <div>
                    <p className="text-white font-medium">Low digitalization in retail sector</p>
                    <p className="text-slate-400 text-sm">High potential for adoption</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">→</span>
                  <div>
                    <p className="text-white font-medium">Recurring revenue model</p>
                    <p className="text-slate-400 text-sm">Predictable business growth</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md glass-card rounded-2xl p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowLoginModal(false);
                setError("");
                setEmail("");
                setPassword("");
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-800/50 hover:bg-slate-700 flex items-center justify-center transition-colors text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-lg shadow-indigo-500/20">
                <span className="text-white font-bold text-xl">IV</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Sign In</h2>
              <p className="text-slate-400 text-sm mt-2">Log in to manage your DaaS platform</p>
            </div>

            {error && (
              <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                    placeholder="developer@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</a>
                </div>
                <div className="relative">
                  <KeyRound className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Signing in...
                  </span>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Don't have an account? <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Sign Up</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
