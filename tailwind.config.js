/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/features/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/shared/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        main: 'calc(100svh - 5rem)',
      },
      fontFamily: {
        apple: ['AppleSDGothicNeo', 'Noto Sans KR', 'sans-serif'],
      },
      borderRadius: {
        10: '0.625rem',
      },
    },
  },
  plugins: [],
}
