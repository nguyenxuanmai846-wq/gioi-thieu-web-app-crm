import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, ArrowUp } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import { trackEvent } from '../utils/analytics';

export default function FloatingCTA({ onOpenDemo }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleZaloClick = () => {
    trackEvent('click_zalo_chat', {
      phone: siteConfig.zaloPhone,
      source: 'floating_zalo_button',
      page_url: typeof window !== 'undefined' ? window.location.href : ''
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 animate-fadeIn">
      {/* Scroll to top button (chỉ hiện khi cuộn quá 450px) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white text-slate-700 shadow-xl border border-slate-200 hover:bg-slate-50 transition-all duration-200 hover:scale-110 cursor-pointer animate-fadeIn"
          aria-label="Lên đầu trang"
          title="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Container chứa nút Zalo và Action Pill (trên desktop) */}
      <div className="flex items-center gap-3">
        {/* Thanh Action Pill trên màn hình máy tính (md+) */}
        <div className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-slate-900/95 backdrop-blur-md shadow-2xl border border-slate-700">
          <a
            href={siteConfig.webAppUrl}
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

        {/* Nút Chat Zalo nổi trực tiếp với Sale */}
        <div className="relative group">
          {/* Hiệu ứng ping nhẹ thu hút sự chú ý */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500 border-2 border-white"></span>
          </span>

          <a
            href={`https://zalo.me/${siteConfig.zaloPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleZaloClick}
            className="flex items-center justify-center w-13 h-13 rounded-full bg-[#0068FF] hover:bg-[#0057d6] text-white shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-white"
            aria-label="Chat Zalo với Sale"
            title="Chat Zalo với Sale"
          >
            {/* Logo Zalo Vector Chuẩn */}
            <svg className="w-7 h-7 fill-white" viewBox="0 0 48 48">
              <path d="M24 4C12.95 4 4 12.51 4 23.01c0 5.86 2.76 11.13 7.15 14.71l-1.9 6.28 6.77-3.48c2.47.88 5.15 1.36 7.98 1.36 11.05 0 20-8.51 20-19.01S35.05 4 24 4z" />
              <path
                d="M17 19h7.5l-6.8 7.2v1.8H26v-2.8h-4.8l6.8-7.2V16H17v3zm11.5-3h3v12h-3V16zm5.5 0h3v12h-3V16z"
                fill="#0068FF"
              />
            </svg>
          </a>

          {/* Tooltip hiển thị khi hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-xl border border-slate-700 pointer-events-none transition-all">
            Chat Zalo với Sale ({siteConfig.zaloPhone})
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
