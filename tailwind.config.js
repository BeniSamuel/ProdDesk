/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],  // Roboto Slab is serif
        poppins: ['"Poppins"', 'sans-serif'],  // Poppins is sans-serif
        rufina: ['"Rufina"', 'serif'],  // Rufina is serif
      },
    },
  },
  plugins: [],
}

