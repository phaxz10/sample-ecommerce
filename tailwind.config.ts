import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "#252B42",
        "secondary-text": "#737373",
        primary: "#23A6F0",
        secondary: "#F3CD03",
        success: "#2DC071",
        alert: "#E77C40",
        danger: "#E74040",
        "bg-dark": "#252B42",
        "bg-light": "#FFFFFF",
        "bg-green": "#23856D",
        muted: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
export default config;
