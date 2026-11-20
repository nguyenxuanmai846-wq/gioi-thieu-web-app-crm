import React from 'react';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../config/siteConfig';

/**
 * Component chuẩn hóa Technical SEO & Open Graph Social Share
 */
export default function SEO({
  title,
  description,
  path = '',
  ogType = 'website',
  ogImage = '/og-image.png'
}) {
  const fullTitle = title 
    ? `${title} | Web App CRM`
    : 'Web App CRM - Quản trị quan hệ khách hàng B2B tích hợp Trợ lý AI có kiểm soát';

  const defaultDesc = 'Hệ thống B2B SaaS CRM độc lập: Customer 360, Phễu bán hàng 6 giai đoạn, AI Snapshot có kiểm duyệt, Bảo mật Zero-Phone và Tuân thủ Luật 91/2025/QH15.';
  const metaDescription = description || defaultDesc;
  const canonicalUrl = `${siteConfig.siteUrl}${path}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteConfig.siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / Zalo */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Web App CRM" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
}
