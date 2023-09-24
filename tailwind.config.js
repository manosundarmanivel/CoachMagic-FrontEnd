/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.js"],
  darkMode:"class",
  module: {
    rules: [
      // ... other rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  theme: {
    fontSize: {
      title: `2.6rem;`,
      paragraph: `1.2rem;`
    },
    extend: {
      colors: {
        primary: {
          500: '#FF6363;',
          800: '#FF1313;',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



