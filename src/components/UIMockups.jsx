import React, { useState } from 'react';
import { 
  Users, TrendingUp, DollarSign, Target, CheckCircle2, AlertCircle, 
  Sparkles, ShieldCheck, PhoneCall, Bot, RefreshCw, Send, Check, 
  MessageSquare, Lock, Eye, Filter, Clock, ChevronRight, Layers, ArrowUpRight
} from 'lucide-react';

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('kanban');

  const stages = [
    { name: '1. Mới tiếp nhận', count: 128, value: '640 Tr', color: 'border-blue-400 bg-blue-50/50' },
    { name: '2. Đã liên hệ', count: 85, value: '520 Tr', color: 'border-sky-400 bg-sky-50/50' },
    { name: '3. Tư vấn / Demo', count: 46, value: '980 Tr', color: 'border-indigo-400 bg-indigo-50/50' },
    { name: '4. Báo giá & Đ/phán', count: 22, value: '715 Tr', color: 'border-purple-400 bg-purple-50/50' },
    { name: '5. Chốt hợp đồng', count: 15, value: '890 Tr', color: 'border-emerald-500 bg-emerald-50/50' },
    { name: '6. Chăm sóc sau bán', count: 371, value: '2.1 Tỷ', color: 'border-amber-400 bg-amber-50/50' },
  ];

  const sampleDeals = [
    { code: 'KH-00842', title: 'Tập đoàn Cơ điện SunTech', value: '185.000.000 đ', stage: '4. Báo giá & Đ/phán', score: 88, phone: '+849******32', rep: 'Thanh Hà', days: '2 ngày' },
    { code: 'KH-00839', title: 'Học viện Ngoại ngữ SmartEdu', value: '92.000.000 đ', stage: '3. Tư vấn / Demo', score: 94, phone: '+843******88', rep: 'Minh Quân', days: '1 ngày' },
    { code: 'KH-00835', title: 'Chuỗi Nội thất Cao cấp HomeLux', value: '240.000.000 đ', stage: '5. Chốt hợp đồng', score: 96, phone: '+849******15', rep: 'Văn Nam', days: 'Hôm nay' },
  ];

  return (
    <div className="w-full bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/60 overflow-hidden text-slate-100 font-sans text-xs sm:text-sm">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 border-b border-slate-700/70">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span className="ml-2 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Web App CRM • Dashboard Quản trị Doanh thu & Phễu Bán hàng
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-700/80 border border-slate-600">SLA: 100% Đúng hạn</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI Active</span>
        </div>
      </div>

      {/* Internal Body */}
      <div className="p-4 sm:p-5 space-y-4 bg-gradient-to-b from-slate-900 to-slate-950">
        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Tổng hồ sơ khách</span>
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">667 <span className="text-xs font-normal text-emerald-400">+18%</span></div>
            <p className="text-[11px] text-slate-400 mt-0.5">Mã chuẩn KH-xxxxxx</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Hot Leads (≥70đ)</span>
              <Target className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">142 <span className="text-xs font-normal text-purple-300">Ưu tiên</span></div>
            <p className="text-[11px] text-slate-400 mt-0.5">SLA phản hồi ≤ 5 phút</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Tỷ lệ chốt phễu</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400">28.4% <span className="text-xs font-normal text-slate-300">vượt KPI</span></div>
            <p className="text-[11px] text-slate-400 mt-0.5">Chuẩn hóa 6 giai đoạn</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Doanh số dự báo</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">2.85 Tỷ <span className="text-xs font-normal text-amber-300">Q4</span></div>
            <p className="text-[11px] text-slate-400 mt-0.5">Xác suất thành công 82%</p>
          </div>
        </div>

        {/* 6 Stage Funnel Header strip */}
        <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-slate-200 text-xs flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> Phễu bán hàng B2B 6 giai đoạn (Thời gian thực)
            </span>
            <div className="flex gap-1">
              <button 
                onClick={() => setActiveTab('kanban')} 
                className={`px-2 py-0.5 rounded text-[11px] transition-colors ${activeTab === 'kanban' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'}`}
              >
                Kanban View
              </button>
              <button 
                onClick={() => setActiveTab('deals')} 
                className={`px-2 py-0.5 rounded text-[11px] transition-colors ${activeTab === 'deals' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400 hover:text-white'}`}
              >
                Hot Leads
              </button>
            </div>
          </div>

          {/* 6 stages visual bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {stages.map((stg, idx) => (
              <div key={idx} className={`p-2 rounded-lg border-l-2 bg-slate-900/60 ${stg.color}`}>
                <div className="text-[11px] text-slate-400 truncate">{stg.name}</div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-sm font-bold text-white">{stg.count}</span>
                  <span className="text-[10px] text-indigo-300 font-medium">{stg.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Interactive Deals List / Cards */}
        <div className="space-y-2">
          <div className="text-[11px] font-medium text-slate-400 flex items-center justify-between">
            <span>Cơ hội trọng điểm đang đàm phán (Mặt nạ Zero-Phone bảo mật):</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Chuẩn Luật 91/2025/QH15
            </span>
          </div>

          <div className="space-y-2">
            {sampleDeals.map((deal) => (
              <div 
                key={deal.code} 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all gap-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                    {deal.code}
                  </span>
                  <div>
                    <div className="font-semibold text-slate-200 text-xs sm:text-sm">{deal.title}</div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-slate-400" /> {deal.phone}
                      </span>
                      <span>•</span>
                      <span>Sales: {deal.rep}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-center">
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-purple-900/40 text-purple-300 border border-purple-700/50">
                    Điểm Lead: {deal.score}/100
                  </span>
                  <span className="font-bold text-emerald-400 text-xs sm:text-sm">{deal.value}</span>
                  <span className="text-[11px] text-slate-400 hidden sm:inline-block">{deal.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AISnapshotMockup() {
  const [approved, setApproved] = useState(false);
  const [editing, setEditing] = useState(false);

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-slate-900 text-xs sm:text-sm">
      {/* Card Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border-b border-indigo-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              AI Snapshot: Tóm tắt Hội thoại & Bóc tách Cơ hội
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-100 text-indigo-700 font-semibold border border-indigo-200">
                Gemini Pool
              </span>
            </div>
            <p className="text-[11px] text-slate-500">Mô hình Trợ lý có kiểm duyệt (Human-in-the-loop)</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Kill Switch: Ready
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Source Chat Snippet */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
            <span>Đoạn trích hội thoại Zalo OA (KH-00842 - Đại diện: Anh Quân)</span>
            <span>14:25 Hôm nay</span>
          </div>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="p-2 rounded bg-white border border-slate-200/60">
              <span className="font-semibold text-indigo-600">Khách hàng:</span> "Bên mình đang cần triển khai cho 35 nhân sự trước ngày 15 tháng sau. Ngân sách dự kiến khoảng 120-150 triệu trọn gói. Bạn gửi demo tính năng quản trị đa chi nhánh và báo giá qua email nhé."
            </div>
          </div>
        </div>

        {/* AI Extracted Output */}
        <div className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-indigo-600" /> Kết quả bóc tách tự động (Độ tin cậy: 98%)
            </span>
            <span className="text-[10px] text-indigo-600 font-medium bg-white px-2 py-0.5 rounded border border-indigo-200">
              Chờ nhân viên Sales duyệt
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-white p-2 rounded-lg border border-indigo-100">
              <span className="text-[11px] text-slate-500 block">Nhu cầu chính:</span>
              <span className="font-medium text-slate-800">Triển khai CRM cho 35 người, quản lý đa chi nhánh</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-indigo-100">
              <span className="text-[11px] text-slate-500 block">Ngân sách dự kiến:</span>
              <span className="font-bold text-emerald-600">120 - 150 Triệu VNĐ</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-indigo-100">
              <span className="text-[11px] text-slate-500 block">Thời hạn kỳ vọng (Deadline):</span>
              <span className="font-medium text-slate-800">Trước ngày 15 tháng tới (Cấp bách)</span>
            </div>
            <div className="bg-white p-2 rounded-lg border border-indigo-100">
              <span className="text-[11px] text-slate-500 block">Hành động kế tiếp (Next Best Action):</span>
              <span className="font-medium text-purple-700 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Gửi báo giá mẫu S1 & Hẹn lịch Demo
              </span>
            </div>
          </div>

          {/* Action Approval Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-indigo-100">
            <span className="text-[11px] text-slate-500 text-center sm:text-left">
              {approved ? '✓ Đã kiểm duyệt và cập nhật vào hồ sơ KH-00842 lúc 14:26' : 'Nhân viên kiểm tra và xác nhận trước khi lưu:'}
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {approved ? (
                <div className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Đã lưu vào CRM
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => setEditing(!editing)}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-xs"
                  >
                    {editing ? 'Hủy chỉnh sửa' : 'Chỉnh sửa nhanh'}
                  </button>
                  <button 
                    onClick={() => setApproved(true)}
                    className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5" /> Chấp nhận & Lưu (1-Click)
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SecurityMockup() {
  const [role, setRole] = useState('sales_rep');

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-slate-900 text-xs sm:text-sm">
      <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-400" />
          <div>
            <div className="font-bold text-sm">Hệ thống Bảo mật 3 Lớp & Mặt nạ Zero-Phone</div>
            <div className="text-[11px] text-slate-400">Tuân thủ Luật 91/2025/QH15 & Nghị định 356/2025/NĐ-CP</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-300 text-[11px] font-semibold border border-indigo-400/30">
          MFA AAL2 Active
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Role Switcher Demo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
          <div>
            <span className="font-semibold text-slate-800 text-xs block">Mô phỏng góc nhìn phân quyền (RBAC 5 vai trò):</span>
            <span className="text-[11px] text-slate-500">Thử đổi vai trò để xem sự thay đổi hiển thị số điện thoại</span>
          </div>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white font-medium text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="sales_rep">Nhân viên Sales (Ẩn Zero-Phone)</option>
            <option value="manager">Trưởng phòng (Xem có hạn mức)</option>
            <option value="super_admin">Super Admin (Xem đầy đủ qua OTP)</option>
          </select>
        </div>

        {/* Customer Table with Zero-Phone */}
        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-[11px] text-slate-600 font-semibold border-b border-slate-200">
                <th className="p-2.5">Mã KH</th>
                <th className="p-2.5">Tên doanh nghiệp</th>
                <th className="p-2.5">Số điện thoại (Zero-Phone)</th>
                <th className="p-2.5">Quyền gọi VoIP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <tr>
                <td className="p-2.5 font-mono text-indigo-600 font-medium">KH-00712</td>
                <td className="p-2.5 font-medium text-slate-800">Cơ khí Chính xác Tân Phát</td>
                <td className="p-2.5">
                  <span className="inline-flex items-center gap-1 font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    <Lock className="w-3 h-3 text-slate-400" />
                    {role === 'super_admin' ? '+84 912 345 678' : '+84 912 *** *78'}
                  </span>
                </td>
                <td className="p-2.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
                    <PhoneCall className="w-3 h-3" /> 1-Click Call (Mã hóa)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono text-indigo-600 font-medium">KH-00713</td>
                <td className="p-2.5 font-medium text-slate-800">Nội thất Kiến trúc V-Home</td>
                <td className="p-2.5">
                  <span className="inline-flex items-center gap-1 font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    <Lock className="w-3 h-3 text-slate-400" />
                    {role === 'super_admin' ? '+84 988 765 432' : '+84 988 *** *32'}
                  </span>
                </td>
                <td className="p-2.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-medium border border-emerald-200">
                    <PhoneCall className="w-3 h-3" /> 1-Click Call (Mã hóa)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Real-time Audit Log snippet */}
        <div className="p-3 rounded-xl bg-slate-900 text-slate-300 font-mono text-[11px] space-y-1">
          <div className="text-slate-400 font-sans font-semibold text-xs flex items-center justify-between pb-1 border-b border-slate-800">
            <span>Audit Log (Nhật ký kiểm toán thời gian thực):</span>
            <span className="text-emerald-400">Bất biến (Immutable)</span>
          </div>
          <div className="text-slate-300">[14:28:10] USER_ID: sales_rep_04 truy vấn hồ sơ KH-00712 • IP: 14.161.xx.xx (Mã hóa)</div>
          <div className="text-slate-300">[14:28:15] USER_ID: sales_rep_04 kích hoạt cuộc gọi Click-to-call VoIP #CALL-9912</div>
          <div className="text-amber-400">[CẢNH BÁO] Hành vi xuất danh sách hàng loạt bị khóa theo chính sách dữ liệu</div>
        </div>
      </div>
    </div>
  );
}

export function OmnichannelMockup() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-slate-900 text-xs sm:text-sm">
      <div className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          <span className="font-bold text-sm">Hộp thư Hội thoại Hợp nhất (Unified Inbox)</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="px-2 py-0.5 rounded bg-white/20">Zalo OA & Facebook Fanpage</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-h-[280px]">
        {/* Left: Chat list */}
        <div className="p-3 space-y-2 bg-slate-50">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span>Hội thoại đang chờ (4)</span>
            <span className="text-indigo-600 text-[11px]">SLA ≤ 5 phút</span>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-indigo-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-xs">Nguyễn Văn Khôi</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-100 text-blue-700 font-semibold">Zalo OA</span>
            </div>
            <p className="text-[11px] text-slate-600 truncate">"Bên bạn có hỗ trợ lắp đặt cửa chống ngập tại Đà Nẵng không?"</p>
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="text-rose-500 font-medium">SLA còn: 02:40</span>
              <span>2 phút trước</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/60 border border-slate-200 space-y-1 opacity-80">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 text-xs">Trần Thị Hương</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-indigo-100 text-indigo-700 font-semibold">Fanpage</span>
            </div>
            <p className="text-[11px] text-slate-500 truncate">"Cho mình xin báo giá khóa đào tạo quản trị sales cho 10 người"</p>
          </div>
        </div>

        {/* Center: Active Chat window */}
        <div className="p-3 flex flex-col justify-between space-y-3 bg-white md:col-span-2">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                  NK
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">Nguyễn Văn Khôi • Zalo OA</div>
                  <div className="text-[10px] text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Đang trực tuyến • Mã hồ sơ: KH-00850
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-800 font-semibold">
                Hot Lead (85đ)
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl rounded-tl-none bg-slate-100 max-w-[85%] text-slate-800">
                Bên bạn có hỗ trợ lắp đặt cửa chống ngập tại Đà Nẵng không? Chi phí thế nào vậy?
              </div>
              <div className="p-2.5 rounded-xl rounded-tr-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white max-w-[85%] ml-auto shadow-sm">
                Dạ chào anh Khôi, bên em có đội ngũ kỹ thuật thường trực tại Đà Nẵng ạ. Em xin phép gửi anh bảng quy cách và kích thước tiêu chuẩn để kỹ sư bên em khảo sát ngay trong hôm nay nhé!
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Nhập phản hồi hoặc gõ / để chèn tin mẫu..." 
              className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" 
              defaultValue="Dạ anh cho em xin kích thước cửa dự kiến ạ..."
            />
            <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-medium text-xs flex items-center gap-1">
              <Send className="w-3 h-3" /> Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
