import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F59E0B", // Amber 500
        "background-light": "#FAFAF9", // Stone 50
        "background-dark": "#1C1917", // Stone 900
        "surface-light": "#FFFFFF",
        "surface-dark": "#292524", // Stone 800
        "subtle-light": "#E7E5E4", // Stone 200
        "subtle-dark": "#44403C", // Stone 700
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "12px",
        'xl': "16px",
        '2xl': "24px",
        '3xl': "32px",
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(245, 158, 11, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
