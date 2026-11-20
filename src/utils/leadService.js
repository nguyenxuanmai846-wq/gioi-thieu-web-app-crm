import siteConfig from '../config/siteConfig';

/**
 * Gửi thông tin Lead tới Web3Forms API để chuyển thẳng về Email doanh nghiệp
 * @param {Object} data - Dữ liệu Lead (fullName/name, phone, email, company, scale, message, planTier, formName)
 * @returns {Promise<{success: boolean, message: string, simulated?: boolean}>}
 */
export async function submitLead(data) {
  const accessKey = siteConfig.web3formsAccessKey?.trim();
  const pageUrl = typeof window !== 'undefined' ? window.location.href : siteConfig.siteUrl;

  const payload = {
    access_key: accessKey,
    subject: `[Lead mới] Khách hàng quan tâm Web App CRM - ${data.fullName || data.name || 'Khách hàng'}`,
    from_name: "Web App CRM Lead System",
    name: data.fullName || data.name || '',
    phone: data.phone || '',
    email: data.email || 'Không cung cấp',
    company: data.company || 'Không cung cấp',
    scale: data.scale || 'Chưa xác định',
    plan_tier: data.planTier || data.tier || 'Gói Nâng cao (Có AI)',
    form_source: data.formName || 'Website Form',
    message: data.message || '',
    page_url: pageUrl,
    submitted_at: new Date().toLocaleString('vi-VN')
  };

  // Nếu chưa có access_key, mô phỏng phản hồi thành công sau 600ms
  if (!accessKey) {
    console.warn(
      "[Web App CRM Lead Service] Chưa cấu hình web3formsAccessKey trong src/config/siteConfig.js! Hệ thống đang kích hoạt chế độ mô phỏng thành công cho Demo.",
      payload
    );
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      simulated: true,
      message: "Gửi thông tin thành công (Chế độ mô phỏng - vui lòng nhập Web3Forms Access Key để nhận email thật)."
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (result.success) {
      return {
        success: true,
        message: "Thông tin của quý khách đã được gửi thành công tới hòm thư chuyên gia tư vấn!"
      };
    } else {
      console.error("[Web3Forms Error]", result);
      return {
        success: false,
        message: result.message || "Gửi thất bại, vui lòng liên hệ hotline/Zalo."
      };
    }
  } catch (error) {
    console.error("[Web3Forms Fetch Error]", error);
    return {
      success: false,
      message: "Không thể kết nối đến máy chủ gửi thông tin. Vui lòng liên hệ hotline/Zalo."
    };
  }
}
