import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, ArrowUp } from 'lucide-react';

export default function FloatingCTA({ onOpenDemo }) {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showFloating) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 animate-fadeIn">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="p-2.5 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 hover:bg-slate-50 transition-all hover:scale-110 cursor-pointer"
        aria-label="Lên đầu trang"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Floating Action Pill - Hidden on mobile, visible on md+ */}
      <div className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-slate-900/95 backdrop-blur-md shadow-2xl border border-slate-700">
        <a
          href="https://ai-crm-cua-chong-ngap.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-slate-700 hover:-translate-y-0.5 duration-200"
          title="Trải nghiệm Web App thực tế trên Cloud"
        >
          <span>Web App Trực tiếp</span>
          <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
        </a>

        <button
          onClick={() => onOpenDemo('Dùng thử miễn phí')}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md hover:opacity-95 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Dùng thử miễn phí</span>
        </button>
      </div>
    </div>
  );
}
