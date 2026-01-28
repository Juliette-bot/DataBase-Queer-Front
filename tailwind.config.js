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
        pixel: ['"Press Start 2P"', 'cursive'], // Police pixel (à ajouter via Google Fonts)
      },
      colors: {
        action: {
          DEFAULT: '#9333ea',
          hover: '#7e22ce',
          custompurple: '#8d04ff4f',
          light: '#a78bfa',
          dark: '#6b21a8',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          slate: '#64748b',
          // Couleurs rétro gaming
          neon: '#00ff88',
          pink: '#ff006e',
          yellow: '#ffbe0b',
        },
        retro: {
          dark: '#0f0f23',
          darker: '#050510',
          purple: '#5b21b6',
          blue: '#1e3a8a',
          cyan: '#06b6d4',
        },
        danger: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        info: '#3b82f6',
        surface: {
          light: '#ffffff',
          gray: '#f9fafb',
          dark: '#1f2937',
          darker: '#111827',
          slate: '#f1f5f9',
          'slate-dark': '#e2e8f0',
          'blue-light': '#eff6ff',
          'violet-light': '#f5f3ff',
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
        'card-new': '0 4px 20px rgba(99, 102, 241, 0.1)',
        'card-hover-new': '0 8px 30px rgba(99, 102, 241, 0.15)',
        'glow': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.3)',
        // Ombres pixel art - PLUS GRANDES ET PLUS VISIBLES
        'pixel': '8px 8px 0px rgba(0, 0, 0, 0.4)',
        'pixel-lg': '12px 12px 0px rgba(0, 0, 0, 0.5)',
        'pixel-hover': '10px 10px 0px rgba(0, 0, 0, 0.4)',
        'pixel-neon': '0 0 20px rgba(0, 255, 136, 0.7), 8px 8px 0px rgba(0, 0, 0, 0.4)',
        'pixel-blue': '0 0 20px rgba(99, 102, 241, 0.7), 8px 8px 0px rgba(0, 0, 0, 0.4)',
        'pixel-cyan': '0 0 20px rgba(6, 182, 212, 0.7), 8px 8px 0px rgba(0, 0, 0, 0.4)',
        'pixel-violet': '0 0 20px rgba(139, 92, 246, 0.7), 8px 8px 0px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'input': '6px',
        'card-new': '16px',
        'button-new': '12px',
        'pixel': '2px', // Coins légèrement arrondis style pixel
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1f2937 100%)',
        'gradient-cool': 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #f1f5f9 100%)',
        'gradient-dynamic': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        // Gradients rétro
        'gradient-retro': 'linear-gradient(135deg, #0f0f23 0%, #1e3a8a 50%, #5b21b6 100%)',
        'gradient-neon': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
        // Pattern pixel (à utiliser avec un pseudo-element)
        'dots-pattern': 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
    },
  },
  plugins: [],
}