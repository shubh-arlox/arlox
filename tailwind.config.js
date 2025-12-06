module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this line exists if using App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this line exists if using src directory
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
