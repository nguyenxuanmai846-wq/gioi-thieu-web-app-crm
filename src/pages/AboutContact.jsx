import React, { useState } from 'react';
import { 
  Building, MapPin, Phone, Mail, Clock, ShieldCheck, 
  Sparkles, CheckCircle2, ArrowRight, Lock, Target, Award, Users 
} from 'lucide-react';
import siteConfig from '../config/siteConfig';
import { submitLead } from '../utils/leadService';
import { trackEvent } from '../utils/analytics';
import SEO from '../components/SEO';

export default function AboutContact({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('vision');
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    agreed: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLead({
        name: contactForm.name,
        phone: contactForm.phone,
        email: contactForm.email,
        company: contactForm.company,
        message: contactForm.message,
        planTier: 'Liên hệ & Khảo sát bài toán',
        formName: 'AboutContact Form'
      });
      trackEvent('submit_lead_form', {
        form_name: 'AboutContact Form',
        company: contactForm.company
      });
    } catch (err) {
      console.error('Contact submit error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setContactForm({
      name: '',
      phone: '',
      email: '',
      company: '',
      message: '',
      agreed: true
    });
  };

  const coreValues = [
    {
      title: 'Chuyên sâu B2B 100%',
      desc: 'Tuyệt đối không phân mảnh sang kế toán, kho vận hay GPS; tập trung toàn bộ nguồn lực vào trải nghiệm khách hàng và tối ưu doanh số.'
    },
    {
      title: 'AI có Kiểm soát (Human-in-the-loop)',
      desc: 'Công nghệ AI phục vụ nhân sự chứ không thay thế hoàn toàn; mọi nội dung tóm tắt đều có nhân viên kiểm duyệt trước khi lưu.'
    },
    {
      title: 'Bảo mật Dữ liệu Tối thượng',
      desc: 'Tiên phong áp dụng Mặt nạ Zero-Phone, tuân thủ nghiêm ngặt Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.'
    },
    {
      title: 'Cam kết Phản hồi SLA ≤ 5 Phút',
      desc: 'Giúp doanh nghiệp giữ vững vị thế dẫn đầu bằng tốc độ tiếp cận cơ hội trong khung giờ vàng.'
    }
  ];

  const roadmapSteps = [
    {
      stage: 'Giai đoạn 1',
      title: 'Nền tảng MVP Cốt lõi',
      time: 'Đã hoàn thành',
      status: 'completed',
      items: [
        'Hồ sơ Customer 360 mã hóa định danh KH-xxxxxx',
        'Sales Pipeline 6 giai đoạn chuẩn B2B với giao diện kéo thả Kanban',
        'Thuật toán lọc trùng lặp số điện thoại & chấm điểm Hot Leads ≥ 70',
        'Đồng hồ đếm ngược SLA ≤ 5 phút và cảnh báo quá hạn công việc'
      ]
    },
    {
      stage: 'Giai đoạn 2',
      title: 'Trợ lý AI & Chuẩn hóa Đa ngành',
      time: 'Hiện tại (Năm 2026)',
      status: 'active',
      items: [
        'Trợ lý AI Snapshot bóc tách nhu cầu và ngân sách hội thoại',
        'Cơ chế Gemini Pool cân bằng tải và Kill Switch an toàn tuyệt đối',
        'Công nghệ mặt nạ số điện thoại Zero-Phone (+843******50)',
        'Bộ kịch bản phễu mẫu cho ngành Tư vấn, Kỹ thuật và B2B'
      ]
    },
    {
      stage: 'Giai đoạn 3',
      title: 'Mở rộng S2 & Hệ sinh thái API',
      time: 'Lộ trình tiếp theo',
      status: 'upcoming',
      items: [
        'Hộp thư hợp nhất Omnichannel kết nối trực tiếp Zalo OA & Fanpage',
        'Tổng đài ảo VoIP tích hợp ghi âm và bóc băng âm thanh AI',
        'Mở cổng Open API đồng bộ dữ liệu với ERP và phần mềm kế toán sẵn có',
        'Mở rộng quy mô phục vụ doanh nghiệp vừa S2 lên đến 100+ nhân sự'
      ]
    }
  ];

  return (
    <div className="py-12 md:py-20 space-y-16 md:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Technical SEO */}
      <SEO 
        title="Giới thiệu & Liên hệ Khảo sát Bài toán CRM" 
        description="Liên hệ đội ngũ chuyên gia Web App CRM để nhận tư vấn 1:1 và cấp tài khoản dùng thử hệ thống trong vòng 5 phút." 
        path="/lien-he" 
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700">
          <Building className="w-3.5 h-3.5 text-indigo-600" />
          Về Chúng Tôi &amp; Đội Ngũ Phát Triển
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.22] font-display">
          Sứ mệnh Kiến tạo Nền tảng CRM{' '}
          <span className="text-indigo-600 inline-block pb-1">
            Thông minh &amp; An toàn nhất
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Chúng tôi đồng hành cùng các doanh nghiệp vừa và nhỏ Việt Nam (SME) trong hành trình số hóa quy trình bán hàng, nâng tầm dịch vụ khách hàng với Trợ lý AI có kiểm soát.
        </p>
      </div>

      {/* SECTION 1: DARK BLUE-PURPLE TAB BLOCK (TẦM NHÌN, SỨ MỆNH, 4 GIÁ TRỊ) */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-6">
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeTab === 'vision' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Tầm nhìn Chiến lược
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeTab === 'mission' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Sứ mệnh Phục vụ
          </button>
          <button
            onClick={() => setActiveTab('values')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${activeTab === 'values' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            4 Giá trị Cốt lõi
          </button>
        </div>

        {/* Tab 1: Vision */}
        {activeTab === 'vision' && (
          <div className="space-y-4 animate-fadeIn max-w-3xl">
            <h3 className="text-2xl font-extrabold text-white font-display">
              Trở thành Nền tảng B2B SaaS CRM Tiên phong tại Việt Nam ứng dụng Trợ lý AI có kiểm soát
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Đến năm 2028, Web App CRM đặt mục tiêu hỗ trợ hơn 10,000 doanh nghiệp vừa và nhỏ chuyển đổi số thành công quy trình kinh doanh. Chúng tôi tin rằng mỗi doanh nghiệp dù ở quy mô nào cũng xứng đáng được sở hữu một hệ thống quản trị chuyên nghiệp, trực quan mà không phải gánh chịu chi phí quá tải từ những phần mềm ERP cồng kềnh.
            </p>
          </div>
        )}

        {/* Tab 2: Mission */}
        {activeTab === 'mission' && (
          <div className="space-y-4 animate-fadeIn max-w-3xl">
            <h3 className="text-2xl font-extrabold text-white font-display">
              Giải phóng Đội ngũ Kinh doanh khỏi Báo cáo Thủ công để Tập trung Tạo ra Doanh số
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sứ mệnh của chúng tôi là chuẩn hóa 6 bước bán hàng, biến dữ liệu khách hàng thành tài sản số an toàn của công ty, và tận dụng Trợ lý AI để giảm thiểu 70% thời gian nhập liệu cho nhân viên. Chúng tôi cam kết bảo vệ dữ liệu khách hàng tuyệt đối theo quy định pháp luật Việt Nam.
            </p>
          </div>
        )}

        {/* Tab 3: 4 Core Values */}
        {activeTab === 'values' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                    {idx + 1}
                  </span>
                  <h4 className="font-bold text-white text-sm font-display">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 2: 3-STAGE ROADMAP TIMELINE */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
            Lộ trình Phát triển Bền vững
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-[1.22] font-display">
            Tiến trình Nâng cấp &amp; Hoàn thiện Hệ thống
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Minh bạch từng cột mốc tính năng để khách hàng luôn an tâm đồng hành lâu dài.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmapSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-white border-2 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between space-y-4 ${step.status === 'active' ? 'border-indigo-600 shadow-xl relative' : 'border-slate-200 shadow-sm'}`}
            >
              {step.status === 'active' && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-extrabold">
                  ● Đang phát hành
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600">
                    {step.stage}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${step.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : step.status === 'active' ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-600'}`}>
                    {step.time}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {step.title}
                </h3>

                <ul className="space-y-2 text-xs text-slate-600 pt-1">
                  {step.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${step.status === 'completed' ? 'text-emerald-500' : step.status === 'active' ? 'text-indigo-600' : 'text-slate-300'}`} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                {step.status === 'completed' && '✓ Đã kiểm thử ổn định 100%'}
                {step.status === 'active' && '★ Đang triển khai cho các khách hàng mới'}
                {step.status === 'upcoming' && '⌛ Cập nhật tự động trên nền tảng đám mây'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CONTACT FORM & DATA PROTECTION COMMITMENT (LAW 91/2025/QH15) */}
      <section id="bao-mat" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
        {/* Left Column: Contact details & Legal Commitment (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              Kết nối trực tiếp
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 leading-[1.22] font-display">
              Trụ sở &amp; Kênh Hỗ trợ Doanh nghiệp
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Đội ngũ chuyên viên tư vấn luôn sẵn sàng tiếp nhận yêu cầu và phản hồi trong khung giờ cam kết.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
              <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-bold mb-0.5 font-display">Văn phòng / Trụ sở:</strong>
                <p className="text-xs text-slate-600">{siteConfig.address}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
              <Phone className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-bold mb-0.5 font-display">Tổng đài &amp; Hotline:</strong>
                <p className="text-xs text-slate-600">
                  Hotline:{' '}
                  <a href={`tel:${siteConfig.zaloPhone}`} className="text-indigo-600 font-semibold hover:underline">
                    {siteConfig.hotline}
                  </a>{' '}
                  (Hỗ trợ 24/7)
                </p>
                <p className="text-xs text-slate-600">
                  Zalo tư vấn:{' '}
                  <a
                    href={`https://zalo.me/${siteConfig.zaloPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
              <Mail className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-bold mb-0.5 font-display">Hòm thư Điện tử:</strong>
                <p className="text-xs text-slate-600">
                  <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 font-semibold hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Legal Compliance Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 space-y-2">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs sm:text-sm font-display">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Cam kết Bảo vệ Dữ liệu Cá nhân Chuẩn Pháp lý</span>
            </div>
            <p className="text-xs text-indigo-950 leading-relaxed">
              Mọi dữ liệu doanh nghiệp cung cấp được mã hóa và xử lý nghiêm ngặt theo quy định của <strong>Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15</strong> và <strong>Nghị định 356/2025/NĐ-CP</strong>. Chúng tôi tuyệt đối không chia sẻ hoặc sử dụng cho mục đích nào khác ngoài việc tư vấn và hỗ trợ khách hàng.
            </p>
          </div>
        </div>

        {/* Right Column: Direct Demo & Consultation Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Tiếp nhận Yêu cầu Thành công!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn <strong>{contactForm.name}</strong>. Yêu cầu của công ty <strong>{contactForm.company}</strong> đã được ghi nhận. Chuyên viên giải pháp của Web App CRM sẽ gọi lại cho bạn qua số <strong>{contactForm.phone}</strong> trong vòng <strong>≤ 5 phút</strong> (giờ hành chính).
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Gửi thêm yêu cầu khác
                </button>
                <a
                  href={siteConfig.webAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md hover:opacity-95"
                >
                  <span>Mở Web App Cloud</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Gửi Yêu Cầu Khảo Sát &amp; Trải Nghiệm Demo 1:1
                </h3>
                <p className="text-xs text-slate-500">
                  Điền thông tin bên dưới để chuyên viên giải pháp liên hệ trao đổi phương án phù hợp nhất.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Họ và tên người liên hệ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Trần Văn Long"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Số điện thoại <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0988 123 456"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email doanh nghiệp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="long.tran@congty.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tên công ty &amp; Quy mô <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Công ty CP... (~20 nhân sự)"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="w-full px-3.5 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nhu cầu hoặc bài toán đang gặp phải
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Cần phễu bán hàng cho đội 15 sales ngành kỹ thuật, muốn tóm tắt cuộc gọi bằng AI..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-base sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      required
                      checked={contactForm.agreed}
                      onChange={(e) => setContactForm({ ...contactForm, agreed: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>
                      Tôi xác nhận đồng ý Chính sách bảo vệ dữ liệu cá nhân theo <strong>Luật 91/2025/QH15</strong>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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
                      <span>Gửi Yêu Cầu &amp; Cấp Quyền Trải Nghiệm 1:1</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
