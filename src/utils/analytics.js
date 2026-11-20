import siteConfig from '../config/siteConfig';

/**
 * Khởi tạo Google Analytics 4 động từ siteConfig.ga4MeasurementId
 */
export function initGA4() {
  if (typeof window === 'undefined') return;
  const measurementId = siteConfig.ga4MeasurementId?.trim();
  
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    // GA4 chưa được cấu hình, bỏ qua việc tải script
    return;
  }

  // Tránh tải trùng lặp
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true
  });
}

/**
 * Bắn sự kiện theo dõi chuyển đổi GA4
 * @param {string} eventName - Tên sự kiện: click_zalo_chat, submit_lead_form, click_pricing_cta, google_login_success
 * @param {Object} params - Tham số đính kèm
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined') {
    // Log console cho nhà phát triển kiểm tra trong môi trường dev
    console.log(`[GA4 Event Tracker] -> ${eventName}`, params);

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }
}
