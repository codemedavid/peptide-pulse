/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green & Gold Premium Brand Theme
        'theme-bg': '#FFFFFF',        // Pure white background
        'theme-text': '#111111',      // Charcoal black (headings)
        'theme-accent': '#0D5C4B',    // Primary Emerald Green (hero color)
        'theme-accent-hover': '#0A7B5E', // Lighter green for hover
        'theme-secondary': '#F4F4F6', // Soft gray (UI backgrounds)
        'text-secondary': '#4A4A4A',  // Cool dark gray (body text)

        // Emerald Green scale (primary brand color)
        magenta: {
          50: '#E8F5F0',
          100: '#C8E6D9',
          200: '#A5D6C0',
          300: '#82C6A7',
          400: '#5EB68E',
          500: '#0D5C4B', // Primary emerald green
          600: '#0B5043',
          700: '#09443A',
          800: '#073832',
          900: '#052C29',
        },
        // Primary scale mapped to emerald for compatibility
        primary: {
          50: '#E8F5F0',
          100: '#C8E6D9',
          200: '#A5D6C0',
          300: '#82C6A7',
          400: '#5EB68E',
          500: '#0D5C4B',
          600: '#0B5043',
          700: '#09443A',
          800: '#073832',
          900: '#052C29',
        },
        // Gold accent colors
        accent: {
          light: '#F5D77A',   // Light gold
          DEFAULT: '#D4AF37', // Classic gold
          dark: '#B8962E',
          white: '#FFFFFF',
          black: '#111111',
        },
        // Gold scale for the secondary accent
        gold: {
          50: '#FDF8E8',
          100: '#FAEFCA',
          200: '#F5E3A0',
          300: '#F0D776',
          400: '#E8C84C',
          500: '#D4AF37', // Main gold
          600: '#B8962E',
          700: '#9A7D26',
          800: '#7C641E',
          900: '#5E4B16',
        },
        // Teal updated to match green theme
        teal: {
          50: '#E8F5F0',
          100: '#C8E6D9',
          200: '#A5D6C0',
          300: '#82C6A7',
          400: '#5EB68E',
          500: '#0D5C4B', // Same as primary
          600: '#0B5043',
          700: '#09443A',
          800: '#073832',
          900: '#052C29',
        },
        // Navy kept for backward compatibility, mapped to green tones
        navy: {
          50: '#E8F5F0',
          100: '#C8E6D9',
          200: '#A5D6C0',
          300: '#82C6A7',
          400: '#5EB68E',
          500: '#0D5C4B',
          600: '#0B5043',
          700: '#09443A',
          800: '#073832',
          900: '#052C29',
        },
      },
      fontFamily: {
        inter: ['Cormorant Garamond', 'Georgia', 'serif'],
        garamond: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'medium': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 25px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out',
        'slideIn': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
