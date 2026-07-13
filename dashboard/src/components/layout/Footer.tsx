import Link from "next/link";
import { Shield, Lock, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IV</span>
              </div>
              <span className="text-white font-bold">InventaAPI</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mobile Computing System for Multi-Business Data-as-a-Service
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/dashboard/docs" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Documentation</Link></li>
              <li><Link href="/dashboard/api-keys" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">API Keys</Link></li>
              <li><Link href="/dashboard/analytics" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Analytics</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-white font-semibold mb-4">Compliance</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400 font-medium">DPA 2012 Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-blue-400 font-medium">GDPR Aligned</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-purple-400 font-medium">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 InventaAPI. All rights reserved. Built with Next.js 16, React 19, Firebase, and TypeScript.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Protected by</span>
            <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 font-medium">
              Data Privacy Act of 2012
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
