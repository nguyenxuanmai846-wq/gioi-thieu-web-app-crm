import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, Briefcase, GraduationCap, Wrench, CheckCircle2, 
  ArrowRight, Sparkles, TrendingUp, Layers, ShieldCheck, ChevronRight
} from 'lucide-react';
import { scaleSegments, industrySolutions } from '../data/solutionsData';
import SEO from '../components/SEO';

export default function Solutions({ onOpenDemo }) {
  const [activeIndustry, setActiveIndustry] = useState(industrySolutions[0].id);

  const currentIndustry = industrySolutions.find(i => i.id === activeIndustry) || industrySolutions[0];

  const getIndustryIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-sky-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-600" />;
      default: return <Building2 className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-16 md:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Technical SEO */}
      <SEO 
        title="Giải pháp theo Ngành & Quy mô Doanh nghiệp" 
        description="Giải pháp Web App CRM chuyên biệt cho B2B: Phân phối & Bán sỉ, Dịch vụ Doanh nghiệp, Đào tạo B2B và Sản xuất Kỹ thuật." 
        path="/giai-phap" 
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
          <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
          Giải pháp May đo Chuyên biệt
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.22] font-display">
          Giải pháp tối ưu theo{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block pb-1">
            Quy mô &amp; Ngành nghề
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Mỗi ngành có một vòng đời bán hàng và điểm nghẽn khác nhau. Web App CRM cung cấp bộ khung phễu 6 bước được cấu hình sẵn theo đúng đặc thù kinh doanh của bạn.
        </p>
      </div>

      {/* SECTION 1: PHÂN KHÚC QUY MÔ S1 & S2 */}
      <section id="scale" className="space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-[1.22] font-display">
            Phân khúc Quy mô Doanh nghiệp
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Lựa chọn gói giải pháp phù hợp với giai đoạn phát triển hiện tại của tổ chức.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scaleSegments.map((segment) => (
            <div
              key={segment.id}
              className={`p-6 sm:p-8 rounded-3xl bg-white border-2 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between space-y-6 ${segment.id === 's1' ? 'border-indigo-500 shadow-xl relative' : 'border-slate-200 shadow-sm hover:shadow-md'}`}
            >
              {segment.id === 's1' && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-extrabold shadow-sm">
                  ★ Phân khúc phục vụ cốt lõi
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${segment.badgeColor}`}>
                    {segment.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    Phân khúc {segment.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                    {segment.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 mt-1">
                    Đối tượng: {segment.target}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {segment.description}
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-rose-50/70 border border-rose-100 space-y-1.5">
                    <span className="text-xs font-bold text-rose-800 block font-display">Thách thức thường gặp:</span>
                    <ul className="space-y-1 text-xs text-rose-900">
                      {segment.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 space-y-1.5">
                    <span className="text-xs font-bold text-emerald-800 block font-display">Giải pháp Web App CRM:</span>
                    <ul className="space-y-1 text-xs text-emerald-950">
                      {segment.solutions.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {segment.keyBenefits.map((b, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenDemo(`Tư vấn giải pháp ${segment.title}`)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${segment.id === 's1' ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                >
                  <span>Nhận Báo Giá 1:1 cho {segment.code}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: 3 NGÀNH NGHỀ & MÔ PHỎNG PHỄU 6 BƯỚC */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
            Chuyên sâu theo Ngành
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-[1.22] font-display">
            Mô phỏng Phễu Bán hàng 6 Giai đoạn theo từng Lĩnh vực
          </h2>
          <p className="text-sm text-slate-600">
            Khám phá cách từng giai đoạn trong phễu được tùy biến để giải quyết triệt để bài toán kinh doanh đặc thù.
          </p>
        </div>

        {/* 3 Industry Tabs */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-3xl w-full">
            {industrySolutions.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${activeIndustry === ind.id ? 'bg-white text-indigo-700 shadow-md border border-slate-200/60' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {getIndustryIcon(ind.icon)}
                <span>{ind.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Industry Deep-dive Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-fadeIn">
          {/* Top Banner Image with Overlay */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img
              src={currentIndustry.image}
              alt={currentIndustry.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm border border-white/30">
                {currentIndustry.name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {currentIndustry.tagline}
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Industry Specific Pain Point */}
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-100 text-rose-700 shrink-0 mt-0.5">
                <span className="font-extrabold text-xs">⚠️</span>
              </div>
              <div>
                <span className="text-xs font-bold text-rose-900 block font-display">Nỗi đau cố hữu của ngành:</span>
                <p className="text-xs sm:text-sm text-rose-950 mt-0.5 leading-relaxed">
                  {currentIndustry.painPoint}
                </p>
              </div>
            </div>

            {/* 6 Custom Funnel Steps Simulation */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  Chuẩn hóa 6 Bước Phễu Bán hàng cho ngành {currentIndustry.name}
                </h4>
                <span className="text-xs text-indigo-600 font-semibold hidden sm:inline-block">
                  SLA ≤ 5 phút &amp; Trợ lý AI hỗ trợ
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentIndustry.customFunnel.map((st) => (
                  <div
                    key={st.step}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 transition-all duration-200 hover:-translate-y-0.5 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
                        {st.step}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Giai đoạn {st.step}/6
                      </span>
                    </div>

                    <h5 className="font-bold text-slate-900 text-sm font-display">
                      {st.title}
                    </h5>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Results */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 font-display">
                Hiệu quả thực tế sau 3 tháng triển khai:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentIndustry.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 text-center">
                    <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-display">
                      {m.value}
                    </div>
                    <div className="text-xs font-medium text-slate-700 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions - All 3 Pathways */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Cần tinh chỉnh các trường dữ liệu theo sản phẩm đặc thù của bạn?
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/tinh-nang"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                >
                  Xem tính năng chi tiết
                </Link>
                <Link
                  to="/bang-gia"
                  className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold text-center transition-colors"
                >
                  Xem bảng giá
                </Link>
                <button
                  onClick={() => onOpenDemo(`Tư vấn giải pháp cho ngành ${currentIndustry.name}`)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md hover:opacity-95 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  Đăng ký Demo ngành này
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
