/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aesthetic Cute Blue and White Theme
        primary: {
          50: '#f0f9ff',   // Sky blue 50 - Lightest
          100: '#e0f2fe',  // Sky blue 100 - Very soft
          200: '#bae6fd',  // Sky blue 200 - Soft blue
          300: '#7dd3fc',  // Sky blue 300 - Light playful blue
          400: '#38bdf8',  // Sky blue 400 - Bright accent
          500: '#0ea5e9',  // Sky blue 500 - Main blue
          600: '#0284c7',  // Sky blue 600 - Primary blue
          700: '#0369a1',  // Sky blue 700 - Rich blue
          800: '#075985',  // Sky blue 800 - Deep blue
          900: '#0c4a6e',  // Sky blue 900 - Darkest
        },
        accent: {
          light: '#38bdf8',   // Bright playful blue
          DEFAULT: '#0ea5e9', // Cheerful blue
          dark: '#0284c7',    // Rich blue
          pink: '#f9a8d4',    // Soft pink accent
          purple: '#c4b5fd',  // Soft purple accent
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(14, 165, 233, 0.1)',
        'medium': '0 4px 20px rgba(14, 165, 233, 0.15)',
        'large': '0 8px 30px rgba(14, 165, 233, 0.2)',
        'glow': '0 0 20px rgba(56, 189, 248, 0.3)',
        'cute': '0 4px 15px rgba(186, 230, 253, 0.4)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.4s ease-out',
        'slideIn': 'slideIn 0.3s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
