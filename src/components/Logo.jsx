import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', isDark = false, showTagline = false }) {
  const iconSizes = {
    sm: 'w-7 h-7',
    default: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-lg',
    default: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group focus:outline-none" aria-label="Web App CRM Trang chủ">
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size] || iconSizes.default}`}>
        {/* Glow backdrop on dark mode */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-xl blur-[6px] opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>
        
        {/* Modern SVG Icon: Customer 360 circle + funnel convergence + data node connections */}
        <svg
          viewBox="0 0 40 40"
          className="relative w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGrad" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>

          {/* Squircle Background Base */}
          <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />

          {/* Customer 360 Orbit Arc */}
          <circle
            cx="20"
            cy="20"
            r="12"
            stroke="#FFFFFF"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Dynamic Sales Funnel Flow & 360 Convergence */}
          <path
            d="M12 12C15 15 25 15 28 12C26 19 23 23 20 28C17 23 14 19 12 12Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Central Data Hub Node */}
          <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />
          <circle cx="20" cy="20" r="1.5" fill="#4F46E5" />

          {/* External Data Touchpoints (360 Degree Sync) */}
          <circle cx="20" cy="8" r="2" fill="#93C5FD" />
          <circle cx="31" cy="23" r="1.75" fill="#DDD6FE" />
          <circle cx="9" cy="23" r="1.75" fill="#93C5FD" />
          <circle cx="20" cy="32" r="2" fill="#DDD6FE" />
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5 font-bold tracking-tight">
          <span className={`${textSizes[size] || textSizes.default} ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Web App
          </span>
          <span className={`${textSizes[size] || textSizes.default} bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent`}>
            CRM
          </span>
          <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
            B2B
          </span>
        </div>
        {showTagline && (
          <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'} font-medium`}>
            Hệ thống CRM & Trợ lý AI
          </span>
        )}
      </div>
    </Link>
  );
}
