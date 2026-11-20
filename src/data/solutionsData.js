export const scaleSegments = [
  {
    id: 's1',
    code: 'S1',
    title: 'Doanh nghiệp Nhỏ (≤ 50 nhân sự)',
    badge: 'Phân khúc trọng tâm',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Tối ưu cho các công ty khởi nghiệp và doanh nghiệp nhỏ mong muốn thiết lập quy trình bán hàng bài bản, triển khai nhanh trong vòng 48 giờ.',
    target: 'Đội ngũ Sales từ 3 - 20 nhân viên, 1-2 quản lý',
    challenges: [
      'Chưa có quy trình bán hàng chuẩn, nhân viên làm việc theo thói quen tự phát',
      'Chi phí đầu tư phần mềm hạn chế, e ngại hệ thống cồng kềnh khó dùng',
      'Data khách hàng lưu trong điện thoại cá nhân của sales, dễ thất thoát'
    ],
    solutions: [
      'Bộ khung quy trình 6 giai đoạn chuẩn hóa dựng sẵn, dùng được ngay',
      'Chi phí linh hoạt không ép mua gói thừa thãi, đào tạo sử dụng thành thạo sau 2 buổi',
      'Mặt nạ số điện thoại Zero-Phone và hồ sơ số hóa tập trung trọn đời'
    ],
    keyBenefits: [
      'Thiết lập xong trong 48 giờ',
      'Không cần nhân sự IT chuyên trách',
      'Tỷ lệ tiếp nhận nhân viên 98%'
    ]
  },
  {
    id: 's2',
    code: 'S2',
    title: 'Doanh nghiệp Vừa (≤ 100 nhân sự)',
    badge: 'Phân khúc mở rộng',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    description: 'Thiết kế cho các doanh nghiệp đang tăng trưởng nóng, cần kiểm soát nhiều phòng ban kinh doanh, đa chi nhánh và tích hợp hệ sinh thái API.',
    target: 'Nhiều nhóm kinh doanh (Sales Hunter, Farmer, CSKH, Kỹ thuật)',
    challenges: [
      'Xung đột chia lead giữa các nhóm kinh doanh và chi nhánh',
      'Cần phân quyền nhiều cấp (RBAC) nghiêm ngặt để bảo vệ bí mật kinh doanh',
      'Khối lượng tương tác khách hàng qua Zalo/Facebook quá lớn gây quá tải'
    ],
    solutions: [
      'Thuật toán chia lead Round Robin thông minh theo địa bàn, sản phẩm và KPI',
      'Hệ thống phân quyền 5 cấp, nhật ký kiểm toán Audit Log chi tiết từng giây',
      'Hộp thư hợp nhất Omnichannel gom toàn bộ Zalo OA, Fanpage và tổng đài ảo'
    ],
    keyBenefits: [
      'Mở rộng không giới hạn chi nhánh',
      'Bảo mật dữ liệu chuẩn Luật 91/2025/QH15',
      'Báo cáo hiệu suất đa chiều'
    ]
  }
];

export const industrySolutions = [
  {
    id: 'tu-van-giao-duc',
    name: 'Tư vấn Dịch vụ & Giáo dục',
    tagline: 'Tối ưu hóa từng điểm chạm tư vấn, gia tăng tỷ lệ chốt khóa học và hợp đồng dịch vụ',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    painPoint: 'Học viên/Khách hàng đăng ký tư vấn qua nhiều kênh (Landing page, Facebook, giới thiệu) nhưng nhân viên tư vấn liên hệ chậm khiến học viên chọn trung tâm khác.',
    customFunnel: [
      { step: 1, title: 'Đăng ký tư vấn', desc: 'Tiếp nhận thông tin học viên/khách hàng từ web, form khảo sát' },
      { step: 2, title: 'Kiểm tra trình độ / Nhu cầu', desc: 'Đặt lịch test hoặc gọi khảo sát mục tiêu đào tạo/dịch vụ' },
      { step: 3, title: 'Tư vấn lộ trình 1:1', desc: 'Chuyên viên tư vấn xây dựng giải pháp hoặc lộ trình phù hợp' },
      { step: 4, title: 'Học thử / Gửi đề xuất', desc: 'Trải nghiệm buổi demo hoặc xem bảng dự toán chi phí chi tiết' },
      { step: 5, title: 'Đóng học phí / Ký HĐ', desc: 'Xác nhận thanh toán, cấp mã học viên hoặc ký biên bản hợp tác' },
      { step: 6, title: 'Chăm sóc & Giới thiệu', desc: 'Theo dõi tiến độ, khảo sát hài lòng và khuyến khích giới thiệu bạn bè' }
    ],
    metrics: [
      { label: 'Tốc độ phản hồi lead', value: 'Dưới 3 phút' },
      { label: 'Tỷ lệ chốt hợp đồng', value: '+38%' },
      { label: 'Tỷ lệ khách tái ký', value: '+52%' }
    ]
  },
  {
    id: 'ky-thuat-lap-dat',
    name: 'Kỹ thuật, Lắp đặt & Bảo trì',
    tagline: 'Đồng bộ luồng từ khảo sát thực địa đến thi công lắp đặt và bảo hành định kỳ',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    painPoint: 'Thông tin giữa bộ phận kinh doanh và đội ngũ kỹ thuật viên đi công trình bị lệch nhau; báo giá sai quy cách vật tư; quên lịch bảo dưỡng định kỳ cho khách.',
    customFunnel: [
      { step: 1, title: 'Tiếp nhận mặt bằng', desc: 'Ghi nhận yêu cầu công trình, địa điểm và hiện trạng thực tế' },
      { step: 2, title: 'Khảo sát hiện trường', desc: 'Cử kỹ thuật viên đo đạc, chụp ảnh và thu thập thông số kích thước' },
      { step: 3, title: 'Lên bản vẽ & Báo giá', desc: 'Bộ phận dự toán bóc tách khối lượng và gửi báo giá kèm phương án thi công' },
      { step: 4, title: 'Thương thảo hợp đồng', desc: 'Thống nhất tiến độ, điều khoản tạm ứng và cam kết nghiệm thu' },
      { step: 5, title: 'Thi công & Nghiệm thu', desc: 'Lắp đặt hoàn thiện, ký biên bản bàn giao và kích hoạt bảo hành điện tử' },
      { step: 6, title: 'Bảo trì định kỳ', desc: 'Hệ thống tự động nhắc lịch bảo dưỡng 3-6-12 tháng, giữ chân khách trọn đời' }
    ],
    metrics: [
      { label: 'Thời gian lên báo giá', value: 'Rút ngắn 60%' },
      { label: 'Sai sót kỹ thuật', value: 'Giảm 95%' },
      { label: 'Khách hàng bảo trì', value: '100% đúng hạn' }
    ]
  },
  {
    id: 'thuong-mai-b2b',
    name: 'Thương mại & B2B',
    tagline: 'Quản lý chu kỳ bán hàng giá trị lớn, báo giá nhiều phiên bản và chăm sóc khách hàng doanh nghiệp',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    painPoint: 'Chu kỳ bán B2B kéo dài 1-3 tháng với nhiều người ra quyết định (Buyer, Kế toán, Giám đốc). Báo giá gửi đi bị trôi, không kiểm soát được biên độ chiết khấu của sales.',
    customFunnel: [
      { step: 1, title: 'Phát hiện cơ hội B2B', desc: 'Thu thập thông tin doanh nghiệp, quy mô và phòng ban đầu mối' },
      { step: 2, title: 'Đánh giá năng lực đối tác', desc: 'Xác định ngân sách, người phê duyệt và tiêu chuẩn kỹ thuật yêu cầu' },
      { step: 3, title: 'Trình bày giải pháp', desc: 'Họp Pitching giải pháp, gửi hồ sơ năng lực và mẫu sản phẩm thử nghiệm' },
      { step: 4, title: 'Báo giá & Đàm phán', desc: 'Phát hành báo giá chính thức có phân quyền duyệt chiết khấu đặc biệt' },
      { step: 5, title: 'Chốt hợp đồng khung', desc: 'Ký kết hợp đồng cung cấp dài hạn và bảo lãnh thực hiện' },
      { step: 6, title: 'Phát triển tài khoản (Key Account)', desc: 'Theo dõi đơn hàng định kỳ, quản lý công nợ liên hệ và mở rộng danh mục' }
    ],
    metrics: [
      { label: 'Chu kỳ bán hàng', value: 'Rút ngắn 35%' },
      { label: 'Giá trị đơn trung bình', value: '+42%' },
      { label: 'Tỷ lệ khách hàng mua lại', value: '78%' }
    ]
  }
];
