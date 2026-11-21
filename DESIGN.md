---
name: Web App CRM
description: Nền tảng B2B SaaS CRM chuyên sâu tích hợp Trợ lý AI và Chatbot tự động
colors:
  primary: "#2563EB"
  primary-indigo: "#4F46E5"
  primary-purple: "#7C3AED"
  primary-gradient-start: "#2563EB"
  primary-gradient-middle: "#4F46E5"
  primary-gradient-end: "#7C3AED"
  neutral-bg: "#FFFFFF"
  neutral-surface: "#F8FAFC"
  neutral-border: "#E2E8F0"
  neutral-border-subtle: "#F1F5F9"
  text-primary: "#0F172A"
  text-secondary: "#334155"
  text-muted: "#64748B"
  text-subtle: "#94A3B8"
  accent-success: "#10B981"
  accent-warning: "#F59E0B"
  accent-danger: "#EF4444"
  zalo-blue: "#0068FF"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', sans-serif"
    fontWeight: 700
    lineHeight: 1.22
  body:
    fontFamily: "'Be Vietnam Pro', sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-gradient:
    backgroundColor: "{colors.primary-indigo}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-default:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview
Hệ thống thiết kế của **Web App CRM** mang phong cách B2B SaaS hiện đại, tập trung vào sự tối giản, tin cậy và hiệu suất cao. Giao diện được thiết kế để phục vụ khách hàng doanh nghiệp vừa và nhỏ (SME), cân bằng giữa tính chuyên nghiệp kỹ thuật và khả năng chuyển đổi trực quan.

## Colors
- **Màu chủ đạo (Primary Accent)**: Dải màu chuyển tiếp từ Xanh dương (`#2563EB`) sang Chàm (`#4F46E5`) và Tím (`#7C3AED`). Gradient này chỉ dùng cho Logo, tiêu đề chính H1 và các nút kêu gọi hành động (CTA) cốt lõi nhằm tránh gây rối mắt.
- **Nền & Bề mặt (Backgrounds)**: Nền chính màu Trắng tuyết (`#FFFFFF`) kết hợp xen kẽ các khối nền Xám xanh nhạt (`#F8FAFC`) để tạo nhịp điệu phân cách giữa các section.
- **Văn bản (Typography Colors)**: Chữ chính dùng Xám than đậm (`#0F172A`) đạt chuẩn tương phản cao WCAG 2.2 AA. Chữ phụ dùng Xám trung tính (`#334155` và `#64748B`).
- **Kênh nhận diện đối tác**: Màu xanh thương hiệu Zalo (`#0068FF`) sử dụng cho kênh liên hệ nhanh.

## Typography
- **Tiêu đề (Headings)**: Sử dụng font Google Fonts **"Plus Jakarta Sans"** (font weights: 600, 700, 800), line-height tối thiểu `leading-[1.22]` để dấu tiếng Việt giữa các dòng không bị dính vào nhau.
- **Nội dung văn bản (Body Text)**: Sử dụng font **"Be Vietnam Pro"** (font weights: 400, 500, 600) với độ giãn dòng thoáng đãng `leading-relaxed`, tối ưu hóa 100% cho khả năng đọc tiếng Việt trên cả Desktop và Màn hình Retina di động.

## Layout
- **Hệ thống Grid**: Container chuẩn Tailwind CSS `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- **Khoảng cách nhịp điệu (Rhythm)**: Khoảng cách giữa các section lớn duy trì ở mức `py-16 md:py-24` tạo khoảng trắng thoáng đãng, phân tách rõ ràng.
- **Above-the-fold**: Màn hình đầu tiên được tối ưu gọn gàng, nút bấm và thông điệp giá trị hiển thị rõ ràng ngay khi tải trang.

## Elevation & Depth
- Hạn chế sử dụng bóng đổ thuần đen thô ráp (`#000000`).
- Sử dụng bóng đổ đa tầng mịn màng với độ mờ đục thấp (`shadow-sm`, `shadow-md`, `shadow-xl shadow-indigo-600/10`).
- Viền mảnh `border border-slate-200/80` để tạo khối rõ nét trên nền sáng.

## Shapes
- Bo góc hiện đại mềm mại: `rounded-xl` (12px) cho inputs & buttons, `rounded-2xl` (16px) cho cards, `rounded-3xl` (24px) cho hero mockups và modal containers.
- Huy hiệu (Badges) và Nút liên hệ nổi sử dụng `rounded-full`.

## Components
- **Navbar**: Sticky Header cố định phía trên với hiệu ứng kính mờ `bg-white/95 backdrop-blur-md`, tích hợp Mega menu và quản lý trạng thái đăng nhập người dùng.
- **Form Inputs**: Kích thước chữ `text-base sm:text-sm` (tối thiểu 16px trên mobile) chống lỗi iOS Safari auto-zoom khi chạm gõ chữ.
- **Mockups UI**: Được code sẵn trực tiếp bằng Tailwind CSS với dữ liệu mẫu rõ ràng, không phụ thuộc vào placeholder ảnh tĩnh bên ngoài.
- **Kênh Chat Nổi (Floating CTA)**: Nút Chat Zalo nổi chuẩn màu `#0068FF` với hiệu ứng ping tinh tế, kèm nút cuộn mượt lên đầu trang khi cuộn quá 450px.

## Do's and Don'ts
### Do's:
- Giữ nguyên cấu trúc nghiệp vụ CRM B2B chuyên biệt (Customer 360, Phễu bán hàng 6 bước, AI Snapshot có kiểm duyệt, Mặt nạ Zero-Phone).
- Giữ vững tỷ lệ tương phản WCAG 2.2 AA cho toàn bộ văn bản và nút bấm.
- Sử dụng các liên kết nội bộ `react-router-dom` mượt mà, hỗ trợ deep-linking theo tabs.

### Don'ts:
- **Tuyệt đối KHÔNG** đưa các module Kế toán, Kho vận, Chấm công GPS hay Nhân sự vào website.
- **Tuyệt đối KHÔNG** lạm dụng gradient tím-xanh tràn lan lên các khối nội dung phụ.
- **Tuyệt đối KHÔNG** đặt cỡ chữ input dưới 16px trên mobile.
