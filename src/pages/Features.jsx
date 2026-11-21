import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Layers, ShieldCheck, MessageSquare, CheckCircle2, Sparkles, 
  ArrowRight, Check, Lock, Bot, Clock, Filter, Eye, PhoneCall, ChevronRight
} from 'lucide-react';
import { featuresPillars } from '../data/featuresData';
import { DashboardMockup, AISnapshotMockup, SecurityMockup, OmnichannelMockup } from '../components/UIMockups';
import SEO from '../components/SEO';

export default function Features({ onOpenDemo }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'p1');

  useEffect(() => {
    if (tabParam && ['p1', 'p2', 'p3'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  const currentPillar = featuresPillars.find(p => p.id === activeTab) || featuresPillars[0];

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Technical SEO */}
      <SEO 
        title="Tính năng Chuyên sâu P1, P2, P3" 
        description="Hệ thống tính năng CRM B2B: Customer 360, Phễu bán hàng 6 giai đoạn, Trợ lý AI Snapshot và Bảo mật mặt nạ số Zero-Phone." 
        path="/tinh-nang" 
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          Hệ sinh thái Tính năng B2B SaaS Độc lập
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Bộ tính năng toàn diện thiết kế cho{' '}
          <span className="text-indigo-600">
            Đội ngũ Kinh doanh B2B
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Tập trung 100% vào nghiệp vụ phễu bán hàng, trợ lý trí tuệ nhân tạo có con người kiểm duyệt và bảo vệ tài sản dữ liệu theo tiêu chuẩn Luật số 91/2025/QH15.
        </p>
      </div>

      {/* 3 Nav Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner max-w-full overflow-x-auto">
          <button
            onClick={() => handleTabChange('p1')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'p1' ? 'bg-white text-blue-700 shadow-md border border-slate-200/60' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>P1 – MVP Cốt lõi & Phễu 6 Bước</span>
          </button>

          <button
            onClick={() => handleTabChange('p2')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'p2' ? 'bg-white text-purple-700 shadow-md border border-slate-200/60' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>P2 – Trợ lý AI & Bảo mật 3 Lớp</span>
          </button>

          <button
            onClick={() => handleTabChange('p3')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${activeTab === 'p3' ? 'bg-white text-indigo-700 shadow-md border border-slate-200/60' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            <span>P3 – Mở rộng Đa kênh & Tiếp thị</span>
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="space-y-16 animate-fadeIn">
        {/* Tab Intro Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentPillar.badgeColor}`}>
              {currentPillar.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentPillar.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {currentPillar.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenDemo(`Tư vấn ${currentPillar.title}`)}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-lg hover:opacity-95"
            >
              Nhận báo giá 1:1 cho {currentPillar.code}
            </button>
            <Link
              to="/bang-gia"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 text-center"
            >
              So sánh các gói dịch vụ
            </Link>
          </div>
        </div>

        {/* Feature Items List with Visual Mockups */}
        <div className="space-y-12">
          {currentPillar.items.map((item, index) => (
            <div 
              key={item.id} 
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 hover:border-indigo-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 font-extrabold text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="self-start md:self-center">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Đã tích hợp sẵn
                  </span>
                </div>
              </div>

              {/* Grid of bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Highlight strip + Links */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-indigo-950 font-medium">
                  <strong>💡 Lợi ích cốt lõi:</strong> {item.highlight}
                </div>
                <div className="flex items-center gap-3 shrink-0 text-xs font-bold text-indigo-600">
                  <Link to="/giai-phap" className="hover:underline flex items-center gap-1">
                    Xem áp dụng ngành nghề <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <span>•</span>
                  <Link to="/bang-gia" className="hover:underline flex items-center gap-1">
                    Gói cước <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive UI Showcase corresponding to Tab */}
        <div className="space-y-4 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              Trải nghiệm Giao diện Trực quan
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activeTab === 'p1' && 'Mô phỏng Màn hình Dashboard KPI & Phễu Bán hàng 6 Bước'}
              {activeTab === 'p2' && 'Mô phỏng Trợ lý AI Snapshot & Giao diện Mặt nạ Zero-Phone'}
              {activeTab === 'p3' && 'Mô phỏng Hộp thư Hợp nhất (Unified Inbox) Đa kênh'}
            </h3>
            <p className="text-xs text-slate-500">
              Thử tương tác trực tiếp trên các khối tính năng bên dưới
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {activeTab === 'p1' && <DashboardMockup />}
            {activeTab === 'p2' && (
              <div className="space-y-6">
                <AISnapshotMockup />
                <SecurityMockup />
              </div>
            )}
            {activeTab === 'p3' && <OmnichannelMockup />}
          </div>
        </div>

        {/* Cross-linking Action Box */}
        <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Khám phá xem Web App CRM hỗ trợ thế nào cho mô hình của bạn
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Chúng tôi đã đóng gói sẵn các kịch bản mẫu cho ngành <strong>Tư vấn Dịch vụ & Giáo dục</strong>, <strong>Kỹ thuật Lắp đặt</strong>, và <strong>Thương mại B2B</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              to="/giai-phap"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Xem giải pháp theo 3 ngành nghề</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/bang-gia"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 transition-all"
            >
              Xem chi tiết bảng giá 3 gói dịch vụ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
