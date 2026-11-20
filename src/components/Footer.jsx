import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ShieldCheck, Lock, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Security */}
          <div className="space-y-4">
            <Logo size="default" isDark={true} showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              Phần mềm B2B SaaS quản trị quan hệ khách hàng chuyên biệt. Tối ưu phễu 6 giai đoạn, tích hợp Trợ lý AI có kiểm soát và công nghệ mặt nạ Zero-Phone bảo vệ tài sản số doanh nghiệp.
            </p>
            
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white font-display">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Bảo mật Pháp lý Chuẩn Quốc gia</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Tuân thủ nghiêm ngặt Luật Bảo vệ dữ liệu cá nhân số <strong>91/2025/QH15</strong> &amp; Nghị định <strong>356/2025/NĐ-CP</strong>.
              </p>
            </div>
          </div>

          {/* Col 2: Sản phẩm & Tính năng */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Sản phẩm &amp; Tính năng
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/tinh-nang?tab=p1" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Customer 360 &amp; Lead Management
                </Link>
              </li>
              <li>
                <Link to="/tinh-nang?tab=p1" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Sales Pipeline 6 giai đoạn chuẩn B2B
                </Link>
              </li>
              <li>
                <Link to="/tinh-nang?tab=p1" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Cam kết phản hồi SLA ≤ 5 phút
                </Link>
              </li>
              <li>
                <Link to="/tinh-nang?tab=p2" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  AI Snapshot có nhân viên kiểm duyệt
                </Link>
              </li>
              <li>
                <Link to="/tinh-nang?tab=p2" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                  Mặt nạ Zero-Phone (+843******50)
                </Link>
              </li>
              <li>
                <Link to="/tinh-nang?tab=p3" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Hộp thư hợp nhất Zalo OA &amp; Fanpage
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Giải pháp & Gói dịch vụ */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-display">
              Giải pháp &amp; Gói dịch vụ
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/giai-phap#scale" className="hover:text-indigo-400 transition-colors">
                  Doanh nghiệp nhỏ S1 (≤ 50 nhân sự)
                </Link>
              </li>
              <li>
                <Link to="/giai-phap#scale" className="hover:text-indigo-400 transition-colors">
                  Doanh nghiệp vừa S2 (≤ 100 nhân sự)
                </Link>
              </li>
              <li>
                <Link to="/giai-phap#tu-van-giao-duc" className="hover:text-indigo-400 transition-colors">
                  Ngành Tư vấn Dịch vụ &amp; Giáo dục
                </Link>
              </li>
              <li>
                <Link to="/giai-phap#ky-thuat-lap-dat" className="hover:text-indigo-400 transition-colors">
                  Ngành Kỹ thuật, Lắp đặt &amp; Bảo trì
                </Link>
              </li>
              <li>
                <Link to="/giai-phap#thuong-mai-b2b" className="hover:text-indigo-400 transition-colors">
                  Ngành Thương mại &amp; Phân phối B2B
                </Link>
              </li>
              <li>
                <Link to="/bang-gia" className="hover:text-indigo-400 transition-colors">
                  Bảng giá Gói Cơ bản, Nâng cao &amp; Mở rộng
                </Link>
              </li>
              <li>
                <Link to="/bang-gia#process" className="hover:text-indigo-400 transition-colors">
                  Quy trình 5 bước triển khai chuẩn hóa
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hỗ trợ & Trải nghiệm thực tế */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Liên hệ &amp; Trải nghiệm
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Hà Nội &amp; TP. Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Hotline: 1900 888 668 (Hỗ trợ 24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Email: contact@webappcrm.vn</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://ai-crm-cua-chong-ngap.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 border border-slate-700"
              >
                <span>Mở Web App Cloud thực tế</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <button
                onClick={() => onOpenDemo('Tư vấn từ Footer')}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Đăng ký Tư vấn 1:1 Miễn phí
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 Web App CRM. Bản quyền thuộc về Web App CRM SaaS Platform.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-400 font-medium">
              Chuyên biệt 100% CRM B2B (Không ôm đồm kế toán, kho, nhân sự, hóa đơn, GPS)
            </span>
            <Link to="/lien-he#bao-mat" className="hover:text-indigo-400 underline transition-colors">
              Chính sách bảo vệ dữ liệu cá nhân (Luật 91/2025)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
