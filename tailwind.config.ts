import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-red-500",
    "border-green-500",
    "border-blue-500",
    "border-yellow-500",
    "border-pink-500",
    "border-purple-500",
    "border-indigo-500",
    "border-brown",
    "border-gray-500",
    "border-white",
    "border-black",
    "hover:scale-105"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown: "#7B3F00",
      },
    },
  },
  plugins: [],
};
export default config;
