/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fef6f3',
          100: '#fdeee7',
          200: '#fad4c3',
          300: '#f7ba9f',
          400: '#f3a07b',
          500: '#ef8657',
          600: '#e96c33',
          700: '#c5552a',
          800: '#9d4422',
          900: '#75331a',
        },
        sage: {
          50: '#f5f7f4',
          100: '#e8ede6',
          200: '#d1dbc9',
          300: '#b9c9ac',
          400: '#a2b78f',
          500: '#8ba572',
          600: '#6d8a58',
          700: '#586f47',
          800: '#445636',
          900: '#2f3d25',
        },
        sand: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe3d5',
          300: '#e0d5c0',
          400: '#d6c7ab',
          500: '#ccb996',
          600: '#b8a478',
          700: '#968563',
          800: '#75674d',
          900: '#544938',
        },
        sky: {
          50: '#f4f8fa',
          100: '#e9f1f5',
          200: '#d3e3eb',
          300: '#bdd5e1',
          400: '#a7c7d7',
          500: '#91b9cd',
          600: '#6fa1b8',
          700: '#5a8397',
          800: '#466578',
          900: '#324759',
        },
        coral: {
          50: '#fef4f2',
          100: '#fde9e5',
          200: '#fbd3cb',
          300: '#f9bdb1',
          400: '#f7a797',
          500: '#f5917d',
          600: '#f27563',
          700: '#df5340',
          800: '#b34233',
          900: '#873226',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
