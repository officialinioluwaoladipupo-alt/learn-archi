/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        archi: {
          black: "#000000",
          terracotta: "#A84B42",
          pink: "#F4BAD3",
          white: "#FFFFFF",
          grey: "#D9D9D9",
          muted: "#666666",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "Space Grotesk", "Clash Display", "sans-serif"],
        body: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        'd1': ['clamp(44px, 10vw, 84px)', { lineHeight: '0.85', letterSpacing: '-0.03em', fontWeight: '800' }],
        'd2': ['clamp(48px, 10vw, 96px)', { lineHeight: '0.8', letterSpacing: '-0.04em', fontWeight: '800' }],
        'h1': ['clamp(40px, 8vw, 72px)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(36px, 6vw, 56px)', { lineHeight: '0.95', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['clamp(24px, 4vw, 32px)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h4': ['clamp(18px, 3vw, 22px)', { lineHeight: '1.3', letterSpacing: 'normal', fontWeight: '700' }],
        'body': ['clamp(15px, 1.2vw, 16px)', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
        'meta': ['clamp(12px, 1vw, 13px)', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600' }],
      },
      letterSpacing: {
        architectural: "-0.03em",
        wide: "0.05em",
        meta: "0.08em",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};