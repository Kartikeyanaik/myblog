// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './posts/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
         serif: ['Georgia', 'Times New Roman', ...defaultTheme.fontFamily.serif],
        sans: ['Satoshi','Inter',...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
