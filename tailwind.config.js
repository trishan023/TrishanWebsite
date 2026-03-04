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
        cream: 'rgb(var(--cream) / <alpha-value>)',
        surface: 'var(--surface)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'text-brown': 'var(--text-brown)',
        muted: 'var(--muted)',
        'footer-bg': 'var(--footer-bg)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        organic: '60% 40% 55% 45% / 50% 60% 40% 50%',
      },
      animation: {
        blob: 'blob 8s ease-in-out infinite',
        'blob-slow': 'blob 12s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%' },
          '25%': { borderRadius: '45% 55% 40% 60% / 60% 40% 55% 45%' },
          '50%': { borderRadius: '55% 45% 60% 40% / 40% 55% 45% 60%' },
          '75%': { borderRadius: '40% 60% 45% 55% / 55% 45% 60% 40%' },
        },
      },
    },
  },
  plugins: [],
}
