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
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-accent": "var(--bg-accent)",
        "bg-premium": "var(--bg-premium)",
        "text-heading": "var(--text-heading)",
        "text-body": "var(--text-body)",
        "text-muted": "var(--text-muted)",
        "royal-blue": "var(--royal-blue)",
        "soft-white": "var(--soft-white)",
        charcoal: "var(--charcoal)",
        cream: "#FDFAF3",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        sans: ["'Bricolage Grotesque'", "sans-serif"],
        display: ["'Bricolage Grotesque'", "'Clash Display'", "sans-serif"],
        secondary: ["'Satoshi'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #071D34 0%, #0A2540 25%, #295DFF 60%, #C8A951 100%)",
        "secondary-cinematic": "linear-gradient(135deg, rgba(10, 37, 64, 0.95), rgba(41, 93, 255, 0.75), rgba(200, 169, 81, 0.65))",
        "glass-lighting": "linear-gradient(135deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.08))",
        "cinematic-border": "linear-gradient(90deg, transparent, #295DFF, #C8A951, transparent)",
        "gold-gradient": "linear-gradient(135deg, #C8A951, #E6D18B)",
        "navy-gradient": "linear-gradient(180deg, #0A2540 0%, #071C32 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(200, 169, 81, 0.05), rgba(10, 37, 64, 0.1))",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(10, 37, 64, 0.15)",
        "glass-sm": "0 4px 16px rgba(10, 37, 64, 0.1)",
        "gold-glow": "0 0 30px rgba(200, 169, 81, 0.2)",
        card: "0 12px 40px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 16px 50px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        floatCard: "floatCard 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        gradientMove: "gradientMove 15s infinite linear",
        borderFlow: "borderFlow 6s linear infinite",
        borderMove: "borderMove 6s linear infinite",
        blobMove: "blobMove 20s infinite",
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
        floatCard: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        blobMove: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;