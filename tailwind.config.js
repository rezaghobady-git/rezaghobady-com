/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFBF7",
        foreground: "#1a1c1e",
        primary: {
          DEFAULT: "#E76F51", // Burnt Orange
          container: "#f4a261",
          dim: "#d65d41",
        },
        secondary: {
          DEFAULT: "#8D8172", // Warm Gray / Taupe
          container: "#a69b8f",
          dim: "#7a6f62",
        },
        tertiary: {
          DEFAULT: "#E9C46A", // Saffron / Golden
          container: "#f4d35e",
        },
        surface: {
          DEFAULT: "#FDFBF7",
          dim: "#f2f0ea",
          bright: "#ffffff",
          container: {
            lowest: "#ffffff",
            low: "#f7f5ef",
            DEFAULT: "#f2f0ea",
            high: "#ece9e1",
            highest: "#e6e3da",
          },
          variant: "#dbd8cf",
        },
        on: {
          primary: "#ffffff",
          secondary: "#ffffff",
          surface: "#1a1c1e",
          "surface-variant": "#44474a",
        },
        outline: {
          DEFAULT: "#74777a",
          variant: "#c4c7ca",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem", // 8px (Moderate)
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      spacing: {
          "normal": "0.5rem",   // Value 2 equivalent grouping
          "wide": "1rem",
      }
    },
  },
  plugins: [],
};
