/**
 * CẤU HÌNH TRUNG TÂM HỆ THỐNG KINH DOANH WEB APP CRM
 * Gom toàn bộ thông số kết nối vào một nơi duy nhất để dễ dàng thay đổi khi bàn giao.
 */

export const siteConfig = {
  // 1. Kênh tư vấn bán hàng trực tiếp (Zalo cá nhân / Zalo OA)
  // THAY SĐT SALE THẬT VÀO ĐÂY (định dạng 10 số, ví dụ "0912345678"):
  zaloPhone: "0900000000",

  // 2. Web3Forms Access Key để nhận Lead thông tin khách gửi thẳng về Email công ty
  // Lấy mã miễn phí tại https://web3forms.com (nếu để trống, hệ thống chạy chế độ mô phỏng mượt mà)
  web3formsAccessKey: "",

  // 3. Đường dẫn Web App CRM thực tế trên Cloud (Render / Server sản xuất)
  webAppUrl: "https://ai-crm-cua-chong-ngap.onrender.com",

  // 4. Mã đo lường chuyển đổi Google Analytics 4 (GA4)
  // Thay mã "G-XXXXXXXXXX" của bạn để theo dõi click Zalo, nộp Lead, báo giá, đăng nhập
  ga4MeasurementId: "G-XXXXXXXXXX",

  // 5. Tên miền chính thức của website để làm Technical SEO & Open Graph Social Share
  siteUrl: "https://gioi-thieu-web-app-crm.vercel.app",

  // 6. Cấu hình Firebase Authentication (Google Sign-In)
  // Tạo project tại https://console.firebase.google.com -> Enable Google Sign-In -> Dán config vào đây
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};

export default siteConfig;
