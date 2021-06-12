module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'pages/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      whitelist: ["bg-gray-200", "bg-green-200", "bg-yellow-200"],
    }
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}