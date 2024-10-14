/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideRightToLeft: 'slideRightToLeft 100s linear infinite',
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

