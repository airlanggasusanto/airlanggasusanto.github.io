import type { Config } from "tailwindcss";

const config: Config = {
  content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  darkMode: 'class', // This is the key setting!
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;