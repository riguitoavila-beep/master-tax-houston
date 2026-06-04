import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0033CC",
          light: "#2563eb",
          dark: "#001899",
          navy: "#040c1e",
          "navy-2": "#0a1628",
        },
        dept: {
          taxes: "#0033CC",
          migration: "#7c3aed",
          insurance: "#059669",
          credit: "#d97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        "tightest": "-0.05em",
        "tighter-2": "-0.04em",
        "display": "-0.03em",
        "label": "0.12em",
        "caps": "0.18em",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #001899 0%, #0033CC 50%, #2563eb 100%)",
        "dark-surface": "linear-gradient(180deg, #040c1e 0%, #0a1628 100%)",
        "premium-hero": "linear-gradient(160deg, #040c1e 0%, #0a1628 55%, #0d1f3c 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.35s ease-out forwards",
        "accordion-down": "accordion-down 0.22s ease-out",
        "accordion-up": "accordion-up 0.22s ease-out",
        "shimmer": "shimmer 3s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400% 0" },
          "100%": { backgroundPosition: "400% 0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.08)" },
        },
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(0,51,204,0.15)",
        "brand-md": "0 4px 20px rgba(0,51,204,0.22)",
        "brand-lg": "0 8px 40px rgba(0,51,204,0.28)",
        "brand-xl": "0 16px 64px rgba(0,51,204,0.35)",
        "card": "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 6px rgba(0,0,0,0.03), 0 20px 60px rgba(0,0,0,0.1)",
        "premium": "0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.5), 0 64px 120px rgba(0,51,204,0.18), inset 0 1px 0 rgba(255,255,255,0.2)",
        "glass": "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
        "dept-taxes": "0 8px 32px rgba(0,51,204,0.18)",
        "dept-migration": "0 8px 32px rgba(124,58,237,0.18)",
        "dept-insurance": "0 8px 32px rgba(5,150,105,0.18)",
        "dept-credit": "0 8px 32px rgba(217,119,6,0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
