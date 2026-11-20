import React, { useState } from 'react';
import { X, ShieldCheck, ExternalLink, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import { isFirebaseConfigured, signInWithGoogle } from '../utils/firebaseAuth';
import { trackEvent } from '../utils/analytics';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const hasConfig = isFirebaseConfigured();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      if (!hasConfig) {
        throw new Error('CONFIG_MISSING');
      }
      const user = await signInWithGoogle();
      trackEvent('google_login_success', { email: user.email, method: 'google_popup' });
      setSuccessMsg(`Chào mừng ${user.displayName}! Đăng nhập thành công.`);
      setTimeout(() => {
        onLoginSuccess && onLoginSuccess(user);
        onClose();
      }, 1000);
    } catch (err) {
      if (err.message === 'CONFIG_MISSING') {
        setErrorMsg('Chưa cấu hình firebaseConfig trong src/config/siteConfig.js. Bạn có thể dùng chế độ Demo bên dưới hoặc mở Web App trực tiếp.');
      } else if (err.code === 'auth/popup-closed-by-user') {
        setErrorMsg('Cửa sổ đăng nhập Google đã bị đóng trước khi hoàn tất.');
      } else {
        setErrorMsg('Đăng nhập không thành công. Vui lòng kiểm tra lại cấu hình Firebase Authentication hoặc thử lại.');
        console.error('Firebase Auth Error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    const demoUser = {
      uid: 'demo-user-123',
      displayName: 'Khách hàng Doanh nghiệp (Demo)',
      email: 'sales.leader@doanhnghiep.vn',
      photoURL: null
    };
    localStorage.setItem('webapp_crm_user', JSON.stringify(demoUser));
    trackEvent('google_login_success', { email: demoUser.email, method: 'demo_simulation' });
    setSuccessMsg('Đã đăng nhập thành công với tài khoản Doanh nghiệp (Demo)!');
    setTimeout(() => {
      onLoginSuccess && onLoginSuccess(demoUser);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display tracking-tight">Cổng Đăng Nhập Doanh Nghiệp</h3>
              <p className="text-[11px] text-blue-100">Bảo mật chuẩn B2B SaaS</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          <div className="text-center space-y-1">
            <h4 className="text-lg font-extrabold text-slate-900 font-display">
              Đăng nhập Web App CRM
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Truy cập dữ liệu khách hàng 360, phễu bán hàng và trợ lý AI thông minh của bạn.
            </p>
          </div>

          {/* Success Message */}
          {successMsg && (
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1">{errorMsg}</div>
            </div>
          )}

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl border-2 border-slate-200 hover:border-indigo-500 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer disabled:opacity-50"
          >
            {/* Google SVG Logo */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{loading ? 'Đang xác thực Google...' : 'Tiếp tục với Google'}</span>
          </button>

          {/* Secondary Options */}
          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-3 text-[11px] font-semibold text-slate-400 uppercase">Hoặc</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="space-y-2">
            {/* Quick Link to Actual Web App Cloud */}
            <a
              href={siteConfig.webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <span>Mở Web App CRM Cloud trực tiếp</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
            </a>

            {/* Quick Demo Mode */}
            <button
              onClick={handleDemoLogin}
              className="w-full py-2 px-3 rounded-2xl text-[11px] font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              Trải nghiệm nhanh với tài khoản Demo
            </button>
          </div>

          {/* Privacy Footnote */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Mã hóa SSL 256-bit &amp; Tuân thủ Luật 91/2025/QH15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
