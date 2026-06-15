"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyDetail {
  title: string;
  subtitle?: string;
  metrics: CaseStudyMetric[];
  images: CaseStudyImage[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  study: CaseStudyDetail | null;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, study, onClose }: CaseStudyModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-[fadeIn_200ms_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl my-4 animate-[slideUp_300ms_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Zavřít case study"
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 shadow-md transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="p-8 md:p-12 pb-6 border-b border-gray-100">
          <h2
            id="case-study-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            {study.title}
          </h2>
          {study.subtitle && (
            <p className="text-lg text-gray-600">{study.subtitle}</p>
          )}
        </div>

        {/* Metrics */}
        {study.metrics.length > 0 && (
          <div className="px-8 md:px-12 py-8 bg-gray-50 border-b border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {m.value}
                  </div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Images */}
        <div className="p-8 md:p-12 space-y-8">
          {study.images.map((img, i) => (
            <figure key={img.src} className="space-y-3">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              {img.caption && (
                <figcaption className="text-sm text-gray-500 text-center italic">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
