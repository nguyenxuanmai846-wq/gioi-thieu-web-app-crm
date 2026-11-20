/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crm: {
          blue: '#2563EB',
          indigo: '#4F46E5',
          purple: '#7C3AED',
          dark: '#0F172A',
          slate: '#334155',
          light: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(79, 70, 229, 0.25)',
        'glow-lg': '0 0 40px -10px rgba(124, 58, 237, 0.3)',
      }
    },
  },
  plugins: [],
}
