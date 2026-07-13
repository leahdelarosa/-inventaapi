"use client";

import Link from "next/link";
import { FileText, Shield, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-6">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">Legal Agreement</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-slate-400">InventaAPI: Mobile Computing System for Multi-Business Data-as-a-Service</p>
          <p className="text-sm text-slate-500 mt-4">Effective Date: January 2025</p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing and using InventaAPI, you accept and agree to be bound by these Terms of Service and our Privacy Policy.
              If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              InventaAPI provides a Mobile Computing System for Data-as-a-Service platform designed for Small and Medium Enterprises,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Product inventory management</li>
              <li>Sales tracking and analytics</li>
              <li>AI-powered business recommendations</li>
              <li>RESTful API access</li>
              <li>Secure data storage and transmission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Maintain confidentiality of account credentials</li>
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to breach security or authentication measures</li>
              <li>Not reverse engineer or decompile the service</li>
              <li>Comply with all applicable laws including Data Privacy Act 2012</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. API Usage and Limitations</h2>
            <p className="text-slate-300 leading-relaxed mb-4">API usage is subject to rate limits:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>150 requests per 15 minutes per IP address</li>
              <li>Fair use policy applies to all endpoints</li>
              <li>Excessive usage may result in temporary suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Ownership</h2>
            <p className="text-slate-300 leading-relaxed">
              You retain all rights to your business data. InventaAPI claims no ownership over your content.
              We process data solely to provide services as outlined in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              InventaAPI is provided "as is" without warranties. We are not liable for indirect, incidental,
              or consequential damages arising from service use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms.
              You may close your account at any time through the dashboard.
            </p>
          </section>

          <section className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Questions about these Terms of Service?
            </p>
            <p className="text-slate-300"><strong className="text-white">Email:</strong> legal@inventaapi.com</p>
          </section>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
