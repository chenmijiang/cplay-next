import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        vibur: ["Vibur", "cursive", "Helvetica", "sans-serif"],
      },
      keyframes: {
        blink: {
          "78%": {
            color: "inherit",
            textShadow: "inherit",
          },
          "79%": { color: "#333" },
          "80%": { textShadow: "none" },
          "81%": {
            color: "inherit",
            textShadow: "inherit",
          },
          "82%": {
            color: "#333",
            textShadow: "none",
          },
          "83%": {
            color: "inherit",
            textShadow: "inherit",
          },
          "92%": {
            color: "#333",
            textShadow: "none",
          },
          "92.5%": {
            color: "inherit",
            textShadow: "inherit",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
