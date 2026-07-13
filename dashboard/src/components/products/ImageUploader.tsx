"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, AlertCircle } from "lucide-react";

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
  maxImages?: number;
  maxSizeMB?: number;
}

export default function ImageUploader({ 
  images, 
  onChange, 
  maxImages = 5, 
  maxSizeMB = 5 
}: ImageUploaderProps) {
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setError("");
    setUploading(true);

    try {
      const newImages: string[] = [];

      for (const file of files) {
        // Check file size
        if (file.size > maxSizeMB * 1024 * 1024) {
          setError(`File ${file.name} exceeds ${maxSizeMB}MB limit`);
          continue;
        }

        // Check file type
        if (!file.type.startsWith("image/")) {
          setError(`File ${file.name} is not an image`);
          continue;
        }

        // Convert to base64 or URL
        const reader = new FileReader();
        const imageUrl = await new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });

        newImages.push(imageUrl);
      }

      // Check max images limit
      const totalImages = images.length + newImages.length;
      if (totalImages > maxImages) {
        setError(`Maximum ${maxImages} images allowed`);
        const allowedNew = maxImages - images.length;
        onChange([...images, ...newImages.slice(0, allowedNew)]);
      } else {
        onChange([...images, ...newImages]);
      }
    } catch (err) {
      setError("Failed to upload images");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <label className="text-sm font-medium text-slate-300 block">Product Images</label>

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <img
                src={img}
                alt={`Product ${idx + 1}`}
                className="w-full h-32 object-cover rounded-xl border border-slate-700"
              />
              <button
                type="button"
                onClick={() => removeImage(idx)}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
              {idx === 0 && (
                <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-indigo-500 text-white text-xs font-medium">
                  Primary
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      {images.length < maxImages && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="w-full py-8 px-4 rounded-xl border-2 border-dashed border-slate-700 hover:border-indigo-500/50 transition-all flex flex-col items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? (
              <>
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-indigo-500 border-t-transparent" />
                <p className="text-sm text-slate-400">Uploading...</p>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Click to upload images</p>
                  <p className="text-xs text-slate-500 mt-1">
                    PNG, JPG, WEBP up to {maxSizeMB}MB ({images.length}/{maxImages} uploaded)
                  </p>
                </div>
              </>
            )}
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Info */}
      {images.length === 0 && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
          <ImageIcon className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-400">
            First image will be used as the primary product image
          </p>
        </div>
      )}
    </div>
  );
}
