/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation: {
        'small-bounce': 'small-bounce', // Add your custom animation here
      },
    },
  },
  plugins: [],
}

