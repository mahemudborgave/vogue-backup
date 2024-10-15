/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your source files are included
  ],
  theme: {
    extend: {
      colors: {
        'darker-green' : "#163832",
        'dark-green': '#235347',
        'light-green' : '#8AB69B',
        'lighter-green' : "#DAF1DE"
      },
    },
  },
  plugins: [],
}
