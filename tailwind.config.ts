import type { Config } from "tailwindcss";

/**
 * Palette dérivée du logo AZYR :
 *  - fond noir profond
 *  - "AZYR" blanc / crème
 *  - "Marrakech - Targa" or / ambre
 *  - feuille & "Express" vert frais
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0C", // fond principal
          soft: "#121214",
          card: "#17171A",
          line: "#26262B",
        },
        gold: {
          DEFAULT: "#C9A04E", // or principal (Marrakech - Targa)
          light: "#E4C783",
          deep: "#A07C32",
          50: "#FBF4E3",
        },
        leaf: {
          DEFAULT: "#5AA046", // vert (Express + feuille)
          light: "#7BC267",
          deep: "#3E7A30",
        },
        cream: "#F4EFE6",
        muted: "#A7A39A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,0.45)",
        gold: "0 10px 40px -10px rgba(201,160,78,0.45)",
        card: "0 24px 60px -20px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg, #E4C783 0%, #C9A04E 45%, #A07C32 100%)",
        "ink-fade": "linear-gradient(180deg, rgba(11,11,12,0) 0%, rgba(11,11,12,0.85) 70%, #0B0B0C 100%)",
        "radial-gold": "radial-gradient(circle at 50% 0%, rgba(201,160,78,0.18), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "80%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 3s linear infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
