/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Europa"],
      },
      colors: {
        primary: {
          DEFAULT: "#e81863",
        },
      },
      backgroundPosition: {
        "left-sm": "20% 0",
        "left-lg": "115% 0",
      },
    },
  },
  plugins: [],
}
