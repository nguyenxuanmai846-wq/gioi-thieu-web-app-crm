/**
 * CẤU HÌNH TRUNG TÂM HỆ THỐNG KINH DOANH WEB APP CRM
 * Gom toàn bộ thông số kết nối vào một nơi duy nhất để dễ dàng thay đổi khi bàn giao.
 */

export const siteConfig = {
  // 1. Kênh tư vấn bán hàng trực tiếp (Zalo cá nhân / Zalo OA)
  // THAY SĐT SALE THẬT VÀO ĐÂY (định dạng 10 số, ví dụ "0912345678"):
  zaloPhone: "0924007269",

  // 2. Web3Forms Access Key để nhận Lead thông tin khách gửi thẳng về Email công ty
  // Lấy mã miễn phí tại https://web3forms.com (nếu để trống, hệ thống chạy chế độ mô phỏng mượt mà)
  web3formsAccessKey: "86766a21-491d-43e5-b14d-bff737f2193b",

  // 3. Đường dẫn Web App CRM thực tế trên Cloud (Render / Server sản xuất)
  webAppUrl: "https://ai-crm-cua-chong-ngap.onrender.com",

  // 4. Mã đo lường chuyển đổi Google Analytics 4 (GA4)
  // Thay mã "G-XXXXXXXXXX" của bạn để theo dõi click Zalo, nộp Lead, báo giá, đăng nhập
  ga4MeasurementId: "G-TH1JNRHMGC",

  // 5. Tên miền chính thức của website để làm Technical SEO & Open Graph Social Share
  siteUrl: "https://gioi-thieu-web-app-crm.vercel.app",

  // 6. Cấu hình Firebase Authentication (Google Sign-In)
  // Tạo project tại https://console.firebase.google.com -> Enable Google Sign-In -> Dán config vào đây
  firebaseConfig: {
    apiKey: "AIzaSyBZFv2MgJG4nfPDMpEQoPNTp391Em8Mzh8",
    authDomain: "web-app-crm-31857.firebaseapp.com",
    projectId: "web-app-crm-31857",
    storageBucket: "web-app-crm-31857.firebasestorage.app",
    messagingSenderId: "508247272661",
    appId: "1:508247272661:web:7ea716585ac218d46e465c",
    measurementId: "G-TH1JNRHMGC"
  }
};

export default siteConfig;
