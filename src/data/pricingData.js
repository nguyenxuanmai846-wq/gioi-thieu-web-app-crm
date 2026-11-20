export const scaleOptions = [
  { id: 'under-10', label: 'Dưới 10 người', note: 'Khởi sự & Nhóm nhỏ' },
  { id: '10-50', label: '10 - 50 người', note: 'Doanh nghiệp nhỏ S1 (Trọng tâm)' },
  { id: '50-100', label: '50 - 100 người', note: 'Doanh nghiệp vừa S2 (Mở rộng)' }
];

export const pricingPlans = [
  {
    id: 'basic',
    name: 'Gói Cơ bản',
    badge: 'Khởi đầu vững chắc',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    target: 'Tối ưu cho doanh nghiệp nhỏ (S1) dưới 15 người dùng, chuẩn hóa quy trình bán hàng cốt lõi.',
    highlightText: 'Đầy đủ tính năng P1 Cốt lõi',
    isPopular: false,
    gradientBorder: false,
    priceNote: 'Tối ưu chi phí cho đội ngũ tinh gọn',
    features: {
      p1: [
        'Hồ sơ Customer 360 & Lead Management (Mã KH-xxxxxx)',
        'Sales Pipeline 6 giai đoạn chuẩn B2B (Kanban & Funnel)',
        'Tự động lọc trùng lặp & Chấm điểm Hot Leads ≥ 70',
        'Quản lý công việc & Cảnh báo nhắc việc quá hạn',
        'Cam kết phản hồi SLA ≤ 5 phút',
        'Dashboard KPI doanh thu & chuyển đổi thời gian thực'
      ],
      p2: [
        'Phân quyền cơ bản 3 vai trò',
        'Bảo mật đăng nhập mã hóa chuẩn HTTPS'
      ],
      p3: [
        'Import/Export dữ liệu Excel chuẩn hóa'
      ]
    },
    buttonText: 'Nhận báo giá Gói Cơ bản',
    buttonVariant: 'outline'
  },
  {
    id: 'pro',
    name: 'Gói Nâng cao (Có AI)',
    badge: 'Khuyên dùng cho Doanh nghiệp',
    badgeColor: 'bg-amber-400 text-amber-950 border-amber-300 font-bold',
    target: 'Dành cho doanh nghiệp 10-50 nhân sự (S1) muốn tăng tốc chuyển đổi bằng Trợ lý AI và Bảo mật tuyệt đối.',
    highlightText: 'Bao gồm toàn bộ P1 + P2 Trợ lý AI & Bảo mật 3 lớp',
    isPopular: true,
    gradientBorder: true,
    priceNote: 'Hiệu quả cao nhất trên chi phí đầu tư',
    features: {
      p1: [
        'Toàn bộ tính năng thuộc Gói Cơ bản (P1)',
        'Không giới hạn số lượng cơ hội & lịch sử chăm sóc',
        'Tùy chỉnh các trường dữ liệu động theo ngành nghề'
      ],
      p2: [
        'Trợ lý AI Snapshot tóm tắt hội thoại thông minh',
        'Cơ chế Nhân viên kiểm duyệt trước khi lưu (Human-in-the-loop)',
        'Gemini Pool cân bằng tải & Kill Switch an toàn tuyệt đối',
        'Gợi ý hành động kế tiếp (Next Best Action) tự động',
        'Bảo mật 3 lớp: Mặt nạ Zero-Phone (+843******50)',
        'Xác thực 2 yếu tố MFA AAL1/AAL2 & Phân quyền 5 vai trò',
        'Nhật ký kiểm toán Audit Log chi tiết từng thao tác'
      ],
      p3: [
        'Tích hợp Webhook kết nối dữ liệu quảng cáo website'
      ]
    },
    buttonText: 'Nhận báo giá Gói Nâng cao',
    buttonVariant: 'gradient'
  },
  {
    id: 'enterprise',
    name: 'Gói Mở rộng & Đa kênh',
    badge: 'Quy mô S2 & Tích hợp sâu',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    target: 'Dành cho doanh nghiệp 50-100 nhân sự (S2), nhiều chi nhánh hoặc kinh doanh đa kênh Facebook & Zalo.',
    highlightText: 'Trọn bộ giải pháp P1 + P2 + P3 Mở rộng Đa kênh',
    isPopular: false,
    gradientBorder: false,
    priceNote: 'Tùy biến riêng theo quy mô và yêu cầu kết nối',
    features: {
      p1: [
        'Toàn bộ tính năng thuộc Gói Cơ bản (P1)',
        'Phân bổ Lead Round Robin đa chi nhánh theo khu vực'
      ],
      p2: [
        'Toàn bộ Trợ lý AI nâng cao & Bảo mật Zero-Phone (P2)',
        'Cam kết thỏa thuận bảo mật dữ liệu NDA riêng biệt'
      ],
      p3: [
        'Hộp thư hợp nhất Omnichannel (Facebook Fanpage & Zalo OA)',
        'Chiến dịch tin nhắn chăm sóc cá nhân hóa 4 bước tự động',
        'Tích hợp tổng đài VoIP: Click-to-call Zero-Phone & Ghi âm AI',
        'Mở cổng API tích hợp hệ thống nội bộ doanh nghiệp',
        'Chuyên viên CSM đồng hành triển khai 1:1 tận nơi'
      ]
    },
    buttonText: 'Nhận báo giá Gói Mở rộng',
    buttonVariant: 'outline'
  }
];

export const onboardingProcess = [
  {
    step: 1,
    title: 'Khảo sát nhu cầu',
    desc: 'Chuyên gia giải pháp của Web App CRM lắng nghe sơ đồ tổ chức, cơ cấu phòng kinh doanh và đặc thù sản phẩm của doanh nghiệp.'
  },
  {
    step: 2,
    title: 'Thiết lập hệ thống',
    desc: 'Cấu hình luồng 6 giai đoạn phễu bán hàng, các trường dữ liệu tùy biến và thiết lập phân quyền RBAC phù hợp.'
  },
  {
    step: 3,
    title: 'Tích hợp nền tảng',
    desc: 'Đồng bộ dữ liệu khách hàng cũ từ Excel/Google Sheets, kết nối Fanpage, Zalo OA và kích hoạt bảo mật Zero-Phone.'
  },
  {
    step: 4,
    title: 'Đào tạo sử dụng',
    desc: 'Buổi hướng dẫn thực hành 1:1 cho đội ngũ Sales và Quản lý, cung cấp tài liệu video cầm tay chỉ việc trực quan.'
  },
  {
    step: 5,
    title: 'Vận hành & Hỗ trợ',
    desc: 'Hỗ trợ kỹ thuật 24/7, định kỳ đánh giá hiệu quả sử dụng và cập nhật tính năng mới liên tục.'
  }
];
