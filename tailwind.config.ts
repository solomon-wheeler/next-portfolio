import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/2': '50%',
      },
      translate: {
        '-1/2': '-50%',
      },
      colors: {
        lightblue: '#ADD8E6',
        'light-text': '#000000', // light mode text color
        'dark-text': '#ffffff', // dark mode text color
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate'), require('tailwindcss-dark-mode')],
};
export default config;
