import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Lock, ArrowRight, Building, Mail, Phone, User, Users } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import { submitLead } from '../utils/leadService';
import { trackEvent } from '../utils/analytics';

export default function DemoModal({ isOpen, onClose, initialTier = 'Gói Nâng cao (Có AI)' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    scale: '10-50',
    agreedToPrivacy: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        scale: formData.scale,
        planTier: initialTier,
        formName: 'DemoModal Popup'
      });
      trackEvent('submit_lead_form', {
        form_name: 'DemoModal Popup',
        plan_tier: initialTier,
        company: formData.company,
        scale: formData.scale
      });
    } catch (err) {
      console.error('Submit lead error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Column 1: Left Column with Crisp Brand Highlights */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 md:p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Đăng ký Trải nghiệm 1:1
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-snug font-display">
                Bứt phá doanh số với Web App CRM
              </h3>
              <p className="mt-2 text-indigo-100 text-xs sm:text-sm leading-relaxed">
                Giải pháp B2B SaaS chuyên biệt, tích hợp Trợ lý AI có kiểm soát và cam kết bảo vệ dữ liệu khách hàng tuyệt đối.
              </p>
            </div>

            {/* 3 Key Benefits */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-white/20 text-white shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display">Chuẩn hóa Phễu Bán hàng 6 Bước</h4>
                  <p className="text-xs text-indigo-100">Kiểm soát dòng cơ hội, loại bỏ đứt gãy thông tin và tăng 35% tỷ lệ chốt.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-white/20 text-white shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display">Trợ lý AI Tóm tắt Hội thoại</h4>
                  <p className="text-xs text-indigo-100">AI Snapshot bóc tách nhu cầu và ngân sách, nhân viên duyệt 1-click trước khi lưu.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-white/20 text-white shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-sky-300" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display">Mặt nạ Zero-Phone &amp; Luật 91/2025</h4>
                  <p className="text-xs text-indigo-100">Ẩn số điện thoại (+843******50), bảo vệ tài sản doanh nghiệp khi nhân sự biến động.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="relative z-10 pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-xs text-indigo-100">
            <span className="flex items-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-emerald-300" /> Chuẩn Nghị định 356/2025
            </span>
            <span className="font-semibold text-white">SLA: Phản hồi ≤ 5 phút</span>
          </div>
        </div>

        {/* Column 2: Form Right Column */}
        <div className="w-full md:w-7/12 p-6 md:p-8 bg-white flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">Đăng ký thành công!</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn bạn đã quan tâm. Chuyên viên tư vấn giải pháp của <strong>Web App CRM</strong> sẽ liên hệ với bạn trong vòng <strong>≤ 5 phút</strong> (giờ hành chính) để cấp tài khoản demo và hỗ trợ khảo sát trực tiếp.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1">
                <div><strong>Yêu cầu:</strong> <span className="text-indigo-600 font-semibold">{initialTier}</span></div>
                <div><strong>Người liên hệ:</strong> {formData.fullName}</div>
                <div><strong>Số điện thoại:</strong> {formData.phone}</div>
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Công ty:</strong> {formData.company || 'Đang cập nhật'}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs hover:opacity-95 shadow-md hover:-translate-y-0.5 transition-all"
                >
                  Mở Web App CRM thực tế ngay <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-5">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-display">
                  Đăng ký Nhận Báo giá &amp; Tư vấn 1:1
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Đang quan tâm: <span className="font-semibold text-indigo-600">{initialTier}</span>. Khảo sát miễn phí, cài đặt trong 48h.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên của bạn <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email doanh nghiệp <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="ten@congty.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Company & Scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tên doanh nghiệp / Đơn vị <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Công ty TNHH Giải Pháp Việt"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Quy mô nhân sự <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="under-10">Dưới 10 nhân sự</option>
                        <option value="10-50">10 - 50 nhân sự (Phân khúc S1)</option>
                        <option value="50-100">50 - 100 nhân sự (Phân khúc S2)</option>
                        <option value="over-100">Trên 100 nhân sự</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Privacy Checkbox (Law 91/2025/QH15) */}
                <div className="pt-0.5">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreedToPrivacy}
                      onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>
                      Tôi đồng ý để <strong>Web App CRM</strong> xử lý thông tin phục vụ tư vấn giải pháp, cam kết bảo mật theo <em>Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15</em> và <em>NĐ 356/2025/NĐ-CP</em>.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      Đang xử lý thông tin...
                    </span>
                  ) : (
                    <>
                      <span>Nhận Báo Giá 1:1 &amp; Tài Khoản Dùng Thử</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Alternative Quick Try Link */}
                <div className="text-center pt-1">
                  <p className="text-xs text-slate-500">
                    Muốn xem thử hệ thống ngay?{' '}
                    <a
                      href="https://ai-crm-cua-chong-ngap.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-0.5"
                    >
                      Mở Web App trực tiếp trên Cloud <ArrowRight className="w-3 h-3 inline" />
                    </a>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
