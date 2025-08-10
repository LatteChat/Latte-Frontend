/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/features/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        main: 'calc(100svh - 5rem)',
      },
      fontFamily: {
        apple: ['AppleSDGothicNeoB00', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
