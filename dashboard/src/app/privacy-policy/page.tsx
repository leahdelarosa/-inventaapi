"use client";

import Link from "next/link";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-6">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Shield className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-400 font-medium">Data Privacy Act of 2012 Compliant</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-slate-400">
            InventaAPI: Mobile Computing System for Multi-Business Data-as-a-Service
          </p>
          <p className="text-sm text-slate-500 mt-4">Last Updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              InventaAPI ("we", "our", or "us") is committed to protecting the privacy and security of your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you
              use our Mobile Computing System for Multi-Business Data-as-a-Service platform.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              We comply with the <strong className="text-white">Data Privacy Act of 2012 (Republic Act No. 10173)</strong> of
              the Philippines and align with international standards including GDPR principles.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business information (business name, type, address)</li>
              <li>Authentication credentials (encrypted passwords)</li>
              <li>User role and permissions</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Business Data</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Product information (names, descriptions, prices, inventory)</li>
              <li>Sales and transaction records</li>
              <li>Supplier information</li>
              <li>Business analytics and reports</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Technical Information</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>IP addresses and device information</li>
              <li>Browser type and version</li>
              <li>API usage logs and timestamps</li>
              <li>Performance and error logs</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li>Provide and maintain our Data-as-a-Service platform</li>
              <li>Process and manage your inventory and sales data</li>
              <li>Generate business insights and recommendations</li>
              <li>Authenticate users and maintain account security</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations and prevent fraud</li>
              <li>Send important updates and notifications</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Data Security Measures</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li><strong className="text-white">Encryption:</strong> All data transmission uses HTTPS/TLS encryption</li>
              <li><strong className="text-white">Authentication:</strong> Secure JWT (JSON Web Token) authentication</li>
              <li><strong className="text-white">Access Control:</strong> Role-based access control (RBAC) system</li>
              <li><strong className="text-white">API Security:</strong> API key management and rate limiting</li>
              <li><strong className="text-white">Database Security:</strong> Firebase security rules and encrypted storage</li>
              <li><strong className="text-white">Monitoring:</strong> Continuous security monitoring and audit logs</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Data Retention</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              We retain your personal and business data for as long as your account is active or as needed to provide
              services. You may request deletion of your data at any time, subject to legal retention requirements.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Your Rights Under DPA 2012</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Under the Data Privacy Act of 2012, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
              <li><strong className="text-white">Right to be Informed:</strong> Know how your data is collected and used</li>
              <li><strong className="text-white">Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-white">Right to Object:</strong> Object to processing of your data</li>
              <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong className="text-white">Right to Rectification:</strong> Correct inaccurate data</li>
              <li><strong className="text-white">Right to Data Portability:</strong> Transfer your data to another service</li>
              <li><strong className="text-white">Right to Damages:</strong> Seek compensation for data breaches</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your data rights, please contact:
            </p>
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">Email:</strong> privacy@inventaapi.com</p>
              <p><strong className="text-white">Data Protection Officer:</strong> dpo@inventaapi.com</p>
              <p><strong className="text-white">Address:</strong> Philippines</p>
            </div>
          </section>

          {/* Compliance */}
          <section className="border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Regulatory Compliance</h2>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <span className="text-green-400 text-sm font-medium">DPA 2012 Compliant</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400 text-sm font-medium">GDPR Aligned</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <span className="text-purple-400 text-sm font-medium">ISO 27001 Standards</span>
              </div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
