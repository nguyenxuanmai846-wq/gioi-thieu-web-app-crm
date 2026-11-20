import React, { useState, useEffect } from 'react';
import { Shield, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('webapp_crm_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('webapp_crm_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('webapp_crm_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside 
      aria-label="Thông báo Cookie và Bảo vệ Dữ liệu"
      className="fixed bottom-4 left-4 z-40 max-w-md w-[calc(100%-2rem)] sm:w-auto bg-slate-900/95 backdrop-blur-md text-slate-300 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl animate-slideUp"
    >
      <div className="flex items-start gap-3">
        <div className="p-1.5 rounded-lg bg-indigo-600/30 text-indigo-400 shrink-0 mt-0.5 border border-indigo-500/30">
          <Shield className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="text-xs space-y-2">
          <p className="leading-snug text-slate-300">
            Hệ thống tuân thủ <strong className="text-white font-medium">Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15</strong> &amp; <strong className="text-white font-medium">NĐ 356/2025/NĐ-CP</strong>. Dữ liệu luôn được mã hóa an toàn.{' '}
            <Link to="/lien-he#bao-mat" className="text-indigo-400 font-medium hover:underline inline-block">
              Chi tiết bảo mật →
            </Link>
          </p>

          <div className="flex items-center gap-2 pt-0.5">
            <button
              onClick={handleDecline}
              className="px-2.5 py-1 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-400 text-[11px] font-medium transition-colors cursor-pointer"
            >
              Từ chối
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <Check className="w-3 h-3" /> Chấp nhận
            </button>
          </div>
        </div>

        <button
          onClick={handleDecline}
          className="text-slate-400 hover:text-white p-0.5 ml-auto -mr-1 -mt-1 cursor-pointer"
          aria-label="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
