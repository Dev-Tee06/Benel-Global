import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--navy)",
          50: "#E8EDF2",
          100: "#C5D1DE",
          200: "#8FA3B8",
          300: "#5A7592",
          400: "#2F4F6E",
          500: "var(--navy)",
          600: "#081E33",
          700: "#061726",
          800: "#041019",
          900: "#02080D",
        },
        gold: {
          DEFAULT: "var(--gold)",
          50: "#FBF6E8",
          100: "#F3E8C5",
          200: "#E6D18B",
          300: "#D9BA57",
          400: "var(--gold)",
          500: "#B09339",
          600: "#8E7730",
          700: "#6C5B24",
          800: "#4A3F19",
          900: "#28220D",
        },
        cream: "#FDFAF3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A2540 0%, #0F3460 50%, #0A2540 100%)",
        "gold-gradient": "linear-gradient(135deg, #C8A951, #E6D18B)",
        "navy-gradient": "linear-gradient(180deg, #0A2540 0%, #071C32 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(200, 169, 81, 0.05), rgba(10, 37, 64, 0.1))",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(10, 37, 64, 0.15)",
        "glass-sm": "0 4px 16px rgba(10, 37, 64, 0.1)",
        "gold-glow": "0 0 30px rgba(200, 169, 81, 0.2)",
        card: "0 2px 20px rgba(10, 37, 64, 0.08)",
        "card-hover": "0 8px 40px rgba(10, 37, 64, 0.12)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;