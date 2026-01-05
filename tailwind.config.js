/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        action: {
          DEFAULT: '#9333ea',
          hover: '#7e22ce',
        },
        danger: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        info: '#3b82f6',
        surface: {
          light: '#ffffff',
          gray: '#f9fafb',
          dark: '#1f2937',
        },
        content: {
          primary: '#111827',
          secondary: '#6b7280',
          muted: '#9ca3af',
        }
      },
      boxShadow: {
        'card': '0 2px 8px rgba(147, 51, 234, 0.08)',
        'card-hover': '0 4px 16px rgba(147, 51, 234, 0.12)',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'input': '6px',
      },
    },
  },
  plugins: [],
}