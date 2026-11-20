import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Sparkles, ShieldCheck, ArrowRight, ExternalLink, 
  ChevronDown, Star, Clock, Target, Database, UserX, TrendingDown, 
  FileSpreadsheet, Layers, MessageSquare, Bot, Lock, PhoneCall, BookOpen
} from 'lucide-react';
import { DashboardMockup, AISnapshotMockup, SecurityMockup } from '../components/UIMockups';
import { metricsData, painPoints } from '../data/featuresData';
import { homeFaqs, testimonials } from '../data/faqData';
import { blogPosts } from '../data/blogData';

export default function Home({ onOpenDemo }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [quickForm, setQuickForm] = useState({ name: '', phone: '', company: '', agreed: true });
  const [isQuickSubmitting, setIsQuickSubmitting] = useState(false);
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setIsQuickSubmitting(true);
    setTimeout(() => {
      setIsQuickSubmitting(false);
      setQuickSubmitted(true);
    }, 600);
  };

  const handleQuickReset = () => {
    setQuickSubmitted(false);
    setQuickForm({ name: '', phone: '', company: '', agreed: true });
  };

  const getPainIcon = (name) => {
    switch (name) {
      case 'Database': return <Database className="w-5 h-5 text-rose-500" />;
      case 'UserX': return <UserX className="w-5 h-5 text-amber-500" />;
      case 'TrendingDown': return <TrendingDown className="w-5 h-5 text-rose-500" />;
      case 'Clock': return <Clock className="w-5 h-5 text-amber-500" />;
      default: return <FileSpreadsheet className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-100">
        {/* Glow ambient background circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-400/10 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-bold text-indigo-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span>Giải pháp B2B SaaS CRM Chuyên sâu &amp; Độc lập</span>
              <span className="text-slate-300">|</span>
              <span className="text-purple-700 font-semibold">Chuẩn Luật 91/2025/QH15</span>
            </div>

            {/* Big Heading with blue-indigo-purple gradient */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.24] sm:leading-[1.22] py-1 font-display">
              Quản trị khách hàng toàn diện với{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block pb-1">
                Trợ lý AI có kiểm soát
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Giải pháp CRM chuyên sâu cho doanh nghiệp B2B: chuẩn hóa phễu bán hàng 6 giai đoạn, bảo mật mặt nạ Zero-Phone và cam kết phản hồi khách hàng trong khung giờ vàng SLA ≤ 5 phút.
            </p>

            {/* 4 Feature Ticks in 2x2 Grid with uniform heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl mx-auto text-left pt-1">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs h-11">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Hồ sơ Customer 360 tập trung</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs h-11">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Phễu bán hàng 6 giai đoạn chuẩn B2B</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs h-11">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">AI tóm tắt có nhân viên kiểm duyệt</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/90 border border-slate-200/80 shadow-xs h-11">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate">Bảo mật Zero-Phone &amp; MFA 2 lớp</span>
              </div>
            </div>

            {/* 2 Main CTAs */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenDemo('Dùng thử từ Hero')}
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm sm:text-base hover:opacity-95 shadow-md shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Dùng thử miễn phí &amp; Nhận báo giá 1:1</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://ai-crm-cua-chong-ngap.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border-2 border-slate-200 hover:border-indigo-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Mở Web App CRM thực tế</span>
                <ExternalLink className="w-4 h-4 text-indigo-600" />
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-0.5">
              ✓ Không cần thẻ tín dụng • ✓ Triển khai xong trong 48 giờ • ✓ Đào tạo sử dụng 1:1 tận nơi
            </p>
          </div>

          {/* 2. RIGHT BELOW HERO: 2 COLUMNS (UI MOCKUP + QUICK FORM) */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: UI Mockup Dashboard Web App CRM (8 Cols) */}
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-lg opacity-25"></div>
                <div className="relative">
                  <DashboardMockup />
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-2">
                <span>* Dữ liệu mô phỏng theo nghiệp vụ B2B chuẩn</span>
                <Link to="/tinh-nang?tab=p1" className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-1">
                  Xem chi tiết tính năng <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Quick Consultation Card (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200">
                    <Clock className="w-3.5 h-3.5" /> Cam kết phản hồi ≤ 5 phút
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-display">
                    Đăng ký tư vấn miễn phí
                  </h3>
                  <p className="text-xs text-slate-500">
                    Nhận tài khoản trải nghiệm &amp; demo phễu bán hàng thiết kế riêng cho ngành nghề của bạn.
                  </p>
                </div>

                {quickSubmitted ? (
                  <div className="py-6 text-center space-y-3 animate-fadeIn">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="font-bold text-slate-900 text-sm font-display">
                      Đã ghi nhận yêu cầu tư vấn!
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cảm ơn <strong>{quickForm.name}</strong>. Chuyên viên sẽ gọi qua số <strong>{quickForm.phone}</strong> trong ≤ 5 phút để hỗ trợ demo.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleQuickReset}
                        className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Gửi yêu cầu khác
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="space-y-3 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Họ và tên <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={quickForm.name}
                        onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                        className="w-full px-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Số điện thoại <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0912 345 678"
                        value={quickForm.phone}
                        onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                        className="w-full px-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Tên doanh nghiệp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tập đoàn / Công ty..."
                        value={quickForm.company}
                        onChange={(e) => setQuickForm({ ...quickForm, company: e.target.value })}
                        className="w-full px-3 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-2 cursor-pointer text-[11px] text-slate-600">
                        <input
                          type="checkbox"
                          required
                          checked={quickForm.agreed}
                          onChange={(e) => setQuickForm({ ...quickForm, agreed: e.target.checked })}
                          className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span>
                          Tôi đồng ý Chính sách bảo vệ dữ liệu cá nhân theo <strong>Luật 91/2025/QH15</strong>.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isQuickSubmitting}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70"
                    >
                      {isQuickSubmitting ? (
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                          Đang xử lý...
                        </span>
                      ) : (
                        <>
                          <span>Gửi yêu cầu &amp; Nhận báo giá ngay</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Dữ liệu mã hóa
                  </span>
                  <a
                    href="https://ai-crm-cua-chong-ngap.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Đăng nhập trực tiếp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 KEY STATS METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricsData.map((metric, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-80 group-hover:h-1.5 transition-all"></div>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 font-display">
                {metric.value}
              </div>
              <div className="font-bold text-slate-900 text-sm mb-1.5 font-display">
                {metric.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 5 ENTERPRISE PAIN POINTS SOLVED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
            Thách thức Doanh nghiệp B2B
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-[1.22] font-display">
            5 Lỗ hổng lớn khiến doanh nghiệp đánh rơi 30 - 40% doanh thu
          </h2>
          <p className="text-sm text-slate-600">
            Web App CRM loại bỏ triệt để các rào cản truyền thống, thay thế bảng tính Excel rời rạc bằng hệ thống số hóa chuẩn mực.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-indigo-300 transition-all duration-200 hover:-translate-y-0.5 space-y-4 flex flex-col justify-between ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 shrink-0">
                    {getPainIcon(item.icon)}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">
                    {item.title}
                  </h3>
                </div>

                <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-xs text-rose-900 leading-relaxed">
                  <strong>Vấn đề:</strong> {item.problem}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                <strong className="text-indigo-700">Giải pháp Web App CRM:</strong> {item.solution}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 3 PILLAR FEATURES (ZIG-ZAG WITH MOCKUPS) */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold border border-indigo-200">
              Kiến trúc Tính năng Vượt trội
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-[1.22] font-display">
              3 Trụ cột cốt lõi tạo nên sự khác biệt của Web App CRM
            </h2>
            <p className="text-sm text-slate-600">
              Không dàn trải tính năng thừa thãi. Chúng tôi tập trung 100% vào việc tối ưu hóa chuyển đổi và giữ chân khách hàng.
            </p>
          </div>

          {/* Pillar 1: P1 MVP Cốt lõi & Phễu 6 giai đoạn */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                Trụ cột 01 • Cốt lõi MVP
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-display">
                Customer 360 &amp; Phễu Bán hàng 6 Giai đoạn Chuẩn B2B
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mỗi khách hàng được cấp một mã duy nhất (KH-xxxxxx), tự động loại trừ trùng số điện thoại và lọc Hot Leads ≥ 70 điểm. Luồng bán hàng được trực quan hóa qua bảng Kanban kéo thả và biểu đồ Funnel thời gian thực.
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>6 Bước bán hàng:</strong> Tiếp nhận → Đã liên hệ → Tư vấn/Demo → Báo giá → Chốt HĐ → Chăm sóc</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Cam kết SLA ≤ 5 phút:</strong> Đếm ngược thời gian thực, nhắc việc quá hạn tự động</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Phân bổ Lead Round Robin:</strong> Chia việc công bằng theo chuyên môn và khu vực</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/tinh-nang?tab=p1"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Khám phá chi tiết P1</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/bang-gia"
                  className="text-xs font-bold text-indigo-600 hover:underline"
                >
                  Xem bảng giá gói dịch vụ →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <DashboardMockup />
            </div>
          </div>

          {/* Pillar 2: P2 Trợ lý AI có kiểm duyệt & Bảo mật Zero-Phone (Zig-Zag Reversal) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <AISnapshotMockup />
            </div>

            <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">
                Trụ cột 02 • AI &amp; An ninh dữ liệu
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-display">
                Trợ lý AI Tóm tắt Hội thoại &amp; Mặt nạ Zero-Phone
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Đột phá với mô hình AI Snapshot bóc tách ngân sách, thời hạn và nhu cầu từ tin nhắn/cuộc gọi. Nhân viên bán hàng chỉ cần 1 cú click để duyệt hoặc chỉnh sửa trước khi lưu vào CRM.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>AI có kiểm duyệt (Human-in-the-loop):</strong> Không bao giờ tự động phát ngôn rủi ro</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Mặt nạ Zero-Phone (+843******50):</strong> Chống rò rỉ dữ liệu khi nhân viên nghỉ việc</span>
                </li>
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Tuân thủ Luật 91/2025/QH15:</strong> MFA 2 lớp AAL1/AAL2 và nhật ký Audit Log bất biến</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/tinh-nang?tab=p2"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Khám phá chi tiết P2</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => onOpenDemo('Trải nghiệm AI Snapshot')}
                  className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
                >
                  Đăng ký thử nghiệm AI Snapshot 1:1 →
                </button>
              </div>
            </div>
          </div>

          {/* Pillar 3: P3 Hộp thư hợp nhất & Chiến dịch 4 bước */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                Trụ cột 03 • Mở rộng Đa kênh
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-display">
                Hộp thư Hợp nhất (Unified Inbox) &amp; Tin nhắn Cá nhân hóa
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Đồng bộ hai chiều toàn bộ tin nhắn từ Facebook Fanpage, Zalo OA và tổng đài ảo vào một giao diện trực quan. Thiết lập chiến dịch tin nhắn chăm sóc tự động 4 bước với trường dữ liệu động.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Gom tin nhắn 1 nơi:</strong> Quản lý đồng thời nhiều Page &amp; Zalo OA không trôi chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <Bot className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Kịch bản 4 bước:</strong> Gửi thông báo chăm sóc theo biến động ngày hết hạn hợp đồng</span>
                </li>
                <li className="flex items-start gap-2">
                  <PhoneCall className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Tổng đài ảo VoIP:</strong> Click-to-call mã hóa và ghi âm AI bóc băng văn bản</span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/tinh-nang?tab=p3"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Khám phá chi tiết P3</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/giai-phap"
                  className="text-xs font-bold text-indigo-600 hover:underline"
                >
                  Xem giải pháp theo ngành nghề →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SecurityMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (REAL UNSPLASH IMAGES + FALLBACK) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            Khách hàng Doanh nghiệp Đánh giá
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-[1.22] font-display">
            Được tin dùng bởi hơn 250+ doanh nghiệp vừa và nhỏ tại Việt Nam
          </h2>
          <p className="text-sm text-slate-600">
            Lắng nghe trải nghiệm thực tế từ các nhà lãnh đạo và giám đốc kinh doanh trong các ngành trọng điểm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-700">5.0 / 5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{test.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-200 shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80';
                  }}
                />
                <div>
                  <div className="font-bold text-slate-900 text-sm font-display">{test.name}</div>
                  <div className="text-[11px] text-indigo-600 font-semibold">{test.role}</div>
                  <div className="text-[11px] text-slate-500 truncate max-w-[200px]">{test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FEATURED ARTICLES SECTION (NHÓM 2 - THẺ BÀI VIẾT NỔI BẬT -> /kien-thuc) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
              Kiến thức &amp; Xu hướng
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 leading-[1.22] font-display">
              Cẩm nang Quản trị CRM &amp; Tăng trưởng Doanh số B2B
            </h2>
          </div>
          <Link
            to="/kien-thuc"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>Xem tất cả bài viết cẩm nang</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              to="/kien-thuc"
              className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-indigo-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors line-clamp-2 font-display">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-4 pt-1 flex items-center justify-between text-xs font-bold text-indigo-600">
                <span>Đọc bài viết</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
            Giải đáp thắc mắc
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-[1.22] font-display">
            Câu hỏi thường gặp về Web App CRM
          </h2>
          <p className="text-sm text-slate-600">
            Mọi điều bạn cần biết về tính năng, bảo mật và phương thức triển khai hệ thống.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50/50 cursor-pointer font-display"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-700 text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Sẵn sàng tăng tốc doanh thu cho năm 2026?
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight font-display">
              Bắt đầu chuẩn hóa đội ngũ kinh doanh với Web App CRM ngay hôm nay
            </h2>

            <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
              Khảo sát nhu cầu miễn phí, thiết lập quy trình phễu 6 bước hoàn chỉnh và hỗ trợ đào tạo 1:1 cho toàn bộ nhân sự của bạn trong vòng 48 giờ.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenDemo('Banner CTA Cuối')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Nhận Báo Giá 1:1 &amp; Tài Khoản Dùng Thử
              </button>

              <a
                href="https://ai-crm-cua-chong-ngap.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-sm border border-white/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Mở Web App Cloud thực tế</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-indigo-200 flex items-center justify-center gap-4">
              <span>✓ Bảo mật Luật 91/2025/QH15</span>
              <span>•</span>
              <span>✓ Cam kết SLA ≤ 5 phút</span>
              <span>•</span>
              <span>✓ Hỗ trợ kỹ thuật 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
