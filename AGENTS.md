# AGENTS.md - Quy Tắc Phối Hợp Kỹ Năng Thiết Kế & Vận Hành B2B SaaS

Tài liệu này là quy chuẩn chỉ đạo bắt buộc dành cho mọi AI Agent (Antigravity, Cursor, Claude Code, Codex...) khi tham gia phát triển, thiết kế, review và bảo trì dự án **Web App CRM**.

---

## 1. PHÂN CÔNG PHỐI HỢP 2 BỘ KỸ NĂNG (SKILLS COLLABORATION)

Mọi tác vụ liên quan đến giao diện người dùng (UI), trải nghiệm (UX) và tối ưu hóa chuyển đổi phải được phân công nhịp nhàng giữa 2 kỹ năng:

### 1.1. UI/UX Pro Max (`.agents/skills/ui-ux-pro-max/`) - Kiến trúc & Dữ liệu Thiết kế
- **Tra cứu kho dữ liệu thiết kế**: Chủ động truy vấn cơ sở dữ liệu mẫu B2B SaaS (styles, palettes, typography, components, UX guidelines).
- **Định hình phong cách**: Áp dụng phong cách thiết kế chuyên nghiệp, điềm tĩnh và chín chắn (Modern Clean B2B / Swiss Style / Bento Grid tinh tế), phù hợp với khách hàng doanh nghiệp SME.
- **Phân cấp thị giác (Visual Hierarchy)**: Xác định rõ trọng tâm điểm nhìn (Z-pattern / F-pattern), thiết lập tỷ lệ kích thước chữ chặt chẽ, tối ưu khoảng trắng (Whitespaces) và nhịp điệu bố cục giữa các section.
- **Tiết chế màu sắc**: Áp dụng nguyên tắc phối màu 60-30-10:
  - 60% Nền trắng (`#FFFFFF`) và bề mặt trung tính nhẹ (`#F8FAFC`).
  - 30% Cấu trúc phụ trợ, viền ngăn cách (`#E2E8F0`), văn bản xám than (`#0F172A`, `#334155`).
  - 10% Điểm nhấn thương hiệu (Brand Accent) tại các nút hành động cốt lõi.

### 1.2. Impeccable (`.agents/skills/impeccable/`) - Chế tác & Kiểm soát Chất lượng
- **Căn cứ xác thực**: Tuyệt đối tuân thủ 2 văn bản chuẩn mực ở thư mục gốc:
  - `PRODUCT.md`: Chân lý nghiệp vụ sản phẩm (Product Truth, Users, Positioning, Constraints).
  - `DESIGN.md`: Bản thiết kế token chuẩn (Machine-readable tokens, Do's & Don'ts).
- **Kiểm soát chất lượng (Audit & Critique)**:
  - Kiểm tra độ tương phản văn bản đạt chuẩn WCAG 2.2 AA (tối thiểu 4.5:1 đối với văn bản thông thường, 3:1 đối với chữ lớn).
  - Quét và loại bỏ tình trạng thẻ lồng nhau quá nhiều lớp (Nested cards - thẻ nằm trong thẻ gây nặng nề).
  - Kiểm tra trạng thái ranh giới (Edge cases): Trạng thái loading, empty states, error feedback, responsive breakpoint từ màn hình 375px đến 1440px+.
- **Tinh xảo hóa (Polish)**:
  - Chuốt lại viền mảnh, bo góc đồng nhất (`rounded-xl` / `rounded-2xl`).
  - Căn chỉnh thẳng hàng tuyệt đối (Alignment) và tối ưu khoảng cách nhóm (Proximity).

---

## 2. BỘ LUẬT CHỐNG "MÙI AI" (ANTI-AI-SLOP RULES)

Mọi trang web do AI sinh ra thường mắc các lỗi rập khuôn. Nghiêm cấm tuyệt đối các hành vi sau:

1. **Không lạm dụng Gradient tràn lan**:
   - Dải màu chuyển tiếp Xanh dương (`#2563EB`) $\rightarrow$ Chàm (`#4F46E5`) $\rightarrow$ Tím (`#7C3AED`) CHỈ ĐƯỢC PHÉP dùng cho:
     - Logo thương hiệu Web App CRM.
     - 1 cụm từ khóa tiêu đề then chốt ở Hero Section (H1).
     - Nút CTA chuyển đổi chính.
   - Tuyệt đối KHÔNG đổ màu gradient nền cho các thẻ phụ, icon thông thường hay các section nội dung.
2. **Không dùng bóng đổ thô đen**:
   - Cấm dùng bóng đổ đậm thuần đen `#000000` với opacity cao.
   - Chỉ dùng bóng đổ đa tầng mờ nhẹ (`shadow-sm`, `shadow-md`, `shadow-indigo-600/10`) để tạo chiều sâu tinh tế.
3. **Ưu tiên viền mảnh tinh tế**:
   - Sử dụng viền mảnh `border border-slate-200/80` hoặc `border-slate-100` để phân định khối trên nền sáng thay vì lạm dụng hiệu ứng đổ bóng.
4. **Không để thẻ lồng nhau (No Nested Card Overkill)**:
   - Giữ bề mặt phẳng thoáng đãng. Tránh đặt một thẻ bóng đổ nằm bên trong một thẻ bóng đổ khác.
5. **Khoảng trắng rộng rãi (Generous Whitespace)**:
   - Khoảng cách giữa các section chính phải từ `py-16` đến `py-24`.
   - Giãn dòng văn bản tiếng Việt đạt `leading-[1.22]` cho tiêu đề (không dính dấu) và `leading-relaxed` cho đoạn văn.

---

## 3. LUẬT BẢO VỆ TÍNH NĂNG BẤT BIẾN (IMMUTABLE BUSINESS LOGIC)

Đây là các tính năng kỹ thuật và thông số kinh doanh THẬT của doanh nghiệp. Mọi chỉnh sửa giao diện tuyệt đối KHÔNG được làm gãy, xóa hoặc ghi đè:

1. **Cấu hình trung tâm (`src/config/siteConfig.js`)**:
   - Phải luôn giữ và sử dụng các biến: `zaloPhone`, `phone`, `hotline`, `email`, `address`, `web3formsAccessKey`, `webAppUrl`, `ga4MeasurementId`, `siteUrl`, `firebaseConfig`.
   - Mọi hiển thị thông tin liên hệ và link ra ngoài phải trỏ về các biến này, không hardcode thông tin giả.
2. **Cổng Đăng nhập Google (Firebase Auth)**:
   - Giữ nguyên tích hợp Firebase trong `src/utils/firebaseAuth.js`, modal đăng nhập `AuthModal.jsx`, và nút Đăng nhập / trạng thái người dùng trên `Navbar.jsx`.
3. **Backend Thu Lead Thật (Web3Forms API)**:
   - Giữ nguyên hàm `submitLead(formData)` trong `src/utils/leadService.js` gửi POST tới Web3Forms và gắn ở cả 3 form: Form Trang chủ (`Home.jsx`), Popup Báo giá (`DemoModal.jsx`), và Form Liên hệ (`AboutContact.jsx`).
4. **Kênh Chat Zalo Trực Tiếp**:
   - Giữ nguyên nút Chat Zalo nổi trong `FloatingCTA.jsx` (chuẩn màu `#0068FF`, hiệu ứng ping nhẹ, trỏ tới `https://zalo.me/0924007269`).
   - Nút cuộn lên đầu trang (Scroll to top) chỉ hiển thị khi cuộn quá 450px và nằm gọn gàng phía trên nút Zalo.
5. **Đường dẫn Web App CRM Cloud**:
   - Link Web App thực tế phải luôn mở đúng: `https://ai-crm-cua-chong-ngap.onrender.com/customers/dossier`.
6. **Technical SEO & Thẻ Mạng Xã Hội**:
   - Giữ nguyên các thẻ meta, Open Graph, Twitter Cards trỏ về `https://gioi-thieu-web-app-crm-b8qt.vercel.app/og-image.png` (kích thước 1200x630).
   - Đảm bảo `SEO.jsx`, `public/robots.txt` và `public/sitemap.xml` hoạt động chính xác.
7. **Form Input Mobile Auto-Zoom Prevention**:
   - Mọi thẻ `<input>`, `<select>`, `<textarea>` phải luôn có cỡ chữ tối thiểu 16px trên mobile (`text-base sm:text-sm`) để ngăn iOS Safari phóng to làm lệch giao diện.
8. **Phạm vi Nghiệp vụ Tuyệt đối**:
   - Giữ nguyên 100% bản chất CRM B2B chuyên biệt (Customer 360, Phễu bán hàng 6 bước, AI Snapshot có kiểm duyệt, Bảo mật Zero-Phone, Luật 91/2025/QH15).
   - **TUYỆT ĐỐI KHÔNG** bổ sung các module Kế toán, Kho vận, Nhân sự, Chấm công, Hóa đơn điện tử hay GPS đi tuyến vào website.

---

## 4. QUY TRÌNH KIỂM THỬ TRƯỚC KHI BÀN GIAO (VERIFICATION PIPELINE)

Trước khi hoàn tất bất kỳ thay đổi nào:
1. Chạy `npm run build` để đảm bảo 0 lỗi biên dịch Vite/React.
2. Kiểm tra `git status` đảm bảo không sót file và không làm biến đổi cấu hình nhạy cảm.
3. Commit với thông điệp rõ ràng theo chuẩn Conventional Commits và push lên nhánh `main`.
