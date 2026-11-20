export const blogCategories = [
  'Tất cả',
  'Quản trị Sales B2B',
  'Ứng dụng AI trong CRM',
  'Bảo mật dữ liệu',
  'Tối ưu chuyển đổi'
];

export const blogPosts = [
  {
    id: 'quy-trinh-sales-pipeline-6-buoc',
    title: 'Xây dựng Phễu bán hàng B2B 6 bước chuẩn hóa giúp tăng 35% tỷ lệ chốt đơn',
    category: 'Quản trị Sales B2B',
    readTime: '6 phút đọc',
    date: '15/10/2026',
    author: 'Nguyễn Thành Nam - Chuyên gia Tư vấn Chuyển đổi số',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    summary: 'Khám phá cách chuẩn hóa 6 giai đoạn bán hàng từ tiếp nhận lead đến chăm sóc sau bán, loại bỏ tình trạng đứt gãy thông tin và tăng năng suất đội ngũ kinh doanh.',
    content: `
      <p>Đối với các doanh nghiệp B2B (đặc biệt trong các ngành tư vấn dịch vụ, kỹ thuật lắp đặt, phân phối thương mại), chu kỳ bán hàng thường kéo dài từ vài tuần đến vài tháng. Nếu không có một phễu bán hàng chuẩn hóa, doanh nghiệp sẽ phải đối mặt với hàng loạt rủi ro: nhân viên quên follow-up, không biết lý do khách từ chối, và mất khách khi nhân viên kinh doanh nghỉ việc.</p>
      
      <h3>Tại sao mô hình 6 giai đoạn lại tối ưu nhất cho B2B?</h3>
      <p>Nhiều doanh nghiệp thiết kế phễu quá ngắn (3 bước) dẫn đến việc không thể xác định chính xác điểm nghẽn; ngược lại, phễu quá dài (10 bước) lại làm nhân viên ngại cập nhật. Mô hình 6 bước của <strong>Web App CRM</strong> đạt điểm cân bằng hoàn hảo:</p>
      <ul>
        <li><strong>Giai đoạn 1: Mới tiếp nhận (Lead Capture):</strong> Tự động lọc trùng và phân bổ công bằng qua thuật toán Round Robin.</li>
        <li><strong>Giai đoạn 2: Đã liên hệ (Initial Contact):</strong> Cam kết phản hồi trong khung giờ vàng SLA ≤ 5 phút.</li>
        <li><strong>Giai đoạn 3: Đang tư vấn / Demo (Qualification):</strong> Chấm điểm tiềm năng Hot Lead ≥ 70 điểm.</li>
        <li><strong>Giai đoạn 4: Báo giá & Đàm phán (Proposal):</strong> Quản lý phiên bản báo giá và phân quyền duyệt chiết khấu.</li>
        <li><strong>Giai đoạn 5: Chốt hợp đồng (Won Deal):</strong> Ký kết và kích hoạt quy trình bàn giao.</li>
        <li><strong>Giai đoạn 6: Chăm sóc & Tái ký (Customer Success):</strong> Duy trì quan hệ và phát triển doanh thu từ khách cũ.</li>
      </ul>

      <p>Tìm hiểu thêm chi tiết cơ chế hoạt động trực quan của phễu Kanban tại <a href="/tinh-nang" class="text-indigo-600 font-semibold underline">trang Tính năng Web App CRM</a> hoặc tham khảo chính sách triển khai tại <a href="/bang-gia" class="text-indigo-600 font-semibold underline">bảng giá gói dịch vụ</a>.</p>
    `
  },
  {
    id: 'ai-snapshot-tro-ly-co-kiem-soat',
    title: 'AI có kiểm duyệt (Human-in-the-loop): Giải pháp an toàn ứng dụng Trí tuệ nhân tạo vào CRM',
    category: 'Ứng dụng AI trong CRM',
    readTime: '8 phút đọc',
    date: '02/11/2026',
    author: 'Trần Minh Đức - Trưởng nhóm Kiến trúc AI',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Tại sao doanh nghiệp không nên để AI tự động gửi thông điệp chưa qua kiểm duyệt? Phân tích mô hình AI Snapshot và cơ chế Kill Switch an toàn tuyệt đối.',
    content: `
      <p>Trí tuệ nhân tạo (AI) đang tạo ra cơn sốt trong quản trị doanh nghiệp. Tuy nhiên, trong môi trường B2B nơi mỗi giao dịch trị giá hàng chục hoặc hàng trăm triệu đồng, một phát ngôn sai lệch hoặc tóm tắt nhầm ngân sách của khách hàng có thể phá vỡ toàn bộ mối quan hệ đối tác.</p>
      
      <h3>Triết lý thiết kế: AI hỗ trợ – Con người quyết định</h3>
      <p>Thay vì để AI hoạt động hoàn toàn tự động một cách rủi ro, <strong>Web App CRM</strong> áp dụng triết lý "Trợ lý AI có kiểm soát" với 3 nguyên tắc:</p>
      <ol>
        <li><strong>AI Snapshot thông minh:</strong> Tự động bóc tách các yếu tố cốt lõi từ hội thoại: Nhu cầu chính, ngân sách ước tính, người có quyền quyết định và thời hạn chốt.</li>
        <li><strong>Cơ chế duyệt 1-Click của nhân viên:</strong> Nhân viên sales chỉ mất 5 giây đọc lướt bản tóm tắt, nhấn Chấp nhận hoặc Chỉnh sửa nhanh trước khi dữ liệu được ghi chính thức vào hồ sơ Customer 360.</li>
        <li><strong>Cơ chế an toàn Kill Switch & Gemini Pool:</strong> Quản trị viên doanh nghiệp có quyền bật/tắt tức thì từng tính năng AI, cùng kiến trúc pool dự phòng đảm bảo hệ thống không bao giờ gián đoạn.</li>
      </ol>

      <p>Khám phá giao diện demo trực tiếp của tính năng AI Snapshot tại <a href="/tinh-nang" class="text-indigo-600 font-semibold underline">mục AI & Bảo mật</a>.</p>
    `
  },
  {
    id: 'bao-mat-zero-phone-luat-91-2025',
    title: 'Tuân thủ Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 với công nghệ Mặt nạ Zero-Phone',
    category: 'Bảo mật dữ liệu',
    readTime: '7 phút đọc',
    date: '10/11/2026',
    author: 'Lê Hoàng Anh - Cố vấn Pháp lý Công nghệ',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    summary: 'Cách doanh nghiệp vừa bảo vệ tài sản dữ liệu khách hàng chống nhân viên mang ra ngoài, vừa tuân thủ đầy đủ Luật 91/2025/QH15 và Nghị định 356/2025/NĐ-CP.',
    content: `
      <p>Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định 356/2025/NĐ-CP đặt ra các yêu cầu pháp lý hết sức nghiêm ngặt về việc thu thập, lưu trữ và bảo vệ thông tin liên lạc của cá nhân và người đại diện doanh nghiệp.</p>

      <h3>Mặt nạ Zero-Phone: Vũ khí bảo vệ tài sản vô hình của công ty</h3>
      <p>Hai nỗi sợ lớn nhất của chủ doanh nghiệp khi triển khai CRM là:</p>
      <ul>
        <li>Nhân viên bán hàng sao chép toàn bộ danh sách số điện thoại khách hàng mang sang đối thủ khi nghỉ việc.</li>
        <li>Hệ thống bị tấn công làm lộ lọt dữ liệu nhạy cảm dẫn đến các án phạt pháp lý nặng nề.</li>
      </ul>
      <p>Công nghệ <strong>Zero-Phone</strong> của Web App CRM giải quyết triệt để vấn đề này bằng cách tự động che giấu số điện thoại (+843******50) trên toàn bộ giao diện làm việc. Nhân viên vẫn có thể thực hiện cuộc gọi hoặc gửi tin nhắn thông qua tổng đài VoIP và hệ thống tích hợp sẵn mà không bao giờ nhìn thấy số điện thoại thực tế.</p>
      <p>Kết hợp cùng xác thực đa yếu tố <strong>MFA AAL2</strong> và phân quyền <strong>RBAC 5 vai trò</strong>, doanh nghiệp sở hữu pháo đài bảo mật dữ liệu an toàn nhất thị trường.</p>
      
      <p>Xem chi tiết tại <a href="/lien-he" class="text-indigo-600 font-semibold underline">cam kết bảo vệ dữ liệu</a> hoặc liên hệ nhận tư vấn tại <a href="/bang-gia" class="text-indigo-600 font-semibold underline">bảng giá dịch vụ</a>.</p>
    `
  },
  {
    id: 'toi-uu-thoi-gian-phan-hoi-sla-5-phut',
    title: 'Tăng gấp đôi tỷ lệ phản hồi nhờ nguyên tắc SLA 5 phút trong khung giờ vàng',
    category: 'Tối ưu chuyển đổi',
    readTime: '5 phút đọc',
    date: '18/11/2026',
    author: 'Vũ Hải Đăng - Giám đốc Vận hành',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Nghiên cứu chỉ ra cơ hội liên hệ thành công giảm 10 lần nếu doanh nghiệp gọi sau 30 phút. Khám phá cách Web App CRM tự động hóa cam kết SLA ≤ 5 phút.',
    content: `
      <p>Khi một khách hàng doanh nghiệp điền form yêu cầu tư vấn trên website của bạn, đó là lúc nhu cầu của họ đang ở đỉnh điểm. Nếu để trôi qua 30 phút hoặc sang ngày hôm sau, khách hàng đã tìm kiếm thêm 2-3 đối thủ khác và tâm lý mua hàng đã giảm sút đáng kể.</p>
      
      <h3>Cách thức vận hành của hệ thống đếm ngược SLA ≤ 5 phút</h3>
      <p>Ngay khi có lead mới từ web form, Facebook Lead Ads hoặc Zalo OA đổ về:</p>
      <ul>
        <li>Hệ thống kích hoạt đồng hồ đếm ngược 5 phút thời gian thực trên thanh công cụ của nhân viên được phân công.</li>
        <li>Gửi thông báo âm thanh và tin nhắn nhắc việc qua app/trình duyệt.</li>
        <li>Nếu sau 5 phút nhân viên chưa nhấn bắt đầu xử lý, lead sẽ tự động được thu hồi và chuyển giao cho nhân viên trực ca sẵn sàng khác.</li>
      </ul>
      <p>Điều này giúp các doanh nghiệp SME giữ vững tỷ lệ kết nối thành công trên 92% ngay từ lần gọi đầu tiên.</p>
    `
  }
];

export const quickGuides = [
  {
    title: 'Tài liệu Hướng dẫn Thiết lập Phễu bán hàng 6 bước trong 15 phút',
    format: 'PDF Ebook (24 trang)',
    description: 'Bản đồ hướng dẫn từng bước cấu hình phễu bán hàng, các trường dữ liệu tùy biến và thiết lập phân quyền RBAC cho đội nhóm.',
    downloadCount: '1,420+ lượt tải'
  },
  {
    title: 'Bộ Kịch bản Tin nhắn Chăm sóc Khách hàng Tự động theo ngành',
    format: 'Bộ Template Mẫu (File Word & Excel)',
    description: 'Tổng hợp hơn 30 mẫu tin nhắn cá nhân hóa chuẩn B2B dành cho ngành Tư vấn, Kỹ thuật và Thương mại.',
    downloadCount: '2,150+ lượt tải'
  },
  {
    title: 'Bảng kiểm tra Tuân thủ Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 cho Doanh nghiệp',
    format: 'Checklist Excel (12 tiêu chí)',
    description: 'Danh mục tự đánh giá mức độ an toàn dữ liệu khách hàng, chính sách Zero-Phone và nhật ký kiểm toán Audit Log.',
    downloadCount: '980+ lượt tải'
  }
];
