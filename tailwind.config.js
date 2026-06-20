/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jaye-dark': '#0F2A24',
        'jaye-gold': '#F8CA89',
        'jaye-light': '#F3FAF7',
        'jaye-teal': '#5ADBAD',
        'jaye-purple': '#B8A3E0',
        'jaye-orange': '#FFB366',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'system-ui', 'sans-serif'],
        'satoshi': ['Satoshi Variable', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h6': '20px',
        'md': '16px',
      },
    },
  },
  plugins: [],
};