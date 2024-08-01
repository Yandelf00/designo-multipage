import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors : {
      "main":"#e78168",
      "dark":"#1d1c1e",
      "white": "white",
      "rose":"#fdf3f0",
      "monalisa":"#FFA692",
      "maron":"#af493c"
    },
    screens : {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'ml' : {'max':'1000px'},

      'lg': {'max': '950px'},

      'md': {'max': '800px'},

      'sm': {'max': '480px'},
    }
  },
  plugins: [],
};
export default config;
