import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BookOpen, Sparkles, Clock, ArrowRight, Download, FileText, 
  Search, CheckCircle2, X, ChevronRight, Share2 
} from 'lucide-react';
import { blogCategories, blogPosts, quickGuides } from '../data/blogData';
import SEO from '../components/SEO';

export default function Resources({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const filteredPosts = selectedCategory === 'Tất cả' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === selectedCategory);

  // Safe internal link handler inside modal article content
  const handleContentClick = (e) => {
    const target = e.target.closest('a');
    if (target && target.getAttribute('href')) {
      const href = target.getAttribute('href');
      if (href.startsWith('/')) {
        e.preventDefault();
        setSelectedPost(null);
        navigate(href);
      }
    }
  };

  return (
    <div className="py-12 md:py-20 space-y-16 md:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Technical SEO */}
      <SEO 
        title="Tài nguyên, Cẩm nang & Kiến thức CRM B2B" 
        description="Chia sẻ kinh nghiệm thực chiến chuẩn hóa phễu bán hàng, ứng dụng AI tóm tắt hội thoại và tuân thủ Luật bảo vệ dữ liệu cá nhân 91/2025/QH15." 
        path="/kien-thuc" 
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
          Trung tâm Kiến thức Quản trị CRM &amp; B2B
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.22] font-display">
          Cẩm nang Quản trị Khách hàng &amp;{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block pb-1">
            Chiến lược Tăng trưởng B2B
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Tổng hợp bài viết chuyên sâu về tối ưu phễu 6 giai đoạn, ứng dụng Trợ lý AI an toàn và giải pháp tuân thủ Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* BLOG POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Cover Image with Fallback */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-md text-indigo-700 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug font-display">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </div>

            {/* Footer / Trigger Read Modal */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 mt-2">
              <span className="text-[11px] text-slate-400 font-medium">
                Tác giả: {post.author.split('-')[0]}
              </span>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Đọc toàn bộ bài viết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* QUICK GUIDES & DOWNLOADS SECTION */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider font-display">
              Tài liệu &amp; Template Miễn phí
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 font-display">
              Bộ công cụ &amp; Biểu mẫu dành riêng cho Doanh nghiệp B2B
            </h3>
          </div>
          <button
            onClick={() => onOpenDemo('Tải trọn bộ 3 tài liệu cẩm nang CRM B2B')}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-all duration-200 hover:-translate-y-0.5 shrink-0 shadow-sm cursor-pointer"
          >
            Nhận trọn bộ 3 tài liệu
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickGuides.map((guide, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-700">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {guide.format}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm leading-snug font-display">
                  {guide.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-emerald-600">
                  {guide.downloadCount}
                </span>
                <button
                  onClick={() => onOpenDemo(`Tải tài liệu: ${guide.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải ngay</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL VIEW FULL BLOG POST */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image & close button */}
            <div className="relative h-64 w-full shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
                aria-label="Đóng bài viết"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white inline-block">
                  {selectedPost.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug font-display">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Scrollable content body */}
            <div 
              className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed"
              onClick={handleContentClick}
            >
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span>Tác giả: {selectedPost.author}</span>
                <span>Ngày đăng: {selectedPost.date} • {selectedPost.readTime}</span>
              </div>

              <div 
                className="prose prose-indigo max-w-none space-y-3"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Internal Link CTA Card */}
              <div className="mt-6 p-4 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-2">
                <div className="font-bold text-indigo-950 text-sm font-display">
                  Trải nghiệm phần mềm thực tế
                </div>
                <p className="text-xs text-indigo-900 leading-relaxed">
                  Áp dụng ngay các phương pháp trong bài viết với hệ thống Web App CRM chuẩn hóa. Bạn có thể mở ứng dụng thực tế hoặc đăng ký nhận buổi demo 1:1.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href="https://ai-crm-cua-chong-ngap.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors"
                  >
                    Mở Web App Cloud thực tế →
                  </a>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      onOpenDemo(`Tư vấn từ bài viết: ${selectedPost.title}`);
                    }}
                    className="px-4 py-2 rounded-xl bg-white border border-indigo-200 text-indigo-700 font-bold text-xs hover:bg-indigo-50 transition-colors cursor-pointer"
                  >
                    Đăng ký tư vấn 1:1
                  </button>
                  <Link
                    to="/bang-gia"
                    onClick={() => setSelectedPost(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                  >
                    Xem bảng giá gói CRM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
