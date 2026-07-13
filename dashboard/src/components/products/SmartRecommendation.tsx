"use client";

import { AlertTriangle, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SmartRecommendationProps {
  barcode?: string;
  productName?: string;
  message: string;
  onAddProduct?: () => void;
}

export default function SmartRecommendation({ 
  barcode, 
  productName, 
  message,
  onAddProduct 
}: SmartRecommendationProps) {
  return (
    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-6 h-6 text-orange-400" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Smart Recommendation</h3>
          </div>
          
          <p className="text-slate-300 mb-4">{message}</p>
          
          {barcode && (
            <div className="bg-slate-900/50 rounded-lg p-3 mb-4 border border-slate-800">
              <p className="text-xs text-slate-500 mb-1">Detected Barcode:</p>
              <p className="text-sm font-mono text-indigo-400">{barcode}</p>
              {productName && (
                <>
                  <p className="text-xs text-slate-500 mt-2 mb-1">Suggested Name:</p>
                  <p className="text-sm text-white">{productName}</p>
                </>
              )}
            </div>
          )}
          
          <div className="flex flex-wrap gap-3">
            {onAddProduct ? (
              <button
                onClick={onAddProduct}
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <Plus className="w-4 h-4" />
                Add This Product
              </button>
            ) : (
              <Link
                href="/dashboard/submit-product"
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <Plus className="w-4 h-4" />
                Add Product to Inventory
              </Link>
            )}
            
            <button className="px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 text-sm font-medium transition-all">
              Dismiss
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-orange-500/10">
        <p className="text-xs text-slate-400">
          💡 <strong className="text-slate-300">Why this recommendation?</strong> Adding unregistered products prevents lost sales and improves inventory accuracy. Our AI detected this product is not in your database.
        </p>
      </div>
    </div>
  );
}
