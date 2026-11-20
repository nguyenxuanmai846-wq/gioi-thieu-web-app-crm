import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import siteConfig from '../config/siteConfig';
import { 
  Menu, X, ChevronDown, ExternalLink, Sparkles, 
  Layers, Shield, MessageSquare, Briefcase, GraduationCap, Wrench, Building2,
  User, LogOut, LayoutDashboard
} from 'lucide-react';

export default function Navbar({ onOpenDemo, currentUser, onOpenAuth, onLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setFeaturesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="default" showTagline={false} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive('/') ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
            >
              Trang chủ
            </Link>

            {/* Tính năng Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setFeaturesDropdownOpen(true)}
              onMouseLeave={() => setFeaturesDropdownOpen(false)}
            >
              <Link
                to="/tinh-nang"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive('/tinh-nang') ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
              >
                <span>Tính năng</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${featuresDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {featuresDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 mt-1 animate-fadeIn">
                  <div className="space-y-1">
                    <Link
                      to="/tinh-nang?tab=p1"
                      onClick={() => setFeaturesDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          P1 - Cốt lõi &amp; Phễu 6 Bước
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Customer 360, Kanban và cam kết SLA ≤ 5 phút
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/tinh-nang?tab=p2"
                      onClick={() => setFeaturesDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          P2 - Trợ lý AI &amp; Bảo mật 3 Lớp
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          AI Snapshot có kiểm duyệt &amp; Mặt nạ Zero-Phone
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/tinh-nang?tab=p3"
                      onClick={() => setFeaturesDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          P3 - Mở rộng Đa kênh
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Hộp thư hợp nhất Zalo/FB &amp; Chiến dịch 4 bước
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Giải pháp Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <Link
                to="/giai-phap"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive('/giai-phap') ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
              >
                <span>Giải pháp</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 mt-1 animate-fadeIn">
                  <div className="space-y-1">
                    <Link
                      to="/giai-phap#scale"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          Theo Quy mô Doanh nghiệp
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Nhỏ S1 (≤ 50 nhân sự) &amp; Vừa S2 (≤ 100 nhân sự)
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/giai-phap#tu-van-giao-duc"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          Tư vấn Dịch vụ &amp; Giáo dục
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Phễu tư vấn lộ trình 1:1 &amp; Đào tạo chuyên sâu
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/giai-phap#ky-thuat-lap-dat"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          Kỹ thuật, Lắp đặt &amp; Bảo trì
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Khảo sát mặt bằng, thi công &amp; nhắc lịch bảo dưỡng
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/giai-phap#thuong-mai-b2b"
                      onClick={() => setSolutionsDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-700 shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 font-display">
                          Thương mại &amp; B2B
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Chu kỳ bán hàng lớn &amp; Quản lý Key Account
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/bang-gia"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive('/bang-gia') ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
            >
              Gói dịch vụ
            </Link>

            <Link
              to="/kien-thuc"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive('/kien-thuc') ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
            >
              Tài nguyên
            </Link>

            <Link
              to="/lien-he"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive('/lien-he') ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'}`}
            >
              Liên hệ
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {currentUser ? (
              <div className="flex items-center gap-2">
                {/* User chip */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200">
                  {currentUser.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt={currentUser.displayName} 
                      className="w-6 h-6 rounded-full object-cover border border-slate-300" 
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold">
                      {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span className="text-xs font-bold text-slate-800 max-w-[120px] truncate">
                    {currentUser.displayName}
                  </span>
                </div>

                {/* CRM Dashboard Link */}
                <a
                  href={siteConfig.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                  title="Vào bảng điều khiển Web App CRM"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
                  <span>Vào CRM</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                {/* Logout Button */}
                <button
                  onClick={onLogout}
                  className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors cursor-pointer"
                  title="Đăng xuất"
                  aria-label="Đăng xuất"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                {/* Login button triggers AuthModal */}
                <button
                  onClick={onOpenAuth}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-indigo-600 border border-slate-300 hover:border-indigo-400 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50/30 cursor-pointer"
                  title="Đăng nhập Cổng Doanh nghiệp"
                >
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Đăng nhập</span>
                </button>

                {/* Try Free button triggers DemoModal */}
                <button
                  onClick={() => onOpenDemo('Dùng thử miễn phí')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Dùng thử miễn phí</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenDemo('Dùng thử nhanh')}
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600"
            >
              Dùng thử
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn shadow-xl">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${isActive('/') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-800'}`}
            >
              Trang chủ
            </Link>
            <Link
              to="/tinh-nang"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${isActive('/tinh-nang') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-800'}`}
            >
              Tính năng (P1, P2, P3)
            </Link>
            <Link
              to="/giai-phap"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${isActive('/giai-phap') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-800'}`}
            >
              Giải pháp theo Ngành &amp; Quy mô
            </Link>
            <Link
              to="/bang-gia"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${isActive('/bang-gia') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-800'}`}
            >
              Gói dịch vụ &amp; Quy trình 5 bước
            </Link>
            <Link
              to="/kien-thuc"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${isActive('/kien-thuc') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-800'}`}
            >
              Tài nguyên &amp; Bài viết
            </Link>
            <Link
              to="/lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${isActive('/lien-he') ? 'text-indigo-600 bg-indigo-50' : 'text-slate-800'}`}
            >
              Liên hệ
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            {currentUser ? (
              <div className="space-y-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {currentUser.photoURL ? (
                      <img src={currentUser.photoURL} alt={currentUser.displayName} className="w-7 h-7 rounded-full object-cover" />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                        {currentUser.displayName?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-bold text-slate-900">{currentUser.displayName}</div>
                      <div className="text-[10px] text-slate-500">{currentUser.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600"
                    title="Đăng xuất"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
                <a
                  href={siteConfig.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
                  <span>Vào bảng điều khiển CRM</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>Đăng nhập Cổng Doanh nghiệp</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('Dùng thử miễn phí');
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Dùng thử miễn phí &amp; Nhận báo giá</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
