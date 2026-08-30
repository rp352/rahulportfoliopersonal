/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c',
        surface: {
          DEFAULT: '#111115',
          card: '#15151a',
          hover: '#1a1a22',
          border: 'rgba(255, 255, 255, 0.07)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
        },
        editorial: {
          dark: '#0a0a0c',
          panel: '#101014',
          card: '#141418',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.15)',
          text: '#f4f4f6',
          muted: '#8e8e9b',
          faint: '#4c4c58',
        },
        accent: {
          DEFAULT: '#E25822', // Editorial Terracotta / Burnt Orange
          hover: '#F06632',
          muted: 'rgba(226, 88, 34, 0.12)',
          subtle: 'rgba(226, 88, 34, 0.06)',
          border: 'rgba(226, 88, 34, 0.3)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', '"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        editorial: '0.12em',
      },
    },
  },
  plugins: [],
}
