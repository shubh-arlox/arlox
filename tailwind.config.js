module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gradientTextStart: "#385179",
        gradientTextEnd: "#7799c8"
      },
      boxShadow: {
        neumorphic: "8px 8px 16px #d1d9e6, -8px -8px 16px #fff"
      }
    }
  },
  plugins: [],
}
