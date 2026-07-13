"use client";

import { useState } from "react";
import { Plus, X, DollarSign, Package } from "lucide-react";

interface Variant {
  id: string;
  name: string;
  value: string;
  price: number;
  stock: number;
}

interface ProductVariantFormProps {
  variants: Variant[];
  onChange: (variants: Variant[]) => void;
}

export default function ProductVariantForm({ variants, onChange }: ProductVariantFormProps) {
  const [variantType, setVariantType] = useState("size");

  const addVariant = () => {
    const newVariant: Variant = {
      id: Date.now().toString(),
      name: variantType,
      value: "",
      price: 0,
      stock: 0,
    };
    onChange([...variants, newVariant]);
  };

  const updateVariant = (id: string, field: keyof Variant, value: string | number) => {
    const updated = variants.map(v => 
      v.id === id ? { ...v, [field]: value } : v
    );
    onChange(updated);
  };

  const removeVariant = (id: string) => {
    onChange(variants.filter(v => v.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300">Product Variants</label>
        <select
          value={variantType}
          onChange={(e) => setVariantType(e.target.value)}
          className="text-xs bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-slate-200"
        >
          <option value="size">Size</option>
          <option value="color">Color</option>
          <option value="flavor">Flavor</option>
          <option value="weight">Weight</option>
          <option value="volume">Volume</option>
        </select>
      </div>

      <div className="space-y-3">
        {variants.map((variant) => (
          <div key={variant.id} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Type</label>
                  <input
                    type="text"
                    value={variant.name}
                    onChange={(e) => updateVariant(variant.id, "name", e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200"
                    placeholder="e.g., Size"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Value</label>
                  <input
                    type="text"
                    value={variant.value}
                    onChange={(e) => updateVariant(variant.id, "value", e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200"
                    placeholder="e.g., Large"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Price</label>
                  <div className="relative">
                    <DollarSign className="w-4 h-4 text-slate-500 absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      value={variant.price}
                      onChange={(e) => updateVariant(variant.id, "price", parseFloat(e.target.value) || 0)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-sm text-slate-200"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-400 mb-1 block">Stock</label>
                  <div className="relative">
                    <Package className="w-4 h-4 text-slate-500 absolute left-2 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      value={variant.stock}
                      onChange={(e) => updateVariant(variant.id, "stock", parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-sm text-slate-200"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeVariant(variant.id)}
                className="mt-6 p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addVariant}
        className="w-full py-2.5 px-4 rounded-xl border-2 border-dashed border-slate-700 hover:border-indigo-500/50 text-sm font-medium text-slate-400 hover:text-indigo-400 transition-all flex items-center justify-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add {variantType.charAt(0).toUpperCase() + variantType.slice(1)} Variant
      </button>

      {variants.length > 0 && (
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
          <p className="text-sm text-indigo-300">
            {variants.length} variant{variants.length !== 1 ? "s" : ""} added
          </p>
        </div>
      )}
    </div>
  );
}
