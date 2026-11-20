export const featuresPillars = [
  {
    id: 'p1',
    code: 'P1',
    title: 'Nền tảng Cốt lõi & Quản trị Bán hàng',
    subtitle: 'Chuẩn hóa toàn bộ quy trình chăm sóc khách hàng và kiểm soát doanh số chặt chẽ',
    badge: 'MVP Cốt lõi',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    description: 'Xây dựng cơ sở dữ liệu khách hàng tập trung 360 độ, tối ưu quy trình phễu 6 bước và đảm bảo cam kết phản hồi SLA trong 5 phút.',
    items: [
      {
        id: 'customer-360',
        title: 'Customer 360 & Lead Management',
        shortDesc: 'Định danh duy nhất mã KH-xxxxxx, tự động lọc trùng lặp và chấm điểm Hot Lead ≥ 70.',
        bullets: [
          'Hồ sơ khách hàng định danh duy nhất (Mã KH-xxxxxx) tích hợp thông tin liên hệ, lịch sử tư vấn, hợp đồng',
          'Cơ chế lọc trùng số điện thoại/email tự động khi tiếp nhận từ web form, quảng cáo hoặc import Excel',
          'Hệ thống chấm điểm độ tiềm năng (Lead Scoring): Tự động gắn nhãn Hot Leads ≥ 70 điểm để ưu tiên chốt đơn',
          'Phân nhóm khách hàng thông minh theo ngành nghề, nguồn tiếp cận và giá trị vòng đời (LTV)'
        ],
        highlight: 'Tiết kiệm 85% thời gian tìm kiếm thông tin và giảm 100% tỷ lệ sót dữ liệu khách hàng.'
      },
      {
        id: 'sales-pipeline',
        title: 'Sales Pipeline 6 Giai đoạn Chuẩn B2B',
        shortDesc: 'Quản lý cơ hội trực quan dạng bảng Kanban kéo thả và biểu đồ phễu chuyển đổi.',
        bullets: [
          'Chuẩn hóa 6 giai đoạn bán hàng: 1. Mới tiếp nhận → 2. Đã liên hệ → 3. Đang tư vấn / Demo → 4. Gửi báo giá / Đàm phán → 5. Chốt hợp đồng → 6. Bàn giao & Chăm sóc',
          'Giao diện kéo thả Kanban mượt mà, cập nhật trạng thái cơ hội và giá trị đơn hàng trong tích tắc',
          'Biểu đồ Funnel trực quan tính toán chính xác tỷ lệ rớt số giữa từng công đoạn để kịp thời tối ưu kịch bản sales',
          'Tự động kích hoạt hành động kế tiếp khi cơ hội chuyển giai đoạn (nhắc gửi hợp đồng mẫu, gửi thư cảm ơn)'
        ],
        highlight: 'Tăng 32% tỷ lệ chốt giao dịch nhờ nhận diện chính xác điểm nghẽn trong phễu.'
      },
      {
        id: 'task-sla-kpi',
        title: 'Task Management & Dashboard KPI',
        shortDesc: 'Cam kết phản hồi SLA ≤ 5 phút, cảnh báo nhắc việc quá hạn và phân bổ lead công bằng.',
        bullets: [
          'Cam kết SLA phản hồi lead mới trong vòng ≤ 5 phút, đếm ngược thời gian thực trên màn hình làm việc',
          'Hệ thống cảnh báo tự động khi nhân viên quên follow-up hoặc công việc bị trễ hạn quá 24h',
          'Thuật toán phân bổ Lead công bằng Round Robin theo chuyên môn, ca làm việc hoặc khu vực địa lý',
          'Dashboard KPI thời gian thực: Đo lường doanh thu dự kiến, tỷ lệ chuyển đổi nhân viên, giá trị pipeline'
        ],
        highlight: 'Không còn tình trạng khách hàng chờ đợi lâu hoặc nhân viên đổ lỗi quên lịch chăm sóc.'
      }
    ]
  },
  {
    id: 'p2',
    code: 'P2',
    title: 'Trợ lý AI & Bảo mật Doanh nghiệp',
    subtitle: 'Tăng tốc năng suất với trí tuệ nhân tạo có kiểm soát và an tâm tuyệt đối về tài sản dữ liệu',
    badge: 'AI & Bảo mật',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    description: 'Trợ lý AI Snapshot hỗ trợ tóm tắt cuộc gọi, tin nhắn với quy trình duyệt của nhân viên; bảo vệ dữ liệu theo Luật 91/2025/QH15.',
    items: [
      {
        id: 'ai-assistant',
        title: 'AI Assistant Tóm tắt Hội thoại có Kiểm duyệt',
        shortDesc: 'Tự động tạo AI Snapshot từ lịch sử chat, đề xuất hành động tiếp theo, kiểm duyệt 1-click.',
        bullets: [
          'Trí tuệ nhân tạo Gemini Pool tự động quét đoạn chat/gọi để rút trích nhu cầu, ngân sách và thời hạn dự án',
          'Quy trình nhân viên kiểm duyệt (Human-in-the-loop): Sales xem trước bản tóm tắt, nhấn Duyệt hoặc Sửa trước khi lưu vào CRM',
          'Tự động gợi ý việc cần làm tiếp theo (Next Best Action): "Gửi báo giá trước 15:00 thứ 6", "Lên lịch demo kỹ thuật"',
          'Cơ chế an toàn Kill Switch: Cho phép Quản trị viên kích hoạt/vô hiệu hóa tức thì từng tính năng AI'
        ],
        highlight: 'Giảm 70% thời gian gõ báo cáo thủ công sau mỗi cuộc trao đổi với khách hàng.'
      },
      {
        id: 'security-3-layers',
        title: 'Bảo mật 3 Lớp & Mặt nạ Zero-Phone',
        shortDesc: 'Ẩn số điện thoại (+843******50), phân quyền RBAC 5 vai trò và xác thực 2 lớp MFA AAL2.',
        bullets: [
          'Công nghệ Zero-Phone: Ẩn hoàn toàn số điện thoại khách hàng (+843******50) trên giao diện nhân viên sales, ngăn chặn 100% tình trạng mang data ra ngoài',
          'Phân quyền chi tiết RBAC 5 vai trò: Super Admin, Giám đốc kinh doanh, Trưởng nhóm, Nhân viên bán hàng, CSKH',
          'Xác thực 2 yếu tố MFA chuẩn AAL1/AAL2 qua mã OTP xác thực di động, ngăn chặn xâm nhập trái phép',
          'Nhật ký kiểm toán (Audit Log) lưu vết chính xác từng lần xem, chỉnh sửa, xuất dữ liệu với IP và dấu thời gian'
        ],
        highlight: 'Tuân thủ nghiêm ngặt Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.'
      }
    ]
  },
  {
    id: 'p3',
    code: 'P3',
    title: 'Mở rộng Đa kênh & Tiếp thị Chăm sóc',
    subtitle: 'Kết nối mọi điểm chạm khách hàng từ Zalo, Facebook đến điện thoại VoIP trên một hệ thống',
    badge: 'Mở rộng Đa kênh',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    description: 'Hợp nhất toàn bộ luồng hội thoại từ Zalo OA, Facebook Fanpage vào một Inbox thông minh, triển khai chiến dịch tin nhắn tự động.',
    items: [
      {
        id: 'omnichannel-inbox',
        title: 'Hộp thư Hội thoại Hợp nhất (Unified Inbox)',
        shortDesc: 'Gom toàn bộ tin nhắn từ Facebook Fanpage, Zalo OA về một màn hình trực quan.',
        bullets: [
          'Đồng bộ tin nhắn hai chiều tức thì từ nhiều Fanpage và Zalo Official Account không cần chuyển tab',
          'Tự động nhận diện khách quen dựa trên lịch sử tương tác trước đó, hiển thị thẻ thông tin Customer 360 ngay cạnh khung chat',
          'Hệ thống thẻ phân loại (Tags): Khách VIP, Đang khiếu nại, Chờ báo giá, Cần kỹ thuật hỗ trợ',
          'Chuyển giao phiên chat mượt mà giữa các nhân viên trực kèm ghi chú nội bộ bảo mật'
        ],
        highlight: 'Rút ngắn thời gian phản hồi tin nhắn xuống dưới 2 phút, không bao giờ trôi sót chat.'
      },
      {
        id: 'smart-campaigns',
        title: 'Chiến dịch Tin nhắn Cá nhân hóa 4 Bước',
        shortDesc: 'Gửi thông báo chăm sóc, nhắc lịch tái ký tự động theo trường dữ liệu động {Ten_KH}.',
        bullets: [
          'Quy trình thiết lập 4 bước: 1. Lọc tệp khách hàng mục tiêu → 2. Soạn mẫu kịch bản cá nhân hóa → 3. Duyệt & Kiểm tra trước → 4. Kích hoạt và theo dõi',
          'Chèn trường dữ liệu động thông minh: {Danh_xung}, {Ten_KH}, {Ngay_het_han_goi}, {Gia_tri_don_hang}',
          'Lên lịch gửi tự động vào khung giờ vàng có tỷ lệ mở tin cao nhất trong ngày',
          'Báo cáo đo lường chi tiết: Tỷ lệ gửi thành công, tỷ lệ đọc tin và tỷ lệ phản hồi trở lại CRM'
        ],
        highlight: 'Tăng 45% doanh thu upsell và gia hạn hợp đồng từ tệp khách hàng sẵn có.'
      },
      {
        id: 'call-center-voip',
        title: 'Lịch sử Cuộc gọi Zero-Phone & Ghi âm AI',
        shortDesc: 'Gọi điện trực tiếp trên phần mềm bằng 1 click mà không cần lộ số điện thoại cá nhân.',
        bullets: [
          'Tích hợp tổng đài ảo VoIP: Click-to-call trực tiếp từ hồ sơ khách hàng, số điện thoại được mã hóa',
          'Tự động ghi âm cuộc gọi và lưu trữ trong dòng thời gian tương tác của khách hàng',
          'AI bóc băng âm thanh (Speech-to-Text) và trích xuất từ khóa quan trọng trong cuộc đàm phán',
          'Báo cáo năng suất cuộc gọi: Số lượng cuộc gọi, thời lượng đàm thoại trung bình, tỷ lệ kết nối thành công'
        ],
        highlight: 'Kiểm soát chất lượng tư vấn của đội ngũ kinh doanh minh bạch 100%.'
      }
    ]
  }
];

export const painPoints = [
  {
    icon: 'Database',
    title: 'Dữ liệu khách hàng phân tán rời rạc',
    problem: 'Thông tin nằm rải rác trên file Excel cá nhân, sổ tay, Zalo riêng của từng nhân viên dẫn đến trùng lặp dữ liệu và mất mát thông tin khi nhân viên nghỉ việc.',
    solution: 'Hồ sơ Customer 360 tập trung duy nhất, mã hóa chuẩn hóa KH-xxxxxx và tự động lọc trùng 100%.'
  },
  {
    icon: 'UserX',
    title: 'Bàn giao công việc bị đứt gãy',
    problem: 'Khi nhân sự kinh doanh thay đổi, nhân viên mới không nắm được lịch sử thương lượng cũ, báo giá đã gửi hoặc thói quen của khách khiến khách hàng thất vọng.',
    solution: 'Dòng thời gian tương tác lưu vết trọn vẹn toàn bộ email, ghi chú, báo giá và tóm tắt AI để nhân sự mới tiếp quản ngay tức thì.'
  },
  {
    icon: 'TrendingDown',
    title: 'Khó khăn theo dõi tiến độ cơ hội',
    problem: 'Quản lý không nắm được có bao nhiêu hợp đồng sắp ký trong tháng, bao nhiêu lead đang kẹt ở khâu gửi báo giá để kịp thời hỗ trợ thúc đẩy.',
    solution: 'Phễu bán hàng Kanban 6 giai đoạn thời gian thực kèm cảnh báo thời gian lưu trú tại từng bước.'
  },
  {
    icon: 'Clock',
    title: 'Quên lịch hẹn & Chậm trễ Follow-up',
    problem: 'Nhân viên bận rộn quên gọi lại cho khách theo lịch hẹn, để khách hàng nguội lạnh hoặc đối thủ nhanh chân tiếp cận trước.',
    solution: 'Hệ thống đếm ngược SLA ≤ 5 phút, tự động gửi thông báo nhắc việc và đồng bộ lịch họp thông minh.'
  },
  {
    icon: 'FileSpreadsheet',
    title: 'Mất hàng giờ làm báo cáo thủ công',
    problem: 'Cuối tuần hoặc cuối tháng sales phải dành nửa ngày tổng hợp số liệu báo cáo, số liệu thường thiếu chính xác và có độ trễ lớn.',
    solution: 'Dashboard KPI tự động hóa 100%, phản ánh doanh thu thực tế, tỷ lệ chốt và năng suất từng nhân viên theo thời gian thực.'
  }
];

export const metricsData = [
  {
    value: '6 Giai đoạn',
    label: 'Chuẩn hóa phễu bán hàng B2B',
    desc: 'Thiết kế chuẩn hóa luồng từ Mới tiếp nhận đến Chăm sóc sau bán, tùy biến theo từng ngành nghề.'
  },
  {
    value: '≤ 5 Phút',
    label: 'Cam kết phản hồi SLA',
    desc: 'Hệ thống đếm ngược tự động, đảm bảo 100% cơ hội mới được liên hệ ngay trong khung giờ vàng.'
  },
  {
    value: '3 Lớp bảo mật',
    label: 'RBAC, MFA & Zero-Phone',
    desc: 'Tuân thủ nghiêm ngặt Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15, chống rò rỉ số điện thoại.'
  },
  {
    value: '100% Kiểm soát',
    label: 'Trợ lý AI có nhân viên duyệt',
    desc: 'AI tóm tắt và gợi ý việc kế tiếp nhưng nhân viên luôn là người phê duyệt quyết định cuối cùng.'
  }
];
