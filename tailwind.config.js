/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use 'class' so you can control dark mode via a `.dark` class on <html> or <body>
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}", // App router
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      // Map design tokens (CSS variables) into Tailwind theme
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        text: "var(--text)",
        accent: "var(--accent)",
        success: "var(--success)",
        "glass-bg": "var(--glass-bg)",

        // optional gradient tokens
        "gradient-start": "#385179",
        "gradient-end": "#7799c8",
      },

      // You can reference CSS variables in box-shadows for consistent neumorphism
      boxShadow: {
        neumorphic: "6px 6px 14px var(--neu-dark), -6px -6px 14px var(--neu-light)",
        "neumorphic-lg": "12px 16px 36px var(--shadow-2)",
      },

      // Small spacing / radius tokens (optional to match CSS variables)
      borderRadius: {
        lgneu: "1rem",
      },

      // Provide a subtle default font-family fallback if needed
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
      },
    },
  },
  
};
