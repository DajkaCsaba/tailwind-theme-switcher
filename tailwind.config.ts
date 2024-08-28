import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const colors = {
  light: {
    primary: "#3b82f6",
    secondary: "#10b981",
    background: "#ffffff",
  },
  dark: {
    primary: "#60a5fa",
    secondary: "#34d399",
    background: "#1f2937",
  },
  "night-owl": {
    primary: "#4E6CE4",
    secondary: "#BABE86",
    background: "#001526",
  },
};

const spacing = {
  xs: "1.5vh",
  xsl: "0.7vw",
  sm: "2vh",
  sml: "0.82vw",
  base: "2.5vh",
  basel: "0.93vw",
  md: "3vh",
  mdl: "1.37vw",
  lg: "3.5vh",
  lgl: "1.8vw",
  xl: "6.32vh",
  xll: "3.6vw",
};

const elementSize = {
  xs: "1.5vh",
  xsl: "0.7vw",
  sm: "2vh",
  sml: "0.82vw",
  base: "2.5vh",
  basel: "0.93vw",
  md: "3vh",
  mdl: "1.37vw",
  lg: "3.5vh",
  lgl: "1.8vw",
  xl: "6.32vh",
  xll: "3.6vw",
};

const fontSize = {
  xs: "1.5vh",
  xsl: "0.7vw",
  sm: "2vh",
  sml: "0.82vw",
  base: "2.5vh",
  basel: "0.93vw",
  md: "3vh",
  mdl: "1.37vw",
  lg: "3.5vh",
  lgl: "1.8vw",
  xl: "6.32vh",
  xll: "3.6vw",
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: { ...elementSize },
      height: { ...elementSize },
      colors,
      fontSize,
      spacing,
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("night-owl", ".night-owl &");
    }),
  ],
};
export default config;
