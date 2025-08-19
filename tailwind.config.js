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
      colors: {
        primary: '#E5CBA5',
        secondary: {
          brown: {
            1: '#FFF9EE',
            2: '#C9A070',
            3: '#A57939',
            4: '#6E4F36',
            5: '#2E1C1B',
          },
          red: '#FB3636',
          chat: '#FB6029',
        },
        gray: {
          1: '#F3F3F3',
          2: '#E7E7E7',
          3: '#D9D9D9',
          4: '#B5B5B5',
          5: '#989898',
          6: '#7C7C7C',
          7: '#484848',
        },
        interaction: {
          error: '#DF1D1D',
          success: '#0073CB',
        },
        backgroundImage: {
          'latte-gradient-1':
            'linear-gradient(180deg, #FFFFFF 0%, #E5CBA5 100%)',
          'latte-gradient-2':
            'linear-gradient(90deg, #FFFFFF 0%, #E5CBA5 100%)',
          'latte-gradient-3':
            'linear-gradient(180deg, #C494A1 0%, #D4CD48 50%, #D4CD48 100%)',
        },
      },
      minHeight: {
        main: 'calc(100svh - 5rem)',
      },
      fontFamily: {
        apple: ['AppleSDGothicNeo', 'Noto Sans KR', 'sans-serif'],
      },
      borderRadius: {
        10: '0.625rem',
      },
      boxShadow: {
        'select-button': '0 0 4px 0 rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [],
}
