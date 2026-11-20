import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, Sparkles, ShieldCheck, ArrowRight, HelpCircle, 
  Layers, Lock, MessageSquare, PhoneCall, Bot, CheckCircle2 
} from 'lucide-react';
import { scaleOptions, pricingPlans, onboardingProcess } from '../data/pricingData';

export default function Pricing({ onOpenDemo }) {
  const [selectedScale, setSelectedScale] = useState('10-50');
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'

  // Map scale selection to highlighted plan
  const getPlanHighlight = (planId) => {
    if (selectedScale === 'under-10' && planId === 'basic') return true;
    if (selectedScale === '10-50' && planId === 'pro') return true;
    if (selectedScale === '50-100' && planId === 'enterprise') return true;
    return false;
  };

  return (
    <div className="py-12 md:py-20 space-y-16 md:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          Chính sách Báo giá May đo Linh hoạt
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.22] font-display">
          Lựa chọn gói dịch vụ tối ưu cho{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block pb-1">
            Quy mô Đội ngũ của Bạn
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Không ép mua các module kế toán, kho bãi cồng kềnh. Chúng tôi tính toán chi phí minh bạch dựa trên số lượng người dùng thực tế và nhu cầu ứng dụng Trợ lý AI.
        </p>

        {/* Scale Selector */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="text-xs font-semibold text-slate-500 mr-2">Chọn quy mô nhân sự:</span>
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200">
            {scaleOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedScale(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${selectedScale === opt.id ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="pt-2 flex items-center justify-center gap-3">
          <span className={`text-xs font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
            Thanh toán theo Tháng
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className={`relative w-12 h-6 rounded-full transition-colors p-0.5 cursor-pointer ${billingCycle === 'yearly' ? 'bg-indigo-600' : 'bg-slate-300'}`}
            aria-label="Toggle chu kỳ thanh toán"
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
              Hợp đồng 1 Năm
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-200">
              Tiết kiệm 20%
            </span>
          </div>
        </div>
      </div>

      {/* 3 PRICING CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricingPlans.map((plan) => {
          const isSelected = getPlanHighlight(plan.id);

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 relative ${isSelected ? 'bg-white border-2 border-indigo-600 shadow-xl' : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'}`}
            >
              {/* Ribbon Badge for Popular */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Khuyên dùng cho Doanh nghiệp</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Card Title & Target */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                    {plan.isPopular && (
                      <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                        Bao gồm AI Snapshot
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
                    {plan.target}
                  </p>
                </div>

                {/* Price Note / Consultation Guidance */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-xs font-semibold text-slate-500">Chính sách tính cước:</div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5 font-display">
                    Báo giá 1:1 theo số User
                  </div>
                  <p className="text-[11px] text-indigo-600 font-medium mt-0.5">
                    {billingCycle === 'yearly' ? '✓ Giảm thêm 20% khi thanh toán cả năm' : '✓ Hợp đồng linh hoạt, hỗ trợ xuất hóa đơn VAT'}
                  </p>
                </div>

                {/* Features Categorized by P1, P2, P3 */}
                <div className="space-y-4 pt-2">
                  {/* P1 Features */}
                  <div>
                    <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1 font-display">
                      <Layers className="w-3.5 h-3.5" /> Tính năng P1 – Cốt lõi:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {plan.features.p1.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* P2 Features */}
                  {plan.features.p2 && (
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-purple-700 uppercase tracking-wider mb-2 flex items-center gap-1 font-display">
                        <ShieldCheck className="w-3.5 h-3.5" /> Tính năng P2 – AI &amp; Bảo mật:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {plan.features.p2.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                            <span className={plan.isPopular ? 'font-medium text-slate-900' : ''}>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* P3 Features */}
                  {plan.features.p3 && (
                    <div className="pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider mb-2 flex items-center gap-1 font-display">
                        <MessageSquare className="w-3.5 h-3.5" /> Tính năng P3 – Mở rộng Đa kênh:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {plan.features.p3.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenDemo(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${plan.buttonVariant === 'gradient' ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 hover:opacity-95' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* SECTION: QUY TRÌNH 5 BƯỚC CUNG CẤP DỊCH VỤ */}
      <section id="process" className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-10 border border-slate-800 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold backdrop-blur-sm border border-white/20">
            Quy trình Triển khai Chuẩn hóa
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-[1.22] font-display">
            5 Bước đưa Web App CRM vào Vận hành Thực tế
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Cam kết hệ thống sẵn sàng hoạt động trong vòng 48 giờ với tỷ lệ chấp thuận nhân viên lên tới 98%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {onboardingProcess.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  0{step.step}
                </div>
                <h4 className="font-bold text-white text-base font-display">
                  {step.title}
                </h4>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => onOpenDemo('Tư vấn quy trình 5 bước')}
            className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 transition-all duration-200 hover:-translate-y-0.5 shadow-lg cursor-pointer"
          >
            Đăng ký Khảo sát Nhu cầu Miễn phí cùng Chuyên gia
          </button>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 leading-[1.22] font-display">
            Bảng So sánh Chi tiết Tính năng theo 3 Cụm (P1, P2, P3)
          </h3>
          <p className="text-xs text-slate-500">
            Xem rõ quyền lợi giữa từng gói để ra quyết định đầu tư chính xác.
          </p>
        </div>

        <div className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[640px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold text-slate-900 text-sm font-display">Nhóm tính năng</th>
                  <th className="p-4 font-bold text-center">Gói Cơ bản</th>
                  <th className="p-4 font-bold text-center text-indigo-700 bg-indigo-50/50">Gói Nâng cao (Có AI)</th>
                  <th className="p-4 font-bold text-center">Gói Mở rộng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* P1 Section */}
                <tr className="bg-slate-100/70 font-bold text-slate-800 font-display">
                  <td colSpan={4} className="p-3">P1: Nền tảng Cốt lõi &amp; Quản trị Bán hàng</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Customer 360 &amp; Mã KH-xxxxxx chuẩn hóa</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-indigo-50/30">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Phễu bán hàng 6 giai đoạn (Kanban &amp; Funnel)</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-indigo-50/30">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Thuật toán Lọc trùng Lead &amp; Chấm điểm Hot Lead ≥70</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-indigo-50/30">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Cam kết phản hồi SLA ≤ 5 phút &amp; Nhắc việc quá hạn</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-indigo-50/30">✓ Có</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>

                {/* P2 Section */}
                <tr className="bg-slate-100/70 font-bold text-slate-800 font-display">
                  <td colSpan={4} className="p-3">P2: Trợ lý AI &amp; Bảo mật Doanh nghiệp</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">AI Snapshot tóm tắt hội thoại &amp; Đề xuất hành động</td>
                  <td className="p-4 text-center text-slate-400">—</td>
                  <td className="p-4 text-center font-bold text-indigo-600 bg-indigo-50/30">✓ Có (Kiểm duyệt 1-click)</td>
                  <td className="p-4 text-center font-bold text-indigo-600">✓ Có (Không giới hạn)</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Mặt nạ số điện thoại Zero-Phone (+843******50)</td>
                  <td className="p-4 text-center text-slate-400">—</td>
                  <td className="p-4 text-center font-bold text-emerald-600 bg-indigo-50/30">✓ Chuẩn Luật 91/2025</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Chuẩn Luật 91/2025</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Phân quyền RBAC &amp; Xác thực MFA 2 lớp (AAL2)</td>
                  <td className="p-4 text-center text-slate-700">3 vai trò</td>
                  <td className="p-4 text-center font-bold text-indigo-700 bg-indigo-50/30">5 vai trò + MFA AAL2</td>
                  <td className="p-4 text-center font-bold text-indigo-700">5 vai trò + MFA AAL2</td>
                </tr>

                {/* P3 Section */}
                <tr className="bg-slate-100/70 font-bold text-slate-800 font-display">
                  <td colSpan={4} className="p-3">P3: Mở rộng Đa kênh &amp; Tích hợp</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Hộp thư hợp nhất Zalo OA &amp; Facebook Fanpage</td>
                  <td className="p-4 text-center text-slate-400">—</td>
                  <td className="p-4 text-center text-slate-400 bg-indigo-50/30">—</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Chiến dịch tin nhắn cá nhân hóa 4 bước</td>
                  <td className="p-4 text-center text-slate-400">—</td>
                  <td className="p-4 text-center text-slate-400 bg-indigo-50/30">—</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-700">Tổng đài ảo VoIP Zero-Phone &amp; Ghi âm AI</td>
                  <td className="p-4 text-center text-slate-400">—</td>
                  <td className="p-4 text-center text-slate-400 bg-indigo-50/30">—</td>
                  <td className="p-4 text-center font-bold text-emerald-600">✓ Có</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
